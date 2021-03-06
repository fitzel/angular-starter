import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { LandingComponent } from './pages/landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './shared/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LandingComponent,
    LayoutComponent,
    FooterComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
