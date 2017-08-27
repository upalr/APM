import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    //order matters here between ProductModule and AppRoutingModule because AppRouting module a weildcard ase
    ProductModule,
    AppRoutingModule
  ],
  // providers: [ProductGuardService], // Guard service shob shomy module level a register korte hoi beccause navigation a use hobe
  bootstrap: [AppComponent]
})
export class AppModule { }
