import { ComponentsModule } from './components/components.module';
import { MaterialModule } from './material/material.module';
import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ComponentsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDihXJueJTHXA5FeRckdW2G6W1rIJkYxMw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
