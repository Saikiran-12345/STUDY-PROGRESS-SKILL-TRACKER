import React, { useState, useEffect } from 'react';

export const NotesPage: React.FC = () => {
  const [notes, setNotes] = useState<any[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setNotes(JSON.parse(localStorage.getItem('study_notes') || '[]'));
  }, []);

  const addNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;
    const tagArray = tags.split(',').map(t => t.trim()).filter(t => t.length > 0);
    const newNote = {
      id: Date.now().toString(),
      title,
      content,
      tags: tagArray
    };
    const updated = [...notes, newNote];
    setNotes(updated);
    localStorage.setItem('study_notes', JSON.stringify(updated));
    setTitle('');
    setContent('');
    setTags('');
  };

  const deleteNote = (id: string) => {
    const updated = notes.filter(n => n.id !== id);
    setNotes(updated);
    localStorage.setItem('study_notes', JSON.stringify(updated));
  };

  const filteredNotes = notes.filter(note => 
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex justify-between items-center border-b border-slate-800 pb-4">
        <div>
          <h1 className="text-3xl font-black text-white">Study Notes</h1>
          <p className="text-slate-400 text-sm">Write down formulas, coding snippets, and chapter outlines.</p>
        </div>
        <input 
          type="text" 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search notes..." 
          className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <form onSubmit={addNote} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl space-y-4 h-fit">
          <h2 className="text-lg font-bold text-white">Create New Note</h2>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Title</label>
            <input 
              type="text" 
              value={title} 
              onChange={e => setTitle(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Newton's Method"
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Content</label>
            <textarea 
              value={content} 
              onChange={e => setContent(e.target.value)}
              rows={4}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none" 
              placeholder="Formulas, text, outlines..."
            />
          </div>
          <div>
            <label className="block text-xs text-slate-500 uppercase font-black mb-1">Tags (Comma-separated)</label>
            <input 
              type="text" 
              value={tags} 
              onChange={e => setTags(e.target.value)}
              className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" 
              placeholder="e.g. Physics, ExamReview"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all">
            ADD NOTE
          </button>
        </form>

        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-white">Scribble Wall</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredNotes.map(note => (
              <div key={note.id} className="p-6 bg-slate-900 border border-slate-800 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex gap-1 flex-wrap">
                      {note.tags.map((tag: string) => (
                        <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => deleteNote(note.id)}
                      className="text-xs text-red-500 hover:text-red-400 font-bold"
                    >
                      Delete
                    </button>
                  </div>
                  <h3 className="text-lg font-bold text-white mt-2">{note.title}</h3>
                  <p className="text-slate-400 text-sm mt-3 whitespace-pre-wrap leading-relaxed">{note.content}</p>
                </div>
              </div>
            ))}
            {filteredNotes.length === 0 && (
              <p className="text-slate-500 text-sm">No notes found matching your search query.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
