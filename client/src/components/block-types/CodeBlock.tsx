import React from 'react';
import { Block } from '../../lib/block-utils';

export default function CodeBlock({
  block,
  onChange,
}: {
  block: Block;
  onChange: (text: string) => void;
}) {
  return (
    <pre style={{ background: '#f0f0f0', padding: '1rem' }}>
      <code
        contentEditable
        suppressContentEditableWarning
        onBlur={(e) => onChange(e.currentTarget.textContent || '')}
      >
        {block.content}
      </code>
    </pre>
  );
}
