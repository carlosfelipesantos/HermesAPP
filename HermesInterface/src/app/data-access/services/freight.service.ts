import { Injectable } from '@angular/core';
import { Freight } from '../models/freight.model';

@Injectable({ providedIn: 'root' })
export class FreightService {
  async list(): Promise<Freight[]> {
    const now = new Date().toISOString();
    return [
      { id: 'FR-2001', originCity: 'São Paulo', destinationCity: 'Rio de Janeiro', status: 'InProgress', price: 1250, createdAt: now },
      { id: 'FR-2000', originCity: 'Belo Horizonte', destinationCity: 'Campinas', status: 'Done', price: 980, createdAt: now },
      { id: 'FR-1999', originCity: 'Curitiba', destinationCity: 'Joinville', status: 'Canceled', price: 430, createdAt: now },
      { id: 'FR-1998', originCity: 'Salvador', destinationCity: 'Aracaju', status: 'Draft', price: 710, createdAt: now },
    ];
  }
}
