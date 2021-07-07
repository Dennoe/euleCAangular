import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevicesComponent } from './devices/devices.component';
import { EditImagesComponent } from './edit-images/edit-images.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [
  //TODO: Routing für dynamische Website
   {path: 'devices', component: DevicesComponent},
   {path: 'devices/:id', component: EditImagesComponent},
   {path: 'deviceList', component: HomePageComponent},
   {path: '', redirectTo: 'devices', pathMatch: 'full'},
   {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
