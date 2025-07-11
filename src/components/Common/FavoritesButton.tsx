import React from 'react';

interface FavoritesButtonProps {
  isFavorite: boolean;
  onClick?: () => void;
}

export default function FavoritesButton({ isFavorite, onClick }: FavoritesButtonProps) {
  return (
    <button
      type="button"
      aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
      onClick={onClick}
      className="absolute top-2 right-2 p-2 rounded-full transition"
      style={{ background: 'none', boxShadow: 'none' }}
    >
      {isFavorite ? (
        // Corazón relleno y borde rojo oscuro
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="#dc2626" stroke="#dc2626" strokeWidth={2}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      ) : (
        // Corazón solo borde negro
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} fill="none" stroke="black" strokeWidth={2}>
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      )}
    </button>
  );
} 