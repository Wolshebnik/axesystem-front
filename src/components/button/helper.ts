import { config } from './config';
import { ButtonProps } from './types';

export const getStyles = ({
  styleType,
  colorType,
}: Pick<ButtonProps, 'styleType' | 'colorType'>) => {
  let style = '';

  switch (colorType) {
    case 'primary': {
      style += 'btn-primary';
      break;
    }
    case 'secondary': {
      style += 'btn-secondary';
      break;
    }
    case 'red': {
      style += 'btn-red';
      break;
    }
    case 'green': {
      style += 'btn-green';
      break;
    }
    case 'transparent': {
      style += 'btn-transparent';
      break;
    }
    default:
      break;
  }

  switch (styleType) {
    case 'outline': {
      style = style.replace(/btn-\w*/, '');

      style += colorType ? config[colorType] : '';

      break;
    }
    default:
      break;
  }

  return style;
};
