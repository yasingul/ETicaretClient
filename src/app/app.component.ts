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
  title = 'ETicaretClient';
  //TOASTR NOTIFICATION
  constructor(private toastrService: CustomToastrService) {
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
  }
}
