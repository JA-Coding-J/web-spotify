import React from 'react';
import '@/assets/styles/container.css';

interface ContainerProps {
  children: any;
}

const Container: React.FC<ContainerProps> = ({ children }: ContainerProps) => {
  return (
    <React.Fragment>
      <div style={{ padding: '5px' }}></div>
      <div className="container">{children}</div>
    </React.Fragment>
  );
};

export default Container;
