import React from 'react';
import Table from '../Table';
import { Tbody, Td } from '../Table/Tbody';
import Thead, { Th } from '../Table/Thead';

type AlbumTableDataType = {
  id: string;
  name: string;
};

interface AlbumTableProps {
  dataList: Array<AlbumTableDataType>;
}

const headers = [];

function AlbumTable({ dataList }: AlbumTableProps) {
  return (
    <Table>
      <Thead>
        {headers.map((header) => (
          <Th key={header} name={header} />
        ))}
      </Thead>
      <Tbody>
        {dataList &&
          dataList.map((data, index) => (
            <tr key={data.id ?? index}>
              {headers.map((header, index) => (
                <Td key={header.name}>data[header.name]</Td>
              ))}
            </tr>
          ))}
      </Tbody>
    </Table>
  );
}

export default AlbumTable;
