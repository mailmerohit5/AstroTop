import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { LoadingService } from 'src/app/services/loading.service';
const url = 'http://www.astrotop.in/blog/wp-json/wp/v2/posts/';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss'],
})

export class BlogPage {
  perPageRecord: number = 5;
  pageNumber: number = 1;
  public postArray: any = [];
  totalPosts: number = 0;
  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private http: HttpClient,
    private router: Router,
    private loading:LoadingService
    ) {
    
    this.getTotalPost(this.pageNumber);
    this.getPosts(this.pageNumber, null);
  }
  getPosts(page = 1, infineScroll) {
    const loader=this.loading;
    loader.presentLoading();
    this.http.get(`${url}?page=${page}&per_page=${this.perPageRecord}&_embed`)
      .subscribe(
        result => {

          let array = result;
          this.postArray = this.postArray.concat(array);
          let data = result;
          for (let post of this.postArray) {
            if (post['_embedded']['wp:featuredmedia'] && post['_embedded']['wp:featuredmedia'].length > 0) {
              post['media_url'] = post['_embedded']['wp:featuredmedia'][0].media_details.sizes.full.source_url;
            }
          }
          if (infineScroll) {
            infineScroll.target.complete();
          }
          loader.closeLoading();
        }
      );
  }

  loadMore(event) {
    this.pageNumber = this.pageNumber + 1;
    this.getPosts(this.pageNumber, event);
    if ((this.postArray.length / this.totalPosts) == 1) { event.target.disabled = true; }
  }

  checkDescription(html: string) {
    return html.replace(/\[(.*?)\]/ig, "");
  }
  getTotalPost(page = 1) {

    this.http.get(`${url}?page=${page}&per_page=${this.perPageRecord}&_embed`)
      .subscribe(
        data => {
        })
  }

  details(id) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(id)
      }
    };
    this.router.navigate(["user/single-blog"], navigationExtras);
  }
  goToPage(page:string){
    this.router.navigate(['user/'+page]);
  }



}

