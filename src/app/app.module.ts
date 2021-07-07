import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ChartsModule } from 'ng2-charts';
import { DeviceHttpService } from './HttpServices/deviceHttpService';
import { ModelService } from './home-page/model.service';
import { DevicesComponent } from './devices/devices.component';
import { DevicesService } from './devices/devices.service';
import { EditImagesComponent } from './edit-images/edit-images.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadService } from './file-upload/file-upload.service';
import { FileTransferService } from './HttpServices/fileTransferService';

@NgModule({
   declarations: [
      HeaderComponent,
      HomePageComponent,
      AppComponent,
      DevicesComponent,
      EditImagesComponent,
      PageNotFoundComponent,
      FileUploadComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      ChartsModule
   ],
   providers: [
      DeviceHttpService,
      DevicesService,
      ModelService,
      FileUploadService,
      FileTransferService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
