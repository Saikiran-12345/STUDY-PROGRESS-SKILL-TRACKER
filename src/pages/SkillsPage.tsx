import React, { useState, useEffect } from 'react';

export const SkillsPage: React.FC = () => {
  const [skills, setSkills] = useState<any[]>([]);
  const [name, setName] = useState('');
  const [level, setLevel] = useState(3);
  const [category, setCategory] = useState('STEM');

  useEffect(() => {
    setSkills(JSON.parse(localStorage.getItem('study_skills') || '[]'));
  }, []);

  const addSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name) return;
    const newSkill = {
      name,
      level,
      category
    };
    const updated = [...skills, newSkill];
    setSkills(updated);
    localStorage.setItem('study_skills', JSON.stringify(updated));
    setName('');
  };

  const deleteSkill = (nameToDelete: string) => {
    const updated = skills.filter(s => s.name !== nameToDelete);
    setSkills(updated);
    localStorage.setItem('study_skills', JSON.stringify(updated));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-black text-white">Skill Tracker</h1>
        <p className="text-slate-400 text-sm">Monitor levels of mastery across core development and academic skills.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={addSkill} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 h-fit">
          <h2 className="text-lg font-bold text-white">Add New Skill</h2>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Skill Name</label>
            <input 
              type="text" 
              value={name} 
              onChange={e => setName(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. React.js"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Level of Mastery (1-5)</label>
            <select 
              value={level} 
              onChange={e => setLevel(Number(e.target.value))}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value={1}>1 - Novice</option>
              <option value={2}>2 - Intermediate</option>
              <option value={3}>3 - Competent</option>
              <option value={4}>4 - Advanced</option>
              <option value={5}>5 - Expert</option>
            </select>
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
              <option value="Languages">Languages</option>
            </select>
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
            ADD SKILL
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Skill Matrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {skills.map(skill => (
              <div key={skill.name} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs text-slate-500 font-bold uppercase">{skill.category}</span>
                    <button 
                      onClick={() => deleteSkill(skill.name)}
                      className="text-xs text-red-500 hover:text-red-400 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-white">{skill.name}</h3>
                  <div className="mt-4 space-y-1">
                    <div className="flex justify-between text-xs text-slate-400">
                      <span>Progress Level</span>
                      <span>{skill.level} / 5</span>
                    </div>
                    <div className="w-full h-2 bg-slate-950 border border-slate-800 rounded-full overflow-hidden">
                      <div className="bg-blue-500 h-full" style={{ width: `${(skill.level / 5) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {skills.length === 0 && (
              <p className="text-slate-500 text-sm">No skills added yet.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
