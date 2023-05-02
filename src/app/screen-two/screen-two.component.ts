import { Component, OnInit } from '@angular/core';
import { DatasharingService } from './../../shared/datasharing.service';
import { Bank } from '../../app/screen-one/screen-one.model'

@Component({
  selector: 'app-screen-two',
  templateUrl: './screen-two.component.html',
  styleUrls: ['./screen-two.component.scss']
})
export class ScreenTwoComponent implements OnInit { 
  selectedBanks: Bank[] = [];
  constructor(private sharedService: DatasharingService) {}

  ngOnInit() {
    this.sharedService.items.subscribe((items) => {
    this.selectedBanks = items
   })
  } 

  onOpenPopUp(){
    console.log("poppoup");
  }
}
