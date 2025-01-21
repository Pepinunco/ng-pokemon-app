import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ], // Declare the component here
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PokemonModule,
    RouterModule.forRoot(routes),
  ],     // Import necessary Angular modules
  bootstrap: [AppComponent],    // Bootstrap the root component
})
export class AppModule {}
