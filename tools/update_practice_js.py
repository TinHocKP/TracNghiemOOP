# -*- coding: utf-8 -*-

with open("js/practice.js", "r", encoding="utf-8") as f:
    content = f.read()

old_render = """    // Question box
    const qBox = document.getElementById('practice-question-box');
    if (qBox) {
      qBox.innerHTML = `
        <div class="question-header-line">
          <span class="chapter-badge">Chương ${q.module}: ${q.moduleName}</span>
          <span class="q-number-bold">Câu ${practiceState.currentQuestionIndex + 1} / ${practiceState.moduleQuestions.length}</span>
        </div>
        <div class="q-content-body">
          ${formatQuestionHtml(q.question)}
        </div>
      `;
    }

    // Options box
    const optBox = document.getElementById('practice-options-box');
    if (optBox) {
      optBox.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, optIdx) => {
        const item = document.createElement('div');
        item.className = 'option-item';

        const isChosen = currentRecord && currentRecord.answer === optIdx;

        if (currentRecord) {
          if (optIdx === q.answer) {
            item.classList.add('correct-answer-item');
          } else if (isChosen && !currentRecord.isCorrect) {
            item.classList.add('user-selected-wrong');
          }
        }

        const isCodeOpt = optText.includes('(') || optText.includes(';') || optText.includes('new ') || optText.includes('::');
        const formattedOptText = isCodeOpt ? `<code>${escapeHtml(optText)}</code>` : escapeHtml(optText);

        item.innerHTML = `
          <div class="option-indicator ${isChosen ? 'active' : ''}">${letters[optIdx]}</div>
          <div class="option-label">${formattedOptText}</div>
        `;

        item.onclick = () => {
          const isCorrect = optIdx === q.answer;
          if (!practiceState.userAnswers[modId]) practiceState.userAnswers[modId] = {};
          practiceState.userAnswers[modId][q.id] = { answer: optIdx, isCorrect };
          saveProgress();

          renderSingleQuestion();
          renderPracticeGrid();
        };

        optBox.appendChild(item);
      });

      // Hiển thị lời giải chi tiết khi đã làm câu hỏi này
      if (currentRecord) {
        const banner = document.createElement('div');
        banner.className = 'correct-answer-banner';
        banner.innerHTML = `
          <div style="font-weight: 800; margin-bottom: 4px;">
            ${currentRecord.isCorrect ? '🎉 CHÍNH XÁC!' : '⚠️ CHƯA CHÍNH XÁC!'}
          </div>
          <div>Đáp án đúng: <strong>${letters[q.answer]}. ${escapeHtml(q.options[q.answer] || '')}</strong></div>
          <div class="explanation-text">💡 <strong>Lời giải chi tiết:</strong> ${escapeHtml(q.explanation || '')}</div>
        `;
        optBox.appendChild(banner);
      }
    }"""

new_render = """    // Header số câu
    const pHeaderNum = document.getElementById('practice-q-header-num');
    if (pHeaderNum) {
      pHeaderNum.textContent = `Câu ${practiceState.currentQuestionIndex + 1} / ${practiceState.moduleQuestions.length}`;
    }

    // Question box (Bỏ số chương số câu, chỉ hiện nội dung câu hỏi và code)
    const qBox = document.getElementById('practice-question-box');
    if (qBox) {
      qBox.innerHTML = `
        <div class="q-content-body">
          ${formatQuestionHtml(q.question)}
        </div>
      `;
    }

    // Options box (Hiển thị các Option Cards có viền, badge rõ ràng)
    const optBox = document.getElementById('practice-options-box');
    if (optBox) {
      optBox.innerHTML = '';
      const letters = ['A', 'B', 'C', 'D'];

      q.options.forEach((optText, optIdx) => {
        const card = document.createElement('div');
        card.className = 'option-card';
        card.setAttribute('data-idx', optIdx);

        const isChosen = currentRecord && currentRecord.answer === optIdx;
        if (isChosen) card.classList.add('selected');

        let statusTag = '';
        if (currentRecord) {
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

          renderSingleQuestion();
          renderPracticeGrid();
        };

        optBox.appendChild(card);
      });

      // Hiển thị lời giải chi tiết khi đã làm câu hỏi này
      if (currentRecord) {
        const banner = document.createElement('div');
        banner.className = 'correct-answer-banner';
        banner.innerHTML = `
          <div style="font-weight: 800; margin-bottom: 6px; font-size: 14.5px;">
            ${currentRecord.isCorrect ? '🎉 CHÍNH XÁC!' : '⚠️ CHƯA CHÍNH XÁC!'}
          </div>
          <div style="margin-bottom: 4px;">Đáp án đúng: <strong>${letters[q.answer]}. ${escapeHtml(q.options[q.answer] || '')}</strong></div>
          <div class="explanation-text">💡 <strong>Lời giải chi tiết:</strong> ${escapeHtml(q.explanation || '')}</div>
        `;
        optBox.appendChild(banner);
      }
    }"""

if old_render in content:
    content = content.replace(old_render, new_render)
    with open("js/practice.js", "w", encoding="utf-8") as f:
        f.write(content)
    print("Updated js/practice.js successfully!")
else:
    print("Could not find old_render in js/practice.js!")
