import '@testing-library/jest-dom';
import { render, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Characters from './characters';
import charactersReducer from '../../../services/state/characters/characters-slice';
import applicationReducer from '../../../services/state/application/application-slice';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

describe('Characters', () => {
  const mockStore = configureStore({
    reducer: {
      characters: charactersReducer,
      application: applicationReducer,
    },
  });

  test('renders loading indicator when loading is true', () => {
    mockStore.dispatch({
      type: 'application/setLoading',
      payload: true,
    });

    const { getByTestId } = render(
      <Provider store={mockStore}>
        <Characters />
      </Provider>,
    );

    expect(getByTestId('test-loading')).toBeInTheDocument();
  });

  test('renders character cards and pagination controls when loading is false', async () => {
    const { getAllByTestId, getByRole } = render(
      <Provider store={mockStore}>
        <Characters />
      </Provider>,
      {},
    );

    const array = new Array(30).fill(0).map((_, index) => ({
      id: index,
      name: `Test Character ${index}`,
      thumbnail: {
        path: 'path',
        extension: '.jpg',
      },
      description: 'Test description',
    }));

    mockStore.dispatch({
      type: 'characters/setCharacters',
      payload: array,
    });

    mockStore.dispatch({
      type: 'application/setLoading',
      payload: false,
    });

    await waitFor(() => {
      expect(getAllByTestId('test-card-name')).toHaveLength(30);
      expect(getByRole('navigation')).toBeInTheDocument();
    });
  });
});
