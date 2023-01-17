import { ButtonProps } from './types';
import { getStyles } from './helper';

const Button = ({
  icon,
  text,
  onClick,
  disabled,
  fullWidth,
  capitalize,
  borderRadius,
  type = 'button',
  colorType = 'primary',
  styleType = 'standard',
  ...props
}: ButtonProps) => {
  const styles = getStyles({ styleType, colorType });

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`btn ${styles} ${capitalize ? 'capitalize' : 'uppercase'} ${
        fullWidth && 'w-full'
      } ${borderRadius && 'rounded-lg'} `}
      {...props}
    >
      {icon && icon}
      {text && text}
    </button>
  );
};

export { Button };
