import React, { useState, useEffect } from 'react';

export const SubjectsPage: React.FC = () => {
  const [subjects, setSubjects] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('STEM');
  const [difficulty, setDifficulty] = useState('Medium');

  useEffect(() => {
    setSubjects(JSON.parse(localStorage.getItem('study_subjects') || '[]'));
  }, []);

  const addSubject = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const newSub = {
      id: Date.now().toString(),
      name,
      category,
      difficulty
    };
    const updated = [...subjects, newSub];
    setSubjects(updated);
    localStorage.setItem('study_subjects', JSON.stringify(updated));
    setName('');
  };

  const deleteSubject = (id: string) => {
    const updated = subjects.filter(s => s.id !== id);
    setSubjects(updated);
    localStorage.setItem('study_subjects', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Subject Directory</h1>
        <p className="text-slate-400 text-sm">Add and organize academic topics and categories.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={addSubject} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 h-fit">
          <h2 className="text-lg font-bold text-white">Create New Subject</h2>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Subject Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Organic Chemistry"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Category</label>
            <select 
              value={category} 
              onChange={e => setCategory(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="STEM">STEM</option>
              <option value="Humanities">Humanities</option>
              <option value="Business">Business</option>
              <option value="Languages">Languages</option>
            </select>
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Difficulty Level</label>
            <select 
              value={difficulty} 
              onChange={e => setDifficulty(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
            ADD SUBJECT
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Active Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjects.map(sub => (
              <div key={sub.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs text-slate-500 uppercase font-bold">{sub.category}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-black uppercase ${sub.difficulty === 'Hard' ? 'bg-red-500/10 text-red-400 border border-red-500/20' : sub.difficulty === 'Medium' ? 'bg-yellow-500/10 text-yellow-400 border border-yellow-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
                      {sub.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{sub.name}</h3>
                </div>
                <button 
                  onClick={() => deleteSubject(sub.id)}
                  className="mt-6 text-xs text-red-500 hover:text-red-400 font-bold self-end"
                >
                  Delete Subject
                </button>
              </div>
            ))}
            {subjects.length === 0 && (
              <p className="text-slate-500 text-sm">No subjects listed yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubjectsPage;
