import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-server", // typescript-selector
  //selector: ".app-servers", // select by class
  templateUrl: "./server.component.html",
  styleUrls: ["./server.component.css"]
})
export class ServerComponent implements OnInit {
  serverStatus: string;

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? "online" : "offline";
  }

  getColor() {
    return this.serverStatus === "online" ? "green" : "red";
  }

  ngOnInit() {}
}
