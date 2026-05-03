// timerNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TimerNode = ({ id, data }) => {
  const [delay, setDelay] = useState(data?.delay || 1000);

  return (
    <BaseNode
      id={id}
      title="Timer (Delay)"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-input` },
        { type: 'source', position: Position.Right, id: `${id}-output` }
      ]}
    >
      <label className="flex flex-col gap-1">
        <span>Delay (ms):</span>
        <input 
          type="number" 
          value={delay} 
          onChange={(e) => setDelay(Number(e.target.value))} 
          className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </label>
    </BaseNode>
  );
}
