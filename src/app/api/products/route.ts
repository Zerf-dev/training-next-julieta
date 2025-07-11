// src/app/api/products/route.ts
import { NextResponse } from 'next/server';




export async function GET() {
  // 1. Llamamos al servicio externo
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  
  // 2. Si hay un error HTTP, devolvemos un 502 (o el que prefieras)
  if (!res.ok) {
    return NextResponse.json(
      { error: `Error cargando productos (${res.status})` },
      { status: 502 }
    );
  }

  // 3. Parseamos JSON y lo devolvemos tal cual
  const products = await res.json();
  return NextResponse.json(products);
}
