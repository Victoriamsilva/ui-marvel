import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import App from './App';

describe('App', () => {
  test('Should render App', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
