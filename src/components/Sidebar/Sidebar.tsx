import React, { useState } from 'react';
import Grid from '../Grid/Grid';
import styles from './Sidebar.module.scss';


/**
 * Sidebar component that allows users to control the number of rows and columns
 * in the grid. The sidebar can be collapsed or expanded using a toggle button.
 */
const Sidebar: React.FC = () => {
  const [rows, setRows] = useState(4);
  const [columns, setColumns] = useState(4);
  const [collapsed, setCollapsed] = useState(false);

  /**
   * Toggles the collapsed state of the sidebar.
   */

  const handleToggleSidebar = () => {
    setCollapsed(!collapsed);
  };

  /**
   * Handles changes to the input elements for rows and columns.
   * Validates and updates the input value based on the provided setter function (setValue).
   */

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<number>>
  ) => {
    const { value } = e.target;
    const parsedValue = parseInt(value, 10);

    // Validate and set the input value
    if (isNaN(parsedValue) || parsedValue < 1) {
      setValue(1);
    } else if (parsedValue > 10) {
      setValue(10);
    } else {
      setValue(parsedValue);
    }
  };

  return (
    <div>
      {/* Toggle button for collapsing or expanding the sidebar */}
      <button className={styles.toggleButton} onClick={handleToggleSidebar}>
        &#9776; { }
      </button>

      <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}
        data-testid="sidebar"
      >
        {/* Input group for controlling the number of rows */}
        <div className={styles.inputGroup}>
          <label htmlFor="rows" className={styles.label}>
            Rows
          </label>
          <input
            id="rows"
            type="number"
            min="1"
            max="10"
            value={rows}
            onChange={(e) => handleInputChange(e, setRows)}
          />
        </div>
        {/* Input group for controlling the number of columns */}
        <div className={styles.inputGroup}>
          <label htmlFor="columns" className={styles.label}>
            Columns
          </label>
          <input
            id="columns"
            type="number"
            min="1"
            max="10"
            value={columns}
            onChange={(e) => handleInputChange(e, setColumns)}
          />
        </div>
      </div>

      {/* Grid component that receives the number of rows, columns, and the collapsed state of the sidebar */}
      <Grid rows={rows} columns={columns} collapsed={collapsed} />

    </div>
  );
};

export default Sidebar;