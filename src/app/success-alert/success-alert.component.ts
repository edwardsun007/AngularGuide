import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  // styleUrls: ['./success-alert.component.css']
  styles: [
    `
      p {
        padding: 20px;
        width: 300px;
        background-color: lightgreen;
        border: 1px solid white;
      }
    `
  ]
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
