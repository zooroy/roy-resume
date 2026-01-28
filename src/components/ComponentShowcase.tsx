'use client';

import { useState } from 'react';
import { Button, Badge, Card, CardHeader, CardTitle, CardContent, Tabs, TabsList, TabsTrigger, TabsContent, Input } from '@/components/ui';

/**
 * shadcn/ui 組件演示頁面
 * 展示所有可用的 UI 組件與它們的用法
 */
export function ComponentShowcase() {
  const [inputValue, setInputValue] = useState('');
  const [selectedTab, setSelectedTab] = useState('buttons');

  return (
    <div className="space-y-8 py-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-cyan-400">shadcn/ui 組件展示</h2>
        <p className="text-gray-300">
          所有可用的 UI 組件與使用示例
        </p>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} defaultValue="buttons">
        <TabsList>
          <TabsTrigger value="buttons">按鈕</TabsTrigger>
          <TabsTrigger value="badges">標籤</TabsTrigger>
          <TabsTrigger value="cards">卡片</TabsTrigger>
          <TabsTrigger value="inputs">輸入框</TabsTrigger>
        </TabsList>

        <TabsContent value="buttons" className="space-y-6">
          <Card glow="cyan">
            <CardHeader>
              <CardTitle>按鈕變體</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button variant="default">Default</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="neon-cyan">Neon Cyan</Button>
                <Button variant="neon-pink">Neon Pink</Button>
                <Button variant="neon-orange">Neon Orange</Button>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-mono text-cyan-300 mb-2">尺寸變體:</h4>
                <div className="flex flex-wrap gap-3">
                  <Button size="sm" variant="neon-cyan">Small</Button>
                  <Button size="md" variant="neon-cyan">Medium</Button>
                  <Button size="lg" variant="neon-cyan">Large</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="badges" className="space-y-6">
          <Card glow="pink">
            <CardHeader>
              <CardTitle>標籤變體</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="cyan">Cyan Badge</Badge>
                <Badge variant="pink">Pink Badge</Badge>
                <Badge variant="orange">Orange Badge</Badge>
                <Badge variant="default">Default Badge</Badge>
              </div>

              <div className="pt-4">
                <h4 className="text-sm font-mono text-pink-300 mb-2">應用示例:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="cyan">React</Badge>
                  <Badge variant="pink">Next.js</Badge>
                  <Badge variant="orange">TypeScript</Badge>
                  <Badge variant="default">Tailwind</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="cards" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-4">
            <Card glow="cyan">
              <CardHeader>
                <CardTitle className="text-cyan-400">Cyan Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  這是一個帶有發光效果的卡片組件
                </p>
              </CardContent>
            </Card>

            <Card glow="pink">
              <CardHeader>
                <CardTitle className="text-pink-400">Pink Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  支持多種顏色主題
                </p>
              </CardContent>
            </Card>

            <Card glow="orange">
              <CardHeader>
                <CardTitle className="text-orange-400">Orange Card</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-300">
                  完全可自訂的組件
                </p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="inputs" className="space-y-6">
          <Card glow="cyan">
            <CardHeader>
              <CardTitle>輸入框變體</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-mono text-cyan-300 mb-2 block">
                  Default 變體
                </label>
                <Input 
                  variant="default" 
                  placeholder="輸入文字..." 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </div>

              <div>
                <label className="text-sm font-mono text-pink-300 mb-2 block">
                  Outline 變體
                </label>
                <Input 
                  variant="outline" 
                  placeholder="另一個輸入框..." 
                />
              </div>

              {inputValue && (
                <div className="pt-4">
                  <p className="text-sm text-gray-300">
                    你輸入了: <span className="text-cyan-400 font-mono">{inputValue}</span>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
