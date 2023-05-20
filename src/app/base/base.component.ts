import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

//Kullanacağımız spinnerlar için base component hazırladık ve hepsini tek bir yere toplamış olduk.
export class BaseComponent {
  constructor(private spinner: NgxSpinnerService){}

  showSpinner(spinnerNameType: SpinnerType){
    this.spinner.show(spinnerNameType);
    setTimeout(()=> this.hideSpinner(spinnerNameType), 1000);
  }

  hideSpinner(spinnerNameType: SpinnerType){
    this.spinner.hide(spinnerNameType);
  }

}

export enum SpinnerType{
  BallAtom = "s1",
  BallScaleMultiple = "s2",
  BallSpinClockwiseFadeRotating = "s3"
}