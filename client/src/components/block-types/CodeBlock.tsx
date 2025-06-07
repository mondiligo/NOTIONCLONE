import React from 'react';
import { Block } from '../../lib/block-utils';

export default function CodeBlock({ block }: { block: Block }) {
  return (
    <pre style={{ background: '#f0f0f0', padding: '1rem' }}>
      <code>{block.content}</code>
    </pre>
  );
}
