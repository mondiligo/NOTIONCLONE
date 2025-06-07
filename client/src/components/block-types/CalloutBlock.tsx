import React from 'react';
import { Block } from '../../lib/block-utils';

export default function CalloutBlock({ block }: { block: Block }) {
  return (
    <div style={{ borderLeft: '4px solid #aaa', padding: '0.5rem' }}>
      {block.content}
    </div>
  );
}
