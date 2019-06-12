import { Component, OnInit } from "@angular/core";

@Component({
  selector: ".app-servers", // select by class
  // inline template
  // template:`<app-server></app-server>`,
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverId = 10;
  serverStatus = "offline";
  serverName = "this server yo!";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverStatus = "server is created! Name is " + this.serverName;
  }

  onInputChange(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value; // type case to remove the error
  }

  ngOnInit() {}
}
