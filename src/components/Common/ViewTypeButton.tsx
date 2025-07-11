import React from 'react';

interface ViewTypeButtonProps {
  onClick?: () => void;
}

export default function ViewTypeButton({ onClick }: ViewTypeButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100"
      aria-label="Cambiar tipo de vista"
    >
      {/* Ícono de grid (como en la imagen) */}
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="6" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
        <rect x="20" y="6" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
        <rect x="6" y="20" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
        <rect x="20" y="20" width="6" height="6" rx="1.5" stroke="black" strokeWidth="2"/>
      </svg>
    </button>
  );
} 