import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Icon from './icon';

describe('Icon', () => {
  test('Should render Icon component', () => {
    const { container, getAllByTestId } = render(<Icon name="Search" />);

    expect(container).toBeInTheDocument();
    expect(getAllByTestId('test-icon')).toHaveLength(1);
  });
});
