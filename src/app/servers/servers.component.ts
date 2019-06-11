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

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {}
}
