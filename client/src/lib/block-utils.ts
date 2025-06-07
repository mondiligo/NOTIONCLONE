export type Block = {
  id: string;
  type: string;
  content?: any;
};

export function createBlock(type: string, content?: any): Block {
  return { id: Math.random().toString(36).slice(2), type, content };
}

export function moveBlock(blocks: Block[], from: number, to: number) {
  const updated = [...blocks];
  const [moved] = updated.splice(from, 1);
  updated.splice(to, 0, moved);
  return updated;
}

export function removeBlock(blocks: Block[], index: number) {
  return blocks.filter((_, i) => i !== index);
}
