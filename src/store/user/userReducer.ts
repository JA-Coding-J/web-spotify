import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { userLogin } from '../../actions';
import { UserLoginProp } from '../../actions/PayloadType';

interface UserInterface {
  authorization: string | null;
}

const initialState: UserInterface = {
  authorization: null,
};

export const userReducer = createReducer(initialState, (builder) =>
  builder.addCase(userLogin, (state, action: PayloadAction<UserLoginProp>) => ({
    ...state,
    authorization: action.payload.authorization,
  })),
);
