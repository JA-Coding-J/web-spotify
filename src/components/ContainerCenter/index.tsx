import React, { ReactNode } from 'react';
import '@/assets/styles/container-center.css';

interface Props {
  children: ReactNode;
}

const ContainerCenter: React.FC<Props> = ({ children }) => {
  return (
    <div className="container-center">
      <div className="relative-box">
        <div className="center-box">{children}</div>
      </div>
    </div>
  );
};

export default ContainerCenter;
