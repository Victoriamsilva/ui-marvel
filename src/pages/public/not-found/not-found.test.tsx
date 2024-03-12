import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import NotFound from './not-found';

describe('Not found', () => {
  test('Should render Feedback message component', () => {
    const { container, getByTestId } = render(<NotFound />);

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-feedback-message')).toBeInTheDocument();
  });
});
