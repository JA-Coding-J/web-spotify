import React from 'react';

interface TableProps {
  children: any;
}

const Table: React.FC<TableProps> = ({ children }: TableProps) => {
  return (
    <div className="cs-table">
      <div className="my-2 sm:-mx-6 lg:-mx-8">
        <div className="cs-table-container">
          <div className="cs-table-box">
            <table>{children}</table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
