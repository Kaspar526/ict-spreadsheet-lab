# DSE ICT 試算表互動學習平台

陳老師的繁體中文教學網站。函數範圍依照老師提供的 DSE 試卷末頁函數表，只包含以下 22 個函數。

[開啟網站](https://kaspar526.github.io/ict-spreadsheet-lab/)

## 函數及練習

- 統計函數（7 題）：SUM、AVERAGE、RANK、MAX、MIN、COUNT、COUNTIF。
- 數學與數字函數（5 題）：ROUND、INT、SQRT、RAND、SUMIF。
- 邏輯與資訊函數（4 題）：IF、AND、OR、NOT。
- 文字函數（5 題）：LEFT、RIGHT、MID、LEN、FIND。
- 查閱函數（3 題）：XLOOKUP，含向左查閱、參數解說及檢索動畫。

共 22 個函數的功能、語法、例子和使用重點，以及 24 題可即時批改的練習。儲存格參照頁亦提供相對、絕對及混合參照的公式位移示範。表外函數及其練習、說明和專用表格欄列已移除。

學生可點選函數名稱或黃色儲存格選題。完成進度只保存在使用者自己的瀏覽器；更新後僅計算仍保留題目的進度。

## GitHub Pages

使用 `main` 分支的 `/docs` 資料夾發佈，所有資源均採相對路徑，無需編譯。

`docs/data.js` 保存函數範圍、表格及題目；`docs/guides.js` 保存函數說明；`docs/app.js` 處理互動及批改；`docs/engine.js` 計算公式。

執行 `node tests/verify.cjs` 核對函數範圍、例子、24 題練習、進度及儲存格參照。
