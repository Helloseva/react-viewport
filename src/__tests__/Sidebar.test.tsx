
import { render, fireEvent } from '@testing-library/react';
import Sidebar from '../components/Sidebar/Sidebar';

// Custom setup function for the Sidebar component
const setup = () => {
  const utils = render(<Sidebar />);
  const rowsInput = utils.getByLabelText('Rows');
  const columnsInput = utils.getByLabelText('Columns');
  const collapseExpandButton = utils.getByRole('button');
  return {
    ...utils,
    rowsInput,
    columnsInput,
    collapseExpandButton,
  };
};

// Test that the Sidebar component renders without any errors
test('renders Sidebar component without any errors', () => {
  const { container } = render(<Sidebar />);
  expect(container).toBeInTheDocument();
});

// Test that the Sidebar component renders Rows input, Columns input, and a collapse/expand button
test('renders Rows input, Columns input, and collapse/expand button', () => {
  const { rowsInput, columnsInput, collapseExpandButton } = setup();
  expect(rowsInput).toBeInTheDocument();
  expect(columnsInput).toBeInTheDocument();
  expect(collapseExpandButton).toBeInTheDocument();
});

// Test that the Rows input value updates correctly when changed within the allowed range (1-10)

test('updates Rows input value correctly when changed within the allowed range (1-10)', () => {
  const { rowsInput } = setup();
  fireEvent.change(rowsInput, { target: { value: '5' } });
  expect((rowsInput as HTMLInputElement).value).toBe('5');
});

// Test that the Columns input value updates correctly when changed within the allowed range (1-10)

test('updates the Columns input value correctly when changed within the allowed range (1-10)', () => {
  const { columnsInput } = setup();
  fireEvent.change(columnsInput, { target: { value: '7' } });
  expect((columnsInput as HTMLInputElement).value).toBe('7');
});

// Test that the Rows input value is prevented from going outside the allowed range (1-10)

test('prevents Rows input value from going outside the allowed range (1-10)', () => {
  const { rowsInput } = setup();
  fireEvent.change(rowsInput, { target: { value: '15' } });
  expect((rowsInput as HTMLInputElement).value).toBe('10');
});

// Test that the Columns input value is prevented from going outside the allowed range (1-10)

test('prevents Columns input value from going outside the allowed range (1-10)', () => {
  const { columnsInput } = setup();
  fireEvent.change(columnsInput, { target: { value: '-3' } });
  expect((columnsInput as HTMLInputElement).value).toBe('1');
});

// Test that the Sidebar state (collapsed or expanded) changes when the collapse/expand button is clicked
test('changes the Sidebar state (collapsed or expanded) when the collapse/expand button is clicked', () => {
  const { getByTestId, collapseExpandButton } = setup();
  const sidebar = getByTestId('sidebar');
  fireEvent.click(collapseExpandButton);
  expect(sidebar).toHaveClass('collapsed');
});

