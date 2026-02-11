import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

// Angular Material Imports
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

interface Freight {
  id: string;
  origin: string;
  destination: string;
  status: 'pending' | 'in_transit' | 'delivered' | 'cancelled';
  value: number;
  weight: number;
  date: Date;
}

@Component({
  selector: 'app-freight-list',
  standalone: true, // Adicionado para compatibilidade com Angular 17+
  imports: [
    CommonModule,
    RouterLink,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
  ],
  template: `
    <div class="freight-container">
      <!-- Header -->
      <div class="header">
        <h1 class="page-title">Meus Fretes</h1>
        <button mat-fab extended color="primary" class="fab-button">
          <mat-icon>add</mat-icon>
          Novo Frete
        </button>
      </div>

      <!-- Search Bar -->
      <mat-form-field appearance="outline" class="full-width search-field">
        <mat-label>Buscar frete</mat-label>
        <input 
          matInput 
          placeholder="Número, origem ou destino" 
          (input)="onSearch($event)"
          #searchInput>
        <button 
          *ngIf="searchInput.value" 
          matSuffix 
          mat-icon-button 
          aria-label="Clear" 
          (click)="clearSearch(searchInput)">
          <mat-icon>close</mat-icon>
        </button>
        <mat-icon matSuffix>search</mat-icon>
      </mat-form-field>

      <!-- Filters -->
      <div class="filters-row">
        <mat-form-field appearance="outline" class="filter-select">
          <mat-label>Status</mat-label>
          <mat-select [(value)]="selectedStatus" (selectionChange)="onStatusChange()">
            <mat-option value="all">Todos</mat-option>
            <mat-option value="pending">Pendente</mat-option>
            <mat-option value="in_transit">Em trânsito</mat-option>
            <mat-option value="delivered">Entregue</mat-option>
          </mat-select>
        </mat-form-field>

        <button 
          mat-stroked-button 
          class="filter-button"
          [class.active]="showFilters"
          (click)="toggleFilters()">
          <mat-icon>filter_list</mat-icon>
          <span class="filter-text">Filtrar</span>
        </button>
      </div>

      <!-- Advanced Filters (expandable) -->
      <div class="advanced-filters" *ngIf="showFilters">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Data inicial</mat-label>
          <input matInput [matDatepicker]="startDate">
          <mat-datepicker-toggle matSuffix [for]="startDate"></mat-datepicker-toggle>
          <mat-datepicker #startDate></mat-datepicker>
        </mat-form-field>

        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Data final</mat-label>
          <input matInput [matDatepicker]="endDate">
          <mat-datepicker-toggle matSuffix [for]="endDate"></mat-datepicker-toggle>
          <mat-datepicker #endDate></mat-datepicker>
        </mat-form-field>

        <div class="filter-actions">
          <button mat-button color="warn" (click)="clearFilters()">
            <mat-icon>clear</mat-icon>
            Limpar
          </button>
          <button mat-raised-button color="primary" (click)="applyFilters()">
            <mat-icon>check</mat-icon>
            Aplicar
          </button>
        </div>
      </div>

      <!-- Results count -->
      <div class="results-count">
        <span>{{filteredFreights.length}} fretes encontrados</span>
      </div>

      <!-- Freight List -->
      <div class="freight-list">
        <mat-card 
          *ngFor="let freight of filteredFreights" 
          class="freight-card mobile-card"
          (click)="openFreightDetails(freight)">
          
          <mat-card-header>
            <mat-card-title-group>
              <mat-card-title>Frete #{{freight.id}}</mat-card-title>
              <mat-card-subtitle class="route-info">
                <mat-icon>place</mat-icon>
                <span class="route-text">{{freight.origin}} → {{freight.destination}}</span>
              </mat-card-subtitle>
              <span class="status-badge" [ngClass]="freight.status">
                {{getStatusText(freight.status)}}
              </span>
            </mat-card-title-group>
          </mat-card-header>

          <mat-card-content>
            <div class="freight-details">
              <div class="detail-item">
                <mat-icon>attach_money</mat-icon>
                <span>{{freight.value | currency:'BRL'}}</span>
              </div>
              <div class="detail-item">
                <mat-icon>scale</mat-icon>
                <span>{{freight.weight}} kg</span>
              </div>
              <div class="detail-item">
                <mat-icon>calendar_today</mat-icon>
                <span>{{freight.date | date:'dd/MM/yyyy'}}</span>
              </div>
            </div>
          </mat-card-content>

          <mat-card-actions align="end">
            <button mat-button color="primary" (click)="$event.stopPropagation()">
              <mat-icon>visibility</mat-icon>
              Detalhes
            </button>
            <button mat-button color="accent" (click)="$event.stopPropagation()">
              <mat-icon>track_changes</mat-icon>
              Rastrear
            </button>
          </mat-card-actions>
        </mat-card>
      </div>

      <!-- Loading State -->
      <div *ngIf="loading" class="loading-state">
        <mat-spinner diameter="40"></mat-spinner>
        <p>Carregando fretes...</p>
      </div>

      <!-- Empty State -->
      <div *ngIf="!loading && filteredFreights.length === 0" class="empty-state">
        <mat-icon class="empty-icon">local_shipping</mat-icon>
        <h3>Nenhum frete encontrado</h3>
        <p *ngIf="freights.length === 0">
          Clique em "Novo Frete" para começar
        </p>
        <p *ngIf="freights.length > 0">
          Nenhum frete corresponde aos filtros selecionados
        </p>
        <button 
          *ngIf="freights.length > 0" 
          mat-stroked-button 
          color="primary" 
          (click)="clearAllFilters()">
          <mat-icon>refresh</mat-icon>
          Limpar filtros
        </button>
      </div>
    </div>
  `,
  styles: [`
    .freight-container {
      padding-bottom: 80px;
      background: #f5f5f5;
      min-height: 100%;
    }

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
      padding: 8px 0;
    }

    .page-title {
      font-size: 24px;
      font-weight: 500;
      margin: 0;
      color: rgba(0,0,0,0.87);
    }

    .fab-button {
      border-radius: 28px;
      height: 48px;
      padding: 0 20px;
      font-size: 14px;
      
      @media (min-width: 600px) {
        height: 56px;
        padding: 0 24px;
      }
    }

    .fab-button mat-icon {
      margin-right: 8px;
    }

    .search-field {
      margin-bottom: 12px;
      width: 100%;
    }

    .filters-row {
      display: flex;
      gap: 12px;
      margin-bottom: 16px;
      align-items: center;
    }

    .filter-select {
      flex: 1;
      margin-bottom: -1.25em;
    }

    .filter-button {
      height: 56px;
      min-width: 48px;
      padding: 0 16px;
      
      &.active {
        background: #e8eaf6;
        border-color: #3f51b5;
        color: #3f51b5;
      }
    }

    .filter-text {
      display: none;
      
      @media (min-width: 600px) {
        display: inline;
        margin-left: 4px;
      }
    }

    .advanced-filters {
      background: white;
      border-radius: 8px;
      padding: 16px;
      margin-bottom: 16px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .filter-actions {
      display: flex;
      gap: 12px;
      justify-content: flex-end;
      margin-top: 8px;
    }

    .results-count {
      font-size: 14px;
      color: rgba(0,0,0,0.6);
      margin-bottom: 12px;
      padding: 0 4px;
    }

    .freight-card {
      margin-bottom: 16px;
      transition: all 0.2s ease;
      border-radius: 12px !important;
      cursor: pointer;
      
      &:active {
        transform: scale(0.99);
        background: #fafafa;
      }
    }

    .route-info {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-top: 4px;
    }

    .route-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 200px;
    }

    .status-badge {
      display: inline-block;
      padding: 4px 12px;
      border-radius: 16px;
      font-size: 12px;
      font-weight: 500;
      margin-top: 8px;
    }

    .status-badge.pending {
      background: #fff3e0;
      color: #e65100;
    }

    .status-badge.in_transit {
      background: #e3f2fd;
      color: #0d47a1;
    }

    .status-badge.delivered {
      background: #e8f5e9;
      color: #1b5e20;
    }

    .status-badge.cancelled {
      background: #ffebee;
      color: #b71c1c;
    }

    .freight-details {
      display: flex;
      gap: 20px;
      margin-top: 12px;
      flex-wrap: wrap;
    }

    .detail-item {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
      color: rgba(0,0,0,0.7);
    }

    .detail-item mat-icon {
      font-size: 18px;
      width: 18px;
      height: 18px;
      color: rgba(0,0,0,0.5);
    }

    mat-card-actions {
      padding: 8px 16px !important;
      border-top: 1px solid rgba(0,0,0,0.08);
      margin-top: 8px;
    }

    .loading-state, .empty-state {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 48px 24px;
      text-align: center;
      background: white;
      border-radius: 12px;
      margin-top: 24px;
    }

    .empty-icon {
      font-size: 64px;
      width: 64px;
      height: 64px;
      color: rgba(0,0,0,0.25);
      margin-bottom: 16px;
    }

    .empty-state h3 {
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 8px;
      color: rgba(0,0,0,0.7);
    }

    .empty-state p {
      color: rgba(0,0,0,0.5);
      margin-bottom: 16px;
    }
  `]
})
export class FreightListComponent {
  freights: Freight[] = [
    {
      id: 'FRT001',
      origin: 'São Paulo, SP',
      destination: 'Rio de Janeiro, RJ',
      status: 'in_transit',
      value: 1250.00,
      weight: 150,
      date: new Date()
    },
    {
      id: 'FRT002',
      origin: 'Belo Horizonte, MG',
      destination: 'Vitória, ES',
      status: 'pending',
      value: 890.00,
      weight: 75,
      date: new Date()
    },
    {
      id: 'FRT003',
      origin: 'Curitiba, PR',
      destination: 'Porto Alegre, RS',
      status: 'delivered',
      value: 2100.00,
      weight: 300,
      date: new Date('2024-01-15')
    }
  ];

