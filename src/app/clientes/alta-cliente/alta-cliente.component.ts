import { Component, OnInit } from '@angular/core';
import { Cliente, Grupo } from './../clientes.model';
import { ClientesService } from './../clientes.service';
@Component({
  selector: 'app-alta-cliente',
  templateUrl: './alta-cliente.component.html',
  styleUrls: ['./alta-cliente.component.css']
})
export class AltaClienteComponent implements OnInit {

  cliente: Cliente;
  grupos: Grupo[];
  registrado = false
  constructor(private clientesService: ClientesService) { }
  

  ngOnInit() {
    this.cliente = this.clientesService.nuevoCliente();
    this.grupos = this.clientesService.getGrupos();
  }

  nuevoCliente(): void {
    this.clientesService.agregarCliente(this.cliente);
    this.cliente = this.clientesService.nuevoCliente();
    this.registrado=true; 
    setTimeout(()=>{this.registrado=false}, 1000)
  }
}
