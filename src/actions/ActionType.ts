// user actions
export enum ActionType {
  LOGIN = 'user/login',
  LOGOUT = 'user/logout',
}

export interface Action {
  type: ActionType;
  payload?: any;
}
