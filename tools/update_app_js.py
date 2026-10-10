# -*- coding: utf-8 -*-

with open("js/app.js", "r", encoding="utf-8") as f:
    content = f.read()

# 1. Update showPackageSelectionModal cards
old_cards = """            <!-- Gói 30 câu -->
            <div class="package-card ${appState.selectedPackage === 30 ? 'selected' : ''}" data-pkg="30">
              <span class="package-badge-duration">⏱️ 30 phút</span>
              <div class="package-title">30 CÂU</div>
              <div class="package-desc">
                • Ch.1: 3 câu<br>
                • Ch.2: 7 câu<br>
                • Ch.3: 7 câu<br>
                • Ch.4: 7 câu<br>
                • Ch.5 (C#): 3 câu<br>
                • Ch.6 (Java): 3 câu
              </div>
            </div>

            <!-- Gói 60 câu -->
            <div class="package-card ${appState.selectedPackage === 60 ? 'selected' : ''}" data-pkg="60">
              <span class="package-badge-duration">⏱️ 60 phút</span>
              <div class="package-title">60 CÂU</div>
              <div class="package-desc">
                • Ch.1: 2 câu<br>
                • Ch.2: 16 câu<br>
                • Ch.3: 16 câu<br>
                • Ch.4: 16 câu<br>
                • Ch.5 (C#): 5 câu<br>
                • Ch.6 (Java): 5 câu
              </div>
            </div>

            <!-- Gói 90 câu -->
            <div class="package-card ${appState.selectedPackage === 90 ? 'selected' : ''}" data-pkg="90">
              <span class="package-badge-duration">⏱️ 90 phút</span>
              <div class="package-title">90 CÂU</div>
              <div class="package-desc">
                • Ch.1: 3 câu<br>
                • Ch.2: 25 câu<br>
                • Ch.3: 26 câu<br>
                • Ch.4: 26 câu<br>
                • Ch.5 (C#): 5 câu<br>
                • Ch.6 (Java): 5 câu
              </div>
            </div>"""

new_cards = """            <!-- Gói 30 câu -->
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
            </div>"""

content = content.replace(old_cards, new_cards)

# 2. Update renderCurrentQuestion
old_render_q = """    // Question box
    const qBox = document.getElementById('question-box');
    if (qBox) {
      qBox.innerHTML = `
        <div class="question-header-line">
          <span class="chapter-badge">Chương ${q.module}: ${q.moduleName}</span>
          <span class="q-number-bold">Câu ${appState.currentQuestionIndex + 1} / ${appState.questions.length}</span>
        </div>
        <div class="q-content-body">
          ${formatQuestionHtml(q.question)}
        </div>
      `;
    }

    // Options box
    const optBox = document.getElementById('options-box');
    if (optBox) {
      optBox.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];
      const currentAnswer = appState.userAnswers[appState.currentQuestionIndex];

      q.options.forEach((optText, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item';

        const isSelected = currentAnswer === optIdx;
        if (isSelected) item.classList.add('selected');

        if (appState.view === 'review') {
          if (optIdx === q.answer) {
            item.classList.add('correct-answer-item');
          } else if (isSelected && optIdx !== q.answer) {
            item.classList.add('user-selected-wrong');
          }
        }

        const isCodeOpt = optText.includes('(') || optText.includes(';') || optText.includes('new ') || optText.includes('::');
        const formattedOptText = isCodeOpt ? `<code>${escapeHtml(optText)}</code>` : escapeHtml(optText);

        item.innerHTML = `
          <div class="option-indicator ${isSelected ? 'active' : ''}">${letters[optIdx]}</div>
          <div class="option-label">${formattedOptText}</div>
        `;

        if (appState.view !== 'review') {
          item.addEventListener('click', () => {
            appState.userAnswers[appState.currentQuestionIndex] = optIdx;
            renderCurrentQuestion();
            renderGrid();
          });
        }

        optBox.appendChild(item);
      });

      // Nếu đang ở chế độ xem lại, hiển thị giải thích chi tiết
      if (appState.view === 'review') {
        const isCorrect = currentAnswer === q.answer;
        const banner = document.createElement('div');
        banner.className = 'correct-answer-banner';
        banner.innerHTML = `
          <div style="font-weight: 800; margin-bottom: 4px;">
            ${isCorrect ? '✅ Bạn đã trả lời CHÍNH XÁC!' : '❌ Bạn đã trả lời CHƯA ĐÚNG!'}
          </div>
          <div>Đáp án đúng: <strong>${letters[q.answer]}. ${escapeHtml(q.options[q.answer] || '')}</strong></div>
          <div class="explanation-text">💡 <strong>Giải thích chi tiết:</strong> ${escapeHtml(q.explanation || '')}</div>
        `;
        optBox.appendChild(banner);
      }
    }"""

new_render_q = """    // Header số câu của cột câu hỏi
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
    }"""

content = content.replace(old_render_q, new_render_q)

