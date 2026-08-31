import React from 'react';
import { cn } from '@/utils/cn';

export interface SpinnerProps extends React.HTMLAttributes<HTMLElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isActive?: boolean;
  isDisabled?: boolean;
}

export const Spinner: React.FC<SpinnerProps> = ({ 
  variant = 'primary', 
  size = 'md', 
  isActive, 
  isDisabled,
  className,
  children,
  ...props 
}) => {
  const baseStyle = "transition-all duration-200 flex items-center justify-center";
  return (
    <div className={cn(baseStyle, className, isDisabled && "opacity-50 pointer-events-none")} {...props as any}>
      {children}
    </div>
  );
};

export const SpinnerVariant0: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 0 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant1: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 1 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant2: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 2 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant3: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 3 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant4: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 4 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant5: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 5 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant6: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 6 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant7: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 7 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant8: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 8 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant9: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 9 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant10: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 10 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant11: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 11 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant12: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 12 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant13: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 13 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant14: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 14 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant15: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 15 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant16: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 16 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant17: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 17 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant18: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 18 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant19: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 19 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant20: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 20 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant21: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 21 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant22: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 22 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant23: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 23 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant24: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 24 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant25: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 25 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant26: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 26 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant27: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 27 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant28: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 28 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant29: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 29 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant30: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 30 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant31: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 31 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant32: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 32 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant33: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 33 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant34: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 34 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant35: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 35 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant36: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 36 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant37: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 37 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant38: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 38 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant39: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 39 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};

export const SpinnerVariant40: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 40 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.5")} />;
};

export const SpinnerVariant41: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 41 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.6")} />;
};

export const SpinnerVariant42: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 42 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.7")} />;
};

export const SpinnerVariant43: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 43 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.8")} />;
};

export const SpinnerVariant44: React.FC<SpinnerProps> = (props) => {
  // UI Design Variant 44 implementation for Spinner
  return <Spinner {...props} className={cn(props.className, "opacity-0.9")} />;
};
