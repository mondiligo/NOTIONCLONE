import React from 'react';
import { Block } from '../../lib/block-utils';

export default function QuoteBlock({
  block,
  onChange,
}: {
  block: Block;
  onChange: (text: string) => void;
}) {
  return (
    <blockquote
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.textContent || '')}
      style={{ borderLeft: '4px solid #ccc', margin: 0, paddingLeft: '0.5rem' }}
    >
      {block.content}
    </blockquote>
  );
}
