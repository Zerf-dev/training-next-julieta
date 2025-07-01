import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="p-2 bg-zerf-contrast text-white rounded-sm hover:bg-opacity-90 transition"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
