import '@testing-library/jest-dom';
import { fireEvent, getByText, render, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Characters from './characters';
import charactersReducer from '../../../services/state/characters/characters-slice';
import applicationReducer from '../../../services/state/application/application-slice';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

describe('Characters', () => {
  const mockStore = configureStore({
    reducer: {
      characters: charactersReducer,
      application: applicationReducer,
    },
  });

  test('Should render loading indicator when loading is true', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Characters />
        </Provider>
      </BrowserRouter>,
    );

    mockStore.dispatch({
      type: 'application/setLoading',
      payload: true,
    });

    expect(getByTestId('test-loading')).toBeInTheDocument();
  });

  test('Should render list cards component and pagination controls when loading is false', async () => {
    const { getAllByTestId, getByRole, getByTestId } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Characters />
        </Provider>
      </BrowserRouter>,
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
      type: 'application/setLoading',
      payload: false,
    });

    mockStore.dispatch({
      type: 'characters/setCharacters',
      payload: array,
    });

    mockStore.dispatch({
      type: 'characters/setPagination',
      payload: {
        page: 1,
        totalPages: 2,
      },
    });

    await waitFor(() => {
      expect(getByTestId('test-list-cards')).toBeInTheDocument();
      expect(getAllByTestId('test-card-name')).toHaveLength(30);
      expect(getByRole('navigation')).toBeInTheDocument();
    });

    const pagination = getByRole('navigation');

    fireEvent.click(getByText(pagination, '2'));
    expect(getByText(pagination, '2')).toHaveClass('rounded-full');
  });

  test('Should call fetchCharacters when search input changes', async () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Provider store={mockStore}>
          <Characters />
        </Provider>
      </BrowserRouter>,
    );

    const searchInput = getByTestId('test-search-input');
    fireEvent.change(searchInput, { target: { value: 'Test' } });

    await waitFor(() => {
      expect(searchInput).toHaveValue('Test');
    });
  });
});
