import { render, screen } from "@testing-library/react";
import App from "../App";

// Test that the App component renders without any errors
test('renders App component without any errors', () => {
  const { container } = render(<App />);
  expect(container).toBeInTheDocument();
});

// Test that the App component integrates the Sidebar component correctly
test('integrates the Sidebar component correctly in the App', () => {
  render(<App />);
  const sidebarElement = screen.getByTestId('sidebar');
  // Check if the Sidebar component is in the document
  expect(sidebarElement).toBeInTheDocument();
});

// Test that the App component integrates the Grid component correctly
test('integrates the Grid component correctly in the App', () => {
  render(<App />);
  const gridElement = screen.getByTestId('grid');
  // Check if the Grid component is in the document
  expect(gridElement).toBeInTheDocument();
});

// Test that the App component integrates the Viewport component correctly
test('integrates the Viewport component correctly in the App', () => {
  render(<App />);
  const viewportElements = screen.getAllByTestId('viewport');
  // Check if there is at least one Viewport component in the document
  expect(viewportElements.length).toBeGreaterThan(0);
});