import React, { ReactNode } from 'react';
import Container from '../Container';

interface Props {
  children: ReactNode;
}

const ContainerCenter: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {children}
      </div>
    </Container>
  );
};

export default ContainerCenter;
