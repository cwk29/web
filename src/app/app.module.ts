import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

// Material UI
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

import { ContactFormComponent } from './contact-form/contact-form.component';
import { HeaderComponent } from './header/header.component';
import { CareersComponent } from './careers/careers.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { MessagesComponent } from './messages/messages.component';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    HeaderComponent,
    CareersComponent,
    HomeComponent,
    FooterComponent,
    MessagesComponent,
  ],
  imports: [
    ButtonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
