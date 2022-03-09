import { AlbumListItemType, ResultType } from '@/types/spotify';
import React from 'react';
import Table from '../Table';
import { Tbody, Td } from '../Table/Tbody';
import Thead, { Th } from '../Table/Thead';
import AlbumCard from './AlbumCard';

interface AlbumTableProps {
  dataList: Array<AlbumListItemType>;
}

const headers = [
  'id',
  'name',
  'image',
  'total_tracks',
  'artists',
  'release_date',
  'Link',
];

function AlbumTable({ dataList }: AlbumTableProps) {
  return (
    dataList && (
      <div className="album-table">
        {dataList.map((album, index) => (
          <AlbumCard key={album.id} albumData={album} />
        ))}
      </div>
    )
  );
  // return (
  //   <Table>
  //     <Thead>
  //       {headers.map((header) => (
  //         <Th key={header} name={header} />
  //       ))}
  //     </Thead>
  //     <Tbody>
  //       {dataList &&
  //         dataList.map((data, index) => (
  //           <tr key={data.id ?? index}>
  //             <Td>{data.id}</Td>
  //             <Td>
  //               <a href={data.external_urls.spotify}>{data.name}</a>
  //             </Td>
  //             <Td>
  //               <img
  //                 src={
  //                   data.images.sort((a, b) =>
  //                     a.height < b.height ? -1 : 1,
  //                   )[0].url
  //                 }
  //               />
  //             </Td>
  //             <Td>{data.total_tracks}</Td>
  //             <Td>{data.artists.map((a) => a.name).join(',')}</Td>
  //             <Td>{data.release_date}</Td>
  //             <Td>
  //               <a href="" onClick={() => console.log('go to detail page')}>
  //                 detail
  //               </a>
  //             </Td>
  //           </tr>
  //         ))}
  //     </Tbody>
  //   </Table>
  // );
}

export default AlbumTable;
