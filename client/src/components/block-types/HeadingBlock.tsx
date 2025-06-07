import React from 'react';
import { Block } from '../../lib/block-utils';

export default function HeadingBlock({ block }: { block: Block }) {
  return <h2>{block.content}</h2>;
}
