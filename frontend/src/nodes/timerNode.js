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
      <label>
        Delay (ms):
        <input 
          type="number" 
          value={delay} 
          onChange={(e) => setDelay(Number(e.target.value))} 
          style={{ width: '60px' }}
        />
      </label>
    </BaseNode>
  );
}
