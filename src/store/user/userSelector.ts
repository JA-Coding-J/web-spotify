import { RootState } from '..';

export const selectAuthorization = (state: RootState) =>
  state.user.authorization;

export const selectExpiresTimeStamp = (state: RootState) =>
  state.user.expiresTimeStamp;
