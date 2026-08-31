import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export const DashboardPage: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [skills, setSkills] = useState<any[]>([]);

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('study_studytasks') || '[]'));
    setSubjects(JSON.parse(localStorage.getItem('study_subjects') || '[]'));
    setSkills(JSON.parse(localStorage.getItem('study_skills') || '[]'));
  }, []);

  const completedCount = tasks.filter((t: any) => t.isCompleted).length;
  const pendingCount = tasks.filter((t: any) => !t.isCompleted).length;

  // Chart Data
  const chartData = [
    { name: 'Mon', hours: 4.5 },
    { name: 'Tue', hours: 6.0 },
    { name: 'Wed', hours: 3.5 },
    { name: 'Thu', hours: 8.0 },
    { name: 'Fri', hours: 5.5 }
  ];

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6 animate-in fade-in duration-300">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white">Command Center</h1>
          <p className="text-slate-400 text-sm">Monitor your current study metrics, streaks, and focus metrics.</p>
        </div>
        <div className="flex gap-4">
          <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-center">
            <span className="text-xs text-slate-500 uppercase font-black">Streak</span>
            <p className="text-lg font-black text-orange-500">🔥 5 Days</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-500 uppercase font-bold">Total Subjects</span>
          <p className="text-4xl font-black text-white mt-2">{subjects.length}</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-500 uppercase font-bold">Completed Tasks</span>
          <p className="text-4xl font-black text-emerald-500 mt-2">{completedCount}</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-500 uppercase font-bold">Pending Tasks</span>
          <p className="text-4xl font-black text-red-500 mt-2">{pendingCount}</p>
        </div>
        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <span className="text-xs text-slate-500 uppercase font-bold">Skills Mastered</span>
          <p className="text-4xl font-black text-blue-400 mt-2">{skills.length}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-4">Study Distribution (Hours / Day)</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <XAxis dataKey="name" stroke="#475569" />
                <YAxis stroke="#475569" />
                <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155' }} />
                <Bar dataKey="hours" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="p-6 bg-slate-900 border border-slate-800 rounded-2xl">
          <h2 className="text-lg font-bold text-white mb-4">Active Tasks</h2>
          <div className="space-y-3">
            {tasks.filter((t: any) => !t.isCompleted).map((task: any) => (
              <div key={task.id} className="p-3 bg-slate-950 border border-slate-800 rounded-xl flex justify-between items-center">
                <div>
                  <p className="text-sm font-bold text-white">{task.title}</p>
                  <span className="text-[10px] text-slate-500">Due: {task.dueDate}</span>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${task.priority === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                  {task.priority}
                </span>
              </div>
            ))}
            {tasks.filter((t: any) => !t.isCompleted).length === 0 && (
              <p className="text-sm text-slate-500">All tasks completed! Good job.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
