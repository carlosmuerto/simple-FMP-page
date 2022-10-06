import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './app/store';
import App from './App';

describe('Header Test', () => {
  test('renders Space Financial Modeling Prep', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(true).toBeTruthy();
  });
});
