import React from 'react';
import { Category } from '@/lib/types/category'
import { Suspense } from "react";

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
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-100"
        aria-label="Filtrar"
      >
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <path
            d="M8 10H24M12 16H20M14.6667 22H17.3333"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

