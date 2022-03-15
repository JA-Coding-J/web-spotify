import React, { ReactNode } from 'react';

function mockComponent({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}

export default mockComponent;
