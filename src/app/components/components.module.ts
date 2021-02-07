import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { PageHeaderComponent } from './page-header/page-header.component';
//import { MultiFileUploadComponent } from './multi-file-upload/multi-file-upload.component';
//import { FileUploadModule } from 'ng2-file-upload';


@NgModule({
  declarations: [
    PageHeaderComponent,
    //MultiFileUploadComponent
  ],
  imports: [
    CommonModule,IonicModule,//FileUploadModule
  ],
  exports:[
    PageHeaderComponent,
    //MultiFileUploadComponent
  ]
})
export class ComponentsModule { }
