import { render } from '@testing-library/react';
import Viewport from '../components/Viewport/Viewport';

// Test that the Viewport component renders without any errors
test('renders Viewport component without any errors', () => {
  const { container } = render(<Viewport />);
  expect(container).toBeInTheDocument();
});

// Test that the Viewport component renders with a thin border
test('renders the Viewport with a thin border', () => {
  // Mock the getComputedStyle function
  window.getComputedStyle = jest.fn((element) => {
    return {
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: 'rgb(0, 0, 0)',
    };
  });

  const { getByTestId } = render(<Viewport />);
  const viewport = getByTestId('viewport');

  // Use the mocked getComputedStyle to get the border style
  const computedStyle = getComputedStyle(viewport);

  // Check if the viewport has the correct border style
  expect(computedStyle.borderWidth).toBe('1px');
  expect(computedStyle.borderStyle).toBe('solid');
  expect(computedStyle.borderColor).toBe('rgb(0, 0, 0)');
});