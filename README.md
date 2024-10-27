
<p align="center">
    <img src="https://github.com/Useful-Ui/.github/blob/main/profile/ulogo.png?raw=true?raw=true" alt="Useful Ui logo" width="300" />
</p>

<br />

Useful UI 是一個開源的設計系統和 React UI 元件庫，旨在幫助設計師與開發者在 Figma 中使用相同的設計資源，實現設計與開發的同步。該元件庫減少了設計與開發過程中的溝通摩擦，提升產品開發效率，並提供靈活的自定義功能、響應式設計和國際化支持，非常適合企業商用應用開發。

## 🚀 主要功能

- 與 Figma 完美整合：提供與 Figma UI kit 完全對應的元件庫，讓設計稿中的元件與開發中的元件完全一致，減少設計轉換時間和誤差。
- 現代化設計風格：簡潔、直觀且回應式的 UI 設計，適配各種設備，提供一致且流暢的用戶體驗。
- 高效開發流程：提供清晰的 API 文檔和使用範例，讓開發者可以快速實現設計需求，縮短產品開發周期。
- 設計與實作的一致性：確保設計師和開發者使用相同的元件規範和設計標準，降低溝通成本，避免因界面不一致而產生的反覆修改。
- 豐富且可自訂的元件庫：包含按鈕、輸入框、下拉選單、日期選擇器、表格、彈窗等，支持客製化和樣式覆寫，滿足多種業務需求。

## 📁 專案結構

```bash

useful-ui/
├── public/                      # 靜態文件 (如 favicon.ico, index.html 等)
├── src/                         # React 源碼
│   ├── lib/                     # 封裝好的元件庫
│   │   ├── components/          # 可重用的元件
│   │   │   ├── Button/          # 按鈕元件
│   │   │   ├── Switch/          # 開關元件
│   │   │   ├── Radio/           # 單選按鈕元件
│   │   │   └── index.js         # 匯出所有元件的起點
│   │   ├── hooks/               # 自定義 React Hooks
│   │   ├── theme/               # 主題樣式和配色相關
│   │   └── utils/               # 工具函式
│   ├── stories/                 # Storybook 相關的元件測試故事
│   ├── index.js                 # React 應用程式的入口文件
│   ├── index.css                # 全局樣式
│   ├── App.js                   # React 主應用程式元件
│   ├── App.test.js              # App 元件的測試文件
│   ├── App.css                  # App 元件的樣式
└── package.json                 # 專案的依賴和指令配置

```



## 來自貢獻者的愛心

我們是一群愛好前端開發PM、工程師、UI/UX貢獻此專案，原始碼授權方式為MIT
如對我們的開發有興趣還盡請分享、使用或一同改進 🔥