// inputNode.js

import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [currName, setCurrName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [inputType, setInputType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setCurrName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setInputType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      title="Input"
      handles={[{ type: 'source', position: Position.Right, id: `${id}-value` }]}
    >
      <label className="flex flex-col gap-1">
        <span>Name:</span>
        <input 
          type="text" 
          value={currName} 
          onChange={handleNameChange} 
          className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
        />
      </label>
      <label className="flex flex-col gap-1">
        <span>Type:</span>
        <select value={inputType} onChange={handleTypeChange} className="w-full bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500">
          <option value="Text">Text</option>
          <option value="File">File</option>
        </select>
      </label>
    </BaseNode>
  );
}
