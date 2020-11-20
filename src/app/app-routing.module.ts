import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LinkUniversitiesComponent } from './link-universities/link-universities.component';
import { LinkExpiriencesComponent } from './link-expiriences/link-expiriences.component';
import { LinkFAQsComponent } from './link-faqs/link-faqs.component';
import { LinkBlogComponent } from './link-blog/link-blog.component';
import { LinkContactUsComponent } from './link-contact-us/link-contact-us.component';
import { CurrentApartmentComponent } from './current-apartment/current-apartment.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'universities', component: LinkUniversitiesComponent},
  { path: 'expiriences', component: LinkExpiriencesComponent},
  { path: 'faqs', component: LinkFAQsComponent},
  { path: 'blog', component: LinkBlogComponent},
  { path: 'contactUs', component: LinkContactUsComponent},
  { path: 'currentApartment', component:  CurrentApartmentComponent},
  { path: 'allApartments', redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
