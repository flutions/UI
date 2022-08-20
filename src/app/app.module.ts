import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { BannerComponent } from './body/banner/banner.component';
import { ProcessComponent } from './body/process/process.component';
import { DevelopmentComponent } from './body/development/development.component';
import { TechnicalComponent } from './body/technical/technical.component';
import { ConsultingComponent } from './body/consulting/consulting.component';
import { ExpertiseComponent } from './body/expertise/expertise.component';
import { InquiryComponent } from './body/inquiry/inquiry.component';
import { TeamComponent } from './body/team/team.component';
import { HomeContactComponent } from './body/home-contact/home-contact.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MAT_FORM_FIELD } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    BannerComponent,
    ProcessComponent,
    DevelopmentComponent,
    TechnicalComponent,
    ConsultingComponent,
    ExpertiseComponent,
    InquiryComponent,
    TeamComponent,
    HomeContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
