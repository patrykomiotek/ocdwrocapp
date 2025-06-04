import { classMerge } from 'ui/utils/cn';

interface Props {
  children: string;
  variant?: 'h1' | 'h2' | 'h3';
  className?: string;
}

export function Heading({ children, variant = 'h1', className = '' }: Props) {
  if (variant === 'h1') {
    return <h1 className={classMerge('text-3xl', className)}>{children}</h1>;
  } else if (variant === 'h2') {
    return <h2 className={classMerge('text-2xl', className)}>{children}</h2>;
  } else if (variant === 'h3') {
    return <h3 className={classMerge('text-xl', className)}>{children}</h3>;
  }
}
