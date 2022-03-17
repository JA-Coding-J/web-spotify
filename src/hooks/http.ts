import { useAppSelector } from '@/store';
import axios, { AxiosRequestConfig, Method } from 'axios';
import { useCallback, useEffect, useRef, useState } from 'react';
import { selectAuthorization } from '@/store/user/userSelector';
import { useGetToken } from './useGetToken';

export const client = axios.create({
  baseURL: 'https://api.spotify.com/v1',
});

export const useApi =
  (method: Method) =>
  <T, D = any>(url: string) => {
    const [data, setData] = useState<T>(null);
    const [error, setError] = useState<any>();
    const [loading, setLoading] = useState<boolean>(false);
    const authRef = useRef<string>();
    const { loading: tokenLoading } = useGetToken();
    const authorization = useAppSelector(selectAuthorization);

    useEffect(() => {
      authRef.current = authorization;
    });

    useEffect(() => {
      setLoading(tokenLoading);
    }, [tokenLoading]);

    const request = useCallback(
      async (payload?: D) => {
        if (!authRef.current) return;
        const source = axios.CancelToken.source();
        try {
          setLoading(true);

          const config: AxiosRequestConfig<D> = {
            headers: {
              Authorization: authRef.current,
            },
            cancelToken: source.token,
            method,
            data: payload,
          };

          const response = await client(url, config);
          setData(response.data);
        } catch (error) {
          if (axios.isCancel(error)) {
            // don't update state in case component is dismounting
          } else {
            setError(error);
          }
        } finally {
          setLoading(false);
        }

        return () => {
          source.cancel(`${url} was canceled`);
        };
      },
      [authRef],
    );

    return { data, error, loading, request, authorization };
  };

export const useGet = useApi('GET');
export const usePost = useApi('POST');
