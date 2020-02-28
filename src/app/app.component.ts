import { Component } from '@angular/core';
import * as io from 'socket.io-client'

var url='https://jade-holistic-cirrus.glitch.me/';
var socket = io(url);
socket.on('connect', ()=>{
  console.log("conectado")
})

socket.on("press", (io) => {
  console.log("boton presionado")
})

socket.on('refreshGrid', (data) => {
  console.log(data)
})

//var req = new XMLHttpRequest();
//req.open('GET', 'https://jade-holistic-cirrus.glitch.me/', true);
//req.onreadystatechange = function (aEvt) {
 // if (req.readyState == 4) {
 //    if(req.status == 200)
  //    console.log(req.responseText);
  //   else
  //    console.log("Error loading page\n");
//  }
//};
//req.send(null); 


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';


  presion(){
   socket.emit('presionado');
   console.log('enviar');
   socket.emit('changeGrid', [0,0])
  }
}

 
