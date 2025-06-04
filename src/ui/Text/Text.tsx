import { memo } from 'react';
// export const Text = () => {
//   return <p> Today is a nice day </p>;
// }

// import type { PropsWithChildren } from 'react';

interface Props {
  children: string | number | (string | number)[]; // React.ReactNode
}

// export function Text(props: { children: string }) {
export const Text = memo(({ children = 'sth' }: Props) => {
  return <p className="dark:text-slate-200">{children}</p>;
});

Text.displayName = 'memo(Text)';

// export const Text: React.FC<Props & PropsWithChildren> = ({ children = "sth" }) => {
//   return <p>{children}</p>;
// };
