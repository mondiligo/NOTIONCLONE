import React from 'react';
import { Block } from '../../lib/block-utils';

export default function QuoteBlock({ block }: { block: Block }) {
  return <blockquote style={{ borderLeft: '4px solid #ccc', margin: 0, paddingLeft: '0.5rem' }}>{block.content}</blockquote>;
}
