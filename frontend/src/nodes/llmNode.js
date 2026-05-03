// llmNode.js

import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const LLMNode = ({ id, data }) => {
  return (
    <BaseNode
      id={id}
      title="LLM"
      handles={[
        { type: 'target', position: Position.Left, id: `${id}-system`, style: { top: `${100/3}%` } },
        { type: 'target', position: Position.Left, id: `${id}-prompt`, style: { top: `${200/3}%` } },
        { type: 'source', position: Position.Right, id: `${id}-response` }
      ]}
    >
      <div className="flex flex-col gap-2 text-slate-300">
        <span>This is a LLM.</span>
      </div>
    </BaseNode>
  );
}
