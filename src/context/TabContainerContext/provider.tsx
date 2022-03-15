import Container from '@/components/Container';
import {
  initialTabContextValue,
  TabContextActionTypeEnum,
  TabContextProvider,
  tabContextReducer,
} from '@/context/TabContainerContext';
import React, { ReactNode, useReducer } from 'react';
import '@/assets/styles/tab-container.css';

interface TabContainerProp {
  children: ReactNode;
  tabsName: Array<string>;
}

function TabContainerProvider({ children, tabsName }: TabContainerProp) {
  const [state, dispatch] = useReducer(
    tabContextReducer,
    initialTabContextValue,
  );
  function onClickTab(tabIndex) {
    dispatch({
      type: TabContextActionTypeEnum.UPDATE,
      payload: { tabIndex },
    });
  }

  return (
    <TabContextProvider value={{ tabIndex: state.tabIndex }}>
      <Container>
        <div className="tab-container">
          <ul>
            {tabsName &&
              tabsName.map((tab, index) => (
                <li
                  key={tab}
                  onClick={() => onClickTab(index)}
                  className={`${state.tabIndex === index ? 'active' : ''}`}
                >
                  {tab}
                </li>
              ))}
          </ul>
          <div className="divider" />
          {children}
        </div>
      </Container>
    </TabContextProvider>
  );
}

export default TabContainerProvider;
