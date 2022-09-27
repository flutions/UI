import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import {
  MatFormFieldModule,
  MAT_FORM_FIELD,
} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServiceBannerComponent } from './services/service-banner/service-banner.component';
import { ServiceWorkComponent } from './services/service-work/service-work.component';
import { ServiceFaqComponent } from './services/service-faq/service-faq.component';
import { MatIconModule } from '@angular/material/icon';
import { ContactBannerComponent } from './contactus/contact-banner/contact-banner.component';
import { ContactMainComponent } from './contactus/contact-main/contact-main.component';
import { HttpClientModule } from '@angular/common/http';

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
    HomeContactComponent,
    ServicesComponent,
    ContactusComponent,
    ServiceBannerComponent,
    ServiceWorkComponent,
    ServiceFaqComponent,
    ContactBannerComponent,
    ContactMainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    RouterModule.forRoot([
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: BodyComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contactus', component: ContactusComponent },
    ]),
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
