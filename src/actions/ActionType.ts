// user actions
export enum ActionType {
  LOGIN = 'user/login',
  LOGOUT = 'user/logout',
  LOCATE = 'user/locate',
}

export interface Action {
  type: ActionType;
  payload?: any;
}
