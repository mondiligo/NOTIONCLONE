import React from 'react';

const commands = [
  { type: 'paragraph', label: 'Paragraph' },
  { type: 'heading', label: 'Heading' },
  { type: 'list', label: 'List' },
  { type: 'todo', label: 'To-do' },
  { type: 'code', label: 'Code' },
  { type: 'callout', label: 'Callout' },
  { type: 'table', label: 'Table' },
  { type: 'dynamic-table', label: 'Data Table' },
  { type: 'quote', label: 'Quote' },
  { type: 'divider', label: 'Divider' },
];

export default function CommandPalette({ onSelect }: { onSelect: (type: string) => void }) {
  return (
    <div style={{ border: '1px solid #ccc', background: '#fff', padding: '0.5rem', position: 'absolute' }}>
      {commands.map((cmd) => (
        <div key={cmd.type} style={{ padding: '0.25rem 0', cursor: 'pointer' }} onClick={() => onSelect(cmd.type)}>
          {cmd.label}
        </div>
      ))}
    </div>
  );
}
