const SHEETS={"refs":{"title":"儲存格參照","rows":[["水果","單價($)","銷量","小計($)","備註"],["蘋果",10,5,null,"熱賣"],["香蕉",6,12,null,"特價"],["橙子",8,8,null,"一般"],["折扣率",0.9,"9折",null,null]],"modes":[["相對參照","=B2*C2"],["絕對參照","=$B$2*$C$2"],["混合：鎖列","=B$2*C2"],["混合：鎖欄","=$B2*C2"],["實務應用","=B2*C2*$B$5"]]},"stats":{"title":"學生成績試算表","rows":[["姓名","ICT成績","數學成績","缺勤","總分","平均分","名次"],["陳大文",85,90,0,null,null,null],["李小玲",92,88,2,null,null,null],["張志強",60,72,5,null,null,null],["黃雅婷",78,null,0,null,null,null],["何偉明",95,85,1,null,null,null],["全班最高分",null,null,null,null,null,null],["全班平均分",null,null,null,null,null,null],["空白/缺考數",null,null,null,null,null,null],["ICT 最低分",null,null,null,null,null,null],["數學有分數的人數",null,null,null,null,null,null],["姓名非空白數",null,null,null,null,null,null],["ICT 達 80 分人數",null,null,null,null,null,null],["ICT 第二高分",null,null,null,null,null,null],["ICT 第二低分",null,null,null,null,null,null]]},"math":{"title":"財務與數據計算表","rows":[["項目","金額/數值","類別","絕對值","四捨五入","向下取整","平方根"],["文具購買",-150.75,"支出",null,null,null,null],["兼職薪水",88.49,"收入",null,null,null,null],["測驗分數",16,"其他",null,null,null,null],["會員消費",350,"收入",null,null,null,null],["退貨退款",-50,"支出",null,null,null,null],["「支出」總和",null,null,null,null,null,null],["0 至 1 的隨機數",null,null,null,null,null,null]]},"logic":{"title":"審核與邏輯考核表","rows":[["學號","筆試分","面試分","缺勤","及格判定","兩科均及格","筆試缺考"],["S01",75,80,0,null,null,null],["S02",45,60,3,null,null,null],["S03",85,50,1,null,null,null],["S04",null,70,0,null,null,null],["至少一科及格",null,null,null,null,null,null],["筆試未及格",null,null,null,null,null,null]]},"text":{"title":"學生資料處理表","rows":[["學生編號","英文姓名","電話號碼","身份證","入學年份","班別代碼","大寫姓名"],["2024-S01-A","chan tai man","91234567","A123456(7)",null,null,null],["2024-S02-B","LEE SIU LING","68765432","B987654(3)",null,null,null],["2024-S03-C","  wong   mei ling  ","00456789","C246810(2)",null,null,null],["其他文字函數練習","計算結果",null,null,null,null,null],["編號最右邊的班別",null,null,null,null,null,null],["姓名字元數",null,null,null,null,null,null],["姓名轉小寫",null,null,null,null,null,null],["姓名各字首大寫",null,null,null,null,null,null],["整理多餘空格",null,null,null,null,null,null],["第一個連字號位置",null,null,null,null,null,null],["文字電話轉為數值",null,null,null,null,null,null]]},"lookup":{"title":"學生主數據表","rows":[["學生編號","英文姓名","班別","ICT分數","評級"],["S101","Chan Tai Man","4A",88,"A"],["S102","Lee Siu Ling","4A",95,"A*"],["S103","Cheung Chi Keung","4B",62,"C"],["S104","Wong Ngai Ting","4A",79,"B"],["S105","Ho Wai Ming","4C",91,"A*"],["S106","Au Yeung Kit","4B",54,"D"],["S107","Chow Kwok Keung","4C",83,"B"],["S108","Tsang Mei Ling","4A",98,"A*"]],"query":[["學號","姓名","ICT成績"],["S104",null,null],[null,"Ho Wai Ming",null]]}};
const PAGES=[['references','🎯 1. 儲存格參照'],['stats','📊 2. 統計函數'],['math','🔢 3. 數學與數字函數'],['logic','💡 4. 邏輯與資訊函數'],['text','🔤 5. 文字函數'],['lookup','🔍 6. 查閱函數 (XLOOKUP 視覺化實體)']];
const PAGE_INFO={stats:{title:'📊 學生成績試算表',functions:'SUM, AVERAGE, RANK, MAX, MIN, COUNT, COUNTA, COUNTBLANK, COUNTIF, LARGE, SMALL'},math:{title:'🔢 財務與數據計算表',functions:'ABS, ROUND, INT, SQRT, RAND, SUMIF'},logic:{title:'💡 審核與邏輯考核表',functions:'IF, AND, OR, NOT, ISBLANK'},text:{title:'🔤 學生資料處理表',functions:'LEFT, RIGHT, MID, LEN, UPPER, LOWER, PROPER, TRIM, FIND, VALUE'}};
const Q=(id,page,cell,title,syntax,prefix,suffix,answer,hint,point)=>({id,page,cell,title,syntax,prefix,suffix,answer,hint,point,fn:answer.match(/^=([A-Z]+)/)[1]});
const TASKS=[
Q('s1','stats','E2','計算「陳大文」兩科總分','=SUM( [ 參照範圍 ] )','=SUM(',')','=SUM(B2:C2)','提示：這個位置需要將 ICT 與數學兩科分數加起來！','若範圍內有空白或文字，SUM 會自動忽略。'),
Q('s2','stats','F2','計算「陳大文」兩科平均分','=AVERAGE( [ 參照範圍 ] )','=AVERAGE(',')','=AVERAGE(B2:C2)','提示：這個位置需要計算算術平均數，請選用求平均值的函數！','空白儲存格不計入分母；但 0 值會計入分母計算！'),
Q('s3','stats','G2','計算「陳大文」總分由大至小的名次（最高分第 1）','=RANK( E2 , [ 班級範圍 ] , 0 )','=RANK(E2,',', 0)','=RANK(E2,E$2:E$6,0)','提示：這個位置需要排名次，範圍必須加上 $ 鎖定！','DSE 應試重點：複製排名公式時，範圍的列號須鎖定（如混合參照 E$2:E$6）！'),
Q('s4','stats','B7','找出 ICT 科全班「最高分」','=MAX( [ 範圍 ] )','=MAX(',')','=MAX(B2:B6)','提示：此位置需要找出全班分數最大值的函數！','MAX 會自動找出範圍內的最大數值。'),
Q('s5','stats','C9','計算數學科「缺考人數 (空白數)」','=COUNTBLANK( [ 檢查範圍 ] )','=COUNTBLANK(',')','=COUNTBLANK(C2:C6)','提示：要計算「空白儲存格」的數量，應選哪個專用函數？','COUNTBLANK 專門用作計算範圍內的空白儲存格。'),
Q('m1','math','D2','計算文具購買 (-150.75) 的「正數絕對值」','=ABS( [ 儲存格 ] )','=','', '=ABS(B2)','提示：要把負數轉為正數（絕對值），應選擇哪個數學函數？','常用於計算兩數差額或變動幅度。'),
Q('m2','math','E2','將文具購買 (B2) 「四捨五入」至保留 1 位小數','=ROUND( B2 , [ 小數位數 ] )','=ROUND(B2,',')','=ROUND(B2,1)','提示：進行「四捨五入」取小數位數時，該使用哪個函數？','小數位數填 0 代表取整數，1 代表保留一位小數。'),
Q('m3','math','F2','將 B2 無條件捨去取整 (向下取整)','=INT( [ 儲存格 ] )','=','', '=INT(B2)','提示：這是無條件捨去至最接近小整數的函數！','注意負數！INT(-150.75) 會向下取整為 -151。'),
Q('m4','math','G4','計算測驗分數 (B4 = 16) 的「正平方根」','=SQRT( [ 儲存格 ] )','=','', '=SQRT(B4)','提示：計算 Square Root (平方根) 的函數名稱是什麼？','參數必須 >= 0，否則傳回 #NUM! 錯誤。'),
Q('m5','math','B7','計算類別(C2:C6)為「支出」的金額(B2:B6)總和','=SUMIF( [條件範圍], [條件], [加總範圍] )','=SUMIF(',')','=SUMIF(C2:C6,"支出",B2:B6)','提示：需要提供三個參數：1.要檢查哪裡？ 2.條件是什麼？ 3.把哪裡加總起來？','DSE 重點：文字條件必須使用雙引號包圍，例如 "支出"！'),
Q('l1','logic','E2','若筆試分(B2)>=50顯示"Pass"，否則"Fail"','=IF( B2>=50 , [ 及格傳回值 ] , "Fail" )','=IF(B2>=50,',', "Fail")','=IF(B2>=50,"Pass","Fail")','提示：這是一個條件判斷「如果...就...」的函數！','字串傳回值必須加上雙引號 "Pass"。'),
Q('l2','logic','F2','檢查筆試(B2)與面試(C2)是否「均 >= 50」','=AND( [ 條件1 ] , [ 條件2 ] )','=','', '=AND(B2>=50,C2>=50)','提示：需要「所有條件同時成立」才傳回 TRUE 的邏輯函數！','必須全部條件滿足才會回傳 TRUE。'),
Q('l3','logic','G5','檢查 S04 的筆試分數 (B5) 是否「空白」','=ISBLANK( [ 檢查儲存格 ] )','=','', '=ISBLANK(B5)','提示：這是專門用來檢查儲存格是否無資料的資訊函數！','儲存格完全空白時傳回 TRUE。'),
Q('t1','text','E2','從學生編號 (A2) 截取「左側 4 個字元 (年份)」','=LEFT( A2 , [ 截取字數 ] )','=LEFT(A2,',')','=LEFT(A2,4)','提示：從字串左邊開頭截取指定數目字元的函數！','預設若未填數字，則截取 1 個字元。'),
Q('t2','text','F2','從 A2 第 6 個字元開始截取「3 個字元 (學號)」','=MID( A2 , [ 開始位置 , 截取字數 ] )','=MID(A2,',')','=MID(A2,6,3)','提示：從字串中間位置截取字元的函數！','DSE 語法重點：MID(字串, 開始位置, 長度)。'),
Q("s6","stats","B10","找出 ICT 科全班「最低分」","=MIN( [ 範圍 ] )","=MIN(",")","=MIN(B2:B6)","選取所有同學的 ICT 分數，找出最小值。","MIN 只比較數值，會忽略範圍內的空白及文字。"),
Q("s7","stats","B11","計算數學科「有數值成績的人數」","=COUNT( [ 範圍 ] )","=COUNT(",")","=COUNT(C2:C6)","數學成績有一格空白；只計算含數字的儲存格。","COUNT 計算數值的個數；0 也屬數值，文字不計。"),
Q("s8","stats","B12","計算姓名欄的「非空白儲存格數」","=COUNTA( [ 範圍 ] )","=COUNTA(",")","=COUNTA(A2:A6)","姓名屬於文字，請使用能計算非空白格的函數。","COUNTA 會計算文字、數值等非空白內容；COUNT 只計數值。"),
Q("s9","stats","B13","計算 ICT 科「達 80 分或以上」的人數","=COUNTIF( [ 範圍 ] , [ 條件 ] )","=COUNTIF(",")","=COUNTIF(B2:B6,\">=80\")","在 ICT 成績範圍內，計算符合 >=80 的人數。","比較條件須以雙引號包圍，例如 \">=80\"。"),
Q("s10","stats","B14","找出 ICT 科「第二高分」","=LARGE( B2:B6 , [ 第幾大 ] )","=LARGE(B2:B6,",")","=LARGE(B2:B6,2)","第二個參數用 2，代表找第二大的數值。","LARGE(範圍,k) 傳回第 k 大的數值；k=1 相當於 MAX。"),
Q("s11","stats","B15","找出 ICT 科「第二低分」","=SMALL( B2:B6 , [ 第幾小 ] )","=SMALL(B2:B6,",")","=SMALL(B2:B6,2)","第二個參數用 2，代表找第二小的數值。","SMALL(範圍,k) 傳回第 k 小的數值；k=1 相當於 MIN。"),
Q("m6","math","B8","產生一個「大於或等於 0、小於 1」的隨機數","=RAND( )","=","","=RAND()","這個函數不需要任何參數，但仍須有一對括號。","RAND() 的結果每次重新計算都可能不同，範圍是 0 <= 結果 < 1。"),
Q("l4","logic","E6","檢查 S02 的筆試(B3)或面試(C3)是否「至少一科 >= 50」","=OR( [ 條件1 ] , [ 條件2 ] )","=","","=OR(B3>=50,C3>=50)","只要其中一個條件成立，便應傳回 TRUE。","OR 只需至少一個條件成立；AND 則需要所有條件成立。"),
Q("l5","logic","E7","檢查 S02 的筆試(B3)是否「未及格」：把 B3>=50 的結果反轉","=NOT( [ 邏輯條件 ] )","=","","=NOT(B3>=50)","先判斷是否及格，再用 NOT 把 TRUE/FALSE 反轉。","NOT(TRUE) 傳回 FALSE；NOT(FALSE) 傳回 TRUE。"),
Q("t3","text","B6","從學生編號 (A2) 截取「右側 1 個字元 (班別)」","=RIGHT( A2 , [ 截取字數 ] )","=RIGHT(A2,",")","=RIGHT(A2,1)","班別 A 位於學生編號的最右邊。","RIGHT 從字串右邊截取指定數目的字元。"),
Q("t4","text","B7","計算英文姓名 (B2) 的「字元總數」","=LEN( [ 文字儲存格 ] )","=","","=LEN(B2)","空格也算一個字元，請計算整個姓名的長度。","LEN 會計算字母、數字、符號及空格。"),
Q("t5","text","G2","將英文姓名 (B2) 轉為「全部大寫」","=UPPER( [ 文字儲存格 ] )","=","","=UPPER(B2)","將 chan tai man 中的所有英文字母轉成大寫。","UPPER 只改變字母大小寫，不會移除空格。"),
Q("t6","text","B8","將英文姓名 (B3) 轉為「全部小寫」","=LOWER( [ 文字儲存格 ] )","=","","=LOWER(B3)","將 LEE SIU LING 中的所有英文字母轉成小寫。","LOWER 不會改變字串的字元數。"),
Q("t7","text","B9","將英文姓名 (B2) 轉為「每個字的首字母大寫」","=PROPER( [ 文字儲存格 ] )","=","","=PROPER(B2)","姓名應顯示為 Chan Tai Man。","PROPER 把每個字的首字母轉為大寫，其餘字母轉為小寫。"),
Q("t8","text","B10","移除英文姓名 (B4) 的「多餘空格」","=TRIM( [ 文字儲存格 ] )","=","","=TRIM(B4)","B4 前後有空格，wong 與 mei 之間也有多個空格。","TRIM 移除前後空格，並把字與字之間的多個一般空格縮成一個。"),
Q("t9","text","B11","找出學生編號 (A2) 中「第一個連字號 - 的位置」","=FIND( [ 尋找文字 ] , A2 )","=FIND(",", A2)","=FIND(\"-\",A2)","尋找的符號屬於文字，要用雙引號包圍。","FIND 從 1 開始計算位置，而且區分英文字母大小寫。"),
Q("t10","text","B12","將文字形式的電話號碼 (C2)「轉成數值」","=VALUE( [ 文字儲存格 ] )","=","","=VALUE(C2)","C2 的電話號碼目前以文字儲存，請把它轉為數值。","VALUE 傳回數值；電話號碼一般宜保留為文字，以免前置 0 消失。")
];
const LOOKUPS=[
{id:'x1',cell:'B2',valueCell:'A2',value:'S104',lookup:'F2:F9',ret:'G2:G9',answer:'Wong Ngai Ting',hint:'已知學號 (在 F2:F9 搜尋 S104)，查回對應英文姓名 (從 G2:G9 傳回 "Wong Ngai Ting")。'},
{id:'x2',cell:'C2',valueCell:'A2',value:'S104',lookup:'F2:F9',ret:'I2:I9',answer:79,hint:'已知學號 (在 F2:F9 搜尋 S104)，查回對應 ICT 成績 (從 I2:I9 傳回 79)。'},
{id:'x3',cell:'A3',valueCell:'B3',value:'Ho Wai Ming',lookup:'G2:G9',ret:'F2:F9',answer:'S105',hint:'💡 觀念釐清：已知條件是「姓名」(在 G2:G9 搜尋 "Ho Wai Ming")，要提取的目標是「學號」(從 F2:F9 傳回)！XLOOKUP 可以輕鬆向向左查閱！',special:'🌟 特殊亮點：搜尋欄在 G，傳回欄在 F！XLOOKUP 可以輕鬆「向左查閱」，這是 VLOOKUP 做不到的！'}
];
const REFERENCE_MODES=[
{label:'相對參照',name:'相對參照 (Relative)',formula:'=B2*C2',explain:'欄與列標號皆無 $，移動時全數位移。'},
{label:'絕對參照',name:'絕對參照 (Absolute)',formula:'=$B$2*$C$2',explain:'欄與列標號皆加上 $，移動時參照保持固定。'},
{label:'混合參照',name:'混合參照 (鎖定第 2 列)',formula:'=B$2*C2',explain:'B$2 鎖定第 2 列，欄位仍可位移。'},
{label:'混合參照',name:'混合參照 (鎖定 B 欄)',formula:'=$B2*C2',explain:'$B2 鎖定 B 欄，列位仍可位移。'},
{label:'實務應用',name:'實務應用 (銷量 × 單價 × 折扣)',formula:'=B2*C2*$B$5',explain:'銷量單價相對位移，折扣率 $B$5 絕對固定！'}
];
