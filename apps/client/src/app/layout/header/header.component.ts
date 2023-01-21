import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'nx-kanban-board-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule, MatToolbarModule],
})
export class HeaderComponent {}
