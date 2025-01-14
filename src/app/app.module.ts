import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent], // Declare the component here
  imports: [BrowserModule],     // Import necessary Angular modules
  bootstrap: [AppComponent],    // Bootstrap the root component
})
export class AppModule {}
