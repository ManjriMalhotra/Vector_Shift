// noteNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'Type your note here...');

  return (
    <div className="w-56 bg-amber-100/90 backdrop-blur-md border border-amber-400 rounded-lg shadow-xl overflow-hidden flex flex-col min-h-[100px] p-2">
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        className="w-full h-full min-h-[80px] bg-transparent border-none resize-none text-amber-900 placeholder-amber-700/50 focus:outline-none text-sm font-medium"
        placeholder="Type your note here..."
      />
    </div>
  );
}
