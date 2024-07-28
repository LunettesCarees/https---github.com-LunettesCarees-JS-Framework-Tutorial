import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentPageComponent } from './pages/payment-page/payment-page.component';
import { SuccessPageComponent } from './pages/success-page/success-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'payment' },
  { path: 'payment', component: PaymentPageComponent },
  { path: 'success', component: SuccessPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
