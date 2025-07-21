"use client"; 

import { useEffect } from "react";

export default function ErrorProducts({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Error cargando productos:", error);
  }, [error]);

  return (
    <div className="p-4 text-center">
      <p className="text-red-600 mb-4">Ocurrió un error:</p>
      <pre className="whitespace-pre-wrap">{error.message}</pre>
      <button
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        onClick={() => reset()}  
      >
        Reintentar
      </button>
    </div>
  );
}
