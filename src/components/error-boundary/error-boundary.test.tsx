import { expect, test, vi, describe } from 'vitest';
import ErrorBoundary from './error-boundary';
import { getByText, render } from '@testing-library/react';

describe('ErrorBoundary', () => {
  test('Should render children when there is no error', () => {
    const wrapper = render(
      <ErrorBoundary>
        <div>Test Children</div>
      </ErrorBoundary>,
    );

    expect(getByText(wrapper.container, 'Test Children')).toBeInTheDocument();
  });

  test('Should render error message when there is an error', () => {
    const ErrorComponent = () => {
      throw new Error('Test Error');
    };

    const wrapper = render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(getByText(wrapper.container, 'Desculpe... Ocorreu um erro')).toBeInTheDocument();
  });

  test('Should log error to console', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});

    const ErrorComponent = () => {
      throw new Error('Test Error');
    };

    render(
      <ErrorBoundary>
        <ErrorComponent />
      </ErrorBoundary>,
    );

    expect(errorSpy).toHaveBeenCalled();

    errorSpy.mockRestore();
  });
});
