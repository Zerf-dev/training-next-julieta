import React from 'react';

interface ViewTypeButtonProps {
  view: 'grid' | 'list' | 'favorites';
  onClick?: () => void;
}

export default function ViewTypeButton({ view, onClick }: ViewTypeButtonProps) {
  const GridIcon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="6" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
      <rect x="20" y="6" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
      <rect x="6" y="20" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
      <rect x="20" y="20" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
    </svg>
  );
  const ListIcon = (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="8" width="20" height="3" rx="1.5" fill="black"/>
      <rect x="6" y="15" width="20" height="3" rx="1.5" fill="black"/>
      <rect x="6" y="22" width="20" height="3" rx="1.5" fill="black"/>
    </svg>
  );
  const HeartIcon = (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
      <path
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
        stroke="black"
        strokeWidth="2.5"
        fill="none"
      />
    </svg>
  );

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100"
      aria-label="Cambiar tipo de vista"
    >
      {view === 'grid' && GridIcon}
      {view === 'list' && ListIcon}
      {view === 'favorites' && HeartIcon}
    </button>
  );
} 