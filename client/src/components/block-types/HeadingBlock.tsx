import React from 'react';
import { Block } from '../../lib/block-utils';

export default function HeadingBlock({
  block,
  onChange,
}: {
  block: Block;
  onChange: (text: string) => void;
}) {
  return (
    <h2
      contentEditable
      suppressContentEditableWarning
      onBlur={(e) => onChange(e.currentTarget.textContent || '')}
      style={{ margin: 0 }}
    >
      {block.content}
    </h2>
  );
}
