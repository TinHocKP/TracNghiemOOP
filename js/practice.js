/**
 * Luyện Tập Trắc Nghiệm 6 Chương OOP 2026
 * Trường Cao Đẳng Công Thương TP.HCM (HITC)
 * 
 * Hỗ trợ 3 tính năng học tập:
 * 1. 🎯 Luyện từng câu: Chấm điểm và xem lời giải chi tiết ngay sau mỗi câu
 * 2. 📝 Luyện tất cả các câu từng chương: Làm bài trọn bộ từ đầu đến cuối, nộp bài chấm điểm & xem kết quả
 * 3. 📜 Xem danh sách: Đọc và ôn tập toàn bộ câu hỏi dạng cuộn
 */

(function () {
  'use strict';

  const MODULES_CONFIG = [
    {
      id: 1,
      title: "Chương 1: Tổng quan OOP",
      count: 10,
      icon: "🎯",
      tag: "Tổng quan OOP",
      formUrl: "https://forms.gle/bCyynR8j6AFwSJBb9",
      desc: "4 đặc trưng cơ bản (Đóng gói, Kế thừa, Đa hình, Trừu tượng), khái niệm lớp và đối tượng."
    },
    {
      id: 2,
      title: "Chương 2: Lớp và Đối tượng (C++)",
      count: 80,
      icon: "📦",
      tag: "OOP C++",
      formUrl: "https://forms.gle/Cu694ZH6GfSD4JDCA",
      desc: "Constructor, Destructor, biến static, phạm vi private/public/protected, vùng nhớ Stack/Heap."
    },
    {
      id: 3,
      title: "Chương 3: Tính Kế thừa (C++)",
      count: 80,
      icon: "🧬",
      tag: "Kế thừa C++",
      formUrl: "https://forms.gle/Z9oeLfaJuC7tE9926",
      desc: "Kế thừa đơn, kế thừa nhiều mức, thứ tự thực thi hàm khởi tạo/hủy, thành viên protected."
    },
    {
      id: 4,
      title: "Chương 4: Tính Đa hình (C++)",
      count: 30,
      icon: "🎭",
      tag: "Đa hình C++",
      formUrl: "https://forms.gle/4K46XXh6QAz6bo9LA",
      desc: "Hàm ảo (virtual), hàm thuần ảo (= 0), lớp trừu tượng (abstract), liên kết động."
    },
    {
      id: 5,
      title: "Chương 5: Lập trình OOP C#",
      count: 80,
      icon: "🔷",
      tag: "OOP C#",
      formUrl: "https://forms.gle/1GYWNQSZzPuL4Qzn8",
      desc: "Cú pháp OOP C#, từ khóa override/new/virtual, interface, base/this, toán tử is/as."
    },
    {
      id: 6,
      title: "Chương 6: Lập trình OOP Java",
      count: 80,
      icon: "☕",
      tag: "OOP Java",
      formUrl: "https://forms.gle/MppHSxcTfQ7N7iqq6",
      desc: "Cú pháp OOP Java, kế thừa extends, implements interface, ép kiểu, từ khóa super/this."
    }
  ];

  const STORAGE_KEY = 'OOP2026_PRACTICE_PROGRESS';

  let practiceState = {
    activeModule: null,
    viewMode: 'single', // 'single', 'all', hoặc 'list'
    currentQuestionIndex: 0,
    filter: 'all',
    showAllAnswersInList: false,
    sidebarCollapsed: false,
    isSubmittedInAllMode: false, // true sau khi nộp bài ở chế độ 'all'
    moduleQuestions: [],
    userAnswers: {} // { [modId]: { [qId]: { answer: number, isCorrect: boolean } } }
  };

  function loadProgress() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) practiceState.userAnswers = JSON.parse(data);
    } catch (e) {
      console.warn('Lỗi đọc tiến độ:', e);
      practiceState.userAnswers = {};
    }
  }

  function saveProgress() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(practiceState.userAnswers));
    } catch (e) {
      console.warn('Lỗi lưu tiến độ:', e);
    }
  }

  function getQuestionBank() {
    return window.DEFAULT_QUESTION_BANK || [];
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

  function formatQuestionHtml(rawText) {
    if (!rawText) return '';
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
            <span class="code-dots"><i></i><i></i><i></i></span>
            <span class="code-lang-label">💻 Code Editor</span>
          </div>
          <pre class="code-box"><code>${escapedCode}</code></pre>
        </div>
      `;
    }

    return `<div class="q-intro-text">${escapedIntro}</div>`;
  }

  // Cập nhật thống kê nhanh trên toolbar
  function updateQuickStats() {
    const statsEl = document.getElementById('practice-quick-stats');
    if (!statsEl || !practiceState.activeModule) return;

    const modId = practiceState.activeModule;
    const ansMap = practiceState.userAnswers[modId] || {};
    const total = practiceState.moduleQuestions.length;
    const answeredCount = Object.keys(ansMap).length;
    let correctCount = 0;
    Object.values(ansMap).forEach(a => {
      if (a && a.isCorrect) correctCount++;
    });

    if (practiceState.viewMode === 'all' && !practiceState.isSubmittedInAllMode) {
      statsEl.innerHTML = `Đã làm: <strong>${answeredCount}/${total}</strong> câu`;
    } else {
      statsEl.innerHTML = `Đã làm: <strong>${answeredCount}/${total}</strong> • Đúng: <strong style="color: #16a34a;">${correctCount}</strong>`;
    }
  }

  // Render 6 thẻ chương ở màn hình tổng quan
  function renderOverviewCards() {
    const container = document.getElementById('modules-cards-container');
    if (!container) return;
    container.innerHTML = '';

    const bank = getQuestionBank();
    let totalAllAnswered = 0;

    MODULES_CONFIG.forEach(cfg => {
      const modQuestions = bank.filter(q => q.module === cfg.id);
      const total = modQuestions.length || cfg.count;

      const modAnswers = practiceState.userAnswers[cfg.id] || {};
      const answeredCount = Object.keys(modAnswers).length;
      totalAllAnswered += answeredCount;

      let correctCount = 0;
      Object.values(modAnswers).forEach(a => {
        if (a && a.isCorrect) correctCount++;
      });

      const percent = total > 0 ? Math.round((answeredCount / total) * 100) : 0;

      const card = document.createElement('div');
      card.className = 'topic-card';
      card.innerHTML = `
        <div>
          <div class="topic-header">
            <div class="topic-icon">${cfg.icon}</div>
            <div class="topic-info">
              <span class="topic-badge-count">📝 ${total} câu hỏi</span>
              <h3>${cfg.title}</h3>
            </div>
          </div>
          <p class="topic-desc">${cfg.desc}</p>
        </div>

        <div>
          <div class="topic-progress-wrap">
            <div class="progress-bar-bg">
              <div class="progress-bar-fill" style="width: ${percent}%;"></div>
            </div>
            <div class="progress-meta">
              <span>Đã làm: <strong>${answeredCount}/${total}</strong> (${percent}%)</span>
              <span class="meta-correct">Đúng: <strong>${correctCount}</strong></span>
            </div>
          </div>

          <div class="topic-footer-actions">
            <!-- 2 NÚT CHÍNH: LUYỆN TỪNG CÂU VÀ LUYỆN TẤT CẢ CÂU HỎI -->
            <div class="topic-actions-grid">
              <button class="btn-card-single" data-mod="${cfg.id}" title="Luyện từng câu: Chọn đáp án xem giải thích ngay">
                🎯 Luyện từng câu
              </button>
              <button class="btn-card-all" data-mod="${cfg.id}" title="Luyện tất cả các câu: Làm bài trọn vẹn toàn bộ ${total} câu, nộp bài tính điểm">
                📝 Luyện tất cả (${total} câu)
              </button>
            </div>
            <div class="topic-sub-links">
              <button class="btn-sub-link" data-mod="${cfg.id}" data-mode="list" title="Xem toàn bộ danh sách ${total} câu">
                📜 Xem danh sách
              </button>
              <a href="${cfg.formUrl}" target="_blank" class="link-form-goc" title="Mở biểu mẫu Google Form gốc">
                🔗 Form gốc
              </a>
            </div>
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    const heroTotal = document.getElementById('hero-total-answered');
    if (heroTotal) {
      heroTotal.textContent = `${totalAllAnswered}/360`;
    }

    // Gán sự kiện click nút Luyện từng câu
    container.querySelectorAll('.btn-card-single').forEach(btn => {
      btn.onclick = () => {
        const modId = parseInt(btn.getAttribute('data-mod'), 10);
        openModule(modId, 'single');
      };
    });

    // Gán sự kiện click nút Luyện tất cả các câu
    container.querySelectorAll('.btn-card-all').forEach(btn => {
      btn.onclick = () => {
        const modId = parseInt(btn.getAttribute('data-mod'), 10);
        openModule(modId, 'all');
      };
    });

    // Gán sự kiện click nút Xem danh sách
    container.querySelectorAll('.btn-sub-link').forEach(btn => {
      btn.onclick = () => {
        const modId = parseInt(btn.getAttribute('data-mod'), 10);
        openModule(modId, 'list');
      };
    });
  }

  function openModule(modId, mode) {
    practiceState.activeModule = modId;
    practiceState.viewMode = mode || 'single';
    practiceState.currentQuestionIndex = 0;
    practiceState.filter = 'all';
    practiceState.isSubmittedInAllMode = false;

    const bank = getQuestionBank();
    practiceState.moduleQuestions = bank.filter(q => q.module === modId);

    document.getElementById('overview-screen').style.display = 'none';
    document.getElementById('practice-screen').style.display = 'flex';

    const cfg = MODULES_CONFIG.find(m => m.id === modId);
    const label = document.getElementById('active-module-label');
    if (label && cfg) {
      label.textContent = `${cfg.icon} ${cfg.title}`;
    }

    const allCountBadge = document.getElementById('all-count-badge');
    if (allCountBadge) {
      allCountBadge.textContent = practiceState.moduleQuestions.length;
    }

    // Reset bộ lọc
    const filterSelect = document.getElementById('filter-select');
    if (filterSelect) filterSelect.value = 'all';

    updateViewModeUI();
    updateQuickStats();
    updateFilterSelectLabels();
    renderPracticeGrid();

    if (practiceState.viewMode === 'list') {
      renderListQuestions();
    } else {
      renderSingleQuestion();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Chuyển đổi giao diện Chế độ học (Single vs All vs List)
  function updateViewModeUI() {
    const tabSingle = document.getElementById('tab-mode-single');
    const tabAll = document.getElementById('tab-mode-all');
    const tabList = document.getElementById('tab-mode-list');
    const singleView = document.getElementById('single-question-view');
    const listView = document.getElementById('list-questions-view');
    const btnSubmit = document.getElementById('btn-submit-chapter');

    if (tabSingle) tabSingle.classList.toggle('active', practiceState.viewMode === 'single');
    if (tabAll) tabAll.classList.toggle('active', practiceState.viewMode === 'all');
    if (tabList) tabList.classList.toggle('active', practiceState.viewMode === 'list');

    if (practiceState.viewMode === 'list') {
      if (singleView) singleView.style.display = 'none';
      if (listView) listView.style.display = 'block';
    } else {
      if (singleView) singleView.style.display = 'flex';
      if (listView) listView.style.display = 'none';
    }

    // Nút nộp bài chương chỉ hiển thị ở chế độ 'all' (Luyện tất cả câu)
    if (btnSubmit) {
      if (practiceState.viewMode === 'all') {
        btnSubmit.style.display = 'inline-flex';
        if (practiceState.isSubmittedInAllMode) {
          btnSubmit.innerHTML = '🔄 Luyện lại chương';
          btnSubmit.className = 'btn-submit-chapter btn-submitted';
        } else {
          btnSubmit.innerHTML = '🏁 Nộp bài chương';
          btnSubmit.className = 'btn-submit-chapter';
        }
      } else {
        btnSubmit.style.display = 'none';
      }
    }
  }

  // Cập nhật nhãn và số lượng trong dropdown bộ lọc
  function updateFilterSelectLabels() {
    const filterSelect = document.getElementById('filter-select');
    if (!filterSelect || !practiceState.activeModule) return;

    const modId = practiceState.activeModule;
    const ansMap = practiceState.userAnswers[modId] || {};
    const total = practiceState.moduleQuestions.length;
    const isAllModeUnsubmitted = practiceState.viewMode === 'all' && !practiceState.isSubmittedInAllMode;

    let answeredCount = 0;
    let correctCount = 0;
    let wrongCount = 0;

    practiceState.moduleQuestions.forEach(q => {
      const ans = ansMap[q.id];
      if (ans) {
        answeredCount++;
        if (ans.isCorrect) correctCount++;
        else wrongCount++;
      }
    });

    const unansweredCount = Math.max(0, total - answeredCount);

    const optAll = filterSelect.querySelector('option[value="all"]');
    const optUnanswered = filterSelect.querySelector('option[value="unanswered"]');
    const optWrong = filterSelect.querySelector('option[value="wrong"]');
    const optCorrect = filterSelect.querySelector('option[value="correct"]');

    if (optAll) optAll.textContent = `Tất cả câu (${total})`;
    if (optUnanswered) optUnanswered.textContent = `Chưa làm (${unansweredCount})`;
    if (optWrong) {
      if (isAllModeUnsubmitted) {
        optWrong.textContent = `Câu sai (Chưa nộp bài)`;
      } else {
        optWrong.textContent = `Câu sai (${wrongCount})`;
      }
    }
    if (optCorrect) {
      if (isAllModeUnsubmitted) {
        optCorrect.textContent = `Câu đúng (Chưa nộp bài)`;
      } else {
        optCorrect.textContent = `Câu đúng (${correctCount})`;
      }
    }
  }

  function getFilteredQuestionIndices() {
    const modId = practiceState.activeModule;
    const ansMap = practiceState.userAnswers[modId] || {};
    const isAllModeUnsubmitted = practiceState.viewMode === 'all' && !practiceState.isSubmittedInAllMode;

    const indices = [];
    practiceState.moduleQuestions.forEach((q, idx) => {
      const ans = ansMap[q.id];
      if (practiceState.filter === 'unanswered') {
        if (!ans) indices.push(idx);
      } else if (practiceState.filter === 'wrong') {
        if (!isAllModeUnsubmitted && ans && !ans.isCorrect) indices.push(idx);
      } else if (practiceState.filter === 'correct') {
        if (!isAllModeUnsubmitted && ans && ans.isCorrect) indices.push(idx);
      } else {
        indices.push(idx);
      }
    });
    return indices;
  }

  function getFilteredQuestions() {
    const indices = getFilteredQuestionIndices();
    return indices.map(i => practiceState.moduleQuestions[i]);
  }

  function renderPracticeGrid() {
    const grid = document.getElementById('practice-questions-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const modId = practiceState.activeModule;
    const ansMap = practiceState.userAnswers[modId] || {};
    const total = practiceState.moduleQuestions.length;
    const filteredIndices = getFilteredQuestionIndices();

    grid.className = 'questions-grid';
    if (total > 30) grid.classList.add('grid-' + (total <= 60 ? '60' : '90'));

    practiceState.moduleQuestions.forEach((q, idx) => {
      const cell = document.createElement('div');
      cell.className = 'q-cell';
      cell.textContent = idx + 1;

      // Làm mờ câu không thuộc bộ lọc đang chọn
      if (practiceState.filter !== 'all' && !filteredIndices.includes(idx)) {
        cell.classList.add('filtered-out');
      }

      if (idx === practiceState.currentQuestionIndex && practiceState.viewMode !== 'list') {
        cell.classList.add('current');
      }

      const ans = ansMap[q.id];
      if (ans) {
        if (practiceState.viewMode === 'all' && !practiceState.isSubmittedInAllMode) {
          cell.classList.add('answered');
        } else {
          if (ans.isCorrect) {
            cell.classList.add('correct');
            cell.classList.add('review-correct');
          } else {
            cell.classList.add('wrong');
            cell.classList.add('review-wrong');
          }
        }
      }

      cell.onclick = () => {
        practiceState.currentQuestionIndex = idx;
        if (practiceState.filter !== 'all' && !filteredIndices.includes(idx)) {
          practiceState.filter = 'all';
          const filterSelect = document.getElementById('filter-select');
          if (filterSelect) filterSelect.value = 'all';
          updateFilterSelectLabels();
        }
        if (practiceState.viewMode === 'list') {
          practiceState.viewMode = 'single';
          updateViewModeUI();
        }
        renderSingleQuestion();
        renderPracticeGrid();

        if (window.innerWidth < 768) {
          const singleView = document.getElementById('single-question-view');
          if (singleView) singleView.scrollIntoView({ behavior: 'smooth' });
        }
      };

      grid.appendChild(cell);
    });
  }

  /**
   * Render câu hỏi đơn (dùng cho cả chế độ 'single' và 'all')
   */
  function renderSingleQuestion() {
    const total = practiceState.moduleQuestions.length;
    if (total === 0) return;

    const modId = practiceState.activeModule;
    const cfg = MODULES_CONFIG.find(m => m.id === modId);
    const ansMap = practiceState.userAnswers[modId] || {};
    const filteredIndices = getFilteredQuestionIndices();

    // 1. Xử lý trường hợp bộ lọc không có câu hỏi nào (ví dụ lọc 'Câu sai' mà không có câu nào sai)
    if (filteredIndices.length === 0) {
      const qBox = document.getElementById('practice-question-box');
      const optBox = document.getElementById('practice-options-box');
      const pHeaderNum = document.getElementById('practice-q-header-num');
      const pTag = document.getElementById('practice-q-tag');

      if (pHeaderNum) pHeaderNum.textContent = `0 câu hỏi`;
      if (pTag) pTag.textContent = 'Bộ lọc rỗng';

      let filterLabel = 'Bộ lọc này';
      let emptyIcon = '📋';
      let emptyDesc = 'Không tìm thấy câu hỏi phù hợp với bộ lọc hiện tại.';
      if (practiceState.filter === 'wrong') {
        filterLabel = 'Câu sai';
        emptyIcon = '🎉';
        emptyDesc = 'Tuyệt vời! Bạn không có câu sai nào trong chương này.';
      } else if (practiceState.filter === 'correct') {
        filterLabel = 'Câu đúng';
        emptyIcon = '📝';
        emptyDesc = 'Bạn chưa có câu trả lời đúng nào trong chương này.';
      } else if (practiceState.filter === 'unanswered') {
        filterLabel = 'Câu chưa làm';
        emptyIcon = '🏆';
        emptyDesc = 'Bạn đã hoàn thành toàn bộ tất cả câu hỏi của chương này!';
      }

      if (qBox) {
        qBox.innerHTML = `
          <div class="practice-empty-filter">
            <div class="empty-icon">${emptyIcon}</div>
            <h4>Không có câu hỏi nào thuộc nhóm "${filterLabel}"</h4>
            <p>${emptyDesc}</p>
            <button id="btn-reset-filter-empty" class="btn-card-single" style="margin-top: 16px; padding: 10px 20px; font-size: 14px; font-weight: 700; cursor: pointer;">
              👁️ Xem lại tất cả (${total} câu)
            </button>
          </div>
        `;
        const btnResetFilter = qBox.querySelector('#btn-reset-filter-empty');
        if (btnResetFilter) {
          btnResetFilter.onclick = () => {
            practiceState.filter = 'all';
            const filterSelect = document.getElementById('filter-select');
            if (filterSelect) filterSelect.value = 'all';
            updateFilterSelectLabels();
            renderPracticeGrid();
            renderSingleQuestion();
          };
        }
      }
      if (optBox) {
        optBox.innerHTML = '';
      }
      return;
    }

    // 2. Nếu câu hiện tại không nằm trong danh sách đã lọc, chuyển sang câu đầu tiên thỏa mãn
    if (!filteredIndices.includes(practiceState.currentQuestionIndex)) {
      practiceState.currentQuestionIndex = filteredIndices[0];
    }

    const currentPosInFiltered = filteredIndices.indexOf(practiceState.currentQuestionIndex);
    const q = practiceState.moduleQuestions[practiceState.currentQuestionIndex];
    if (!q) return;

    const currentRecord = ansMap[q.id];
    const isFirst = currentPosInFiltered <= 0;
    const isLast = currentPosInFiltered >= filteredIndices.length - 1;
    const letters = ['A', 'B', 'C', 'D'];

    let filterLabelShort = '';
    if (practiceState.filter === 'wrong') filterLabelShort = 'Câu sai';
    else if (practiceState.filter === 'correct') filterLabelShort = 'Câu đúng';
    else if (practiceState.filter === 'unanswered') filterLabelShort = 'Chưa làm';

    // Header số câu
    const pHeaderNum = document.getElementById('practice-q-header-num');
    if (pHeaderNum) {
      if (practiceState.filter === 'all') {
        pHeaderNum.textContent = `Câu ${practiceState.currentQuestionIndex + 1} / ${total}`;
      } else {
        pHeaderNum.textContent = `Câu ${practiceState.currentQuestionIndex + 1} / ${total} • [Lọc ${filterLabelShort}: ${currentPosInFiltered + 1}/${filteredIndices.length}]`;
      }
    }

    const pTag = document.getElementById('practice-q-tag');
    if (pTag && cfg) {
      if (practiceState.viewMode === 'all') {
        pTag.textContent = practiceState.isSubmittedInAllMode ? '📝 Xem lại chương' : '📝 Luyện tất cả câu';
      } else {
        pTag.textContent = cfg.tag || 'OOP Practice';
      }
    }

    // Đề bài & Code
    const qBox = document.getElementById('practice-question-box');
    if (qBox) {
      qBox.innerHTML = `
        <div class="q-content-body">
          ${formatQuestionHtml(q.question)}
        </div>
      `;
      qBox.scrollTop = 0;
    }

    // Phương án & Lời giải
    const optBox = document.getElementById('practice-options-box');
    if (optBox) {
      optBox.innerHTML = '';

      const isAllModeUnsubmitted = practiceState.viewMode === 'all' && !practiceState.isSubmittedInAllMode;

      // 1. 4 Options cards A, B, C, D
      q.options.forEach((optText, optIdx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.setAttribute('data-idx', optIdx);

        const isChosen = currentRecord && currentRecord.answer === optIdx;
        if (isChosen) card.classList.add('selected');

        let statusTag = '';
        // Chỉ hiện đúng/sai khi ở chế độ 'single' HOẶC chế độ 'all' ĐÃ NỘP BÀI
        if (currentRecord && !isAllModeUnsubmitted) {
          if (optIdx === q.answer) {
            card.classList.add('correct-answer-card');
            statusTag = `<span class="option-status-tag tag-correct">✓ Đáp án đúng</span>`;
          } else if (isChosen && !currentRecord.isCorrect) {
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

        card.onclick = () => {
          const isCorrect = optIdx === q.answer;
          if (!practiceState.userAnswers[modId]) practiceState.userAnswers[modId] = {};
          practiceState.userAnswers[modId][q.id] = { answer: optIdx, isCorrect };
          saveProgress();

          updateFilterSelectLabels();
          updateQuickStats();
          renderPracticeGrid();
          renderSingleQuestion();
        };

        optBox.appendChild(card);
      });

      // 2. Banner giải thích (Chỉ hiện khi ở 'single' HOẶC 'all' đã nộp bài)
      if (currentRecord && !isAllModeUnsubmitted) {
        const banner = document.createElement('div');
        banner.className = 'correct-answer-banner';
        banner.innerHTML = `
          <div class="banner-top-row">
            <span class="banner-result-label ${currentRecord.isCorrect ? 'text-correct' : 'text-wrong'}">
              ${currentRecord.isCorrect ? '🎉 Chính xác!' : '⚠️ Chưa chính xác!'}
            </span>
            <button id="btn-reanswer-q" class="btn-reanswer" title="Làm lại câu này">🔄 Chọn lại</button>
          </div>
          <div class="banner-correct-ans">Đáp án đúng: <strong>${letters[q.answer]}. ${escapeHtml(q.options[q.answer] || '')}</strong></div>
          <div class="explanation-text">💡 <strong>Lời giải chi tiết:</strong> ${escapeHtml(q.explanation || '')}</div>
        `;
        optBox.appendChild(banner);

        const btnReanswer = banner.querySelector('#btn-reanswer-q');
        if (btnReanswer) {
          btnReanswer.onclick = (e) => {
            e.stopPropagation();
            delete practiceState.userAnswers[modId][q.id];
            saveProgress();
            updateFilterSelectLabels();
            updateQuickStats();
            renderPracticeGrid();
            renderSingleQuestion();
          };
        }
      }

      // 3. Thanh điều hướng sát dưới câu D / Lời giải
      const navContainer = document.createElement('div');
      navContainer.id = 'practice-nav-bar';
      navContainer.className = 'practice-nav-under-d';

      let submitActionBtn = '';
      if (isAllModeUnsubmitted) {
        const answeredCount = Object.keys(ansMap).length;
        submitActionBtn = `
          <button id="p-submit-all-btn" class="btn-nav btn-submit-inline" title="Nộp bài và chấm điểm toàn bộ câu hỏi của chương này">
            🏁 Nộp bài (${answeredCount}/${total})
          </button>
        `;
      }

      let navCounterText = `Câu ${practiceState.currentQuestionIndex + 1} / ${total}`;
      if (practiceState.filter !== 'all') {
        navCounterText += ` • ${filterLabelShort} ${currentPosInFiltered + 1}/${filteredIndices.length}`;
      }

      navContainer.innerHTML = `
        <button id="p-prev-btn" class="btn-nav btn-prev" ${isFirst ? 'disabled' : ''} title="Về câu trước trong bộ lọc (Phím ←)">
          ◀ Câu trước
        </button>
        <div class="practice-nav-meta">
          <span class="p-q-counter">${navCounterText}</span>
          <span class="p-shortcut-hint">Phím ← / → • A, B, C, D</span>
        </div>
        ${submitActionBtn}
        <button id="p-next-btn" class="btn-nav btn-next" ${isLast ? 'disabled' : ''} title="Sang câu tiếp theo trong bộ lọc (Phím →)">
          Câu tiếp ▶
        </button>
      `;

      optBox.appendChild(navContainer);

      const prevBtn = navContainer.querySelector('#p-prev-btn');
      if (prevBtn) {
        prevBtn.onclick = () => {
          if (currentPosInFiltered > 0) {
            practiceState.currentQuestionIndex = filteredIndices[currentPosInFiltered - 1];
            renderSingleQuestion();
            renderPracticeGrid();
          }
        };
      }

      const nextBtn = navContainer.querySelector('#p-next-btn');
      if (nextBtn) {
        nextBtn.onclick = () => {
          if (currentPosInFiltered < filteredIndices.length - 1) {
            practiceState.currentQuestionIndex = filteredIndices[currentPosInFiltered + 1];
            renderSingleQuestion();
            renderPracticeGrid();
          }
        };
      }

      const inlineSubmit = navContainer.querySelector('#p-submit-all-btn');
      if (inlineSubmit) {
        inlineSubmit.onclick = submitChapterPractice;
      }
    }
  }

  /**
   * Tính năng: Nộp bài & Chấm điểm khi luyện tất cả các câu của chương
   */
  function submitChapterPractice() {
    const modId = practiceState.activeModule;
    const cfg = MODULES_CONFIG.find(m => m.id === modId);
    const ansMap = practiceState.userAnswers[modId] || {};
    const total = practiceState.moduleQuestions.length;
    const answeredCount = Object.keys(ansMap).length;

    if (answeredCount < total) {
      if (!confirm(`Bạn đã làm ${answeredCount}/${total} câu hỏi. Bạn có chắc chắn muốn kết thúc và nộp bài để xem kết quả toàn chương không?`)) {
        return;
      }
    }

    practiceState.isSubmittedInAllMode = true;

    let correctCount = 0;
    Object.values(ansMap).forEach(a => {
      if (a && a.isCorrect) correctCount++;
    });

    const percent = Math.round((correctCount / total) * 100);
    const score = ((correctCount / total) * 10).toFixed(2);

    updateViewModeUI();
    renderSingleQuestion();
    renderPracticeGrid();
    updateQuickStats();
    updateFilterSelectLabels();

    // Hiển thị Modal thông báo kết quả làm bài
    showChapterResultModal(cfg, total, answeredCount, correctCount, score, percent);
  }

  function showChapterResultModal(cfg, total, answeredCount, correctCount, score, percent) {
    const existing = document.getElementById('chapter-result-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'chapter-result-modal';
    modal.className = 'modal-overlay';
    modal.innerHTML = `
      <div class="modal-dialog" style="max-width: 520px; text-align: center; padding: 26px 24px; border-radius: 14px;">
        <div style="font-size: 48px; margin-bottom: 10px;">${percent >= 80 ? '🎉' : (percent >= 50 ? '👏' : '📚')}</div>
        <h3 style="color: #0284c7; font-size: 20px; font-weight: 800; margin-bottom: 6px;">
          KẾT QUẢ LUYỆN TẬP: ${cfg ? cfg.title : ''}
        </h3>
        <p style="color: #64748b; font-size: 13.5px; margin-bottom: 18px;">
          Bạn vừa hoàn thành luyện tất cả các câu hỏi của chương.
        </p>

        <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 18px; margin-bottom: 22px;">
          <div style="font-size: 32px; font-weight: 800; color: #16a34a; margin-bottom: 4px;">
            ${score} <span style="font-size: 18px; color: #64748b;">/ 10.0</span>
          </div>
          <div style="font-size: 14.5px; color: #334155; font-weight: 600;">
            Đúng <strong>${correctCount} / ${total}</strong> câu (${percent}%)
          </div>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px;">
          <button id="btn-modal-review" class="btn-start-topic" style="padding: 12px; font-size: 14.5px;">
            🔍 Xem lại chi tiết từng câu &amp; Lời giải
          </button>
          <div style="display: flex; gap: 8px;">
            <button id="btn-modal-retake" class="btn-sidebar-reset" style="flex: 1; padding: 10px; font-size: 13px;">
              🔄 Luyện lại chương này
            </button>
            <button id="btn-modal-back" class="btn-nav-back" style="flex: 1; padding: 10px; font-size: 13px;">
              ◀ Về danh mục 6 chương
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    const closeModal = () => modal.remove();

    const btnReview = modal.querySelector('#btn-modal-review');
    if (btnReview) {
      btnReview.onclick = () => {
        closeModal();
        practiceState.currentQuestionIndex = 0;
        renderSingleQuestion();
        renderPracticeGrid();
      };
    }

    const btnRetake = modal.querySelector('#btn-modal-retake');
    if (btnRetake) {
      btnRetake.onclick = () => {
        closeModal();
        delete practiceState.userAnswers[practiceState.activeModule];
        saveProgress();
        practiceState.currentQuestionIndex = 0;
        practiceState.isSubmittedInAllMode = false;
        updateViewModeUI();
        updateFilterSelectLabels();
        renderSingleQuestion();
        renderPracticeGrid();
        updateQuickStats();
      };
    }

    const btnBack = modal.querySelector('#btn-modal-back');
    if (btnBack) {
      btnBack.onclick = () => {
        closeModal();
        document.getElementById('practice-screen').style.display = 'none';
        document.getElementById('overview-screen').style.display = 'block';
        renderOverviewCards();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }
  }

  /**
   * Chế độ 3: Xem danh sách
   */
  function renderListQuestions() {
    const listView = document.getElementById('list-questions-view');
    if (!listView) return;
    listView.innerHTML = '';

    const questions = getFilteredQuestions();
    const letters = ['A', 'B', 'C', 'D'];
    const modId = practiceState.activeModule;
    const ansMap = practiceState.userAnswers[modId] || {};

    const headerBox = document.createElement('div');
    headerBox.className = 'list-mode-header-box';
    headerBox.innerHTML = `
      <div class="list-mode-header-info">
        <h3>📜 TOÀN BỘ DANH SÁCH ${practiceState.moduleQuestions.length} CÂU HỎI</h3>
        <p>Bấm trực tiếp vào phương án để làm bài hoặc bật công tắc bên cạnh để xem sẵn lời giải.</p>
      </div>
      <div class="list-mode-toggle-answers">
        <label class="toggle-switch-label" title="Bật/Tắt hiển thị đáp án đúng và lời giải chi tiết">
          <input type="checkbox" id="check-show-all-answers" ${practiceState.showAllAnswersInList ? 'checked' : ''}>
          <span class="toggle-label-text">👁️ Hiện sẵn đáp án & Lời giải</span>
        </label>
      </div>
    `;
    listView.appendChild(headerBox);

    const toggleCheck = headerBox.querySelector('#check-show-all-answers');
    if (toggleCheck) {
      toggleCheck.onchange = (e) => {
        practiceState.showAllAnswersInList = e.target.checked;
        renderListQuestions();
      };
    }

    if (questions.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.className = 'practice-empty-filter';
      emptyMsg.innerHTML = `
        <div class="empty-icon">📋</div>
        <h4>Không có câu hỏi nào theo bộ lọc đã chọn</h4>
        <button id="btn-reset-filter-list" class="btn-card-single" style="margin-top: 14px; padding: 8px 18px; font-size: 13.5px; cursor: pointer;">
          👁️ Hiển thị tất cả (${practiceState.moduleQuestions.length} câu)
        </button>
      `;
      listView.appendChild(emptyMsg);
      const btnResetList = emptyMsg.querySelector('#btn-reset-filter-list');
      if (btnResetList) {
        btnResetList.onclick = () => {
          practiceState.filter = 'all';
          const filterSelect = document.getElementById('filter-select');
          if (filterSelect) filterSelect.value = 'all';
          updateFilterSelectLabels();
          renderPracticeGrid();
          renderListQuestions();
        };
      }
      return;
    }

    questions.forEach((q, qIndexInFilter) => {
      const realIndex = practiceState.moduleQuestions.findIndex(item => item.id === q.id);
      const displayIndex = realIndex >= 0 ? realIndex + 1 : qIndexInFilter + 1;
      const currentAns = ansMap[q.id];

      const item = document.createElement('div');
      item.className = 'list-mode-item';
      item.id = `list-q-${q.id}`;

      let optionsContainer = document.createElement('div');
      optionsContainer.className = 'list-options-container';

      q.options.forEach((optText, oIdx) => {
        const isRight = oIdx === q.answer;
        const isUserChoice = currentAns && currentAns.answer === oIdx;
        const isCodeOpt = optText.includes('(') || optText.includes(';') || optText.includes('new ') || optText.includes('::');
        const formatted = isCodeOpt ? `<code>${escapeHtml(optText)}</code>` : escapeHtml(optText);

        const optCard = document.createElement('div');
        optCard.className = 'list-option-card';

        if (practiceState.showAllAnswersInList) {
          if (isRight) {
            optCard.classList.add('correct-answer-card');
            optCard.innerHTML = `
              <div class="option-letter-badge">${letters[oIdx]}</div>
              <div class="option-card-text">${formatted}</div>
              <span class="option-status-tag tag-correct">✓ Đáp án đúng</span>
            `;
          } else {
            optCard.innerHTML = `
              <div class="option-letter-badge">${letters[oIdx]}</div>
              <div class="option-card-text">${formatted}</div>
            `;
          }
        } else {
          if (isUserChoice) {
            optCard.classList.add('selected');
            if (currentAns.isCorrect) {
              optCard.classList.add('correct-answer-card');
              optCard.innerHTML = `
                <div class="option-letter-badge">${letters[oIdx]}</div>
                <div class="option-card-text">${formatted}</div>
                <span class="option-status-tag tag-correct">✓ Bạn chọn đúng</span>
              `;
            } else {
              optCard.classList.add('user-wrong-card');
              optCard.innerHTML = `
                <div class="option-letter-badge">${letters[oIdx]}</div>
                <div class="option-card-text">${formatted}</div>
                <span class="option-status-tag tag-wrong">✗ Bạn chọn</span>
              `;
            }
          } else if (currentAns && isRight) {
            optCard.classList.add('correct-answer-card');
            optCard.innerHTML = `
              <div class="option-letter-badge">${letters[oIdx]}</div>
              <div class="option-card-text">${formatted}</div>
              <span class="option-status-tag tag-correct">✓ Đáp án đúng</span>
            `;
          } else {
            optCard.innerHTML = `
              <div class="option-letter-badge">${letters[oIdx]}</div>
              <div class="option-card-text">${formatted}</div>
            `;
          }

          optCard.onclick = () => {
            const isCorrect = oIdx === q.answer;
            if (!practiceState.userAnswers[modId]) practiceState.userAnswers[modId] = {};
            practiceState.userAnswers[modId][q.id] = { answer: oIdx, isCorrect };
            saveProgress();
            updateFilterSelectLabels();
            updateQuickStats();
            renderListQuestions();
            renderPracticeGrid();
          };
        }

        optionsContainer.appendChild(optCard);
      });

      let explanationHtml = '';
      if (practiceState.showAllAnswersInList || currentAns) {
        explanationHtml = `
          <div class="correct-answer-banner" style="margin-top: 10px;">
            <div style="font-weight: 700; margin-bottom: 4px;">Đáp án đúng: <strong>${letters[q.answer]}. ${escapeHtml(q.options[q.answer] || '')}</strong></div>
            <div class="explanation-text">💡 <strong>Lời giải chi tiết:</strong> ${escapeHtml(q.explanation || '')}</div>
          </div>
        `;
      }

      item.innerHTML = `
        <div class="list-item-header">
          <span class="q-badge-num">Câu ${displayIndex} / ${practiceState.moduleQuestions.length}</span>
          <button class="btn-jump-single" data-idx="${realIndex}" title="Mở câu này ở chế độ Luyện từng câu">
            🎯 Luyện câu này
          </button>
        </div>
        <div class="list-q-body">
          ${formatQuestionHtml(q.question)}
        </div>
      `;

      item.appendChild(optionsContainer);

      if (explanationHtml) {
        const expDiv = document.createElement('div');
        expDiv.innerHTML = explanationHtml;
        item.appendChild(expDiv);
      }

      const btnJump = item.querySelector('.btn-jump-single');
      if (btnJump) {
        btnJump.onclick = () => {
          practiceState.currentQuestionIndex = realIndex;
          practiceState.viewMode = 'single';
          updateViewModeUI();
          renderSingleQuestion();
          renderPracticeGrid();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        };
      }

      listView.appendChild(item);
    });
  }

  function initPractice() {
    loadProgress();
    renderOverviewCards();

    // Nút quay lại màn hình tổng quan 6 chương
    const btnBack = document.getElementById('btn-back-overview');
    if (btnBack) {
      btnBack.onclick = () => {
        document.getElementById('practice-screen').style.display = 'none';
        document.getElementById('overview-screen').style.display = 'block';
        renderOverviewCards();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };
    }

    // Tab 1: Luyện từng câu
    const tabSingle = document.getElementById('tab-mode-single');
    if (tabSingle) {
      tabSingle.onclick = () => {
        practiceState.viewMode = 'single';
        updateViewModeUI();
        renderSingleQuestion();
        renderPracticeGrid();
      };
    }

    // Tab 2: Luyện tất cả câu của chương
    const tabAll = document.getElementById('tab-mode-all');
    if (tabAll) {
      tabAll.onclick = () => {
        practiceState.viewMode = 'all';
        updateViewModeUI();
        renderSingleQuestion();
        renderPracticeGrid();
      };
    }

    // Tab 3: Xem danh sách
    const tabList = document.getElementById('tab-mode-list');
    if (tabList) {
      tabList.onclick = () => {
        practiceState.viewMode = 'list';
        updateViewModeUI();
        renderListQuestions();
      };
    }

    // Nút nộp bài chương trên thanh điều hướng
    const btnSubmit = document.getElementById('btn-submit-chapter');
    if (btnSubmit) {
      btnSubmit.onclick = () => {
        if (practiceState.isSubmittedInAllMode) {
          // Nếu đã nộp bài, bấm vào để làm lại từ đầu
          if (confirm('Bạn có muốn làm lại từ đầu tất cả các câu của chương này không?')) {
            delete practiceState.userAnswers[practiceState.activeModule];
            saveProgress();
            practiceState.currentQuestionIndex = 0;
            practiceState.isSubmittedInAllMode = false;
            updateViewModeUI();
            renderSingleQuestion();
            renderPracticeGrid();
            updateQuickStats();
          }
        } else {
          submitChapterPractice();
        }
      };
    }

    // Nút toggle ẩn/hiện lưới số câu
    const btnToggleGrid = document.getElementById('btn-toggle-grid');
    const sidebarEl = document.getElementById('practice-sidebar');
    if (btnToggleGrid && sidebarEl) {
      btnToggleGrid.onclick = () => {
        practiceState.sidebarCollapsed = !practiceState.sidebarCollapsed;
        if (practiceState.sidebarCollapsed) {
          sidebarEl.classList.add('collapsed');
          btnToggleGrid.classList.add('active');
          btnToggleGrid.textContent = '📋 Hiện lưới câu';
        } else {
          sidebarEl.classList.remove('collapsed');
          btnToggleGrid.classList.remove('active');
          btnToggleGrid.textContent = '📋 Lưới câu hỏi';
        }
      };
    }

    // Bộ lọc câu hỏi (Tất cả câu, Chưa làm, Câu sai, Câu đúng)
    const filterSelect = document.getElementById('filter-select');
    if (filterSelect) {
      filterSelect.onchange = (e) => {
        practiceState.filter = e.target.value;
        const filteredIndices = getFilteredQuestionIndices();
        if (filteredIndices.length > 0 && !filteredIndices.includes(practiceState.currentQuestionIndex)) {
          practiceState.currentQuestionIndex = filteredIndices[0];
        }
        updateFilterSelectLabels();
        renderPracticeGrid();
        if (practiceState.viewMode === 'list') {
          renderListQuestions();
        } else {
          renderSingleQuestion();
        }
      };
    }

    // Nút làm lại toàn bộ chương hiện tại
    const btnReset = document.getElementById('btn-reset-module');
    if (btnReset) {
      btnReset.onclick = () => {
        if (confirm('Bạn có chắc chắn muốn làm lại từ đầu chương này không? Toàn bộ kết quả đã làm của chương sẽ được làm mới.')) {
          delete practiceState.userAnswers[practiceState.activeModule];
          saveProgress();
          practiceState.currentQuestionIndex = 0;
          practiceState.isSubmittedInAllMode = false;
          practiceState.filter = 'all';
          if (filterSelect) filterSelect.value = 'all';
          updateViewModeUI();
          updateFilterSelectLabels();
          renderPracticeGrid();
          updateQuickStats();
          if (practiceState.viewMode === 'list') renderListQuestions();
          else renderSingleQuestion();
        }
      };
    }

    // Phím tắt bàn phím
    document.addEventListener('keydown', (e) => {
      if (practiceState.viewMode === 'list' || !practiceState.activeModule) return;
      if (document.getElementById('practice-screen').style.display === 'none') return;
      if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

      const total = practiceState.moduleQuestions.length;
      if (total === 0) return;

      const filteredIndices = getFilteredQuestionIndices();
      let pos = filteredIndices.indexOf(practiceState.currentQuestionIndex);
      if (pos === -1 && filteredIndices.length > 0) pos = 0;

      if (e.key === 'ArrowLeft') {
        if (pos > 0) {
          practiceState.currentQuestionIndex = filteredIndices[pos - 1];
          renderSingleQuestion();
          renderPracticeGrid();
        }
      } else if (e.key === 'ArrowRight') {
        if (pos >= 0 && pos < filteredIndices.length - 1) {
          practiceState.currentQuestionIndex = filteredIndices[pos + 1];
          renderSingleQuestion();
          renderPracticeGrid();
        }
      } else {
        const keyMap = {
          'a': 0, 'A': 0, '1': 0,
          'b': 1, 'B': 1, '2': 1,
          'c': 2, 'C': 2, '3': 2,
          'd': 3, 'D': 3, '4': 3
        };
        if (keyMap.hasOwnProperty(e.key)) {
          const optIdx = keyMap[e.key];
          const q = practiceState.moduleQuestions[practiceState.currentQuestionIndex];
          if (q && q.options && q.options[optIdx] !== undefined) {
            const modId = practiceState.activeModule;
            const isCorrect = optIdx === q.answer;
            if (!practiceState.userAnswers[modId]) practiceState.userAnswers[modId] = {};
            practiceState.userAnswers[modId][q.id] = { answer: optIdx, isCorrect };
            saveProgress();
            updateFilterSelectLabels();
            updateQuickStats();
            renderPracticeGrid();
            renderSingleQuestion();
          }
        }
      }
    });
  }

  document.addEventListener('DOMContentLoaded', initPractice);
})();
