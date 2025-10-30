import { useEffect, useState } from 'react';
import { saveOffline, loadOffline } from '../services/storage';

const STORAGE_KEY = 'checkin_history_v1';

export function useCheckin() {
  const [history, setHistory] = useState<any[]>([]);
  const [lastStatus, setLastStatus] = useState<string>('none');

  useEffect(() => {
    (async () => {
      const h = (await loadOffline(STORAGE_KEY)) || [];
      setHistory(h);
      if (h.length > 0) setLastStatus(h[h.length - 1].type);
    })();
  }, []);

  const persist = async (next: any) => {
    const newHistory = [...history, next];
    setHistory(newHistory);
    setLastStatus(next.type);
    await saveOffline(STORAGE_KEY, newHistory);
  };

  const checkIn = async () => {
    const now = Date.now();
    await persist({ time: now, type: 'in', lat: null, lng: null });
  };

  const checkOut = async () => {
    const now = Date.now();
    await persist({ time: now, type: 'out', lat: null, lng: null });
  };

  return { history, lastStatus, checkIn, checkOut };
}
