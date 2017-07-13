import { Component } from '@angular/core';
import { ContatosDataBaseService } from './servicos/contatos-data-base.service';
import { ContatoModel } from './modelos/contato-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  providers: [ContatosDataBaseService]
})
export class AppComponent {
  title = 'app';

  contatoClicado: ContatoModel;

  constructor(private dataBaseService: ContatosDataBaseService) { }

  enviarDetalhe(id): void {
    console.log('AppComponent-  envando detalhes...');
    this.contatoClicado = this.dataBaseService.getContato(id);
  }

}
