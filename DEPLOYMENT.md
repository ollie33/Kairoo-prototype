# Kairoo — Vercel 部署指南

## 專案結構

```
Kairoo/
├── index.html       # 主頁面
├── styles.css       # 樣式
├── script.js        # 前端邏輯
├── manifest.json    # PWA 設定
├── sw.js            # Service Worker
├── sitemap.xml      # SEO
├── robots.txt       # SEO
├── vercel.json      # Vercel 路由與快取設定
├── package.json     # 專案設定
├── .gitignore
└── icons/           # PWA 圖示
```

## 本地開發

```bash
npm run dev
# 或直接用 VS Code Live Server 開啟 index.html
```

## 部署到 Vercel

### 方式一：GitHub 連動（推薦）

1. 將專案推到 GitHub：
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/你的帳號/kairoo.git
   git push -u origin main
   ```

2. 前往 [vercel.com](https://vercel.com) → Import Project → 選擇你的 repo

3. 設定：
   - **Framework Preset**: Other
   - **Build Command**: 留空
   - **Output Directory**: 留空（根目錄）

4. 點 Deploy，完成！

### 方式二：Vercel CLI

```bash
npm i -g vercel
vercel login
vercel        # 首次部署
vercel --prod # 正式發布
```

## vercel.json 說明

- **rewrites**：所有路徑都回到 `index.html`，支援前端路由
- **headers**：基本安全性 header
- **sw.js**：Service Worker 不快取，確保更新即時生效
