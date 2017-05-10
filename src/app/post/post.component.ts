import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {PostService} from '../post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  providers:[PostService]
})
export class PostComponent implements OnInit {

  public posts ;
  constructor(private http: Http,private postService:PostService) { }
  ngOnInit() {
  	this.loadAllPost();
  }	

  loadAllPost(){
  	this.postService.getAllPosts().subscribe(
  		res=>{
  			this.posts = res;
  		});
  }

}
