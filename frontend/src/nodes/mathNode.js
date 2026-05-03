// mathNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const MathNode = ({ id, data }) => {
  const [operation, setOperation] = useState(data?.operation || 'Add');

  const handleOperationChange = (e) => {
    setOperation(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Math"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input1`, style: { top: '33%' } },
        { type: 'target', position: Position.Left, id: `${id}-input2`, style: { top: '66%' } },
        { type: 'source', position: Position.Right, id: `${id}-output` }
      ]}
    >
      <label className="flex flex-col gap-1">
        <span>Operation:</span>
        <select value={operation} onChange={handleOperationChange} className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
          <option value="Add">Add (+)</option>
          <option value="Subtract">Subtract (-)</option>
          <option value="Multiply">Multiply (*)</option>
          <option value="Divide">Divide (/)</option>
        </select>
      </label>
    </BaseNode>
  );
}
