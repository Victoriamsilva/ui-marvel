import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ListCards from './list-cards';
import { BrowserRouter } from 'react-router-dom';

describe('List cards', () => {
  test('Should render ListCards component with feedback message only text', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <ListCards items={[]} feedBackMessage="onlyText" />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-feedback')).toBeInTheDocument();
  });

  test('Should render ListCards component with feedback message text and image', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <ListCards items={[]} feedBackMessage="textAndImage" />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-feedback-message')).toBeInTheDocument();
  });

  test('Should render ListCards component with cards', () => {
    const mockItems = [
      {
        id: 1,
        name: 'Name test',
        thumbnail: { path: 'path', extension: 'jpg' },
        description: 'Description test',
      },
    ];

    const { container, getByTestId } = render(
      <BrowserRouter>
        <ListCards items={mockItems} />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-list-cards')).toBeInTheDocument();
  });

  test('Should render ListCards component with loading', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <ListCards loading />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-loading')).toBeInTheDocument();
  });
});
