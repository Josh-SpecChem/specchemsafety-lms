'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-6xl font-bold text-red-600 mb-4">Error</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-8">
        We&apos;re sorry, but something unexpected happened.
      </p>
      <Button onClick={reset}>Try Again</Button>
    </div>
  );
}

