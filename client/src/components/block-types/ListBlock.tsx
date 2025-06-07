import React from 'react';
import { Block } from '../../lib/block-utils';

export default function ListBlock({ block }: { block: Block }) {
  const items: string[] = block.content || [];
  return (
    <ul>
      {items.map((item, idx) => (
        <li key={idx}>{item}</li>
      ))}
    </ul>
  );
}
