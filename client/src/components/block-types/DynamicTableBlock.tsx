import React from 'react';
import { Block } from '../../lib/block-utils';
import { getDataset } from '../../lib/data-engine';

export default function DynamicTableBlock({ block }: { block: Block }) {
  const datasetId: string = block.content;
  const dataset = getDataset(datasetId);

  if (!dataset) return <div>No data</div>;

  const keys = Object.keys(dataset.data[0] || {});

  return (
    <table border={1} cellPadding={4} cellSpacing={0}>
      <thead>
        <tr>
          {keys.map((k) => (
            <th key={k}>{k}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dataset.data.map((row, idx) => (
          <tr key={idx}>
            {keys.map((k) => (
              <td key={k}>{row[k]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
