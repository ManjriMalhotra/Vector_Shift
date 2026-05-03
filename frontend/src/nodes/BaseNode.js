// BaseNode.js

import { Handle, Position } from 'reactflow';

export const BaseNode = ({ id, style, title, handles = [], children }) => {
  return (
    <div 
      className="w-56 bg-slate-800/80 backdrop-blur-md border border-slate-600 rounded-lg shadow-xl overflow-hidden flex flex-col"
      style={style}
    >
      {handles.map((h, i) => (
        <Handle
          key={`${id}-handle-${i}`}
          type={h.type}
          position={h.position}
          id={h.id}
          style={h.style}
          className="react-flow__handle"
        />
      ))}
      {title && (
        <div className="bg-gradient-to-r from-indigo-500/30 to-purple-500/30 p-2 font-semibold text-slate-100 border-b border-slate-600/50 text-sm flex items-center justify-between">
          <span>{title}</span>
        </div>
      )}
      <div className="p-3 flex flex-col gap-3 text-slate-300 text-sm">
        {children}
      </div>
    </div>
  );
};
