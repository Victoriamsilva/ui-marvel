import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Loading from './loading';

describe('Card', () => {
  test('Should render Loading component', () => {
    const { getAllByTestId } = render(<Loading />);

    expect(getAllByTestId('test-loading')).toHaveLength(1);
  });
});
