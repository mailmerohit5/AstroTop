import { Component, OnInit } from '@angular/core';
 import { ActivatedRoute, Router } from '@angular/router';
 import { map } from 'rxjs/operators';
 import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.page.html',
  styleUrls: ['./single-blog.page.scss'],
})
export class SingleBlogPage  implements OnInit {
  post: any;
  id: any;
  auther: any;
  url = 'http://www.astrotop.in/blog/wp-json/wp/v2/';
  totalPosts = null;
  pages: any;
 
  constructor(private route: ActivatedRoute,private httpClient: HttpClient,private router:Router) { 
  this.route.queryParams.subscribe(params => {
  if (params) {
 
  this.id = JSON.parse(params["special"]);
  }})
  }
 
  ngOnInit() {
  let id = this.id;
  this.getPostContent(id).subscribe(res => {
  this.post = res;
 
  this.auther=this.post['_embedded']['author'][0].name;
  });
  }
 
  getPostContent(id) {
  return this.httpClient.get(`${this.url}posts/${id}?_embed`).pipe(
  map(post => {
  if(post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'].length > 0 ){
  post['media_url'] = post['_embedded']['wp:featuredmedia'][0].media_details.sizes.full.source_url;
  }
  post['authorname']=post['_embedded']['author'][0].name;
  return post;
 
  })
  )
  }
  checkDescription(html: string) { 
    return html.replace(/\[(.*?)\]/ig, "");
  }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }

  }