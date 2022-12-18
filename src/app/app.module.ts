import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MainSectionComponent } from './main-section/main-section.component';
import { OffersComponent } from './offers/offers.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MyCartComponent } from './my-cart/my-cart.component';
import { AppRoutingModule } from './app-routing.module';
import { CartProductComponent } from './cart-product/cart-product.component';
import { OrderPlacedComponent } from './order-placed/order-placed.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderFormComponent } from './order-form/order-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainSectionComponent,
    OffersComponent,
    ProductsComponent,
    ProductComponent,
    FooterComponent,
    MyCartComponent,
    CartProductComponent,
    OrderPlacedComponent,
    PageNotFoundComponent,
    ProductDetailsComponent,
    OrderFormComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
