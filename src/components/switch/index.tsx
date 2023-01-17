import { CheckboxProps } from 'types';

const Switch = ({
  id,
  name,
  label,
  checked,
  disabled,
  ...props
}: CheckboxProps) => {
  return (
    <label
      htmlFor={id ?? name}
      className={`inline-flex group w-fit ${
        disabled ? 'cursor-default' : 'cursor-pointer'
      } relative flex gap-2 items-center select-none`}
    >
      <input
        name={name}
        type="checkbox"
        id={id ?? name}
        checked={checked}
        disabled={disabled}
        className="peer absolute appearance-none"
        {...props}
      />

      <span className="relative w-10 h-5 bg-lighten-border dark:bg-darken-border peer-disabled:bg-lighten-bg-body dark:peer-disabled:bg-darken-bg-body rounded-full after:transition-all duration-1000 ease-in-out after:content-[''] after:absolute after:w-4 after:h-4 after:rounded-full after:top-[2px] after:left-[2px] after:bg-white peer-checked:bg-primary peer-checked:after:translate-x-5" />

      {label && <span>{label}</span>}
    </label>
  );
};

export { Switch };
