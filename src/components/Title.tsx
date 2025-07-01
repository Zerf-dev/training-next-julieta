import { ComponentProps } from 'react';

export function Title({ children, ...props }: ComponentProps<'h1'>) {
  return (
    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold" {...props}>
      {children}
    </h1>
  );
}
