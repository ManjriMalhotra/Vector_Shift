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
      style={{ height: 100 }}
    >
      <label>
        If:
        <input 
          type="text" 
          value={condition} 
          onChange={(e) => setCondition(e.target.value)} 
          style={{ width: '100%' }}
        />
      </label>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px', fontSize: '10px' }}>
        <span>True (top)</span>
        <span>False (bot)</span>
      </div>
    </BaseNode>
  );
}
