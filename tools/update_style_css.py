# -*- coding: utf-8 -*-

with open("css/style.css", "r", encoding="utf-8") as f:
    css = f.read()

# Replace the right-workspace and options-box section
old_section_start = "/* ==========================================================================\n   CỘT PHẢI: KHU VỰC CÂU HỎI & ĐÁP ÁN"
if old_section_start not in css:
    old_section_start = "/* ==========================================================================\r\n   CỘT PHẢI: KHU VỰC CÂU HỎI & ĐÁP ÁN"

new_section = """/* ==========================================================================
   CỘT PHẢI: KHU VỰC THI CHÍNH - PHÂN CHIA 2 CỘT (CÂU HỎI TRÁI - TRẢ LỜI PHẢI)
   ========================================================================== */
.right-workspace {
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 10px 14px;
  background-color: #f1f5f9;
  min-width: 0;
  height: 100%;
  overflow: hidden;
}

/* Container chia 2 cột cho bài thi */
.exam-workspace-split {
  flex: 1;
  display: flex;
  gap: 14px;
  min-height: 0;
  overflow: hidden;
}

/* Cột Câu Hỏi (Trái - Rộng rãi, toàn chiều cao) */
.question-column {
  flex: 1.35;
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.question-column-header {
  padding: 10px 18px;
  background: #f8fafc;
  border-bottom: 1.5px solid #e2e8f0;
  font-size: 13px;
  font-weight: 800;
  color: #0369a1;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.question-content-box {
  flex: 1;
  padding: 18px 22px;
  overflow-y: auto;
  line-height: 1.65;
  font-size: 15.5px;
  color: #1e293b;
}

/* Cột Trả Lời (Phải - Option Cards rõ ràng, Nút điều hướng) */
.options-column {
  flex: 1;
  background: #ffffff;
  border: 1.5px solid #cbd5e1;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
}

.options-header-title {
  padding: 10px 18px;
  background: #f8fafc;
  border-bottom: 1.5px solid #e2e8f0;
  font-size: 13px;
  font-weight: 800;
  color: #0288d1;
  letter-spacing: 0.5px;
}

.options-list-box {
  flex: 1;
  padding: 16px 18px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Card Option được thiết kế rõ ràng, nổi bật có viền & badge */
.option-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 12px 16px;
  background: #ffffff;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.18s ease;
  user-select: none;
}

.option-card:hover {
  border-color: #0288d1;
  background-color: #f0f9ff;
  transform: translateY(-1px);
  box-shadow: 0 2px 6px rgba(2, 136, 209, 0.12);
}

/* Khi được chọn */
.option-card.selected {
  border-color: #0288d1 !important;
  background-color: #e0f2fe !important;
  box-shadow: 0 0 0 1.5px #0288d1, 0 3px 8px rgba(2, 136, 209, 0.18);
}

/* Ký tự chữ A, B, C, D hình tròn */
.option-letter-badge {
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50%;
  border: 2px solid #94a3b8;
  color: #475569;
  font-weight: 800;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8fafc;
  transition: all 0.15s ease;
}

.option-card:hover .option-letter-badge {
  border-color: #0288d1;
  color: #0288d1;
}

.option-card.selected .option-letter-badge {
  border-color: #0288d1;
  background: #0288d1;
  color: #ffffff;
}

/* Nội dung đáp án */
.option-card-text {
  flex: 1;
  font-size: 15px;
  line-height: 1.45;
  color: #1e293b;
}

/* Hiển thị kết quả đúng/sai trong chế độ Review & Ôn tập */
.option-card.correct-answer-card {
  border-color: #2e7d32 !important;
  background-color: #e8f5e9 !important;
  box-shadow: 0 0 0 1.5px #2e7d32;
}

.option-card.correct-answer-card .option-letter-badge {
  border-color: #2e7d32 !important;
  background: #2e7d32 !important;
  color: #ffffff !important;
}

.option-card.user-wrong-card {
  border-color: #d32f2f !important;
  background-color: #ffebee !important;
  box-shadow: 0 0 0 1.5px #d32f2f;
}

.option-card.user-wrong-card .option-letter-badge {
  border-color: #d32f2f !important;
  background: #d32f2f !important;
  color: #ffffff !important;
}

.option-status-tag {
  font-size: 12px;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
}

.option-status-tag.tag-correct {
  background: #c8e6c9;
  color: #1b5e20;
}

.option-status-tag.tag-wrong {
  background: #ffcdd2;
  color: #b71c1c;
}

/* Banner hiển thị đáp án đúng và lời giải */
.correct-answer-banner {
  margin-top: 12px;
  padding: 12px 16px;
  background-color: #fffde7;
  border: 1.5px solid #fbc02d;
  border-radius: 6px;
  color: #e65100;
  font-size: 14px;
  line-height: 1.55;
  box-shadow: 0 1px 4px rgba(0,0,0,0.04);
}

.explanation-text {
  margin-top: 6px;
  font-weight: normal;
  color: #334155;
  font-size: 13.5px;
}
"""

# Find end of old options section (right before .bottom-nav-bar)
nav_marker = "/* Thanh điều hướng dưới cùng */"
idx_start = css.find("CỘT PHẢI: KHU VỰC CÂU HỎI & ĐÁP ÁN")
if idx_start != -1:
    idx_start = css.rfind("/*", 0, idx_start)
    idx_end = css.find(nav_marker)
    if idx_end != -1:
        updated_css = css[:idx_start] + new_section + "\n" + css[idx_end:]
        with open("css/style.css", "w", encoding="utf-8") as f:
            f.write(updated_css)
        print("Updated css/style.css successfully!")
    else:
        print("Could not find nav_marker!")
else:
    print("Could not find start marker!")
