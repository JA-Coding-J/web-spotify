import React from 'react';

interface TbodyProps {
  children: any;
}

export const Tbody: React.FC<TbodyProps> = ({ children }: TbodyProps) => {
  return <tbody className="cs-table-body">{children}</tbody>;
};

export const Td: React.FC<TbodyProps> = ({ children }: TbodyProps) => {
  return <td>{children}</td>;
};
