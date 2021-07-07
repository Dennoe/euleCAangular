import { Injectable } from "@angular/core";
import { DeviceHttpService } from "../HttpServices/deviceHttpService";

@Injectable()
export class ModelService{

  constructor(private readonly deviceHttpService: DeviceHttpService) {}

  async getDevicesAndStatus() {
    let data: any = (await  this.deviceHttpService.getDevices().toPromise());
    let devices = data;
    let pictureSum, dataSum, modelSum : number;
    let pictureArray: any = [];
    let dataArray: any = [];
    let modelArray : any = [];
    console.log(devices);
    await devices.picture_info.devices.forEach(async element => {
      await pictureArray.push({device_id: element.device_id, count: element.count});
    });
    await devices.data_info.devices.forEach(async element => {
      await dataArray.push({device_id: element.device_id, count: element.count});
    });
    await devices.model_info.devices.forEach(async element => {
      await modelArray.push({device_id: element.device_id, count: element.count});
    });
    pictureSum = devices.picture_info.total;
    dataSum = devices.data_info.total;
    modelSum = devices.model_info.total; 
    return {
      pictureArray: pictureArray,
      dataArray: dataArray,
      modelArray: modelArray,
      pictureSum: pictureSum,
      dataSum: dataSum,
      modelSum: modelSum
    };
  }

  // TODO: bugfix ArrayStruct function
  async structArrays(pictureArray, dataArray, modelArray){
    let refactoredArray: any = [];
    let commonArray = await pictureArray.filter(o1 => dataArray.some(o2 => o1.device_id == o2.device_id));
    commonArray = await commonArray.filter(o1 => modelArray.some(o2 => o1.device_id == o2.device_id));
    console.log("commonArray: " + JSON.stringify(commonArray));
    if(commonArray.length != pictureArray.length && commonArray.length != dataArray.length || commonArray.length != modelArray.length){
      console.log("One device is not completely initialized in every storage blob. The device won't be displayed in the device list.")
    }
    await commonArray.forEach(async element => {
      await pictureArray.forEach(async picture => {
        if(element.device_id == picture.device_id){
          element.pictureCount = await picture.count;
        } else{
          element.pictureCount = "Null!"
        }
      });});
    await commonArray.forEach(async element => {
      await dataArray.forEach(async dater => {
        if(element.device_id == dater.device_id){
          element.dataCount = await dater.count;
        } else{
          element.dataCount = "Null!"
        }
      });});
    await commonArray.forEach(async element => {
      await modelArray.forEach(async model => {
        if(element.device_id == model.device_id){
          element.modelCount = await model.count;
        } else{
          element.modelCount = "Null!"
        }
      });
    });
    console.log("Common Array after adding attributes: "+JSON.stringify(commonArray));
    await commonArray.forEach(async element => {
      await refactoredArray.push({
        device_id: element.device_id, 
        pictureCount: element.pictureCount, 
        dataCount: element.dataCount,
        modelCount: element.modelCount})      
    });
    console.log(refactoredArray);
    return refactoredArray;
  }

}