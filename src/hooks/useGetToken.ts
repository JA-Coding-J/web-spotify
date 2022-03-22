import axios, { CancelTokenSource } from 'axios';
import { useEffect, useState } from 'react';
import { client_id, client_secret } from '../utils/consts';
import { Buffer } from 'buffer';
import { ActionType } from '@/actions/ActionType';
import { useAppDispatch, useAppSelector } from '@/store';
import { selectExpiresTimeStamp } from '@/store/user/userSelector';

type TokenApiResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
};

export const useGetToken = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const expiresTime = useAppSelector(selectExpiresTimeStamp);

  const getToken = async (source: CancelTokenSource) => {
    try {
      setLoading(true);
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
      const authorization = token_type + ' ' + access_token;
      const expiresTimeStamp = Date.now() + res.data.expires_in * 1000;

      dispatch({
        type: ActionType.LOGIN,
        payload: { expiresTimeStamp, authorization },
      });
    } catch (error) {
      throw new Error(`Something went wrong when getting token: ${error}`);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (expiresTime > Date.now()) return;
    const source = axios.CancelToken.source();
    getToken(source);
    return () => source.cancel('get token was canceled');
  }, []);

  return { loading };
};
