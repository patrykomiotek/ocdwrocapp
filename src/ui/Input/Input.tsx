import { useId, type ComponentProps } from 'react';
import type { FieldError } from 'react-hook-form';
// import { useId, forwardRef, type ComponentProps, type ForwardedRef } from 'react';

interface Props extends ComponentProps<'input'> {
  label: string;
  error?: FieldError;
}

// React 19
export const Input = ({ label, error, ...rest }: Props) => {
  const id = useId();
  return (
    <div>
      <label htmlFor={id} className="dark:text-slate-200">
        {label}
      </label>
      <input id={id} className="outline rounded-md" {...rest} />
      {error && <p className="text-red-500">{error.message}</p>}
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
