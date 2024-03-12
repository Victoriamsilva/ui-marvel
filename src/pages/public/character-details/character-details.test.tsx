import { fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import CharacterDetails from './character-details';
import charactersReducer from '../../../services/state/characters/characters-slice';
import applicationReducer from '../../../services/state/application/application-slice';

describe('CharactersDetails', () => {
  const mockStore = configureStore({
    reducer: {
      characters: charactersReducer,
      application: applicationReducer,
    },
  });

  test('Should render character details correctly', async () => {
    const { getByText, getByTestId, container } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <CharacterDetails />
        </BrowserRouter>
      </Provider>,
    );

    mockStore.dispatch({
      type: 'application/setLoading',
      payload: false,
    });

    mockStore.dispatch({
      type: 'characters/setCharacter',
      payload: {
        id: 1,
        name: 'Test Character',
        description: 'Test description',
        thumbnail: {
          path: 'path',
          extension: '.jpg',
        },
      },
    });

    await waitFor(() => {
      expect(container).toBeInTheDocument();
      expect(getByTestId('test-character-details')).toBeInTheDocument();
      expect(getByText('Test Character')).toBeInTheDocument();
      expect(getByText('Test description')).toBeInTheDocument();
      expect(getByTestId('test-character-image')).toBeInTheDocument();
    });
  });

  test('Should render comics list correctly', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <CharacterDetails />
        </BrowserRouter>
      </Provider>,
    );

    mockStore.dispatch({
      type: 'characters/setComics',
      payload: [
        {
          id: 1,
          title: 'Test Comic',
          thumbnail: {
            path: 'path',
            extension: '.jpg',
          },
        },
      ],
    });

    await waitFor(() => {
      expect(getByTestId('test-list-cards')).toBeInTheDocument();
      expect(getByText('Test Comic')).toBeInTheDocument();
    });
  });

  test('Should render series list correctly', async () => {
    const { getByText, getByTestId } = render(
      <Provider store={mockStore}>
        <BrowserRouter>
          <CharacterDetails />
        </BrowserRouter>
      </Provider>,
    );

    mockStore.dispatch({
      type: 'characters/setSeries',
      payload: [
        {
          id: 1,
          title: 'Test Series',
          thumbnail: {
            path: 'path',
            extension: '.jpg',
          },
        },
      ],
    });

    fireEvent.focus(getByTestId('test-series-tab'));

    await waitFor(() => {
      expect(getByTestId('test-list-cards')).toBeInTheDocument();
      expect(getByText('Test Series')).toBeInTheDocument();
    });
  });
});
