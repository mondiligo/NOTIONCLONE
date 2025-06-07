import React, { useState } from 'react';
import { Dataset, listDatasets } from '../lib/data-engine';

export default function DatasetSelector({ onSelect }: { onSelect: (id: string) => void }) {
  const [query, setQuery] = useState('');
  const datasets: Dataset[] = listDatasets().filter((ds) =>
    `${ds.name} ${ds.description}`
      .toLowerCase()
      .includes(query.toLowerCase())
  );
  return (
    <div style={{ border: '1px solid #ccc', background: '#fff', padding: '0.5rem', position: 'absolute' }}>
      <input
        autoFocus
        type="text"
        placeholder="Search datasets..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ width: '100%', marginBottom: '0.5rem' }}
      />
      {datasets.map((ds) => (
        <div
          key={ds.id}
          style={{ padding: '0.25rem 0', cursor: 'pointer' }}
          onClick={() => onSelect(ds.id)}
        >
          <div>{ds.name}</div>
          <small style={{ color: '#555' }}>{ds.description}</small>
        </div>
      ))}
    </div>
  );
}
