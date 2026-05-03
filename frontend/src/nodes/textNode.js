// textNode.js

import { useState, useRef, useEffect, useMemo } from 'react';
import { Position, useUpdateNodeInternals } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useStore } from '../store';

const VARIABLE_REGEX = /{{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*}}/g;

const extractVariableNames = (text) => {
  const matches = [...text.matchAll(VARIABLE_REGEX)].map((match) => match[1]);
  return [...new Set(matches)];
};

export const TextNode = ({ id, data }) => {
  const [currText, setCurrText] = useState(data?.text || '{{input}}');
  const textareaRef = useRef(null);
  const updateNodeInternals = useUpdateNodeInternals();
  const updateTextNode = useStore((state) => state.updateTextNode);

  const uniqueVariables = useMemo(() => extractVariableNames(currText), [currText]);
  const variableHandles = useMemo(
    () =>
      uniqueVariables.map((variable, idx) => ({
        type: 'target',
        position: Position.Left,
        id: `${id}-var-${variable}`,
        style: { top: `${((idx + 1) * 100) / (uniqueVariables.length + 1)}%` },
      })),
    [id, uniqueVariables]
  );

  const allHandles = useMemo(
    () => [...variableHandles, { type: 'source', position: Position.Right, id: `${id}-output` }],
    [id, variableHandles]
  );

  const handleTextChange = (e) => {
    const nextText = e.target.value;
    setCurrText(nextText);
    updateTextNode(id, nextText, extractVariableNames(nextText));
  };

  useEffect(() => {
    if (textareaRef.current) {
      // Reset dimensions to allow shrinking
      textareaRef.current.style.height = '40px';
      textareaRef.current.style.width = '150px';

      // Set to scroll dimensions
      const scrollHeight = textareaRef.current.scrollHeight;
      const scrollWidth = textareaRef.current.scrollWidth;

      textareaRef.current.style.height = `${scrollHeight}px`;
      textareaRef.current.style.width = `${Math.max(150, scrollWidth)}px`;
    }
  }, [currText]);

  useEffect(() => {
    updateNodeInternals(id);
  }, [id, updateNodeInternals, variableHandles]);

  useEffect(() => {
    updateTextNode(id, currText, uniqueVariables);
  }, [currText, id, uniqueVariables, updateTextNode]);

  return (
    <BaseNode
      id={id}
      title="Text"
      handles={allHandles}
    >
      <label className="flex flex-col gap-1">
        <span>Text:</span>
        <textarea 
          ref={textareaRef}
          value={currText} 
          onChange={handleTextChange} 
          className="bg-slate-900/50 border border-slate-700 rounded p-1.5 text-slate-200 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 resize-none overflow-hidden whitespace-pre-wrap break-words"
          style={{ minHeight: '40px', minWidth: '150px' }}
        />
      </label>
    </BaseNode>
  );
}
