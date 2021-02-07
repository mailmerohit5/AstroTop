import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SingleBlogPage } from './single-blog.page';

describe('SingleBlogPage', () => {
  let component: SingleBlogPage;
  let fixture: ComponentFixture<SingleBlogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleBlogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SingleBlogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
