import axios, { CancelTokenSource } from 'axios';
import { useEffect, useState } from 'react';
import { client_id, client_secret } from '../consts';
import { Buffer } from 'buffer';
import { ActionType } from '@/actions/ActionType';
import { useAppDispatch } from '@/store';

type TokenApiResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export const useGetToken = () => {
  const [authorization, setAuthorization] = useState<string>();
  const [expiresTimeStamp, setExpiresTimeStamp] = useState<number>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch({
      type: ActionType.LOGIN,
      payload: { authorization },
    });
  }, [authorization]);

  const getToken = async (source: CancelTokenSource) => {
    try {
      const data = new URLSearchParams();
      data.append('grant_type', 'client_credentials');
      const res = await axios({
        url: 'https://accounts.spotify.com/api/token',
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization:
            'Basic ' +
            Buffer.from(client_id + ':' + client_secret).toString('base64'),
        },
        cancelToken: source.token,
        data,
      });
      const { access_token, token_type } = res.data;
      setAuthorization(token_type + ' ' + access_token);
      setExpiresTimeStamp(Date.now() + res.data.expires_in);
    } catch (error) {
      throw new Error(`Something went wrong when getting token: ${error}`);
    }
  };

  useEffect(() => {
    if (expiresTimeStamp < Date.now()) return;
    const source = axios.CancelToken.source();
    getToken(source);
    return () => source.cancel('get token was canceled');
  }, []);

  return { authorization };
};
