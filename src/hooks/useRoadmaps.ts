import { useState, useEffect } from 'react';
import { Technology } from '../types/roadmap';

export function useRoadmaps() {
  const [roadmaps, setRoadmaps] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchRoadmaps() {
      try {
        const response = await fetch('/api/roadmaps');
        if (!response.ok) throw new Error('Failed to fetch roadmaps');
        const data = await response.json();
        setRoadmaps(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    }

    fetchRoadmaps();
  }, []);

  return { roadmaps, loading, error };
}
