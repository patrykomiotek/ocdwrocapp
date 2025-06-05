import { memo } from 'react';
import { classMerge } from 'ui/utils/cn';
import { Link } from 'react-router-dom';

type LinkType = ReturnType<typeof Link>;

interface Props {
  children: string | LinkType;
  variant?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export const Heading = memo(({ children, variant = 'h1', className = '' }: Props) => {
  if (variant === 'h1') {
    return <h1 className={classMerge('text-3xl dark:text-slate-200', className)}>{children}</h1>;
  } else if (variant === 'h2') {
    return <h2 className={classMerge('text-2xl dark:text-slate-200', className)}>{children}</h2>;
  } else if (variant === 'h3') {
    return <h3 className={classMerge('text-xl dark:text-slate-200', className)}>{children}</h3>;
  }
});
