import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class DeviceHttpService {
    constructor(private readonly http: HttpClient) { }

    getDevices(){
      return this.http.get("https://eulegetstatus.azurewebsites.net/api/GetStatus?code=tVTeT/9BqBa4CHjsG4m50XEJTK5od5pG16Xc1SmrS9Pjez8gVaYNpQ==");
    }

    createDevices(queryParam){ //TODO: find out where to implement the query param
      return this.http.get("https://eulecreatedevice.azurewebsites.net/api/CreateDevice?code=CxYPerl/9agxaaBabyYryT85sKTHt4ToeA1icDIyUm15SQJg2slbYw==&id="+queryParam);
    }

    uploadFile(file){
      return this.http.post("http://localhost:3000/images/upload/1337/", file);
    }
}
