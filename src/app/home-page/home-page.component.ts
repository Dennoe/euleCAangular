import { Component, OnInit } from '@angular/core';
import { ModelService } from './model.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private readonly modelService: ModelService){}

  httpData: any;
  refinedArray: any;
  pictureArray: any;
  dataArray: any;
  modelArray: any;
  pictureSum: any;
  dataSum: any;
  modelSum: any;
  responsePending: any = true;

  async ngOnInit(){
    this.httpData = await this.modelService.getDevicesAndStatus(); 
    console.log("current: " + JSON.stringify(this.httpData));
    this.pictureArray = this.httpData.pictureArray;
    this.dataArray = this.httpData.dataArray;
    this.modelArray = this.httpData.modelArray;
    this.pictureSum = this.httpData.pictureSum;
    this.dataSum = this.httpData.dataSum;
    this.modelSum = this.httpData.modelSum;
    console.log(this.httpData);
    this.refinedArray = await this.modelService.structArrays(this.dataArray, this.pictureArray, this.modelArray);
    console.log(this.modelArray);
    console.log(this.refinedArray);
    this.responsePending = false;
  }
}
