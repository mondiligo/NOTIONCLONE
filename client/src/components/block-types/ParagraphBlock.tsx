import React from 'react';
import { Block } from '../../lib/block-utils';

export default function ParagraphBlock({ block }: { block: Block }) {
  return <p>{block.content}</p>;
}
