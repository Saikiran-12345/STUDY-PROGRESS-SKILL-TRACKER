import React, { useState, useEffect } from 'react';

export const StudyTasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [priority, setPriority] = useState('Medium');

  useEffect(() => {
    setTasks(JSON.parse(localStorage.getItem('study_studytasks') || '[]'));
    const subs = JSON.parse(localStorage.getItem('study_subjects') || '[]');
    setSubjects(subs);
    if (subs.length > 0) setSubjectId(subs[0].id);
  }, []);

  const addTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !dueDate || !subjectId) return;
    const newTask = {
      id: Date.now().toString(),
      title,
      subjectId,
      dueDate,
      priority,
      isCompleted: false
    };
    const updated = [...tasks, newTask];
    setTasks(updated);
    localStorage.setItem('study_studytasks', JSON.stringify(updated));
    setTitle('');
  };

  const toggleComplete = (id: string) => {
    const updated = tasks.map(t => t.id === id ? { ...t, isCompleted: !t.isCompleted } : t);
    setTasks(updated);
    localStorage.setItem('study_studytasks', JSON.stringify(updated));
  };

  const deleteTask = (id: string) => {
    const updated = tasks.filter(t => t.id !== id);
    setTasks(updated);
    localStorage.setItem('study_studytasks', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Daily Tasks</h1>
        <p className="text-slate-400 text-sm">Schedule study goals, assignments, and due dates.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={addTask} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 h-fit">
          <h2 className="text-lg font-bold text-white">Create Task</h2>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Task Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Complete math chapter 4"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Subject</label>
            <select 
              value={subjectId} 
              onChange={e => setSubjectId(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {subjects.map(sub => (
                <option key={sub.id} value={sub.id}>{sub.name}</option>
              ))}
              {subjects.length === 0 && <option value="">No Subjects Configured</option>}
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Due Date</label>
            <input 
              type="date" 
              value={dueDate} 
              onChange={e => setDueDate(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Priority</label>
            <select 
              value={priority} 
              onChange={e => setPriority(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>
          <button type="submit" disabled={subjects.length === 0} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50">
            ADD TASK
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Study Checklist</h2>
          <div className="space-y-3">
            {tasks.map(task => {
              const parentSub = subjects.find(s => s.id === task.subjectId);
              return (
                <div key={task.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <input 
                      type="checkbox" 
                      checked={task.isCompleted} 
                      onChange={() => toggleComplete(task.id)}
                      className="w-5 h-5 bg-slate-950 border border-slate-800 rounded cursor-pointer accent-blue-600"
                    />
                    <div>
                      <p className={`text-sm font-bold text-white ${task.isCompleted ? 'line-through text-slate-500' : ''}`}>{task.title}</p>
                      <span className="text-[10px] text-slate-500">{parentSub ? parentSub.name : 'General'} | Due: {task.dueDate}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${task.priority === 'High' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20'}`}>
                      {task.priority}
                    </span>
                    <button 
                      onClick={() => deleteTask(task.id)}
                      className="text-xs text-red-500 hover:text-red-400 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
            {tasks.length === 0 && (
              <p className="text-slate-500 text-sm">No tasks added.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyTasksPage;
