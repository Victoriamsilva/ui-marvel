import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import FeedbackMessage from './feedback-message';

describe('Feedback message', () => {
  test('Should render FeedbackMessage component with message and image', () => {
    const { container, getByTestId } = render(<FeedbackMessage message="Test message" image="path" />);

    expect(container).toBeInTheDocument();
    expect(getByTestId('test-feedback-message')).toBeInTheDocument();
    expect(getByTestId('test-feedback-message-message')).toBeInTheDocument();
    expect(getByTestId('test-feedback-message-image')).toBeInTheDocument();
  });
});
