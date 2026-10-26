# DSE ICT 試算表互動學習平台

陳老師的繁體中文教學網站，包含 33 個函數的說明及 35 題即時批改練習。

GitHub Pages 使用 `main` 分支的 `/docs` 資料夾，無需安裝或編譯。完成進度只保存在學生自己的瀏覽器。

# HK S4 ICT Excel 闖關學習平台

A Traditional Chinese classroom site based on the six spreadsheet topics and table data in the requested W's ICT Classroom reference. All teacher labels use 陳老師.

The exercise bank now includes 35 tasks, with at least one exercise for every function advertised on its page:

- Statistics: SUM, AVERAGE, RANK, MAX, MIN, COUNT, COUNTA, COUNTBLANK, COUNTIF, LARGE, SMALL (11).
- Math and numbers: ABS, ROUND, INT, SQRT, RAND, SUMIF (6).
- Logic and information: IF, AND, OR, NOT, ISBLANK (5).
- Text: LEFT, RIGHT, MID, LEN, UPPER, LOWER, PROPER, TRIM, FIND, VALUE (10).
- Lookup: the three XLOOKUP range exercises, including left lookup (3).
- Cell references: five original reference modes with fruit data and movement controls.

Each function name is a selectable exercise button with a purpose summary. A guide beside each exercise explains the function, syntax, parameters, examples, and common pitfalls. RANK includes descending/ascending formulas and tied ranks; XLOOKUP covers all six parameters. The 33 guides and their independent worked examples are in `docs/guides.js`. Yellow worksheet cells also select questions. Exercises provide syntax, formula blanks, hints, immediate grading, full answers, and local completion counts. Supplemental result rows and one text example with extra spaces extend the original data. RAND is checked by formula rather than an unstable numeric result; one example value is retained during the session. Existing completion IDs are preserved.

`docs/data.js` contains tables and tasks, `docs/app.js` handles interactions, and `docs/engine.js` safely evaluates formulas without eval. The site stores only completion IDs in localStorage.

Run `node tests/verify.cjs` to verify function coverage, all 35 exercise answers, wrong-answer handling, selection, progress, reference movement, and route behavior.
