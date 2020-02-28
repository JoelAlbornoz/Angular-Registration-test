import { Injectable } from '@angular/core';
import * as io from 'socket.io-client'


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
   url='https://jade-holistic-cirrus.glitch.me/';
   socket : any;
   grid : any;

  constructor() { 
    this.socket = io(this.url);
    
    this.socket.on('gridToClient', (grid) =>{
      this.grid = grid
    })

    this.socket.on('connect', ()=>{
      console.log("conectado")
      })
    
    this.socket.on("press", (io) => {
      console.log("boton presionado")
    })
    
    this.socket.on('refreshGrid', (grid) => {
      this.grid = grid
    })
  }

  
  emit = (event, data) => {
    this.socket.emit(event, data);
  }
}

