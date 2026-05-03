// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, style, title, handles = [], children }) => {
  return (
    <div style={{ width: 200, height: 80, border: '1px solid black', ...style }}>
      {handles.map((h, i) => (
        <Handle
          key={`${id}-handle-${i}`}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
        />
      ))}
      {title && (
        <div>
          <span>{title}</span>
        </div>
      )}
      <div>
        {children}
      </div>
    </div>
  );
};
