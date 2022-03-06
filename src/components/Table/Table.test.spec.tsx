import React from 'react';
import { render, screen } from '@testing-library/react';
import Table from './index';
import Thead, { Th } from './Thead';
import { Tbody, Td } from './Tbody';

describe('[Table Component]', () => {
  const headers = [
    { title: 'header_id' },
    { title: 'header_test1' },
    { title: 'header_test2' },
    { title: 'header_test3' },
  ];
  const rows = [
    {
      id: 'row1_id',
      test1: 'row1_test1',
      test2: 'row1_test2',
      test3: 'row1_test3',
    },
    {
      id: 'row2_id',
      test1: 'row2_test1',
      test2: 'row2_test2',
      test3: 'row2_test3',
    },
    {
      id: 'row3_id',
      test1: 'row3_test1',
      test2: 'row3_test2',
      test3: 'row3_test3',
    },
  ];
  test('should contain table headers and table body', () => {
    render(
      <Table>
        <Thead>
          {headers.map((header) => (
            <Th name={header.title} key={header.title} />
          ))}
        </Thead>
        <Tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <Td>{row.id}</Td>
              <Td>{row.test1}</Td>
              <Td>{row.test2}</Td>
              <Td>{row.test3}</Td>
            </tr>
          ))}
        </Tbody>
      </Table>,
    );
    const renderedTHeads = screen.getAllByText(/^header.*/i);
    renderedTHeads.forEach((el, i) => {
      expect(el.textContent).toEqual(headers[i].title);
    });

    const renderedTbody = screen.getAllByText(/^row.*/i);
    const itemsData = rows.flatMap((row) => Object.values(row));
    renderedTbody.forEach((el, i) => {
      expect(el.textContent).toEqual(itemsData[i]);
    });
  });
});
