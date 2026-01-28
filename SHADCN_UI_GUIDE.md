# shadcn/ui 集成指南

## 🎉 已完成的集成

我已經成功將 **shadcn/ui** 集成到你的 Vaporwave Resume 專案中，並保留了所有原有的設計系統風格。

## 📦 新增依賴

```bash
pnpm add class-variance-authority clsx tailwind-merge lucide-react
```

## 📁 新增檔案結構

```
src/
├── lib/
│   └── utils.ts              # cn() 工具函數
└── components/
    └── ui/
        ├── button.tsx        # 按鈕組件（3 種 Neon 變體）
        ├── badge.tsx         # 標籤組件（4 種顏色變體）
        ├── card.tsx          # 卡片組件（帶 Header/Footer/Content）
        ├── tabs.tsx          # 標籤頁組件
        ├── input.tsx         # 輸入框組件
        └── index.ts          # 統一導出
```

## 🎨 UI 組件庫

### 1. **Button** (`button.tsx`)
提供 5 種變體：
- `default` - 青色主題
- `outline` - 粉紅色邊框
- `neon-cyan` - 青色發光
- `neon-pink` - 粉紅色發光
- `neon-orange` - 橙色發光

```tsx
import { Button } from "@/components/ui"

<Button variant="neon-pink" size="sm">
  Click me
</Button>
```

### 2. **Badge** (`badge.tsx`)
提供 4 種顏色變體：
- `default` / `cyan` - 青色
- `pink` - 粉紅色
- `orange` - 橙色

```tsx
import { Badge } from "@/components/ui"

<Badge variant="orange">React</Badge>
```

### 3. **Card** (`card.tsx`)
完整的卡片系統，包含：
- `Card` - 主容器（3 種發光效果）
- `CardHeader` - 標頭區域
- `CardTitle` - 標題
- `CardDescription` - 副標題
- `CardContent` - 內容區域
- `CardFooter` - 頁腳區域

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui"

<Card glow="cyan">
  <CardHeader>
    <CardTitle>標題</CardTitle>
    <CardDescription>副標題</CardDescription>
  </CardHeader>
  <CardContent>
    內容
  </CardContent>
</Card>
```

### 4. **Tabs** (`tabs.tsx`)
提供完整的標籤頁功能：
- `Tabs` - 主容器
- `TabsList` - 標籤列表
- `TabsTrigger` - 標籤觸發器
- `TabsContent` - 標籤內容

```tsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui"

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">標籤 1</TabsTrigger>
    <TabsTrigger value="tab2">標籤 2</TabsTrigger>
  </TabsList>
  <TabsContent value="tab1">內容 1</TabsContent>
  <TabsContent value="tab2">內容 2</TabsContent>
</Tabs>
```

### 5. **Input** (`input.tsx`)
提供 2 種變體：
- `default` - 青色主題
- `outline` - 粉紅色邊框

```tsx
import { Input } from "@/components/ui"

<Input placeholder="輸入..." variant="default" />
```

## 🔧 配置更新

### tailwind.config.ts
新增了 Vaporwave 相關的 Tailwind 配置：
- 自訂顏色變量 (`neon-cyan`, `neon-pink`, `neon-orange`)
- 自訂陰影效果 (`shadow-neon-*`)
- 動畫配置 (`grid-animation`, `glow-pulse`, `neon-flicker`)

### src/lib/utils.ts
提供 `cn()` 工具函數用於合併 Tailwind 類別：

```tsx
import { cn } from "@/lib/utils"

const className = cn(
  "px-4 py-2",
  isActive && "bg-cyan-500"
)
```

## 📝 已更新的組件

### ResumeSections.tsx
- ✅ 技能部分現使用 `Badge` 組件
- ✅ 作品集現使用 `Card` 組件

### page.tsx
- ✅ 快速連結按鈕現使用 `Button` 組件
- ✅ 統計卡片現使用 `Card` 組件
- ✅ 協作區塊現使用 `Badge` 組件

## 🎯 使用最佳實踐

### 1. 統一導入
```tsx
// ✅ 推薦
import { Button, Badge, Card } from "@/components/ui"

// ❌ 避免
import { Button } from "@/components/ui/button"
```

### 2. 組件複合
```tsx
<Card glow="cyan">
  <CardHeader>
    <CardTitle>使用 Card 結構</CardTitle>
  </CardHeader>
  <CardContent>
    這是更語義化的用法
  </CardContent>
</Card>
```

### 3. 顏色一致性
始終使用三種主要顏色：
- `cyan` - 信息/主要
- `pink` - 次要/互動
- `orange` - 強調/特殊

## 🚀 擴展指南

### 新增組件
1. 在 `src/components/ui/` 目錄中創建新文件
2. 使用 `cn()` 工具合併類別
3. 在 `ui/index.ts` 中導出
4. 在需要的地方導入使用

### 創建新組件示例
```tsx
// src/components/ui/alert.tsx
import { cn } from "@/lib/utils"

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "destructive"
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      className={cn(
        "rounded-lg p-4",
        variant === "default" && "bg-cyan-500/20 border border-cyan-400",
        variant === "destructive" && "bg-red-500/20 border border-red-400",
        className
      )}
      ref={ref}
      {...props}
    />
  )
)
```

## 📚 shadcn/ui 官方資源
- [官方網站](https://ui.shadcn.com/)
- [文檔](https://ui.shadcn.com/docs)
- [組件庫](https://ui.shadcn.com/docs/components/accordion)

## ✨ 下一步建議

1. **添加更多組件**
   - `Dialog` - 對話框
   - `Popover` - 彈出框
   - `Tooltip` - 提示框
   - `Toast` - 通知

2. **增強現有功能**
   - 添加表單驗證
   - 實現搜索功能
   - 添加過濾器

3. **改進設計**
   - 微調發光效果
   - 添加更多動畫
   - 改進響應式設計

---

**現在你可以輕鬆地使用 shadcn/ui 組件來構建更多功能，同時保持 Vaporwave 的美學風格！** 🌟
