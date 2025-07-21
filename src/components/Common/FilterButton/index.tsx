import React from 'react';
import { Category } from '@/lib/types/category'
import { Suspense } from "react";
import { Funnel } from 'lucide-react';

interface FilterButtonProps {
  open: boolean
  onToggle: () => void
  categories: Category[]
  loading?: boolean
  error?: string | null
  onSelect: (cat: Category) => void
}

export default function FilterButton({
  open,
  onToggle,
  categories,
  loading,
  error,
  onSelect,
}: FilterButtonProps) {
  return (
    <div className="relative inline-block">
      <button
        type="button"
        onClick={onToggle}
        className=" w-8 h-8  sm:w-10 sm:h-10 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center" 
        aria-label="Filtrar"
      >
        <Funnel className="w-4 h-4 sm:w-6 sm:h-6 md:w-7 md:h-7 text-black" />
      </button>

      {open && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-20">
          {loading && <div className="p-4 text-center">Cargando...</div>}
          {error && <div className="p-4 text-red-500">Error: {error}</div>}
          {!loading && !error && (
            <ul>
              {categories.map(cat => (
                <li
                  key={cat.id}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => onSelect(cat)}
                >
                  {cat.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  )
}

