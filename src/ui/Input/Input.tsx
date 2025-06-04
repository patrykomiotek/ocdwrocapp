import { useId, type ComponentProps } from 'react';
// import { useId, forwardRef, type ComponentProps, type ForwardedRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label: string;
}

// React 19
export const Input = ({ label, ...rest }: Props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input id={id} className="outline rounded-md" {...rest} />
    </div>
  );
};

// React < 19
// export const Input = forwardRef(
//   ({ label, ...rest }: Props, ref: ForwardedRef<HTMLInputElement>) => {
//     const id = useId();
//     return (
//       <div>
//         <label htmlFor={id}>{label}</label>
//         <input id={id} ref={ref} className="outline rounded-md" {...rest} />
//       </div>
//     );
//   },
// );
