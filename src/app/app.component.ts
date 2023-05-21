import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $: any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  //TOASTR NOTIFICATION
  /*constructor(private toastrService: CustomToastrService) {
    toastrService.message("Bu bilgidir!", "Bitch!", {
      messageType: ToastrMessageType.Info,
      position: ToastrPosition.TopCenter
    });
    toastrService.message("Aferin aslan parçası :)", "Bitch!", {
      messageType: ToastrMessageType.Success,
      position: ToastrPosition.TopLeft
    })
    toastrService.message("Hatalısın!!!", "Bitch!", {
      messageType: ToastrMessageType.Error,
      position: ToastrPosition.TopRight
    })
    toastrService.message("Dikkat et lan it!", "Bitch!", {
      messageType: ToastrMessageType.Warning,
      position: ToastrPosition.BottomCenter
    })
  }*/
  title = 'ETicaretClient';
  constructor() {
  }
}
//jquery ile endpoint'e browser tabanlı istek göndeririz.
$.get("https://localhost:7151/api/products", data => {
  console.log(data)
})
