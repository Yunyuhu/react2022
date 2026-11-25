# react2022：考試練習網站

🎯 2022 年用 React 做的線上考試練習網站：註冊登入後，選擇科目做題目。

## 🕹️ 內容

| 功能 | 檔案 |
|---|---|
| 註冊與登入 | `src/Account/SignIn.js`、`src/Account/SignUp.js` |
| 選單與首頁 | `src/UI/AppMenu.js`、`src/UI/Main.js` |
| 化學（單選、多選） | `Chemistry.js`、`ChemistryRadio.js`、`ChemistryMultiple.js` |
| 英文 | `English.js` |
| 數學隨機出題、減法練習 | `MathRandom.js`、`Minus.js` |
| 考試頁 | `Exam.js` |

## 🛠️ 怎麼實作

- 畫面：React、MUI
- 換頁：React Router
- 帳號與資料：Firebase（Firestore、Storage），設定在 `src/settings/firebaseConfig.js`

## ▶️ 怎麼執行

```bash
npm install
npm start
```
