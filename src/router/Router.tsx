import { useAppSelector } from '@/store';
import { selectUserAuthorization } from '@/store/user/userSelector';
import React, { useEffect } from 'react';
import { Switch, useHistory } from 'react-router-dom';
import { IRoute } from './config';
import RouteWithSubRoutes from './RouteWithSubRoutes';

interface IProps {
  routes: IRoute[];
}

const Router: React.FC<IProps> = ({ routes }: IProps) => {
  // const isLogin = useAppSelector(selectUserAuthorization);
  // const history = useHistory();

  // useEffect(() => {
  //   if (!isLogin) {
  //     history.push('/login');
  //   }
  // }, [isLogin]);

  return (
    <Switch>
      {routes &&
        routes.map((route: IRoute) => (
          <RouteWithSubRoutes key={route.path} {...route} />
        ))}
    </Switch>
  );
};

export default Router;
