export type Dataset = {
  id: string;
  name: string;
  description: string;
  data: Record<string, any>[];
};

export const datasets: Dataset[] = [
  {
    id: 'ventas-2024',
    name: 'Ventas de Productos 2024',
    description: 'Registros simples de productos vendidos',
    data: [
      { producto: 'Taza', unidades: 10, precio: 5.99, fecha: '2024-01-05' },
      { producto: 'Camiseta', unidades: 7, precio: 15.0, fecha: '2024-01-08' },
    ],
  },
  {
    id: 'inventario-2024',
    name: 'Inventario 2024',
    description: 'Listado de productos en stock',
    data: [
      { item: 'Libro', stock: 50, precio: 9.99 },
      { item: 'Bolígrafo', stock: 100, precio: 0.99 },
    ],
  },
];

export function listDatasets(): Dataset[] {
  return datasets;
}

export function getDataset(id: string): Dataset | undefined {
  return datasets.find((d) => d.id === id);
}
