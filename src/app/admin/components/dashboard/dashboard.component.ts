import { Component, OnInit } from '@angular/core';
//import { delay } from 'rxjs';
//import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor(){}
//  constructor(private alertify: AlertifyService) { } deneme kodu

  ngOnInit(): void {
    
  }

  /* Deneme kodları
  m(){
    this.alertify.message("I will dominate you Bitch", {
      messageType: MessageType.Success,
      delay : 5,
      position : Position.TopCenter
    })
  } 

  d(){
    this.alertify.dismiss()
  } */

}
