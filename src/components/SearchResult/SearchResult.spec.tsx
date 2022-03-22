import React from 'react';
import { render } from '@testing-library/react';
import SearchResult from '.';
import { searchResult } from '@/__mocks__/mockData';
import { SearchTypeEnum, tabNameMap } from '@/utils/consts';
import { SpotifyType } from '@/types/spotify';

describe('[SearchResult Component]', () => {
  const data = searchResult;
  const tabsName = (Object.keys(SearchTypeEnum) as Array<SpotifyType>).map(
    (t) => tabNameMap[t],
  );
  test('should show first tab by default', () => {
    const { container } = render(
      <SearchResult data={data} tabsName={tabsName} />,
    );
    expect(container.getElementsByClassName('active')[0].textContent).toEqual(
      tabsName[0],
    );
  });
  test('should show no result if no respective data', () => {
    const { getByText } = render(
      <SearchResult data={{}} tabsName={tabsName} />,
    );
    expect(getByText(/no result/i)).not.toBeFalsy();
  });
});
