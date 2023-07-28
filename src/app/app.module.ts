import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list/device-list.component'
import { WallListComponent } from './wall-list/wall-list.component';



import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    WallListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatButtonModule,
    MatBottomSheetModule,
    MatCheckboxModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
