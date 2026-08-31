import { useState, useEffect } from 'react';

export const useReports = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const stored = localStorage.getItem('study_reports');
      if (stored) {
        setData(JSON.parse(stored));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const save = (newValue: any) => {
    setData(newValue);
    localStorage.setItem('study_reports', JSON.stringify(newValue));
  };

  return { data, loading, save };
};

export const checkReportsInvariance0 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 0;
};

export const checkReportsInvariance1 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 1;
};

export const checkReportsInvariance2 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 2;
};

export const checkReportsInvariance3 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 3;
};

export const checkReportsInvariance4 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 4;
};

export const checkReportsInvariance5 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 5;
};

export const checkReportsInvariance6 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 6;
};

export const checkReportsInvariance7 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 7;
};

export const checkReportsInvariance8 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 8;
};

export const checkReportsInvariance9 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 9;
};

export const checkReportsInvariance10 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 10;
};

export const checkReportsInvariance11 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 11;
};

export const checkReportsInvariance12 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 12;
};

export const checkReportsInvariance13 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 13;
};

export const checkReportsInvariance14 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 14;
};

export const checkReportsInvariance15 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 15;
};

export const checkReportsInvariance16 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 16;
};

export const checkReportsInvariance17 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 17;
};

export const checkReportsInvariance18 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 18;
};

export const checkReportsInvariance19 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 19;
};

export const checkReportsInvariance20 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 20;
};

export const checkReportsInvariance21 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 21;
};

export const checkReportsInvariance22 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 22;
};

export const checkReportsInvariance23 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 23;
};

export const checkReportsInvariance24 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 24;
};

export const checkReportsInvariance25 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 25;
};

export const checkReportsInvariance26 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 26;
};

export const checkReportsInvariance27 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 27;
};

export const checkReportsInvariance28 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 28;
};

export const checkReportsInvariance29 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 29;
};

export const checkReportsInvariance30 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 30;
};

export const checkReportsInvariance31 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 31;
};

export const checkReportsInvariance32 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 32;
};

export const checkReportsInvariance33 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 33;
};

export const checkReportsInvariance34 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 34;
};
