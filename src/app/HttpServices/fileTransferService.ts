import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable()
export class FileTransferService {
    constructor(private readonly http: HttpClient) { }

    uploadFile(file){
      return this.http.post("http://localhost:3000/images/upload/1337/", file);
    }

    getImage(){
      console.log(this.http.get("http://localhost:3000/images/test"))
      return this.http.get("http://localhost:3000/images/test");
    }
    
}
