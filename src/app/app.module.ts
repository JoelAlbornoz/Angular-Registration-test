import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClientesModule } from './clientes/clientes.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebSocketService } from './web-socket.service';
import { GridComponent } from './grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClientesModule
  ],
  providers: [WebSocketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
