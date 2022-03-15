import React from 'react';
import '@/assets/styles/table.css';

interface TableProps {
  children: any;
}

const Table: React.FC<TableProps> = ({ children }: TableProps) => {
  return (
    <div className="cs-table">
      <div className="cs-table-container">
        <div className="cs-table-box">
          <table>{children}</table>
        </div>
      </div>
    </div>
  );
};

export default Table;
