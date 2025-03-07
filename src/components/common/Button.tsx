import React, { useRef } from 'react';
import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'nav';
  children: React.ReactNode;
  activeNav?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  children,
  className,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    buttonRef.current.style.transformOrigin = `${x}% ${y}%`;
  };

  const buttonClasses = clsx(
    'space-grotesk px-4 py-2 font-medium transition duration-200 hover:cursor-pointer ease-in-out hover:-translate-y-1 hover:scale-110 active:scale-90 rounded-sm tracking-wider',
    {
      'bg-main-green text-white': variant === 'primary',
      'bg-black text-white': variant === 'secondary',
      'bg-transparent text-main-green': variant === 'ghost',
      'bg-transparent text-white  min-w-[100px] active:text-main-green':
        variant === 'nav',
      '!text-main-green space-grotesk-bold': props.activeNav,
    },
    className
  );

  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {children}
    </button>
  );
};
