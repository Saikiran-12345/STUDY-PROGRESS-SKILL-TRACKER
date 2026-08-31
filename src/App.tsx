import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, NavLink } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import ProfilePage from './pages/ProfilePage';
import SubjectsPage from './pages/SubjectsPage';
import TopicsPage from './pages/TopicsPage';
import LearningPlansPage from './pages/LearningPlansPage';
import StudyTasksPage from './pages/StudyTasksPage';
import CalendarPage from './pages/CalendarPage';
import QuizzesPage from './pages/QuizzesPage';
import SkillsPage from './pages/SkillsPage';
import GoalsPage from './pages/GoalsPage';
import NotesPage from './pages/NotesPage';
import StreaksPage from './pages/StreaksPage';
import AnalyticsPage from './pages/AnalyticsPage';
import ReportsPage from './pages/ReportsPage';
import SettingsPage from './pages/SettingsPage';

const Sidebar = () => (
  <div className="w-72 bg-slate-950 border-r border-slate-900 h-screen fixed top-0 left-0 overflow-y-auto flex flex-col z-50">
    <div className="p-6 border-b border-slate-900 bg-slate-950">
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black shadow-[0_0_15px_rgba(37,99,235,0.5)]">
          ST
        </div>
        <div>
          <h1 className="text-lg font-black text-white tracking-tight leading-tight">StudyTracker</h1>
          <p className="text-[10px] font-bold text-blue-400 uppercase tracking-widest">EdTech Edition</p>
        </div>
      </div>
    </div>
    
    <div className="flex-1 px-4 py-6 space-y-8">
      <div>
        <h2 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-3 px-3">Overview</h2>
        <NavLink 
          to="/dashboard" 
          className={({ isActive }) => 
            `flex items-center px-4 py-2.5 text-sm font-bold rounded-lg transition-all duration-200 ${isActive ? 'bg-white text-black' : 'text-slate-400 hover:bg-slate-900 hover:text-white'}`
          }
        >
          Dashboard
        </NavLink>
      </div>

      <div>
        <h2 className="text-[10px] font-black text-slate-600 uppercase tracking-[0.2em] mb-3 px-3">Core Modules</h2>
        {[
          'Profile', 'Subjects', 'Topics', 'LearningPlans', 'StudyTasks',
          'Calendar', 'Quizzes', 'Skills', 'Goals', 'Notes',
          'Streaks', 'Analytics', 'Reports', 'Settings'
        ].map(mod => (
          <NavLink 
            key={mod}
            to={`/${mod.toLowerCase()}`} 
            className={({ isActive }) => 
              `flex items-center px-4 py-2.5 my-1 text-sm font-semibold rounded-lg transition-all duration-200 ${isActive ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' : 'text-slate-400 border border-transparent hover:bg-slate-900 hover:text-slate-200'}`
            }
          >
            {mod}
          </NavLink>
        ))}
      </div>
    </div>
  </div>
);

const App = () => {
  // Pre-seed localStorage with realistic data on first mount
  useEffect(() => {
    const seed = (key: string, data: any) => {
      if (!localStorage.getItem(key)) {
        localStorage.setItem(key, JSON.stringify(data));
      }
    };

    seed('study_subjects', [
      { id: '1', name: 'Mathematics', category: 'STEM', difficulty: 'Hard' },
      { id: '2', name: 'Computer Science', category: 'STEM', difficulty: 'Medium' },
      { id: '3', name: 'World History', category: 'Humanities', difficulty: 'Easy' }
    ]);

    seed('study_topics', [
      { id: '1', subjectId: '2', title: 'React Hooks & State Management', status: 'Studying' },
      { id: '2', subjectId: '1', title: 'Linear Algebra Matrices', status: 'Pending' },
      { id: '3', subjectId: '3', title: 'The French Revolution', status: 'Completed' }
    ]);

    seed('study_studytasks', [
      { id: '1', title: 'Complete coding assignment', subjectId: '2', dueDate: '2026-09-05', priority: 'High', isCompleted: false },
      { id: '2', title: 'Revise math worksheets', subjectId: '1', dueDate: '2026-09-02', priority: 'Medium', isCompleted: true },
      { id: '3', title: 'Read history essay page 4', subjectId: '3', dueDate: '2026-09-10', priority: 'Low', isCompleted: false }
    ]);

    seed('study_skills', [
      { name: 'TypeScript Programming', level: 4, category: 'STEM' },
      { name: 'Data Structures', level: 3, category: 'STEM' },
      { name: 'Academic Writing', level: 5, category: 'Humanities' }
    ]);

    seed('study_notes', [
      { id: '1', title: 'Vite Config Options', content: 'Configure path aliases using @/ resolving to src/ folder to solve compiler errors.', tags: ['Vite', 'TypeScript'] },
      { id: '2', title: 'Linear Systems formulas', content: 'Determinant of a 2x2 matrix: ad - bc. If 0, matrix has no inverse.', tags: ['Math'] }
    ]);

    seed('study_profile', {
      name: 'Saikiran Patel',
      educationLevel: 'Undergraduate Computer Science',
      learningPreferences: ['Visual Learning', 'Hands-on Coding'],
      goals: ['Master Full Stack Dev', 'Maintain a 5-day study streak']
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-slate-950 text-slate-200">
        <Sidebar />
        <main className="ml-72 p-8 lg:p-12 min-h-screen bg-black">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<DashboardPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/topics" element={<TopicsPage />} />
            <Route path="/learningplans" element={<LearningPlansPage />} />
            <Route path="/studytasks" element={<StudyTasksPage />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/quizzes" element={<QuizzesPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/goals" element={<GoalsPage />} />
            <Route path="/notes" element={<NotesPage />} />
            <Route path="/streaks" element={<StreaksPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<div className="p-20 text-center text-slate-500">Page not found</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;
