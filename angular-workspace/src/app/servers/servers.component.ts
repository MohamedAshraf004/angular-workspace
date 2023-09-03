import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  allowedAddServer = false;
  allowedServers : string  = "Testing Server is allowed"
  serverId : number = Number.NaN;
  status : string = 'Active';
  creationStatus = "No Creation";
  serverName: string = ""
  serverCreated : boolean = false;
  servers = ['TestingServer', 'StagingServer'];
  serverIds : number[] = [];

  constructor(){
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(()=>{
      this.allowedAddServer = true
    },2000)
  }


  onServerCreationStatus(){
    this.serverCreated = true
    this.servers.push(this.serverName);
    this.serverIds.push(this.serverId)
    this.creationStatus = "Server Is Created! Server Name Is : " + this.serverName;  
  }
  onServerUpdateName(event:Event){
    let target =(<HTMLInputElement>event.target);
    this.serverName = target.value;
    console.log(target.value)
    
  }
}
