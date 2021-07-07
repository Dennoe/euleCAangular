import { Component, OnInit } from '@angular/core';
import { DevicesService } from './devices.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';


@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.css']
})
export class DevicesComponent implements OnInit {

  constructor(private readonly deviceService: DevicesService,
              private router: Router) { }

  responsePending = false;

  ngOnInit(): void {
  };

  createDevice(deviceName){
    this.deviceService.createDevice(deviceName);
  }

  goToModel(id) {
    if(!id){
      console.log("No ID was given. Won't route.")
      return;
    }

    this.router.navigate(['/devices', id]);
  }

}