# 3. Update showResultSummary and startNewExam to toggle split vs summary
old_summary = """  function showResultSummary() {
    appState.view = 'result_summary';
    const qBox = document.getElementById('question-box');
    const optBox = document.getElementById('options-box');
    const navBar = document.getElementById('bottom-nav-bar');
    const headerControls = document.getElementById('header-controls-container');
    if (headerControls) headerControls.innerHTML = '';

    const pkg = EXAM_PACKAGES[appState.selectedPackage];

    if (qBox) {
      qBox.innerHTML = `
        <div class="result-summary-pane">
          <h3>BẢNG TỔNG KẾT ĐIỂM THI TRẮC NGHIỆM OOP - HITC</h3>
          <div class="result-line-divider">---------------------------------------------------------</div>
          <p>Sinh viên: <strong>${escapeHtml(appState.studentName)}</strong> | MSSV: <strong>${escapeHtml(appState.studentId)}</strong></p>
          <p>Mã đề thi: <strong>${appState.examCode}</strong> | Gói đề: <strong>${pkg.name} (${pkg.totalQuestions} câu / ${pkg.durationMinutes} phút)</strong></p>
          <p>Số câu đúng: <strong style="color: #2e7d32;">${appState.correctCount} / ${appState.questions.length}</strong> câu</p>
          <p>Điểm số (Thang điểm 10): <span class="result-highlight-score">${appState.score.toFixed(2)} / 10.0</span></p>
          <div class="result-line-divider">---------------------------------------------------------</div>
          <h4 style="margin: 8px 0; color: #0277bd;">Thống kê chi tiết theo từng chương:</h4>
          <ul style="margin-left: 20px; line-height: 1.7; font-size: 14.5px;">
            <li>Chương 1 (Tổng quan OOP): Đúng ${appState.moduleStats[1].c}/${appState.moduleStats[1].t} câu</li>
            <li>Chương 2 (Lớp & Đối tượng C++): Đúng ${appState.moduleStats[2].c}/${appState.moduleStats[2].t} câu</li>
            <li>Chương 3 (Kế thừa C++): Đúng ${appState.moduleStats[3].c}/${appState.moduleStats[3].t} câu</li>
            <li>Chương 4 (Đa hình C++): Đúng ${appState.moduleStats[4].c}/${appState.moduleStats[4].t} câu</li>
            <li>Chương 5 (OOP C#): Đúng ${appState.moduleStats[5].c}/${appState.moduleStats[5].t} câu</li>
            <li>Chương 6 (OOP Java): Đúng ${appState.moduleStats[6].c}/${appState.moduleStats[6].t} câu</li>
          </ul>
        </div>
      `;
    }

    if (optBox) {
      optBox.innerHTML = `
        <div style="padding: 20px; text-align: center; display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
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
      `;

      document.getElementById('btn-start-review').onclick = () => {
        appState.view = 'review';
        appState.currentQuestionIndex = 0;
        renderCurrentQuestion();
        renderGrid();
      };

      document.getElementById('btn-new-exam-dialog').onclick = () => {
        showPackageSelectionModal();
      };
    }

    if (navBar) navBar.innerHTML = '';
    renderGrid();
  }"""

new_summary = """  function showResultSummary() {
    appState.view = 'result_summary';
    const splitArea = document.getElementById('exam-split-area');
    const summaryArea = document.getElementById('summary-view-area');
    const headerControls = document.getElementById('header-controls-container');
    if (headerControls) headerControls.innerHTML = '';

    if (splitArea) splitArea.style.display = 'none';
    if (summaryArea) {
      summaryArea.style.display = 'block';
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
          <h4 style="margin: 12px 0 8px 0; color: #0277bd;">Thống kê chi tiết theo từng chương:</h4>
          <ul style="margin-left: 20px; line-height: 1.8; font-size: 14.5px;">
            <li>Chương 1 (Tổng quan OOP): Đúng <strong>${appState.moduleStats[1].c}/${appState.moduleStats[1].t}</strong> câu</li>
            <li>Chương 2 (Lớp & Đối tượng C++): Đúng <strong>${appState.moduleStats[2].c}/${appState.moduleStats[2].t}</strong> câu</li>
            <li>Chương 3 (Kế thừa C++): Đúng <strong>${appState.moduleStats[3].c}/${appState.moduleStats[3].t}</strong> câu</li>
            <li>Chương 4 (Đa hình C++): Đúng <strong>${appState.moduleStats[4].c}/${appState.moduleStats[4].t}</strong> câu</li>
            <li>Chương 5 (OOP C#): Đúng <strong>${appState.moduleStats[5].c}/${appState.moduleStats[5].t}</strong> câu</li>
            <li>Chương 6 (OOP Java): Đúng <strong>${appState.moduleStats[6].c}/${appState.moduleStats[6].t}</strong> câu</li>
          </ul>

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
  }"""

content = content.replace(old_summary, new_summary)

# 4. Update startNewExam to restore split area
old_start = """  function startNewExam(pkgKey) {
    const pkg = EXAM_PACKAGES[pkgKey] || EXAM_PACKAGES[30];
    appState.view = 'exam';
    appState.selectedPackage = pkgKey;
    appState.examCode = 'OOP' + Math.floor(1000 + Math.random() * 9000);
    appState.questions = generateExamQuestions(pkgKey);
    appState.userAnswers = {};
    appState.flaggedQuestions = {};
    appState.remainingSeconds = pkg.durationMinutes * 60;
    appState.currentQuestionIndex = 0;

    startTimer();
    renderCurrentQuestion();
    renderGrid();
  }"""

new_start = """  function startNewExam(pkgKey) {
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
  }"""

content = content.replace(old_start, new_start)

# 5. In renderNav when in review mode, clicking "Xem bảng điểm" should show summaryArea
old_nav_summary = """    const backSummary = document.getElementById('btn-back-to-summary');
    if (backSummary) {
      backSummary.addEventListener('click', () => {
        showResultSummary();
      });
    }"""

new_nav_summary = """    const backSummary = document.getElementById('btn-back-to-summary');
    if (backSummary) {
      backSummary.addEventListener('click', () => {
        showResultSummary();
      });
    }"""
content = content.replace(old_nav_summary, new_nav_summary)

with open("js/app.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Updated js/app.js successfully!")
