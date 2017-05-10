import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule,Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostComponent } from './post/post.component';
const appRoutes: Routes = [
{ path: 'posts',      component: PostComponent }
];
@NgModule({
  declarations: [
  AppComponent,
  PostComponent
  ],
  imports: [
  RouterModule.forRoot(appRoutes),
  BrowserModule,
  FormsModule,
  HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }