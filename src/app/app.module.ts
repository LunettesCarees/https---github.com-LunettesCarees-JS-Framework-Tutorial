import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentPageComponent,
    SuccessPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
