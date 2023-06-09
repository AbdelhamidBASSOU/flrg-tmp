import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { NgxWebstorageModule } from 'ngx-webstorage';
import {ToastrModule, ToastrService} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ViewPostComponent} from "./post/view-post/view-post.component";
import {PostTileComponent} from "./shared/post-tile/post-tile.component";
import {SubredditSideBarComponent} from "./shared/subreddit-side-bar/subreddit-side-bar.component";
import {CreatePostComponent} from "./post/create-post/create-post.component";
import {HomeComponent} from "./home/home.component";
import {SideBarComponent} from "./shared/side-bar/side-bar.component";
import {UserProfileComponent} from "./auth/user-profile/user-profile.component";
import {VoteButtonComponent} from "./shared/vote-button/vote-button.component";
import {ListSubredditsComponent} from "./subreddit/list-subreddits/list-subreddits.component";
import {CreateSubredditComponent} from "./subreddit/create-subreddit/create-subreddit.component";
// decorator ngModule = annotation en java
@NgModule({
  declarations: [
    ListSubredditsComponent,
    CreateSubredditComponent,
    UserProfileComponent,
    HomeComponent,
    CreatePostComponent,
    SubredditSideBarComponent,
    PostTileComponent,
    ViewPostComponent,
    AppComponent,
    HeaderComponent,
    SignupComponent,
    LoginComponent,
    SideBarComponent,
    VoteButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxWebstorageModule.forRoot(),
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
