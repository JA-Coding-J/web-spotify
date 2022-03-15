import React from 'react';
import { render } from '@testing-library/react';
import { TabContextConsumer } from '.';
import TabContainerProvider from './provider';

describe('[TabContainerContext Context]', () => {
  const customRender = (ui, { providerProps, ...renderOptions }) => {
    return render(
      <TabContainerProvider {...providerProps}>{ui}</TabContainerProvider>,
      renderOptions,
    );
  };

  test('TabConsumer shows value from provider', () => {
    const providerProps = {
      tabsName: ['C3PO', 'Tracks', 'Albums'],
    };
    const { getByTestId } = customRender(
      <TabContextConsumer>
        {({ tabIndex }) => (
          <span data-testid="context-consumer">{tabIndex}</span>
        )}
      </TabContextConsumer>,
      { providerProps },
    );
    expect(getByTestId('context-consumer').textContent).toEqual('0');
  });
});
