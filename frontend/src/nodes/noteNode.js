// noteNode.js

import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const NoteNode = ({ id, data }) => {
  const [note, setNote] = useState(data?.note || 'Type your note here...');

  return (
    <BaseNode
      id={id}
      title="Note"
      style={{ background: '#fef3c7', border: '1px solid #f59e0b', height: 100 }}
    >
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        style={{ width: '100%', height: '50px', border: 'none', background: 'transparent', resize: 'none' }}
      />
    </BaseNode>
  );
}
