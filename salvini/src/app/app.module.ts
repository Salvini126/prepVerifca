import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SecondoCompComponent } from './secondo-comp/secondo-comp.component';
import { TerzoCompComponent } from './terzo-comp/terzo-comp.component';
import { QuartoCompComponent } from './quarto-comp/quarto-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondoCompComponent,
    TerzoCompComponent,
    QuartoCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
