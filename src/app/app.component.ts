import { Component } from '@angular/core';
import { WebSocketService } from './web-socket.service'



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
  socket:WebSocketService;

  constructor(socket:WebSocketService = new WebSocketService){
    this.socket = socket;
  }
  ngOnInit(){
    
  }
  //counter = 1
  presion = (data) =>{
    console.log(data + typeof data)
    this.socket.emit("presionado", null)
    //console.log('enviar');
    this.socket.emit('changeGrid', data)
    //this.counter = this.counter +1;
   }
  
}

 
