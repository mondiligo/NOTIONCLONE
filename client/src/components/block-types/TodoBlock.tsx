import React from 'react';
import { Block } from '../../lib/block-utils';

export default function TodoBlock({ block }: { block: Block }) {
  const todos: { text: string; done: boolean }[] = block.content || [];
  return (
    <ul>
      {todos.map((t, idx) => (
        <li key={idx} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
          <input type="checkbox" checked={t.done} readOnly /> {t.text}
        </li>
      ))}
    </ul>
  );
}
