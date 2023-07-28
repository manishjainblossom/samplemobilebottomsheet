import {Component} from '@angular/core';
import {
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { DeviceListComponent } from '../device-list/device-list.component';

@Component({
    selector: 'wall-list',
    templateUrl: 'wall-list.component.html',
   

      
})

export class WallListComponent {
constructor(private _bottomSheet: MatBottomSheet) {}

openDeviceList(event: MouseEvent): void {
    this._bottomSheet.open(DeviceListComponent);
    event.preventDefault();
}
}