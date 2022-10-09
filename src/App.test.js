import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

describe('Header Test', () => {
  test('renders Space HearthStone Cards', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(screen.getByText(/HearthStone Cards/i)).toBeInTheDocument();
  });
});

describe('load info', () => {
  test('renders categories titles', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    await waitFor(
      () => expect(screen.getByText(/classes/i)).toBeInTheDocument(),
      { timeout: 5000 },
    );
    await waitFor(() => expect(screen.getByText(/sets/i)).toBeInTheDocument());
    await waitFor(() => expect(screen.getByText(/standard/i)).toBeInTheDocument());
  });
});
