/**
 * Hệ thống thi trắc nghiệm Lập trình Hướng đối tượng (OOP 2026)
 * Trường Cao Đẳng Công Thương TP.HCM (HITC) - Khoa Công Nghệ Thông Tin
 * Hỗ trợ 3 gói thi: 30 câu (30p), 60 câu (60p), 90 câu (90p)
 * Ngân hàng 360 câu hỏi từ 6 Google Forms (C++, C#, Java)
 */

(function () {
  'use strict';

  // Cấu hình các gói thi chuẩn theo yêu cầu
  const EXAM_PACKAGES = {
    30: {
      key: 30,
      name: "Gói thi 30 câu",
      totalQuestions: 30,
      durationMinutes: 30,
      distribution: { 1: 3, 2: 7, 3: 7, 4: 7, 5: 3, 6: 3 },
      description: "Chương 1 (3 câu), Chương 2 (7 câu), Chương 3 (7 câu), Chương 4 (7 câu), Chương 5 (3 câu), Chương 6 (3 câu)"
    },
    60: {
      key: 60,
      name: "Gói thi 60 câu",
      totalQuestions: 60,
      durationMinutes: 60,
      distribution: { 1: 2, 2: 16, 3: 16, 4: 16, 5: 5, 6: 5 },
      description: "Chương 1 (2 câu), Chương 2 (16 câu), Chương 3 (16 câu), Chương 4 (16 câu), Chương 5 (5 câu), Chương 6 (5 câu)"
    },
    90: {
      key: 90,
      name: "Gói thi 90 câu",
      totalQuestions: 90,
      durationMinutes: 90,
      distribution: { 1: 3, 2: 25, 3: 26, 4: 26, 5: 5, 6: 5 },
      description: "Chương 1 (3 câu), Chương 2 (25 câu), Chương 3 (26 câu), Chương 4 (26 câu), Chương 5 (5 câu), Chương 6 (5 câu)"
    }
  };

  const STORAGE_KEY_EXAM = 'OOP2026_EXAM_STATE';

  let appState = {
    view: 'start', // 'start', 'exam', 'result_summary', 'review'
    selectedPackage: 30,
    examCode: 'HITC2026',
    studentId: 'HITC202601',
    studentName: 'Sinh viên HITC',
    questions: [],
    userAnswers: {},
    flaggedQuestions: {},
    remainingSeconds: 30 * 60,
    timerInterval: null,
    currentQuestionIndex: 0,
    score: 0,
    correctCount: 0,
    wrongCount: 0,
    moduleStats: {}
  };

  function getQuestionBank() {
    return window.DEFAULT_QUESTION_BANK || [];
  }

  // Thuật toán rút câu ngẫu nhiên theo tỷ lệ từng gói thi
  function generateExamQuestions(pkgKey) {
    const pkg = EXAM_PACKAGES[pkgKey] || EXAM_PACKAGES[30];
    const bank = getQuestionBank();
    const modules = { 1: [], 2: [], 3: [], 4: [], 5: [], 6: [] };

    bank.forEach(q => {
      const m = q.module || 1;
      if (modules[m]) modules[m].push(q);
      else modules[1].push(q);
    });

    const selected = [];

    for (let m = 1; m <= 6; m++) {
      const quota = pkg.distribution[m] || 0;
      const pool = modules[m] || [];
      const shuffled = [...pool];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      const picked = shuffled.slice(0, Math.min(quota, shuffled.length));
      selected.push(...picked);
    }

    // Đảo ngẫu nhiên toàn bộ câu hỏi trong đề
    for (let i = selected.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [selected[i], selected[j]] = [selected[j], selected[i]];
    }

    return selected.map((q, idx) => ({
      ...q,
      examIndex: idx + 1
    }));
  }

  // Tách câu hỏi và khối mã nguồn C++/C#/Java để render đẹp mắt
  function formatQuestionHtml(rawText) {
    if (!rawText) return '';

    // Nhận diện mã nguồn
    const codePatterns = [
      /(class\s+[A-Za-z0-9_]+[\s\S]*)/i,
      /(interface\s+[A-Za-z0-9_]+[\s\S]*)/i,
      /(#include[\s\S]*)/i,
      /(public\s+class[\s\S]*)/i,
      /(void\s+main[\s\S]*)/i,
      /(int\s+main[\s\S]*)/i
    ];

    let introText = rawText;
    let codePart = '';

    for (let pat of codePatterns) {
      const match = rawText.match(pat);
      if (match && match.index > 0) {
        introText = rawText.substring(0, match.index).trim();
        codePart = rawText.substring(match.index).trim();
        break;
      }
    }

    let escapedIntro = escapeHtml(introText).replace(/\n/g, '<br>');

    if (codePart) {
      let escapedCode = escapeHtml(codePart);
      return `
        <div class="q-intro-text">${escapedIntro}</div>
        <div class="code-container">
          <div class="code-header">
            <span>💻 Mã nguồn</span>
          </div>
          <pre class="code-box"><code>${escapedCode}</code></pre>
        </div>
      `;
    }

    return `<div class="q-intro-text">${escapedIntro}</div>`;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function formatTime(seconds) {
    if (seconds < 0) seconds = 0;
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    const pad = n => (n < 10 ? '0' + n : n);
    return `${pad(h)} : ${pad(m)} : ${pad(s)}`;
  }

  function updateTimerDisplay() {
    const text = formatTime(appState.remainingSeconds);
    const elH = document.getElementById('header-timer');
    const elS = document.getElementById('timer-text');
    if (elH) elH.textContent = text;
    if (elS) elS.textContent = text;

    if (appState.remainingSeconds <= 300) {
      if (elH) elH.classList.add('timer-warning');
      if (elS) elS.classList.add('timer-warning');
    } else {
      if (elH) elH.classList.remove('timer-warning');
      if (elS) elS.classList.remove('timer-warning');
    }
  }

  function startTimer() {
    clearInterval(appState.timerInterval);
    updateTimerDisplay();
    appState.timerInterval = setInterval(() => {
      appState.remainingSeconds--;
      updateTimerDisplay();
      if (appState.remainingSeconds <= 0) {
        clearInterval(appState.timerInterval);
        alert('Hết giờ làm bài! Hệ thống tự động nộp bài.');
        submitExam(true);
      }
    }, 1000);
  }

  function renderGrid() {
    const gridEl = document.getElementById('questions-grid');
    if (!gridEl) return;
    gridEl.innerHTML = '';

    const total = appState.questions.length;
    gridEl.className = 'questions-grid';
    if (total > 30) gridEl.classList.add('grid-' + (total <= 60 ? '60' : '90'));

    appState.questions.forEach((q, idx) => {
      const cell = document.createElement('div');
      cell.className = 'q-cell';
      cell.textContent = idx + 1;

      if (idx === appState.currentQuestionIndex) {
        cell.classList.add('current');
      }

      if (appState.flaggedQuestions[idx]) {
        cell.classList.add('flagged');
      }

      // Phân biệt rõ màu câu đúng / câu sai ở cột bên trái
      if (appState.view === 'review') {
        const hasAnswered = appState.userAnswers.hasOwnProperty(idx);
        if (hasAnswered) {
          const isCorrect = appState.userAnswers[idx] === q.answer;
          if (isCorrect) {
            cell.classList.add('correct');
            cell.classList.add('review-correct');
          } else {
            cell.classList.add('wrong');
            cell.classList.add('review-wrong');
          }
        } else {
          // Câu chưa làm trong bài thi
          cell.classList.add('review-unanswered');
        }
      } else {
        // Trong lúc đang làm bài thi
        if (appState.userAnswers.hasOwnProperty(idx)) {
          cell.classList.add('answered');
        }
      }

      cell.addEventListener('click', () => {
        appState.currentQuestionIndex = idx;
        renderCurrentQuestion();
        renderGrid();
      });

      gridEl.appendChild(cell);
    });

    // Cập nhật nút điều khiển ở chân cột trái theo chế độ
    const btnSubmit = document.getElementById('btn-submit-exam');
    const btnSidebarRetake = document.getElementById('btn-sidebar-retake');

    if (appState.view === 'review' || appState.view === 'result_summary') {
      if (btnSidebarRetake) {
        btnSidebarRetake.style.display = 'flex';
        btnSidebarRetake.onclick = () => { showPackageSelectionModal(); };
      }
      if (btnSubmit) {
        btnSubmit.textContent = '📊 Xem bảng điểm';
        btnSubmit.style.background = 'linear-gradient(180deg, #0284c7 0%, #0369a1 100%)';
        btnSubmit.onclick = () => { showResultSummary(); };
      }
    } else {
      if (btnSidebarRetake) {
        btnSidebarRetake.style.display = 'none';
      }
      if (btnSubmit) {
        btnSubmit.textContent = 'Kết thúc và Nộp bài';
        btnSubmit.style.background = '';
        btnSubmit.onclick = () => { showSubmitModal(); };
      }
    }
  }

  function renderCurrentQuestion() {
    const q = appState.questions[appState.currentQuestionIndex];
    if (!q) return;

    // Header controls
    const headerControls = document.getElementById('header-controls-container');
    if (headerControls) {
      const isFlagged = !!appState.flaggedQuestions[appState.currentQuestionIndex];
      headerControls.innerHTML = `
        <span class="header-q-title">Câu ${appState.currentQuestionIndex + 1}/${appState.questions.length}</span>
        <button id="btn-toggle-flag" class="btn-flag ${isFlagged ? 'flagged' : ''}">
          🚩 ${isFlagged ? 'Bỏ cờ' : 'Đặt cờ'}
        </button>
      `;
      const btnFlag = document.getElementById('btn-toggle-flag');
      if (btnFlag) {
        btnFlag.addEventListener('click', () => {
          appState.flaggedQuestions[appState.currentQuestionIndex] = !isFlagged;
          renderCurrentQuestion();
          renderGrid();
        });
      }
    }

    // Header số câu của cột câu hỏi
    const qHeaderNum = document.getElementById('question-header-num');
    if (qHeaderNum) {
      qHeaderNum.textContent = `Câu ${appState.currentQuestionIndex + 1} / ${appState.questions.length}`;
    }

    // Question box (Bỏ hiển thị số chương, số câu trong box, chỉ hiển thị đề bài và code)
    const qBox = document.getElementById('question-box');
    if (qBox) {
      qBox.innerHTML = `
        <div class="q-content-body">
          ${formatQuestionHtml(q.question)}
        </div>
      `;
    }

    // Options box (Hiển thị các Option Cards có viền, badge rõ ràng)
    const optBox = document.getElementById('options-box');
    if (optBox) {
      optBox.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      const currentAnswer = appState.userAnswers[appState.currentQuestionIndex];

      q.options.forEach((optText, optIdx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.setAttribute('data-idx', optIdx);

        const isSelected = currentAnswer === optIdx;
        if (isSelected) card.classList.add('selected');

        let statusTag = '';
        if (appState.view === 'review') {
          if (optIdx === q.answer) {
            card.classList.add('correct-answer-card');
            statusTag = `<span class="option-status-tag tag-correct">✓ Đáp án đúng</span>`;
          } else if (isSelected && optIdx !== q.answer) {
            card.classList.add('user-wrong-card');
            statusTag = `<span class="option-status-tag tag-wrong">✗ Bạn chọn</span>`;
          }
        }

        const isCodeOpt = optText.includes('(') || optText.includes(';') || optText.includes('new ') || optText.includes('::');
        const formattedOptText = isCodeOpt ? `<code>${escapeHtml(optText)}</code>` : escapeHtml(optText);

        card.innerHTML = `
          <div class="option-letter-badge">${letters[optIdx]}</div>
          <div class="option-card-text">${formattedOptText}</div>
          ${statusTag}
        `;

        if (appState.view !== 'review') {
          card.addEventListener('click', () => {
            appState.userAnswers[appState.currentQuestionIndex] = optIdx;
            renderCurrentQuestion();
            renderGrid();
          });
        }

        optBox.appendChild(card);
      });

      // Nếu đang ở chế độ xem lại, hiển thị giải thích chi tiết
      if (appState.view === 'review') {
        const isCorrect = currentAnswer === q.answer;
        const banner = document.createElement('div');
        banner.className = 'correct-answer-banner';
        banner.innerHTML = `
          <div style="font-weight: 800; margin-bottom: 6px; font-size: 14.5px;">
            ${isCorrect ? '✅ Bạn đã trả lời CHÍNH XÁC!' : '❌ Bạn đã trả lời CHƯA ĐÚNG!'}
          </div>
          <div style="margin-bottom: 4px;">Đáp án đúng: <strong>${letters[q.answer]}. ${escapeHtml(q.options[q.answer] || '')}</strong></div>
          <div class="explanation-text">💡 <strong>Giải thích chi tiết:</strong> ${escapeHtml(q.explanation || '')}</div>
        `;
        optBox.appendChild(banner);
      }
    }

    renderNav();
  }

  function renderNav() {
    const navBar = document.getElementById('bottom-nav-bar');
    if (!navBar) return;

    const total = appState.questions.length;
    const isFirst = appState.currentQuestionIndex === 0;
    const isLast = appState.currentQuestionIndex === total - 1;

    navBar.innerHTML = `
      <button id="btn-prev-q" class="btn-nav btn-prev" ${isFirst ? 'disabled' : ''}>◀ Câu trước</button>
      <div class="nav-q-counter" style="font-size: 13.5px; font-weight: 700; color: #0284c7;">
        Câu ${appState.currentQuestionIndex + 1} / ${total}
      </div>
      <button id="btn-next-q" class="btn-nav btn-next" ${isLast ? 'disabled' : ''}>Câu tiếp ▶</button>
    `;

    const prevBtn = document.getElementById('btn-prev-q');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        if (appState.currentQuestionIndex > 0) {
          appState.currentQuestionIndex--;
          renderCurrentQuestion();
          renderGrid();
        }
      });
    }

    const nextBtn = document.getElementById('btn-next-q');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        if (appState.currentQuestionIndex < total - 1) {
          appState.currentQuestionIndex++;
          renderCurrentQuestion();
          renderGrid();
        }
      });
    }
  }

  function showSubmitModal() {
    // Xóa sạch mọi modal overlay cũ đang tồn tại trên trang
    document.querySelectorAll('.modal-overlay').forEach(m => m.remove());

    const total = appState.questions.length;
    const answered = Object.keys(appState.userAnswers).length;
    const unanswered = total - answered;
    const flagged = Object.values(appState.flaggedQuestions).filter(Boolean).length;

    const modal = document.createElement('div');
    modal.id = 'submit-confirm-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 520px;">
        <div class="modal-header">
          <h4>Xác nhận Kết thúc và Nộp bài</h4>
          <span style="cursor:pointer;" id="modal-close">&times;</span>
        </div>
        <div class="modal-body">
          <p>Bạn đang làm bài thi: <strong>${EXAM_PACKAGES[appState.selectedPackage].name}</strong></p>
          <ul style="margin: 12px 0 12px 20px; line-height: 1.8;">
            <li>Tổng số câu hỏi: <strong>${total}</strong></li>
            <li>Đã trả lời: <strong style="color: #2e7d32;">${answered}</strong> câu</li>
            <li>Chưa trả lời: <strong style="color: #d32f2f;">${unanswered}</strong> câu</li>
            <li>Đang đặt cờ: <strong style="color: #ef6c00;">${flagged}</strong> câu</li>
          </ul>
          <p style="color: #555;">Bạn có chắc chắn muốn kết thúc bài làm và xem điểm số ngay bây giờ?</p>
        </div>
        <div class="modal-footer">
          <button id="modal-btn-cancel" class="btn-action-center" style="background: #e2e8f0; color: #333; cursor: pointer;">Làm tiếp</button>
          <button id="modal-btn-confirm" class="btn-action-center btn-next" style="cursor: pointer;">Nộp bài ngay</button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => {
      modal.remove();
      document.querySelectorAll('#submit-confirm-modal').forEach(m => m.remove());
    };

    const btnClose = modal.querySelector('#modal-close');
    const btnCancel = modal.querySelector('#modal-btn-cancel');
    const btnConfirm = modal.querySelector('#modal-btn-confirm');

    if (btnClose) btnClose.onclick = closeModal;
    if (btnCancel) btnCancel.onclick = closeModal;
    if (btnConfirm) {
      btnConfirm.onclick = (e) => {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        closeModal();
        submitExam(false);
      };
    }
  }

  function submitExam(forced) {
    clearInterval(appState.timerInterval);
    appState.view = 'result_summary';

    let correct = 0;
    const modStats = { 1: { c: 0, t: 0 }, 2: { c: 0, t: 0 }, 3: { c: 0, t: 0 }, 4: { c: 0, t: 0 }, 5: { c: 0, t: 0 }, 6: { c: 0, t: 0 } };

    appState.questions.forEach((q, idx) => {
      const userAns = appState.userAnswers[idx];
      const m = q.module || 1;
      if (!modStats[m]) modStats[m] = { c: 0, t: 0 };
      modStats[m].t++;

      if (userAns === q.answer) {
        correct++;
        modStats[m].c++;
      }
    });

    const total = appState.questions.length;
    appState.correctCount = correct;
    appState.wrongCount = total - correct;
    appState.score = Math.round((correct / total) * 10 * 100) / 100;
    appState.moduleStats = modStats;

    showResultSummary();
  }

  function showResultSummary() {
    appState.view = 'result_summary';
    const splitArea = document.getElementById('exam-split-area');
    const summaryArea = document.getElementById('summary-view-area');
    const headerControls = document.getElementById('header-controls-container');
    if (headerControls) headerControls.innerHTML = '';

    if (splitArea) splitArea.style.display = 'none';
    if (summaryArea) {
      summaryArea.style.display = 'block';
      summaryArea.scrollTop = 0;
      window.scrollTo({ top: 0, behavior: 'smooth' });
      const pkg = EXAM_PACKAGES[appState.selectedPackage];

      summaryArea.innerHTML = `
        <div class="result-summary-pane" style="max-width: 840px; margin: 20px auto; border-radius: 12px; border: 1.5px solid #cbd5e1; box-shadow: 0 4px 18px rgba(0,0,0,0.06); padding: 26px 30px;">
          <h3 style="color: #0288d1; font-size: 21px; font-weight: 800; text-align: center; margin-bottom: 14px;">
            BẢNG TỔNG KẾT ĐIỂM THI TRẮC NGHIỆM OOP - HITC
          </h3>
          <div class="result-line-divider">---------------------------------------------------------</div>
          <p>Sinh viên: <strong>${escapeHtml(appState.studentName)}</strong> | MSSV: <strong>${escapeHtml(appState.studentId)}</strong></p>
          <p>Mã đề thi: <strong>${appState.examCode}</strong> | Gói đề: <strong>${pkg.name} (${pkg.totalQuestions} câu / ${pkg.durationMinutes} phút)</strong></p>
          <p>Số câu đúng: <strong style="color: #2e7d32; font-size: 18px;">${appState.correctCount} / ${appState.questions.length}</strong> câu</p>
          <p>Điểm số (Thang điểm 10): <span class="result-highlight-score" style="font-size: 24px;">${appState.score.toFixed(2)} / 10.0</span></p>
          <div class="result-line-divider">---------------------------------------------------------</div>

          <div style="padding: 24px 0 10px 0; text-align: center; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
            <button id="btn-start-review" class="btn-action-center btn-next" style="font-size: 15px; padding: 12px 24px;">
              🔍 Xem lại bài thi chi tiết (Kèm lời giải)
            </button>
            <button id="btn-new-exam-dialog" class="btn-action-center btn-retake" style="font-size: 15px; padding: 12px 24px;">
              🔄 Thi lượt mới (Chọn gói thi)
            </button>
            <a href="practice.html" class="btn-action-center" style="background: #e8f5e9; color: #2e7d32; border: 1.5px solid #81c784; text-decoration: none; font-size: 15px; padding: 12px 24px; display: inline-flex; align-items: center;">
              📚 Vào ôn tập 6 chương
            </a>
          </div>
        </div>
      `;

      document.getElementById('btn-start-review').onclick = () => {
        appState.view = 'review';
        appState.currentQuestionIndex = 0;
        summaryArea.style.display = 'none';
        splitArea.style.display = 'flex';
        renderCurrentQuestion();
        renderGrid();
      };

      document.getElementById('btn-new-exam-dialog').onclick = () => {
        showPackageSelectionModal();
      };
    }

    renderGrid();
  }

  // Hộp thoại lựa chọn 3 phương án thi theo đúng yêu cầu người dùng
  function showPackageSelectionModal() {
    const existing = document.getElementById('package-select-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'package-select-modal';
    modal.className = 'modal-overlay';

    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 620px;">
        <div class="modal-header">
          <h4>🎯 LỰA CHỌN PHƯƠNG ÁN THI TRẮC NGHIỆM OOP</h4>
          <span style="cursor:pointer;" id="pkg-modal-close">&times;</span>
        </div>
        <div class="modal-body">
          <p style="font-size: 14px; color: #475569; margin-bottom: 12px;">
            Vui lòng chọn 1 trong 3 phương án thi theo cấu trúc phân bổ câu hỏi chính thức:
          </p>

          <div class="package-cards-grid">
            <!-- Gói 30 câu -->
            <div class="package-card ${appState.selectedPackage === 30 ? 'selected' : ''}" data-pkg="30">
              <span class="package-badge-duration">⏱️ 30 phút</span>
              <div class="package-title">30 CÂU</div>
              <div class="package-desc" style="text-align: center; font-weight: 600; padding: 10px;">
                Đề thi trắc nghiệm trọng tâm OOP 2026
              </div>
            </div>

            <!-- Gói 60 câu -->
            <div class="package-card ${appState.selectedPackage === 60 ? 'selected' : ''}" data-pkg="60">
              <span class="package-badge-duration">⏱️ 60 phút</span>
              <div class="package-title">60 CÂU</div>
              <div class="package-desc" style="text-align: center; font-weight: 600; padding: 10px;">
                Đề thi trắc nghiệm học phần toàn diện
              </div>
            </div>

            <!-- Gói 90 câu -->
            <div class="package-card ${appState.selectedPackage === 90 ? 'selected' : ''}" data-pkg="90">
              <span class="package-badge-duration">⏱️ 90 phút</span>
              <div class="package-title">90 CÂU</div>
              <div class="package-desc" style="text-align: center; font-weight: 600; padding: 10px;">
                Đề thi trắc nghiệm chuyên sâu & nâng cao
              </div>
            </div>
          </div>

          <div style="background: #f8fafc; padding: 12px; border-radius: 6px; border: 1px solid #e2e8f0; margin-top: 10px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <div>
                <label style="font-size: 12.5px; font-weight: 700; color: #334155; display: block; margin-bottom: 4px;">Họ và Tên:</label>
                <input type="text" id="input-student-name" value="${escapeHtml(appState.studentName)}" style="width: 100%; padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 13.5px;">
              </div>
              <div>
                <label style="font-size: 12.5px; font-weight: 700; color: #334155; display: block; margin-bottom: 4px;">Mã số sinh viên (MSSV):</label>
                <input type="text" id="input-student-id" value="${escapeHtml(appState.studentId)}" style="width: 100%; padding: 7px 10px; border: 1px solid #cbd5e1; border-radius: 4px; font-size: 13.5px;">
              </div>
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button id="pkg-btn-cancel" class="btn-action-center" style="background: #e2e8f0; color: #333;">Đóng</button>
          <button id="pkg-btn-start" class="btn-action-center btn-next" style="padding: 10px 24px; font-size: 15px;">
            🚀 Bắt đầu làm bài thi
          </button>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    let selectedPkg = appState.selectedPackage;

    const cards = modal.querySelectorAll('.package-card');
    cards.forEach(card => {
      card.addEventListener('click', () => {
        cards.forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedPkg = parseInt(card.getAttribute('data-pkg'), 10);
      });
    });

    const close = () => modal.remove();
    document.getElementById('pkg-modal-close').onclick = close;
    document.getElementById('pkg-btn-cancel').onclick = close;

    document.getElementById('pkg-btn-start').onclick = () => {
      const nameInput = document.getElementById('input-student-name');
      const idInput = document.getElementById('input-student-id');
      if (nameInput && nameInput.value.trim()) appState.studentName = nameInput.value.trim();
      if (idInput && idInput.value.trim()) appState.studentId = idInput.value.trim();

      appState.selectedPackage = selectedPkg;
      close();
      startNewExam(selectedPkg);
    };
  }

  function startNewExam(pkgKey) {
    const pkg = EXAM_PACKAGES[pkgKey] || EXAM_PACKAGES[30];
    appState.view = 'exam';
    appState.selectedPackage = pkgKey;
    appState.examCode = 'HITC' + Math.floor(1000 + Math.random() * 9000);
    appState.questions = generateExamQuestions(pkgKey);
    appState.userAnswers = {};
    appState.flaggedQuestions = {};
    appState.remainingSeconds = pkg.durationMinutes * 60;
    appState.currentQuestionIndex = 0;

    const splitArea = document.getElementById('exam-split-area');
    const summaryArea = document.getElementById('summary-view-area');
    if (summaryArea) summaryArea.style.display = 'none';
    if (splitArea) splitArea.style.display = 'flex';

    startTimer();
    renderCurrentQuestion();
    renderGrid();
  }

  // Khởi tạo ứng dụng
  function initApp() {
    // Nút nộp bài & nút làm lại bài thi mới ở cột trái
    const btnSubmit = document.getElementById('btn-submit-exam');
    if (btnSubmit) {
      btnSubmit.onclick = () => {
        if (appState.view === 'exam') showSubmitModal();
      };
    }

    const btnSidebarRetake = document.getElementById('btn-sidebar-retake');
    if (btnSidebarRetake) {
      btnSidebarRetake.onclick = () => {
        showPackageSelectionModal();
      };
    }

    // Nút chọn gói thi trên header
    const btnPkg = document.getElementById('btn-change-package');
    if (btnPkg) {
      btnPkg.addEventListener('click', () => {
        showPackageSelectionModal();
      });
    }

    // Hiển thị modal chọn gói thi ngay khi vào trang nếu chưa thi
    showPackageSelectionModal();

    // Hỗ trợ phím tắt A, B, C, D và mũi tên
    window.addEventListener('keydown', (e) => {
      if (appState.view !== 'exam') return;
      if (e.target.tagName === 'INPUT') return;

      if (e.key === 'ArrowLeft') {
        if (appState.currentQuestionIndex > 0) {
          appState.currentQuestionIndex--;
          renderCurrentQuestion();
          renderGrid();
        }
      } else if (e.key === 'ArrowRight') {
        if (appState.currentQuestionIndex < appState.questions.length - 1) {
          appState.currentQuestionIndex++;
          renderCurrentQuestion();
          renderGrid();
        }
      } else if (['1', '2', '3', '4'].includes(e.key)) {
        const optIdx = parseInt(e.key, 10) - 1;
        appState.userAnswers[appState.currentQuestionIndex] = optIdx;
        renderCurrentQuestion();
        renderGrid();
      } else if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
        const mapping = { a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
        const optIdx = mapping[e.key];
        appState.userAnswers[appState.currentQuestionIndex] = optIdx;
        renderCurrentQuestion();
        renderGrid();
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initApp);
})();
