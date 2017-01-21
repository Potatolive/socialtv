import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { PolymerElement } from '@vaadin/angular2-polymer';

import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
import { PostsComponent } from './posts/posts.component';
import { TagsComponent } from './tags/tags.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedComponent } from './feed/feed.component';

const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'feeds',
    component: FeedsComponent
  },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PolymerElement('paper-input'),
    PostComponent,
    PostsComponent,
    TagsComponent,
    LoginComponent,
    HomeComponent,
    FeedsComponent,
    FeedComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
