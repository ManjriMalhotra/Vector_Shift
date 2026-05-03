// textNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  const handleTextChange = (e) => {
    setCurrText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-output` }]}
    >
      <label className="flex flex-col gap-1">
        <span>Text:</span>
        <input 
          type="text" 
          value={currText} 
          onChange={handleTextChange} 
          className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </label>
    </BaseNode>
  );
}
