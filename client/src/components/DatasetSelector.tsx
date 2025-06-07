import React from 'react';
import { Dataset, listDatasets } from '../lib/data-engine';

export default function DatasetSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const datasets: Dataset[] = listDatasets();
  return (
    <div style={{ border: '1px solid #ccc', background: '#fff', padding: '0.5rem', position: 'absolute' }}>
      {datasets.map((ds) => (
        <div key={ds.id} style={{ padding: '0.25rem 0', cursor: 'pointer' }} onClick={() => onSelect(ds.id)}>
          {ds.name}
        </div>
      ))}
    </div>
  );
}
