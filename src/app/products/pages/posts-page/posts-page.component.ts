import {Component, OnDestroy, OnInit} from '@angular/core';
import {PostsService} from "../../services/posts.service";
import {Posts} from "../../interfaces/posts.interface";

@Component({
  selector: 'products-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrl: './posts-page.component.css'
})
export class PostsPageComponent implements OnInit, OnDestroy{

  public posts: Posts[] = []
  public intervalId: any
  constructor(private postsService: PostsService) {
  }

  ngOnDestroy(): void {
  this.cleanup()
  }

  ngOnInit(): void {
  this.fetchData()
    this.startAutoUpdate()
  }

  fetchData(){
    this.postsService.getPostsData().subscribe( data => {
      this.posts = data;
      console.log('Data fetched')
    })
  }

  startAutoUpdate(){
    this.intervalId = setInterval(()=> {
      this.fetchData();
      console.log('Data updated')
    }, 1000)
  }

  cleanup(){
    if(this.intervalId){
      clearInterval(this.intervalId)
      console.log('Interval cleared')
    }
  }

}
