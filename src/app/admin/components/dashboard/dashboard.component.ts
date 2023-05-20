import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
//import { delay } from 'rxjs';
//import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit {
  //constructor(private alertify: AlertifyService) { } deneme kodu
  constructor(spinner: NgxSpinnerService){
    super(spinner);
  }

  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom)
  }

  /* Alertify Deneme kodları
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
