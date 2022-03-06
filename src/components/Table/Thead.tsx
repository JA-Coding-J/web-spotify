import React from 'react';

interface TheadProps {
  children: any;
}

const Thead: React.FC<TheadProps> = ({ children }: TheadProps) => {
  return (
    <thead className="cs-table-header">
      <tr>{children}</tr>
    </thead>
  );
};

export interface ThProp {
  name: string;
}

export const Th: React.FC<ThProp> = ({ name: title }) => {
  return <th scope="col">{title}</th>;
};

export default Thead;
