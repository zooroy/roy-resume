# 🚀 Vaporwave Resume - 快速開始指南

## ✨ 已實現的功能

✅ **完整的 Vaporwave/Outrun 設計系統**

- 霓虹漸層配色 (Cyan, Pink, Orange)
- CRT 掃描線效果
- 無限網格背景動畫
- 發光卡片和標籤元件
- 終端風格的文字

✅ **國際化支持**

- 繁體中文 (zh-TW)
- 英文 (en)
- 一鍵切換語言

✅ **響應式設計**

- 移動端優化
- 桌面端完整體驗
- 平板友善的佈局

✅ **豐富的履歷內容**

- 工作經驗 (3+ 項)
- 教育背景 (2+ 項)
- 技能展示 (12+ 項)
- 作品集 (3+ 項)

✅ **專業的 UI 元件庫**

- `NeonCard` - 發光卡片
- `NeonTag` - 霓虹標籤
- `ScanlineOverlay` - 掃描線效果
- `TerminalText` - 終端文字
- `InfiniteGrid` - 網格背景
- `NeonGradientText` - 漸層文字
- `PulseGlow` - 脈搏效果

## 📁 重要檔案位置

| 檔案                                 | 作用               |
| ------------------------------------ | ------------------ |
| `src/data/resume.ts`                 | 履歷內容數據       |
| `src/components/VaporComponents.tsx` | Vaporwave 基礎元件 |
| `src/components/ResumeSections.tsx`  | 履歷各部分元件     |
| `app/page.tsx`                       | 主頁面             |
| `app/globals.css`                    | 全域樣式 + 動畫    |

## 🎨 設計系統顏色

```
背景: #0a0e27
青色:  #00FFFF (Cyan)
粉紅: #FF00FF (Magenta)
橙色: #FF9900 (Orange)
```

## 🔧 快速修改

### 修改履歷內容

```typescript
// src/data/resume.ts
export const resumeData: ResumeData = {
  intro: {
    'zh-TW': '你的中文自介',
    en: 'Your English intro',
  },
  // ... 其他內容
};
```

### 修改顏色

```css
/* app/globals.css */
:root {
  --neon-cyan: #00ffff;
  --neon-pink: #ff00ff;
  --neon-orange: #ff9900;
}
```

### 添加新技能

```typescript
skills: ['React', 'Next.js', '你的新技能', ...]
```

## 📊 頁面結構

```
Homepage
├── 導航欄 (語言切換)
├── 英雄區塊 (自介 + 快速連結)
├── 統計卡片 (經驗/專案/技能數量)
├── 工作經驗
├── 教育背景
├── 技能展示
├── 作品集
├── 協作召喚區塊
└── 頁腳
```

## 🚀 運行方式

```bash
# 開發模式
pnpm dev

# 訪問
http://localhost:3000

# 生產構建
pnpm build
pnpm start
```

## 💡 設計亮點

1. **視覺層次** - 使用霓虹色和陰影創造深度
2. **動畫效果** - 網格、脈搏、掃描線等動畫增加視覺趣味
3. **互動性** - 按鈕、卡片具有響應式懸停效果
4. **可讀性** - 高對比度的配色確保文字清晰
5. **效能** - 使用 Tailwind 工具類別優化 CSS 大小

## 📱 響應式斷點

- **手機**: < 640px
- **平板**: 640px - 1024px
- **桌面**: > 1024px

## 🔗 連結設置

快速連結位置: `app/page.tsx` (第 80-90 行)

修改 `href` 和 URL:

```tsx
{
  name: 'GitHub',
  url: 'https://github.com/你的用戶名',
  label: 'GitHub'
}
```

## 📝 SEO 設置

在 `app/layout.tsx` 中修改元標籤:

```tsx
export const metadata: Metadata = {
  title: '你的名字 - 履歷',
  description: '你的自介描述',
};
```

## 🎯 下一步

1. ✏️ 更新 `resumeData` 中的個人信息
2. 📸 添加真實的頭像 (替換 `/public/avatar.jpg`)
3. 🔗 更新社交媒體連結
4. 🚀 部署到 Vercel/Netlify

## 💬 自訂提示

- 所有 Vaporwave 動畫都在 `globals.css` 中定義
- UI 元件在 `VaporComponents.tsx` 中完全可自訂
- 支持深色模式（可在未來添加）
- 考慮添加真實的聯絡表單

---

**祝你面試順利！** 🚀✨
