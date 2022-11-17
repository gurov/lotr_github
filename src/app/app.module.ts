import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddHeaderInterceptor } from './add-header.interceptor';

import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { FirstWordPipe } from './first-word.pipe';
import { GithubCommitsComponent } from './github-commits/github-commits.component';
import { FilterPipe } from './filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    FirstWordPipe,
    GithubCommitsComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AddHeaderInterceptor,
    multi: true,
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
