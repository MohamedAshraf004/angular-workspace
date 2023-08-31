import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent {
allowedAddServer = false;
serverId = 5;
status : string = 'Active';
creatioStatus = "No Creation";
constructor(){
  setTimeout(()=>{
    this.allowedAddServer = true
  },2000)
}

getServerStatus() : string{
return this.status;
}

onServerCreationStatus(){
  this.creatioStatus = "Created";  
}
}
