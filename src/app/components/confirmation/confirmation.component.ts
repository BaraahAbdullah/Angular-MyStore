import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { ConfirmationService } from '../../services/confirmation.service';
import { PaymentInfo } from '../../models/confirmation';
import { debugOutputAstAsTypeScript } from '@angular/compiler';
@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  paymentInfo: PaymentInfo = {
    fullName: '',
    address: '',
    creditCardNumber: '',
    total: 0,
  };
  
  @Output() public outputevent = new EventEmitter();


  showErrorMsg = true;

  constructor(private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this.paymentInfo = this.confirmationService.getConfirmation();

    if (this.paymentInfo.fullName !== '') {
      this.showErrorMsg = false;
    }
  }

  public eventoutput(){

  }
}
