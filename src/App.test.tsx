import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import charactersReducer from './services/state/characters/characters-slice';
import applicationReducer from './services/state/application/application-slice';

describe('App', () => {
  const mockStore = configureStore({
    reducer: {
      characters: charactersReducer,
      application: applicationReducer,
    },
  });

  test('Should render App', () => {
    const { container } = render(
      <Provider store={mockStore}>
        <App />
      </Provider>,
    );
    expect(container).toBeInTheDocument();
  });
});
