
import clsx from 'clsx';
import styles from './Tabs.module.scss';
import { TabProps } from './types';

function Tab({ label, active, onClick }: TabProps) {


  return (
    <button className={clsx(styles.tab, active && styles.selected)} onClick={onClick} >
      {label}
    </button>
  )
}


export default Tab;