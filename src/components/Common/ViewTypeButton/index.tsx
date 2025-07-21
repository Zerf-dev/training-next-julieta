import React from 'react';
import { LayoutList, LayoutGrid, Heart,  } from 'lucide-react';

const VIEWS = ['grid', 'list', 'fullgrid', 'favorites'];

interface ViewTypeButtonProps {
  view: string;
  onChange: (nextView: string) => void;
}

export default function ViewTypeButton({ view, onChange }: ViewTypeButtonProps) {
  const icons = {
    grid: (
      <LayoutGrid className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
    ),
    list: (
      <LayoutList className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
    ),
    fullgrid: (
      <LayoutGrid className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
    ),
    favorites: (
      <Heart className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
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
      className=" w-8 h-8  sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center" 
      aria-label="Cambiar tipo de vista"
    >
      {icons[view as keyof typeof icons] ?? icons.grid }
    </button>
  );
} 