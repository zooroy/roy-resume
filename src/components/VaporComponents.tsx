import React from 'react';

// 霓虹漸層文字
export function NeonGradientText({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <span className={`neon-gradient ${className}`}>{children}</span>;
}

// 霓虹標籤
export function NeonTag({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`neon-tag inline-block px-3 py-1 text-sm font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}
    >
      {children}
    </span>
  );
}

// 卡片
export function NeonCard({
  children,
  className = '',
  glow = 'cyan',
}: {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'pink' | 'orange';
}) {
  const shadowClass = {
    cyan: 'shadow-[0_2px_8px_rgba(115,79,156,0.15)]',
    pink: 'shadow-[0_2px_8px_rgba(196,123,180,0.15)]',
    orange: 'shadow-[0_2px_8px_rgba(181,159,214,0.15)]',
  };

  const borderClass = {
    cyan: 'border-purple-300',
    pink: 'border-pink-300',
    orange: 'border-purple-200',
  };

  return (
    <div
      className={`
        border rounded-2xl p-6 transition-all duration-300
        hover:shadow-lg
        ${borderClass[glow]}
        ${shadowClass[glow]}
        bg-white/50
        ${className}
      `}
    >
      {children}
    </div>
  );
}

// 掃描線效果包裝器
export function ScanlineOverlay({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {children}
      <div
        className="pointer-events-none absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, rgba(0,0,0,0.15) 0px, rgba(0,0,0,0.15) 1px, transparent 1px, transparent 2px)',
        }}
      />
    </div>
  );
}

// 終端前綴文字
export function TerminalText({
  children,
  prefix = '>',
  className = '',
}: {
  children: React.ReactNode;
  prefix?: string;
  className?: string;
}) {
  return (
    <span className={`font-mono ${className}`}>
      <span className="text-purple-700">{prefix}</span> {children}
    </span>
  );
}

// 背景网格
export function InfiniteGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: 'none',
        backgroundColor: 'transparent',
      }}
    />
  );
}

// 脈搏效果
export function PulseGlow({
  children,
  color = 'cyan',
  className = '',
}: {
  children: React.ReactNode;
  color?: 'cyan' | 'pink' | 'orange';
  className?: string;
}) {
  const colorClass = {
    cyan: 'text-cyan-400',
    pink: 'text-pink-500',
    orange: 'text-orange-400',
  };

  return (
    <span className={`animate-pulse ${colorClass[color]} ${className}`}>
      {children}
    </span>
  );
}

// 標題
export function VaporTitle({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`
      text-3xl md:text-4xl font-bold tracking-wider
      ${className}
    `}
    >
      <TerminalText>{children}</TerminalText>
    </h2>
  );
}