  filteredFreights: Freight[] = [];
  loading = false;
  selectedStatus = 'all';
  showFilters = false;
  searchTerm = '';

  constructor() {
    this.filteredFreights = [...this.freights];
  }

  getStatusText(status: string): string {
    const statusMap: {[key: string]: string} = {
      'pending': 'Pendente',
      'in_transit': 'Em trânsito',
      'delivered': 'Entregue',
      'cancelled': 'Cancelado'
    };
    return statusMap[status] || status;
  }

  onSearch(event: Event): void {
    const value = (event.target as HTMLInputElement).value.toLowerCase();
    this.searchTerm = value;
    this.applyFilters();
  }

  clearSearch(input: HTMLInputElement): void {
    input.value = '';
    this.searchTerm = '';
    this.applyFilters();
  }

  onStatusChange(): void {
    this.applyFilters();
  }

  toggleFilters(): void {
    this.showFilters = !this.showFilters;
  }

  applyFilters(): void {
    this.filteredFreights = this.freights.filter(freight => {
      // Filtro de busca
      const matchesSearch = this.searchTerm === '' || 
        freight.id.toLowerCase().includes(this.searchTerm) ||
        freight.origin.toLowerCase().includes(this.searchTerm) ||
        freight.destination.toLowerCase().includes(this.searchTerm);

      // Filtro de status
      const matchesStatus = this.selectedStatus === 'all' || 
        freight.status === this.selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }

  clearFilters(): void {
    this.selectedStatus = 'all';
    this.showFilters = false;
  }

  clearAllFilters(): void {
    this.selectedStatus = 'all';
    this.searchTerm = '';
    this.showFilters = false;
    this.filteredFreights = [...this.freights];
  }

  openFreightDetails(freight: Freight): void {
    console.log('Abrindo detalhes do frete:', freight.id);
    // Aqui você vai navegar para a página de detalhes
    // this.router.navigate(['/freights', freight.id]);
  }
}