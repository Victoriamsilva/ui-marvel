import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Search from './search';

describe('Search', () => {
  test('Should render Search component and fire change event', () => {
    const mockChange = vi.fn();

    const { container, getAllByTestId, getByTestId } = render(<Search change={mockChange} initialValue="" />);

    expect(container).toBeInTheDocument();
    expect(getAllByTestId('test-search')).toHaveLength(1);

    fireEvent.change(getByTestId('test-search-input'), {
      target: { value: 'spider' },
    });

    expect(mockChange).toHaveBeenCalled();
  });
});
