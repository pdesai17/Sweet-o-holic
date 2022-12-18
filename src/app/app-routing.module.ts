import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainSectionComponent } from './main-section/main-section.component';
import { MyCartComponent } from './my-cart/my-cart.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [
  { path: '', component: TopBarComponent },
  { path: 'cart', component: MyCartComponent },
  { path: 'order-placed', component: OrderPlacedComponent },
  { path: 'prod-detail', component: ProductDetailsComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
