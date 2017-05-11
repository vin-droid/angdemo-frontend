import { Injectable } from '@angular/core';
import {Http,Response,Headers,RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import {Post} from './post/post';



@Injectable()
export class PostService {
  constructor(private http:Http) { }

  getAllPosts(): Observable<any>{
  	return this.http.get('http://localhost:3000/posts.json').map(
  		res =>{
  			const data = res.json();
  			return data;
  		}
  		)
  }

  createPost(post:Post){
   var body = JSON.stringify(post);
   var headers = new Headers();
   headers.append('Content-Type', 'application/X-www-form-urlencoded');
  	this.http.post('http://localhost:3000/post',body,{ headers: headers });
  }



}
