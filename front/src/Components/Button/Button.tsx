import { ButtonProps } from './types';
import styles from './Button.module.scss';


const Button: React.FC<ButtonProps> = ({ children, variant }) => {

  return (
    <div className={`${styles.root} ${variant ? styles[variant] : ""}`}>
      {children}
    </div>
  )
}

export default Button;