import { useState } from "react";
import Tab from "./Tab";

import styles from "./Tabs.module.scss";
import { TabsProps } from "./types";

function Tabs({ labelList }: TabsProps) {
  const [activeTab, setActiveTab] = useState<number>(0);

  const clickHandler = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className={styles.root}>
      <div className={styles.scroller}>
        <div className={styles.tabs}>
          {labelList.map((label, index) => {
            return (
              <Tab
                key={label}
                label={label}
                active={activeTab === index}
                onClick={() => {
                  clickHandler(index);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Tabs;
