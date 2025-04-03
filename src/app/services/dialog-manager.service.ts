import { Injectable } from '@angular/core';
import { IDialogManagerService } from './idialog-manager.service';
import { ComponentType } from '@angular/cdk/overlay';
import { Observable } from 'rxjs';
import { YesNoDialogComponent } from '../commons/components/yes-no-dialog/yes-no-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogManagerService implements IDialogManagerService{

  constructor() { }
  showYesNoDialog(component: ComponentType<YesNoDialogComponent>, data: { title: string; content: string; }): Observable<any> {
    throw new Error('Method not implemented.');
  }
}
