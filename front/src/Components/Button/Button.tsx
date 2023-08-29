import { ButtonProps } from './types';
import styles from './Button.module.scss';
import clsx from 'clsx';


const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = "contained",
  color,
  fullWidth,
  className,
  type = "button",
}) => {

  return (
    <button
      onClick={onClick}
      type={type}
      className={clsx(styles.root, styles[variant],
        fullWidth && styles.fullWidth,
        className && className,
        color && styles[color])}
    >
      {children}
    </button>
  )
}

export default Button;