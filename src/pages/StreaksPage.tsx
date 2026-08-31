import React, { useState } from 'react';
import { useStreaks } from '@/hooks/useStreaks';

export const StreaksPage: React.FC = () => {
  const { data, loading, save } = useStreaks();
  
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white">Streaks Module</h1>
          <p className="text-slate-400 text-sm">Organize and monitor your progress in real-time.</p>
        </div>
        <span className="px-3 py-1 bg-blue-500/10 text-blue-400 border border-blue-500/20 text-xs font-bold rounded-full uppercase tracking-wider">
          Active Status
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl">
          <h2 className="text-lg font-bold text-white mb-4">Focus Details</h2>
          <div className="h-64 flex flex-col items-center justify-center bg-slate-950 rounded-xl border border-slate-800/50">
            <p className="text-slate-500 text-sm">Interactive details dashboard loading...</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-4">
          <h2 className="text-lg font-bold text-white">System Actions</h2>
          <button 
            onClick={() => save({ updated: true, timestamp: Date.now() })}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-bold rounded-xl transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
          >
            SYNC WORKSPACE
          </button>
        </div>
      </div>
    </div>
  );
};

export default StreaksPage;

export const StreaksSubCard0: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 0}
      </span>
    </div>
  );
};

export const StreaksSubCard1: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 10}
      </span>
    </div>
  );
};

export const StreaksSubCard2: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 20}
      </span>
    </div>
  );
};

export const StreaksSubCard3: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 30}
      </span>
    </div>
  );
};

export const StreaksSubCard4: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 40}
      </span>
    </div>
  );
};

export const StreaksSubCard5: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 50}
      </span>
    </div>
  );
};

export const StreaksSubCard6: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 60}
      </span>
    </div>
  );
};

export const StreaksSubCard7: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 70}
      </span>
    </div>
  );
};

export const StreaksSubCard8: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 80}
      </span>
    </div>
  );
};

export const StreaksSubCard9: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 90}
      </span>
    </div>
  );
};

export const StreaksSubCard10: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 100}
      </span>
    </div>
  );
};

export const StreaksSubCard11: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 110}
      </span>
    </div>
  );
};

export const StreaksSubCard12: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 120}
      </span>
    </div>
  );
};

export const StreaksSubCard13: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 130}
      </span>
    </div>
  );
};

export const StreaksSubCard14: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 140}
      </span>
    </div>
  );
};

export const StreaksSubCard15: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 150}
      </span>
    </div>
  );
};

export const StreaksSubCard16: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 160}
      </span>
    </div>
  );
};

export const StreaksSubCard17: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 170}
      </span>
    </div>
  );
};

export const StreaksSubCard18: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 180}
      </span>
    </div>
  );
};

export const StreaksSubCard19: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 190}
      </span>
    </div>
  );
};

export const StreaksSubCard20: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 200}
      </span>
    </div>
  );
};

export const StreaksSubCard21: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 210}
      </span>
    </div>
  );
};

export const StreaksSubCard22: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 220}
      </span>
    </div>
  );
};

export const StreaksSubCard23: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 230}
      </span>
    </div>
  );
};

export const StreaksSubCard24: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 240}
      </span>
    </div>
  );
};

export const StreaksSubCard25: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 250}
      </span>
    </div>
  );
};

export const StreaksSubCard26: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 260}
      </span>
    </div>
  );
};

export const StreaksSubCard27: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 270}
      </span>
    </div>
  );
};

export const StreaksSubCard28: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 280}
      </span>
    </div>
  );
};

export const StreaksSubCard29: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 290}
      </span>
    </div>
  );
};

export const StreaksSubCard30: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 300}
      </span>
    </div>
  );
};

export const StreaksSubCard31: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 310}
      </span>
    </div>
  );
};

export const StreaksSubCard32: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 320}
      </span>
    </div>
  );
};

export const StreaksSubCard33: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 330}
      </span>
    </div>
  );
};

export const StreaksSubCard34: React.FC<{ title: string; score?: number }> = (props) => {
  return (
    <div className="p-4 rounded-xl bg-slate-950 border border-slate-900 flex justify-between items-center">
      <span className="text-xs font-bold text-slate-400">{props.title}</span>
      <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded border border-blue-500/20">
        {props.score || 340}
      </span>
    </div>
  );
};
