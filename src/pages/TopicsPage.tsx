import React, { useState, useEffect } from 'react';

export const TopicsPage: React.FC = () => {
  const [topics, setTopics] = useState<any[]>([]);
  const [subjects, setSubjects] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [subjectId, setSubjectId] = useState('');
  const [status, setStatus] = useState('Pending');

  useEffect(() => {
    setTopics(JSON.parse(localStorage.getItem('study_topics') || '[]'));
    const subs = JSON.parse(localStorage.getItem('study_subjects') || '[]');
    setSubjects(subs);
    if (subs.length > 0) setSubjectId(subs[0].id);
  }, []);

  const addTopic = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !subjectId) return;
    const newTopic = {
      id: Date.now().toString(),
      subjectId,
      title,
      status
    };
    const updated = [...topics, newTopic];
    setTopics(updated);
    localStorage.setItem('study_topics', JSON.stringify(updated));
    setTitle('');
  };

  const updateStatus = (id: string, newStatus: string) => {
    const updated = topics.map(t => t.id === id ? { ...t, status: newStatus } : t);
    setTopics(updated);
    localStorage.setItem('study_topics', JSON.stringify(updated));
  };

  const deleteTopic = (id: string) => {
    const updated = topics.filter(t => t.id !== id);
    setTopics(updated);
    localStorage.setItem('study_topics', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Learning Syllabus</h1>
        <p className="text-slate-400 text-sm">Track chapters, sub-topics, and study progression details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={addTopic} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 h-fit">
          <h2 className="text-lg font-bold text-white">Create New Topic</h2>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Topic Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Trigonometric Integrals"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Parent Subject</label>
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
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Study Status</label>
            <select 
              value={status} 
              onChange={e => setStatus(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Pending">Pending</option>
              <option value="Studying">Studying</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <button type="submit" disabled={subjects.length === 0} className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all disabled:opacity-50">
            ADD TOPIC
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Syllabus Overview</h2>
          <div className="space-y-3">
            {topics.map(topic => {
              const parentSub = subjects.find(s => s.id === topic.subjectId);
              return (
                <div key={topic.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex justify-between items-center">
                  <div>
                    <h3 className="text-sm font-bold text-white">{topic.title}</h3>
                    <span className="text-xs text-slate-500">{parentSub ? parentSub.name : 'Unknown Subject'}</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <select 
                      value={topic.status}
                      onChange={e => updateStatus(topic.id, e.target.value)}
                      className="bg-slate-950 border border-slate-800 rounded px-2 py-1 text-xs text-slate-300"
                    >
                      <option value="Pending">Pending</option>
                      <option value="Studying">Studying</option>
                      <option value="Completed">Completed</option>
                    </select>
                    <button 
                      onClick={() => deleteTopic(topic.id)}
                      className="text-xs text-red-500 hover:text-red-400 font-bold"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            {topics.length === 0 && (
              <p className="text-slate-500 text-sm">No topics listed yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopicsPage;
