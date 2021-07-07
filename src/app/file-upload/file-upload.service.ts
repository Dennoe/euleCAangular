import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { DeviceHttpService } from '../HttpServices/deviceHttpService';

@Injectable()
export class FileUploadService {
  constructor(private deviceHttpService: DeviceHttpService) { }

  // Returns an observable
  upload(file):Observable<any> {

	  // Create form data
	  const formData = new FormData();
		
	  // Store form name as "file" with file data
	  formData.append("file", file, file.name);
		
	  // Make http post request over api
	  // with formData as req
    return this.deviceHttpService.uploadFile(formData)
  }
}
