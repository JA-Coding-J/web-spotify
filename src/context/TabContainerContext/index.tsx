import { createContext, useContext } from 'react';

export enum TabContextActionTypeEnum {
  'UPDATE' = 'UPDATE',
  'RESET' = 'RESET',
}

type TabContextActionType = keyof typeof TabContextActionTypeEnum;

export type TabContextState = { tabIndex: number };

interface ActionType {
  type: TabContextActionType;
  payload: TabContextState;
}

export const initialTabContextValue = { tabIndex: 0 };

export const TabContext = createContext<TabContextState>(
  initialTabContextValue,
);

export const useTabContext = () => useContext(TabContext);

export const TabContextConsumer = TabContext.Consumer;

export const tabContextReducer = (
  state: TabContextState,
  action: ActionType,
) => {
  switch (action.type) {
    case TabContextActionTypeEnum.UPDATE:
      return {
        ...state,
        tabIndex: action.payload.tabIndex,
      };
    case TabContextActionTypeEnum.RESET:
      return {
        tabIndex: 0,
      };

    default:
      return state;
  }
};

export const TabContextProvider = TabContext.Provider;
