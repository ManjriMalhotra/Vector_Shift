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
    >
      <div className="flex flex-col gap-3">
        <label className="flex flex-col gap-1">
          <span>URL:</span>
          <input 
            type="text" 
            value={url} 
            onChange={(e) => setUrl(e.target.value)} 
            className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
          />
        </label>
        <label className="flex flex-col gap-1">
          <span>Method:</span>
          <select value={method} onChange={(e) => setMethod(e.target.value)} className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
            <option value="GET">GET</option>
            <option value="POST">POST</option>
            <option value="PUT">PUT</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
