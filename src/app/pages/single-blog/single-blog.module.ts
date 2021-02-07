import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SingleBlogPageRoutingModule } from './single-blog-routing.module';

import { SingleBlogPage } from './single-blog.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SingleBlogPageRoutingModule
  ],
  declarations: [SingleBlogPage]
})
export class SingleBlogPageModule {}
