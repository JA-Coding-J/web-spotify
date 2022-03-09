import React, { MouseEventHandler } from 'react';
import './button.css';

interface ButtonProp {
  onClick?: MouseEventHandler;
  children?: React.ReactNode;
}

function Button({ onClick, children }: ButtonProp): JSX.Element {
  return (
    <button type="button" className="cs-button" onClick={onClick}>
      {children ?? 'button'}
    </button>
  );
}

export default React.memo(Button);
