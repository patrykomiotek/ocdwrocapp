// export const Text = () => {
//   return <p> Today is a nice day </p>;
// }

import type { PropsWithChildren } from "react";

interface Props {
  children: string; // React.ReactNode
}

// export function Text(props: { children: string }) {
export function Text({ children = "sth" }: Props) {
  return <p>{children}</p>;
}

// export const Text: React.FC<Props & PropsWithChildren> = ({ children = "sth" }) => {
//   return <p>{children}</p>;
// };
