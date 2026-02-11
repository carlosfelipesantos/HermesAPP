import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-mobile-layout',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatBottomSheetModule
  ],
  template: `
    <mat-sidenav-container class="sidenav-container">
      <mat-sidenav #drawer class="sidenav" fixedInViewport
                   [attr.role]="'dialog'"
                   [mode]="'over'">
        <mat-toolbar class="sidenav-toolbar">
          <span>Hermes Frete</span>
        </mat-toolbar>
        
        <mat-nav-list>
          <a mat-list-item routerLink="/dashboard" (click)="drawer.close()">
            <mat-icon>dashboard</mat-icon>
            <span>Dashboard</span>
          </a>
          <a mat-list-item routerLink="/freights" (click)="drawer.close()">
            <mat-icon>local_shipping</mat-icon>
            <span>Fretes</span>
          </a>
          <a mat-list-item routerLink="/tracking" (click)="drawer.close()">
            <mat-icon>pin_drop</mat-icon>
            <span>Rastreio</span>
          </a>
          <a mat-list-item routerLink="/profile" (click)="drawer.close()">
            <mat-icon>person</mat-icon>
            <span>Perfil</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>

      <mat-sidenav-content>
        <mat-toolbar class="mobile-toolbar">
          <button mat-icon-button (click)="drawer.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <span class="toolbar-title">Hermes</span>
          <span class="spacer"></span>
          <button mat-icon-button>
            <mat-icon>notifications</mat-icon>
          </button>
        </mat-toolbar>

        <main class="content">
          <router-outlet></router-outlet>
        </main>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [`
    .sidenav-container {
      height: 100vh;
    }

    .sidenav {
      width: 280px;
    }

    .sidenav-toolbar {
      background: #3f51b5;
      color: white;
    }

    .mobile-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
      background: white;
      border-bottom: 1px solid rgba(0,0,0,0.12);
    }

    .toolbar-title {
      margin-left: 8px;
      font-size: 20px;
      font-weight: 500;
    }

    .spacer {
      flex: 1 1 auto;
    }

    .content {
      padding: 16px;
      min-height: calc(100vh - 64px);
    }

    mat-nav-list a {
      display: flex;
      align-items: center;
      gap: 16px;
      height: 48px;
    }
  `]
})
export class MobileLayoutComponent {}