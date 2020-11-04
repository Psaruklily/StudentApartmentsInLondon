import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LinkAllApartmentsComponent } from './link-all-apartments/link-all-apartments.component';
import { LinkUniversitiesComponent } from './link-universities/link-universities.component';
import { LinkExpiriencesComponent } from './link-expiriences/link-expiriences.component';
import { LinkFAQsComponent } from './link-faqs/link-faqs.component';
import { LinkBlogComponent } from './link-blog/link-blog.component';
import { LinkContactUsComponent } from './link-contact-us/link-contact-us.component';

const routes: Routes = [// DOES NOT FINISHED!!!!!!!
  { path: '', component: AppComponent},
  { path: '', component: LinkAllApartmentsComponent},
  { path: 'universities', component: LinkUniversitiesComponent},
  { path: 'expiriences', component: LinkExpiriencesComponent},
  { path: 'faqs', component: LinkFAQsComponent},
  { path: 'blog', component: LinkBlogComponent},
  { path: 'contactUs', component: LinkContactUsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
