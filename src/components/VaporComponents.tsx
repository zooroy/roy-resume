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

// 霓虹卡片
export function NeonCard({
  children,
  className = '',
  glow = 'cyan',
}: {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'pink' | 'orange';
}) {
  const glowClass = {
    cyan: 'shadow-[0_0_12px_2px_rgba(0,255,255,0.8),0_0_24px_4px_rgba(0,255,255,0.4)]',
    pink: 'shadow-[0_0_12px_2px_rgba(255,0,255,0.8),0_0_24px_4px_rgba(255,0,255,0.4)]',
    orange:
      'shadow-[0_0_12px_2px_rgba(255,153,0,0.8),0_0_24px_4px_rgba(255,153,0,0.4)]',
  };

  return (
    <div
      className={`
        border rounded-xl p-6 backdrop-blur-sm
        border-current transition-all duration-300
        hover:scale-105 hover:shadow-xl
        ${
          glow === 'cyan'
            ? 'border-cyan-400'
            : glow === 'pink'
            ? 'border-pink-500'
            : 'border-orange-400'
        }
        ${glowClass[glow]}
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
      <span className="text-cyan-400">{prefix}</span> {children}
    </span>
  );
}

// 無限網格背景
export function InfiniteGrid({ className = '' }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(0deg, transparent 24%, rgba(255, 0, 255, 0.05) 25%, rgba(255, 0, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent),
          linear-gradient(90deg, transparent 24%, rgba(255, 0, 255, 0.05) 25%, rgba(255, 0, 255, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.05) 75%, rgba(0, 255, 255, 0.05) 76%, transparent 77%, transparent)
        `,
        backgroundSize: '60px 60px',
        backgroundPosition: '0 0, 0 0',
        animation: 'grid-animation 8s linear infinite',
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
