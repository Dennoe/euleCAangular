import { Injectable } from "@angular/core";
import { DeviceHttpService } from "../HttpServices/deviceHttpService";


@Injectable()
export class DevicesService{

  constructor(private readonly deviceHttpService: DeviceHttpService){}

  async createDevice(deviceName){
    let data: any = (await  this.deviceHttpService.createDevices(deviceName).toPromise());
    return data;
  }

}