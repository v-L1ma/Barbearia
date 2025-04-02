import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { IClientService } from '../../services/api-client/clients/iclient.service';
import { SERVICES_TOKEN } from '../../services/service.token';
import { ClientsService } from '../../services/api-client/clients/clients.service';
import { ClientFormComponent } from "../components/client-form/client-form.component";
import { SnackbarManagerService } from '../../services/snackbar-manager.service';
import { ISnackbarManagerService } from '../../services/isnaskbar-manager.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ClientModelForm } from '../client.models';

@Component({
  selector: 'app-edit-client',
  imports: [ClientFormComponent],
  templateUrl: './edit-client.component.html',
  styleUrl: './edit-client.component.scss',
  providers:[
      {provide: SERVICES_TOKEN.HTTP.CLIENT, useClass: ClientsService},
      {provide: SERVICES_TOKEN.SNACKBAR, useClass: SnackbarManagerService}
    ]
})
export class EditClientComponent implements OnInit, OnDestroy{

  private httpSubscription?: Subscription[]=[]

  client: ClientModelForm = {id: 0,name: '', email:'', phone:''}

  constructor(
    @Inject(SERVICES_TOKEN.HTTP.CLIENT) private readonly httpService: IClientService,
    @Inject(SERVICES_TOKEN.SNACKBAR)private readonly snackBarManager:ISnackbarManagerService,
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
){}

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id')
    if(!id){
      this.snackBarManager.show('Erro ao recuperar informações do cliente')
      this.router.navigate(['clients/list'])
      return
    }
    this.httpSubscription?.push(this.httpService.findById(Number(id)).subscribe(data=> this.client = data))
  }
  ngOnDestroy(): void {
    this.httpSubscription?.forEach(s => s.unsubscribe())
  } 

  onSubmitClient(value: ClientModelForm){
    const {id, ...request} = value;
    if(id){
      this.httpSubscription?.push( this.httpService.update(id,request).subscribe(_=>{
        this.snackBarManager.show('Usuario cadastrado com sucesso')
        this.router.navigate(['clients/list'])
      }))
      return
    }
    this.snackBarManager.show('Um erro inesperado aconteceu')
    this.router.navigate(['clients/list'])
  }

}
