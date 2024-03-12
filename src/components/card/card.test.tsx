import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Card from './card';

describe('Card', () => {
  test('Should render Card component with name, image and description', () => {
    const { container, getAllByTestId } = render(<Card name="Name Test" image="test" description="Description Test" />);
    expect(container).toBeInTheDocument();
    expect(getAllByTestId('test-card-image')).toHaveLength(1);
    expect(getAllByTestId('test-card-name')).toHaveLength(1);
    expect(getAllByTestId('test-card-description')).toHaveLength(1);
  });

  test('Should render Card component with clickable', () => {
    const mockOnClick = vi.fn();

    const { getByTestId } = render(
      <Card name="Name Test" image="test" description="Description Test" clickable={true} onClick={mockOnClick} />,
    );

    expect(getByTestId('test-card')).toHaveClass('cursor-pointer');
    fireEvent.click(getByTestId('test-card'));
    expect(mockOnClick).toHaveBeenCalled();
  });
});
