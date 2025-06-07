import React from 'react';
import { Block } from '../../lib/block-utils';

export default function TableBlock({ block }: { block: Block }) {
  const rows: any[][] = block.content || [];
  return (
    <table border={1} cellPadding={4} cellSpacing={0}>
      <tbody>
        {rows.map((row, idx) => (
          <tr key={idx}>
            {row.map((cell, cidx) => (
              <td key={cidx}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
