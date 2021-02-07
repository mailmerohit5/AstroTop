import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SingleBlogPage } from './single-blog.page';

const routes: Routes = [
  {
    path: '',
    component: SingleBlogPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SingleBlogPageRoutingModule {}
