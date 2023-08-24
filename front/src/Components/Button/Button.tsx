import { ButtonProps } from './types';
import styles from './Button.module.scss';
import clsx from 'clsx';


const Button: React.FC<ButtonProps> = ({ children, variant = "contained",
  color, fullWidth, className }) => {

  return (
    <button className={clsx(styles.root, styles[variant],
      fullWidth && styles.fullWidth,
      className && className,
      color && styles[color])}
    >
      {children}
    </button>
  )
}

export default Button;