import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ScreenComponent } from './screen/screen.component';
import { PanelComponent } from './panel/panel.component';
import { LedComponent } from './led/led.component';

@NgModule({
  declarations: [
    AppComponent,
    ScreenComponent,
    PanelComponent,
    LedComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
