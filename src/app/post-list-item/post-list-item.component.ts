import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;

  constructor() {
   }

  ngOnInit() {
  }

  getLoveIts() {
    return this.post.loveIts;
  }

  onDisLike() {
    this.post.loveIts--;
  }
  onLike() {
    this.post.loveIts++;
  }
  isSuccess() {
    return this.post.loveIts > 0;
  }
  isDanger() {
    return this.post.loveIts < 0;
  }
}
