# 灰氏集團（Huirimon）網站

灰氏集團的形象展示網站，介紹 AI VTuber
相關內容、近期影片、團隊資訊與社群入口。

## 專案內容

這是一個使用原生 HTML、CSS 與 JavaScript
製作的靜態網站，不需要安裝前端框架或建置工具即可執行。

### 主要功能

-   **首頁導覽**：提供 HOME、ABOUT、VIDEO、JOIN 區段導覽。
-   **首頁主視覺**：展示 Huirimon AI VTuber & Huiribye 品牌資訊。
-   **近期影片**：呈現三部 YouTube 影片及其連結。
-   **關於我們**：包含「灰檸檬」與「灰理白」的介紹區塊。
-   **社群連結**：提供
    YouTube、Twitch、Instagram、Threads、X（Twitter）及 Discord 入口。
-   **響應式版面**：針對桌面與手機螢幕調整導覽列及內容排列。
-   **頁尾年份**：由 JavaScript 自動更新年份。

## 專案結構

``` text
.
├── index.html          # 網站頁面結構與內容
├── style.css           # 網站樣式、版面與響應式設定
├── script.js           # 手機版導覽列與頁尾年份等互動功能
└── images/             # 網站圖片素材
    ├── img.png         # 非正式測試用圖片
    ├── hero_bg.jpg
    ├── vedio_001_cover.avif
    ├── vedio_002_cover.avif
    └── vedio_003_cover.avif
```

## 自訂網站內容

### 修改頁面文字與連結

直接編輯 `index.html`，可修改：

-   網站標題與首頁文字
-   近期影片標題及 YouTube 網址
-   灰檸檬、灰理白的介紹內容
-   YouTube、Twitch、Instagram、Threads、X 與 Discord 社群網址

### 修改網站外觀

編輯 `style.css`。常用的全站色彩變數位於檔案開頭的 `:root`：

``` css
:root {
  --bg: #0b0d12;
  --surface: #11151d;
  --surface-raised: #171c26;
  --text: #f3f5fa;
  --muted: #9aa4b5;
  --blue: #5b82ff;
  --blue-light: #91adff;
}
```

可依需求調整背景、文字與強調色。

## 使用技術

-   HTML5
-   CSS3
-   原生 JavaScript
-   Google／系統字型備援（包含 Noto Sans TC）

## 社群連結

-   YouTube：<https://www.youtube.com/@HuiRimon/featured>
-   Twitch：<https://www.twitch.tv/huirimon>
-   Instagram：<https://www.instagram.com/huirimon>
-   Threads：<https://www.threads.com/@huirimon>
-   X（Twitter）：<https://x.com/Huirimon_AI>
-   Discord：<https://discord.gg/P4nBst4sJX>

------------------------------------------------------------------------

© Huirimon／蕭. All rights reserved.
