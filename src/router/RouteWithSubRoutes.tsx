import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { IRoute } from './config';

export default function RouteWithSuspend(route: IRoute) {
  return (
    <Suspense fallback={route.fallback}>
      <Route
        path={route.path}
        render={(props) =>
          route.redirect ? (
            <Redirect to={route.redirect} />
          ) : (
            route.component && (
              <route.component routes={route.routes} {...props} />
            )
          )
        }
      />
    </Suspense>
  );
}
