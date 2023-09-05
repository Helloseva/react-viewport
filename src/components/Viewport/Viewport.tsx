import React, { useState, useRef, useEffect } from 'react';
import styles from './Viewport.module.scss';

// Define the properties for the Viewport component
interface ViewportProps {
  className?: string;
}

/**
 * Viewport component that displays its dimensions (width and height) and updates
 * them when resized. The component accepts an optional className property to allow
 * for custom styling.
 */
const Viewport: React.FC<ViewportProps> = ({ className }) => {
  // State for storing the dimensions of the viewport
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const viewportRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Function to update the dimensions state based on the viewportRef's dimensions
    const updateDimensions = () => {
      if (viewportRef.current) {
        setDimensions({
          width: viewportRef.current.clientWidth,
          height: viewportRef.current.clientHeight,
        });
      }
    };

    // Create a ResizeObserver to listen for size changes of the viewportRef
    const resizeObserver = new ResizeObserver(updateDimensions);
    const currentRef = viewportRef.current;

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    updateDimensions();

    // Cleanup function: unobserve the current ref when the component is unmounted
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef);
      }
    };
  }, []);

  // Render the viewport with the dimensions displayed inside
  return (
    <div
      ref={viewportRef}
      className={`${styles.viewport} ${className}`}
      data-testid="viewport"
    >
      <div>
        {dimensions.width} x {dimensions.height}
      </div>
    </div>
  );
};

export default Viewport;