import {Component, Input} from '@angular/core';
import {IPost} from "../../interfaces";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-user-posts',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './user-posts.component.html',
  styleUrl: './user-posts.component.css'
})
export class UserPostsComponent {
  @Input()
  posts: IPost[]
}
