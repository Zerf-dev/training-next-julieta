// src/app/api/products/[id]/route.ts
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const res = await fetch(
    `https://api.escuelajs.co/api/v1/products/${id}`
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: `Producto ${id} no encontrado (${res.status})` },
      { status: 404 }
    );
  }

  const product = await res.json();
  return NextResponse.json(product);
}
