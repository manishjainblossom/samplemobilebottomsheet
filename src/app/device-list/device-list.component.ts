import {Component} from '@angular/core';
import {
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';


@Component({
    selector: 'device-list',
    templateUrl: 'device-list.component.html',
    providers: [
        { provide: MatBottomSheetRef, useValue: {} },
      ],
})

export class DeviceListComponent {
constructor(private _bottomSheetRef: MatBottomSheetRef<DeviceListComponent>) {}

openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
}
}