// apiNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const APINode = ({ id, data }) => {
  const [url, setUrl] = useState(data?.url || 'https://api.example.com');
  const [method, setMethod] = useState(data?.method || 'GET');

  return (
    <BaseNode
      id={id}
      title="API Request"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-trigger` },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
      style={{ height: 120 }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label>
          URL:
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            style={{ width: '100%' }}
          />
        </label>
        <label>
          Method:
          <select value={method} onChange={(e) => setMethod(e.target.value)}>
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
