import { useHealth } from '@/lib/api/health';

export function ServerStatus() {
  const { data: mongo, isLoading } = useHealth({
    select: data => data?.mongo,
    placeholderData: { mongo: 'connected', uptime: 0 }
  });
  return (
    <span className="bg-neutral-800 p-3 rounded-lg text-white">
      {isLoading ? `Connecting...` : `Server ${mongo ?? 'disconnected'}`}
    </span>
  );
}
