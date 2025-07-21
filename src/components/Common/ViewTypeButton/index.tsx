import React from 'react';

const VIEWS = ['grid', 'list', 'fullgrid', 'favorites'];
// type ViewType = typeof VIEWS[number];

interface ViewTypeButtonProps {
  view: string;
  onChange: (nextView: string) => void;
}

export default function ViewTypeButton({ view, onChange }: ViewTypeButtonProps) {
  const icons = {
    grid: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="6" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
        <rect x="20" y="6" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
        <rect x="6" y="20" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
        <rect x="20" y="20" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
      </svg>
    ),
    fullgrid: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
      <rect x="6" y="6" width="20" height="20" rx="1.5" stroke="black" strokeWidth="2"/>
    </svg>
    ),
    list: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="6" y="8" width="20" height="3" rx="1.5" fill="black"/>
        <rect x="6" y="15" width="20" height="3" rx="1.5" fill="black"/>
        <rect x="6" y="22" width="20" height="3" rx="1.5" fill="black"/>
      </svg>
    ),
    favorites: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          stroke="black"
          strokeWidth="2.5"
          fill="none"
        />
      </svg>
    ),
  };

  const handleClick = () => {
    const currentIndex = VIEWS.indexOf(view);
    const nextIndex = (currentIndex + 1) % VIEWS.length;
    onChange(VIEWS[nextIndex]);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-16 h-16 flex items-center justify-center rounded-full bg-gray-100"
      aria-label="Cambiar tipo de vista"
    >
      {icons[view as keyof typeof icons] ?? icons.grid }
    </button>
  );
} 