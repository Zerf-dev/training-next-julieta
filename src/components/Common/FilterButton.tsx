import React from 'react';

interface FilterButtonProps {
  onClick?: () => void;
}

export default function FilterButton({ onClick }: FilterButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100"
      aria-label="Filtrar"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H24M12 16H20M14.6667 22H17.3333" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg> 
    </button>
  );
} 