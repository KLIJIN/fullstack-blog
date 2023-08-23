import { ButtonProps } from './types';
import styles from './Button.module.scss';
import clsx from 'clsx';


const Button: React.FC<ButtonProps> = ({ children, variant = "contained", color, fullWidth }) => {

  return (
    <div className={clsx(styles.root, styles[variant],
      fullWidth && styles.fullWidth,
      color && styles[color])}>
      {children}
    </div>
  )
}

export default Button;