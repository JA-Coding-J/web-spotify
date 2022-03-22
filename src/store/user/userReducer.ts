import { createReducer, PayloadAction } from '@reduxjs/toolkit';
import { userLocate, userLogin } from '../../actions';
import { TokenProp } from '../../actions/PayloadType';

interface UserInterface {
  authorization: string | null;
  expiresTimeStamp: number;
  countryName?: string;
}

const initialState: UserInterface = {
  authorization: null,
  expiresTimeStamp: 0,
  countryName: '',
};

export const userReducer = createReducer(initialState, (builder) =>
  builder
    .addCase(userLogin, (state, action: PayloadAction<TokenProp>) => ({
      ...state,
      authorization: action.payload.authorization,
      expiresTimeStamp: action.payload.expiresTimeStamp,
    }))
    .addCase(userLocate, (state, action: PayloadAction<string>) => {
      localStorage.setItem('countryName', action.payload);
      return {
        ...state,
        countryName: action.payload,
      };
    }),
);
