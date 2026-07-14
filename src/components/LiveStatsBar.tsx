import React, { useEffect, useState, useRef } from 'react';
import { Play, Trophy, Users, Shield, Target } from 'lucide-react';

interface StatItemProps {
  key?: React.Key;
  icon: React.ReactNode;
  label: string;
  targetValue: number;
  suffix?: string;
}

function Counter({ icon, label, targetValue, suffix = "" }: StatItemProps) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let start = 0;
    const duration = 1500; // 1.5s animation
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const easeProgress = progress * (2 - progress);
      const currentValue = Math.floor(easeProgress * targetValue);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(targetValue);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, targetValue]);

  return (
    <div
      ref={elementRef}
      className="bg-white dark:bg-slate-900 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left transition-all duration-300 shadow-md hover:shadow-xl hover:scale-[1.03] border border-slate-100 dark:border-slate-800"
    >
      <div className="p-3.5 bg-primary/10 text-primary dark:bg-accent/10 dark:text-accent rounded-full shrink-0 flex items-center justify-center w-12 h-12">
        {icon}
      </div>
      <div>
        <span className="block font-display font-black text-3xl sm:text-4xl text-slate-900 dark:text-white tracking-tight">
          {count.toLocaleString()}{suffix}
        </span>
        <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500 mt-1 font-mono">
          {label}
        </span>
      </div>
    </div>
  );
}

export default function LiveStatsBar() {
  const stats = [
    {
      icon: <Play className="w-6 h-6 text-accent fill-accent" />,
      label: "Matches Contested",
      targetValue: 48,
    },
    {
      icon: <Shield className="w-6 h-6 text-accent" />,
      label: "Active Franchises",
      targetValue: 12,
      suffix: " Clubs"
    },
    {
      icon: <Target className="w-6 h-6 text-accent" />,
      label: "Total Goals Scored",
      targetValue: 246,
    },
    {
      icon: <Trophy className="w-6 h-6 text-accent" />,
      label: "Penalty Corners",
      targetValue: 189,
    }
  ];

  return (
    <div className="relative -mt-10 z-25 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, idx) => (
          <Counter
            key={idx}
            icon={stat.icon}
            label={stat.label}
            targetValue={stat.targetValue}
            suffix={stat.suffix}
          />
        ))}
      </div>
    </div>
  );
}
