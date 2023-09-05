

import React from 'react';
import Viewport from '../Viewport/Viewport';
import styles from './Grid.module.scss';

// Define the properties for the Grid component
interface GridProps {
  rows: number;
  columns: number;
  collapsed: boolean;
}

/**
 * Grid component that renders a grid of Viewport components based on the given
 * number of rows and columns. The grid can be in a collapsed or expanded state.
 */

const Grid: React.FC<GridProps> = ({ rows, columns, collapsed }) => {
  // Create an array of Viewport components to fill the grid
  const cells = Array.from({ length: rows * columns }, (_, i) => (
    <Viewport key={i} data-testid="viewport" />
  ));

  // Return the grid container with the cells as children
  return (
    <div
      // Apply the gridContainer styles and the expanded styles if not collapsed
      className={`${styles.gridContainer} ${!collapsed ? styles.expanded : ''} `}
      style={{
        '--rows': rows,
        '--columns': columns,
      }}
      data-testid="grid"

    >
      {cells}
    </div>
  );
};

export default Grid;