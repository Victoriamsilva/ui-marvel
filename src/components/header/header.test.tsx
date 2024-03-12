import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import Header from './header';

describe('Header', () => {
  test('Should render Header component with logo image', () => {
    const { container, getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-header')).toBeInTheDocument();
    expect(getByTestId('test-header-logo')).toBeInTheDocument();
  });

  test('Should navigate to characters page when click on logo', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    fireEvent.click(getByTestId('test-header-logo'));
    expect(window.location.pathname).toBe('/characters');
  });
});
