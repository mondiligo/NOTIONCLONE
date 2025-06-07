import React, { useState } from 'react';
import CommandPalette from './CommandPalette';
import DatasetSelector from './DatasetSelector';
import { Block, createBlock, moveBlock, removeBlock } from '../lib/block-utils';
import ParagraphBlock from './block-types/ParagraphBlock';
import HeadingBlock from './block-types/HeadingBlock';
import ListBlock from './block-types/ListBlock';
import TodoBlock from './block-types/TodoBlock';
import CodeBlock from './block-types/CodeBlock';
import TableBlock from './block-types/TableBlock';
import CalloutBlock from './block-types/CalloutBlock';
import DynamicTableBlock from './block-types/DynamicTableBlock';
import QuoteBlock from './block-types/QuoteBlock';
import DividerBlock from './block-types/DividerBlock';

export default function BlockEditor() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [showPalette, setShowPalette] = useState(false);
  const [selectDataset, setSelectDataset] = useState(false);

  const updateContent = (id: string, content: any) => {
    setBlocks(blocks.map((b) => (b.id === id ? { ...b, content } : b)));
  };

  const handleMoveUp = (index: number) => {
    if (index === 0) return;
    setBlocks(moveBlock(blocks, index, index - 1));
  };

  const handleMoveDown = (index: number) => {
    if (index === blocks.length - 1) return;
    setBlocks(moveBlock(blocks, index, index + 1));
  };

  const handleRemove = (index: number) => {
    setBlocks(removeBlock(blocks, index));
  };

  const renderBlock = (block: Block, index: number) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <ParagraphBlock
            block={block}
            onChange={(c) => updateContent(block.id, c)}
          />
        );
      case 'heading':
        return (
          <HeadingBlock
            block={block}
            onChange={(c) => updateContent(block.id, c)}
          />
        );
      case 'list':
        return <ListBlock block={block} />;
      case 'todo':
        return <TodoBlock block={block} />;
      case 'code':
        return (
          <CodeBlock
            block={block}
            onChange={(c) => updateContent(block.id, c)}
          />
        );
      case 'table':
        return <TableBlock block={block} />;
      case 'callout':
        return (
          <CalloutBlock
            block={block}
            onChange={(c) => updateContent(block.id, c)}
          />
        );
      case 'quote':
        return (
          <QuoteBlock
            block={block}
            onChange={(c) => updateContent(block.id, c)}
          />
        );
      case 'divider':
        return <DividerBlock block={block} />;
      case 'dynamic-table':
        return <DynamicTableBlock block={block} />;
      default:
        return null;
    }
  };

  const handleSelect = (type: string) => {
    if (type === 'dynamic-table') {
      setShowPalette(false);
      setSelectDataset(true);
      return;
    }
    const newBlock = createBlock(type, '');
    setBlocks([...blocks, newBlock]);
    setShowPalette(false);
  };

  const handleDataset = (datasetId: string) => {
    const newBlock = createBlock('dynamic-table', datasetId);
    setBlocks([...blocks, newBlock]);
    setSelectDataset(false);
  };

  return (
    <div>
      {blocks.map((block, index) => (
        <div key={block.id} style={{ margin: '0.5rem 0', position: 'relative' }}>
          {renderBlock(block, index)}
          <div style={{ position: 'absolute', right: -40, top: 0 }}>
            <button onClick={() => handleMoveUp(index)}>↑</button>
            <button onClick={() => handleMoveDown(index)}>↓</button>
            <button onClick={() => handleRemove(index)}>x</button>
          </div>
        </div>
      ))}
      {showPalette && <CommandPalette onSelect={handleSelect} />}
      {selectDataset && <DatasetSelector onSelect={handleDataset} />}
      <button onClick={() => setShowPalette(!showPalette)}>+</button>
    </div>
  );
}
