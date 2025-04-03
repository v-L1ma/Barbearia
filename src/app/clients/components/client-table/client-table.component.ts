import { Component, EventEmitter, Input, input, Output, ViewChild } from '@angular/core';
import { ClientModelTable } from '../../client.models';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-client-table',
  imports: [MatTableModule],
  templateUrl: './client-table.component.html',
  styleUrl: './client-table.component.scss'
})
export class ClientTableComponent {

  @Input() clients: ClientModelTable[]=[]

  dataSource!: MatTableDataSource<ClientModelTable>

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColums: string[]=['name', 'email', 'phone', 'actions']

  private dialogManagerServiceSubscriptions?: Subscription

  @Output() confirmDelete = new EventEmitter<ClientModelTable>()

  @Output() requestUpdate = new EventEmitter<ClientModelTable>()
}
