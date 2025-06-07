import React from 'react';
import { Block } from '../../lib/block-utils';

export default function CalloutBlock({
  block,
  onChange,
}: {
  block: Block;
  onChange: (text: string) => void;
}) {
  return (
    <div
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.textContent || '')}
      style={{ borderLeft: '4px solid #aaa', padding: '0.5rem' }}
    >
      {block.content}
    </div>
  );
}
