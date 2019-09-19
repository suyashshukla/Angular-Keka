import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartService } from './cart.service';
import { DetailsComponent } from './details/details.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabService } from './tab.service';
import { CardsComponent } from './cards/cards.component'

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainScreenComponent },
      {path : 'products/:productId', component : DetailsComponent},
      {path: 'cart', component : CartComponent},
      {path : 'shipping',component : ShippingComponent}
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    DetailsComponent,
    CartComponent,
    ShippingComponent,
    MainScreenComponent,
    TabsComponent,
    CardsComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [CartService, TabService]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/