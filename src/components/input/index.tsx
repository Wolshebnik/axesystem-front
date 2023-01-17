import { InputProps } from './types';

const Input = ({
  id,
  name,
  label,
  value,
  error,
  disabled,
  placeholder,
  type = 'text',
  ...props
}: InputProps) => {
  return (
    <div className="flex flex-col">
      {label && <label htmlFor={id ?? name}>{label}</label>}

      <input
        name={name}
        type={type}
        value={value}
        id={id ?? name}
        disabled={disabled}
        placeholder={placeholder}
        {...props}
        onChange={(e) => {
          if (props.onChange) {
            props.onChange(e);
          }
        }}
        className={`p-2 w-full h-10 border bg-lighten-white dark:bg-darken-bg-theme border-lighten-border dark:border-darken-border enabled:focus:border-primary enabled:dark:focus:border-primary
         disabled:bg-lighten-bg-body dark:disabled:bg-darken-bg-body rounded-lg transition-colors duration-300 ease-in-out
         ${error && 'border-red'}
         `}
      />

      {error && <span className="text-red">{error}</span>}
    </div>
  );
};

export { Input };
