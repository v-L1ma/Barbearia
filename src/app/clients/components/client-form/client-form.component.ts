import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { NgxMaskDirective } from 'ngx-mask';
import { ClientModelForm } from '../../client.models';
import { FormsModule, NgForm } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-client-form',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    NgxMaskDirective
  ],
  templateUrl: './client-form.component.html',
  styleUrl: './client-form.component.scss'
})
export class ClientFormComponent {

  @Input() client: ClientModelForm = {id: 0, name: "", email: "", phone: ""}

  @Output() clientSubmited = new EventEmitter<ClientModelForm>();

  onSubmit(_: NgForm){
    this.clientSubmited.emit(this.client)
  }
}
