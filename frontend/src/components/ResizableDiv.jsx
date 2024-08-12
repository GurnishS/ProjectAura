import React, { useState, useRef, useEffect } from 'react';

function ResizableDiv({ initialWidth = 200, children }) {
  const [width, setWidth] = useState(initialWidth);
  const [isResizing, setIsResizing] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isResizing) {
        const newWidth = e.clientX - containerRef.current.getBoundingClientRect().left;
        setWidth(newWidth > 100 ? newWidth : 100); // Ensure minimum width
      }
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };

    if (isResizing) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing]);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  return (
    <div
      ref={containerRef}
      className="relative bg-blue-500 text-white p-4 h-48"
      style={{ width: `${width}px` }}
    >
      {children}
      <span
        className="absolute inset-y-0 right-0 w-1 cursor-ew-resize bg-gray-300"
        onMouseDown={handleMouseDown}
      />
    </div>
  );
}

export default ResizableDiv;
