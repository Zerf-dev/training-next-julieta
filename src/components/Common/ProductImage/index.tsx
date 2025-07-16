import React from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
}

export default function ProductImage(props: ProductImageProps) {
  const { src, alt } = props;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-full object-cover rounded-xl aspect-[3/4]"
    />
  );
} 