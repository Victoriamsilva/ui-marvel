import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Card from './card';

describe('Card', () => {
  test('Should render Card with name, image and description', () => {
    const { container, getAllByTestId } = render(
      <Card name="Name Test" image="https://picsum.photos/200/300" description="Description Test" />,
    );
    expect(container).toBeInTheDocument();
    expect(getAllByTestId('test-card-image')).toHaveLength(1);
    expect(getAllByTestId('test-card-name')).toHaveLength(1);
    expect(getAllByTestId('test-card-description')).toHaveLength(1);
  });
});
