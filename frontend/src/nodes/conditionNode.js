// conditionNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id, data }) => {
  const [condition, setCondition] = useState(data?.condition || 'x > 5');

  return (
    <BaseNode
      id={id}
      title="Condition"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-true`, style: { top: '33%' } },
        { type: 'source', position: Position.Right, id: `${id}-false`, style: { top: '66%' } }
      ]}
    >
      <label className="flex flex-col gap-1">
        <span>If:</span>
        <input 
          type="text" 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)} 
          className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 font-mono text-xs"
        />
      </label>
      <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium uppercase tracking-wider">
        <span>True (top)</span>
        <span>False (bot)</span>
      </div>
    </BaseNode>
  );
}
