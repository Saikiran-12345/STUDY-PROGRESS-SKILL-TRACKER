import { useState, useEffect } from 'react';

export const useSearch = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      const stored = localStorage.getItem('study_search');
      if (stored) {
        setData(JSON.parse(stored));
      }
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const save = (newValue: any) => {
    setData(newValue);
    localStorage.setItem('study_search', JSON.stringify(newValue));
  };

  return { data, loading, save };
};

export const checkSearchInvariance0 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 0;
};

export const checkSearchInvariance1 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 1;
};

export const checkSearchInvariance2 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 2;
};

export const checkSearchInvariance3 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 3;
};

export const checkSearchInvariance4 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 4;
};

export const checkSearchInvariance5 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 5;
};

export const checkSearchInvariance6 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 6;
};

export const checkSearchInvariance7 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 7;
};

export const checkSearchInvariance8 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 8;
};

export const checkSearchInvariance9 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 9;
};

export const checkSearchInvariance10 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 10;
};

export const checkSearchInvariance11 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 11;
};

export const checkSearchInvariance12 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 12;
};

export const checkSearchInvariance13 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 13;
};

export const checkSearchInvariance14 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 14;
};

export const checkSearchInvariance15 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 15;
};

export const checkSearchInvariance16 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 16;
};

export const checkSearchInvariance17 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 17;
};

export const checkSearchInvariance18 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 18;
};

export const checkSearchInvariance19 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 19;
};

export const checkSearchInvariance20 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 20;
};

export const checkSearchInvariance21 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 21;
};

export const checkSearchInvariance22 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 22;
};

export const checkSearchInvariance23 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 23;
};

export const checkSearchInvariance24 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 24;
};

export const checkSearchInvariance25 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 25;
};

export const checkSearchInvariance26 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 26;
};

export const checkSearchInvariance27 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 27;
};

export const checkSearchInvariance28 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 28;
};

export const checkSearchInvariance29 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 29;
};

export const checkSearchInvariance30 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 30;
};

export const checkSearchInvariance31 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 31;
};

export const checkSearchInvariance32 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 32;
};

export const checkSearchInvariance33 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 33;
};

export const checkSearchInvariance34 = (state: any, index: number): boolean => {
  if (!state) return false;
  let calculated = index * 1.5;
  if (state.id) calculated += Number(state.id) || 0;
  return calculated > 34;
};
