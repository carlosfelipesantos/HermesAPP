import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Freight } from '../../data-access/models/freight.model';
import { FreightService } from '../../data-access/services/freight.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './freights-list.component.html',
  styleUrls: ['./freights-list.component.css'],
})
export class FreightsListComponent {
  private service = inject(FreightService);

  loading = true;
  query = '';
  status: 'All' | Freight['status'] = 'All';

  freights: Freight[] = [];

  async ngOnInit() {
    this.freights = await this.service.list();
    this.loading = false;
  }

  get filtered() {
    const q = this.query.trim().toLowerCase();

    return this.freights.filter(f => {
      const matchQuery =
        !q ||
        f.id.toLowerCase().includes(q) ||
        f.originCity.toLowerCase().includes(q) ||
        f.destinationCity.toLowerCase().includes(q);

      const matchStatus = this.status === 'All' || f.status === this.status;
      return matchQuery && matchStatus;
    });
  }

  money(v: number) {
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  formatMoney(v?: number) {
    return this.money(v ?? 0);
  }
}
