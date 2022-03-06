import { createAction } from '@reduxjs/toolkit';
import { ActionType } from './ActionType';
import { UserLoginProp } from './PayloadType';

export const userLogin = createAction<UserLoginProp>(ActionType.LOGIN);
