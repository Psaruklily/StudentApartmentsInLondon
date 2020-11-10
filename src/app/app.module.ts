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
import { HomeComponent } from './home/home.component';
import { BtnBgImageComponent } from './btn-bg-image/btn-bg-image.component';
<<<<<<< HEAD
import { BtnViewComponent } from './btn-view/btn-view.component';
=======
>>>>>>> 436a84d4de97c6b99b0b82a89ce1322f672476b8
import { ApartmentComponent } from './apartment/apartment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinkUniversitiesComponent,
    LinkExpiriencesComponent,
    LinkFAQsComponent,
    LinkBlogComponent,
    LinkContactUsComponent,
    HomeComponent,
    BtnBgImageComponent,
<<<<<<< HEAD
    BtnViewComponent,
=======
>>>>>>> 436a84d4de97c6b99b0b82a89ce1322f672476b8
    ApartmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
