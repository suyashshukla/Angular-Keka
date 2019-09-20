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
import { HttpClientModule, HttpClientJsonpModule} from '@angular/common/http';
import { ShippingComponent } from './shipping/shipping.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { TabsComponent } from './tabs/tabs.component';
import { TabService } from './tab.service';
import { CardsComponent } from './cards/cards.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { DataComponent } from './data/data.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ClassifiedsComponent } from './classifieds/classifieds.component';
import { CameraComponent } from './camera/camera.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: MainScreenComponent },
      {path : 'products/:productId', component : DetailsComponent},
      {path: 'cart', component : CartComponent},
      {path : 'shipping',component : ShippingComponent},
      {path : 'inbox', component : DataComponent},
      {path : 'classifieds', component : MainScreenComponent},
      {path : 'my classifieds', component : ProfileComponent},
      {path : 'pictures', component : CameraComponent},
      {path : 'admin',component : HomeComponent}
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
    CardsComponent,
    SideBarComponent,
    DataComponent,
    HomeComponent,
    ProfileComponent,
    ClassifiedsComponent,
    CameraComponent
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