import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { userLogin } from '../../actions';
import { TokenProp } from '../../actions/PayloadType';

interface UserInterface {
  authorization: string | null;
  expiresTimeStamp: number;
}

const initialState: UserInterface = {
  authorization: null,
  expiresTimeStamp: 0,
};

export const userReducer = createReducer(initialState, (builder) =>
  builder.addCase(userLogin, (state, action: PayloadAction<TokenProp>) => ({
    ...state,
    authorization: action.payload.authorization,
    expiresTimeStamp: action.payload.expiresTimeStamp,
  })),
);
