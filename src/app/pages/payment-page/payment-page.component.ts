import { Component, OnInit } from '@angular/core';
import { StripeService } from '../../services/stripe.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css'],
})
export class PaymentPageComponent implements OnInit {
  constructor(private StripeService: StripeService) {}

  async redirectToCheckout() {
    var model = {
      priceId: environment.priceId,
    };

    await this.StripeService.redirectToCheckout(model);
  }

  ngOnInit(): void {}
}
