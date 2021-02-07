import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //component: UserPage,
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)
  },  
  {
    path: 'blog',
    loadChildren: () => import('../pages/blog/blog.module').then( m => m.BlogPageModule)
  },
  {
    path: 'call',
    loadChildren: () => import('../pages/call/call.module').then( m => m.CallPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('../pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'horoscope',
    loadChildren: () => import('../pages/horoscope/horoscope.module').then( m => m.HoroscopePageModule)
  },
  {
    path: 'mall',
    loadChildren: () => import('../pages/mall/mall.module').then( m => m.MallPageModule)
  },
  {
    path: 'report',
    loadChildren: () => import('../pages/report/report.module').then( m => m.ReportPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('../pages/news/news.module').then( m => m.NewsPageModule)
  },
  {
    path: 'single-blog',
    loadChildren: () => import('../pages/single-blog/single-blog.module').then( m => m.SingleBlogPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('../pages/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'addmoney',
    loadChildren: () => import('../pages/addmoney/addmoney.module').then( m => m.AddmoneyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserPageRoutingModule {}
