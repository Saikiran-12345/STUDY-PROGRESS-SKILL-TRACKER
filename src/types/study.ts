export interface Student {
  name: string;
  educationLevel: string;
  learningPreferences: string[];
  goals: string[];
}

export interface Subject {
  id: string;
  name: string;
  category: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
}

export interface Topic {
  id: string;
  subjectId: string;
  title: string;
  status: 'Pending' | 'Studying' | 'Completed';
}

export interface StudyTask {
  id: string;
  title: string;
  subjectId: string;
  dueDate: string;
  priority: 'Low' | 'Medium' | 'High';
  isCompleted: boolean;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: string;
}

export interface Goal {
  id: string;
  target: string;
  deadline: string;
  isAchieved: boolean;
}

export interface StudyNote {
  id: string;
  title: string;
  content: string;
  tags: string[];
}
