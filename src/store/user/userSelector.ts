import { RootState } from '..';

export const selectUserAuthorization = (state: RootState) =>
  state.user.authorization;
