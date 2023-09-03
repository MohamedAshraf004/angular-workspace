import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css'],
  styles: [
    `
      .online : {
        color : white;      
      }
    `
  ]
})
export class ServerComponent {   
  
  serverId : number = 15; 
  status : string = 'online';
  constructor(){
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
  }
    
    getColor(){
      return this.status === 'online' ? 'green' : 'red';
    }
    getServerStatus() : string{
    return this.status;
    }    
}