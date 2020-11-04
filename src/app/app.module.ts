import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinkUniversitiesComponent } from './link-universities/link-universities.component';
import { LinkExpiriencesComponent } from './link-expiriences/link-expiriences.component';
import { LinkFAQsComponent } from './link-faqs/link-faqs.component';
import { LinkBlogComponent } from './link-blog/link-blog.component';
import { LinkContactUsComponent } from './link-contact-us/link-contact-us.component';
import { LinkAllApartmentsComponent } from './link-all-apartments/link-all-apartments.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkUniversitiesComponent,
    LinkExpiriencesComponent,
    LinkFAQsComponent,
    LinkBlogComponent,
    LinkContactUsComponent,
    LinkAllApartmentsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
