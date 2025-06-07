import React from 'react';
import { Block } from '../../lib/block-utils';

export default function ParagraphBlock({
  block,
  onChange,
}: {
  block: Block;
  onChange: (text: string) => void;
}) {
  return (
    <p
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.textContent || '')}
      style={{ margin: 0 }}
    >
      {block.content}
    </p>
  );
}
