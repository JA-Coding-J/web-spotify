import { createAction } from '@reduxjs/toolkit';
import { ActionType } from './ActionType';
import { TokenProp } from './PayloadType';

export const userLogin = createAction<TokenProp>(ActionType.LOGIN);
export const userLocate = createAction<string>(ActionType.LOCATE);
