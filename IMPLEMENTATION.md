# Vaporwave Resume - 專案文檔

## 概述

這是一個使用 Vaporwave/Outrun 設計系統的現代化履歷網站，採用 React + Next.js + Tailwind CSS 開發。

## 技術棧

- **框架**: Next.js 16.1.1
- **語言**: TypeScript
- **樣式**: Tailwind CSS v4 + PostCSS
- **運行時**: React 19.2.3

## 專案結構

```
src/
├── components/
│   ├── LanguageSwitcher.tsx      # 中英文切換
│   ├── ResumeSections.tsx        # 履歷各部分元件
│   └── VaporComponents.tsx       # Vaporwave UI 基礎元件
├── data/
│   └── resume.ts                 # 履歷內容數據
└── types/
    └── resume.ts                 # TypeScript 型態定義

app/
├── page.tsx                      # 主履歷頁面
├── layout.tsx                    # 根級佈局
├── globals.css                   # 全域樣式 + Vaporwave 效果
└── api/                          # API 路由
```

## 設計系統特色

### 配色

- **主色**: 暗紫色背景 (`#0a0e27`)
- **霓虹色**:
  - 青色 (Cyan): `#00FFFF`
  - 粉紅色 (Pink): `#FF00FF`
  - 橙色 (Orange): `#FF9900`

### 核心元件

1. **NeonCard** - 帶發光效果的卡片
2. **NeonTag** - 霓虹標籤
3. **ScanlineOverlay** - CRT 掃描線效果
4. **TerminalText** - 終端風格文字
5. **InfiniteGrid** - 無限網格背景
6. **NeonGradientText** - 漸層文字
7. **PulseGlow** - 脈搏發光效果

### 動畫與效果

- `grid-animation` - 網格動畫
- `float` - 浮動動畫
- `glow-pulse` - 發光脈搏
- `neon-flicker` - 霓虹閃爍

## 國際化 (i18n)

支持繁體中文 (`zh-TW`) 和英文 (`en`) 兩種語言。
所有文字內容都在 `resumeData` 中定義，使用 `Record<Locale, string>` 的模式。

## 如何使用

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

### 構建生產版本

```bash
pnpm build
pnpm start
```

### 修改履歷內容

編輯 `src/data/resume.ts` 檔案，更新 `resumeData` 物件中的內容。

### 自訂設計

1. **顏色**: 在 `app/globals.css` 中修改 CSS 變數
2. **排版**: 在 `globals.css` 中調整字體和尺寸
3. **動畫**: 在 `globals.css` 中的 `@keyframes` 部分修改

## 組件使用示例

```tsx
// 霓虹卡片
<NeonCard glow="cyan">
  內容
</NeonCard>

// 終端文字
<TerminalText prefix="$">命令</TerminalText>

// 漸層文字
<NeonGradientText>重要文字</NeonGradientText>
```

## 性能最佳實踐

- ✅ 使用 `next/image` 進行圖片最佳化
- ✅ CSS 類別複用，避免重複
- ✅ 使用 Tailwind 的工具類別
- ✅ 響應式設計 (mobile-first)

## 瀏覽器支持

- Chrome/Edge (最新版本)
- Firefox (最新版本)
- Safari (最新版本)

## 部署

1. 推送到 Git
2. 在 Vercel/Netlify 連接倉庫
3. 自動構建和部署

## 未來改進

- [ ] 添加深色/亮色主題切換
- [ ] 集成真實的聯絡表單
- [ ] 添加專案詳情頁面
- [ ] SEO 優化
- [ ] 性能指標監測

## 許可

© 2024 Roy Hsiao. All rights reserved.
