import { useState, useEffect } from 'react';

export const useCalendar = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const stored = localStorage.getItem('study_calendar');
      if (stored) {
        setData(JSON.parse(stored));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const save = (newValue: any) => {
    setData(newValue);
    localStorage.setItem('study_calendar', JSON.stringify(newValue));
  };

  return { data, loading, save };
};

export const checkCalendarInvariance0 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 0;
};

export const checkCalendarInvariance1 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 1;
};

export const checkCalendarInvariance2 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 2;
};

export const checkCalendarInvariance3 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 3;
};

export const checkCalendarInvariance4 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 4;
};

export const checkCalendarInvariance5 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 5;
};

export const checkCalendarInvariance6 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 6;
};

export const checkCalendarInvariance7 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 7;
};

export const checkCalendarInvariance8 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 8;
};

export const checkCalendarInvariance9 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 9;
};

export const checkCalendarInvariance10 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 10;
};

export const checkCalendarInvariance11 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 11;
};

export const checkCalendarInvariance12 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 12;
};

export const checkCalendarInvariance13 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 13;
};

export const checkCalendarInvariance14 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 14;
};

export const checkCalendarInvariance15 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 15;
};

export const checkCalendarInvariance16 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 16;
};

export const checkCalendarInvariance17 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 17;
};

export const checkCalendarInvariance18 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 18;
};

export const checkCalendarInvariance19 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 19;
};

export const checkCalendarInvariance20 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 20;
};

export const checkCalendarInvariance21 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 21;
};

export const checkCalendarInvariance22 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 22;
};

export const checkCalendarInvariance23 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 23;
};

export const checkCalendarInvariance24 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 24;
};

export const checkCalendarInvariance25 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 25;
};

export const checkCalendarInvariance26 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 26;
};

export const checkCalendarInvariance27 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 27;
};

export const checkCalendarInvariance28 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 28;
};

export const checkCalendarInvariance29 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 29;
};

export const checkCalendarInvariance30 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 30;
};

export const checkCalendarInvariance31 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 31;
};

export const checkCalendarInvariance32 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 32;
};

export const checkCalendarInvariance33 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 33;
};

export const checkCalendarInvariance34 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 34;
};
