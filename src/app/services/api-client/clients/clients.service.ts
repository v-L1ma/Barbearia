import { Injectable } from '@angular/core';
import { IClientService } from './iclient.service';
import { Observable } from 'rxjs';
import { SaveClientRequest, SaveClientResponse, UpdateClientRequest, UpdateClientResponse, ListClientResponse, DetailClientResponse } from './client.models';

@Injectable({
  providedIn: 'root'
})
export class ClientsService implements IClientService{

  constructor() { }

  
  save(request: SaveClientRequest): Observable<SaveClientResponse> {
    throw new Error('Method not implemented.');
  }
  update(id: number, request: UpdateClientRequest): Observable<UpdateClientResponse> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Observable<void> {
    throw new Error('Method not implemented.');
  }
  list(): Observable<ListClientResponse[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Observable<DetailClientResponse> {
    throw new Error('Method not implemented.');
  }
}
