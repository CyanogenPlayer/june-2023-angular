import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from "@angular/common";

import {UserService} from "../../services";
import {IPost, IUser} from "../../interfaces";
import {UserComponent} from "../user/user.component";
import {UserPostsComponent} from "../user-posts/user-posts.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    UserComponent,
    NgForOf,
    NgIf,
    UserPostsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[]
  postsOfCurrentUser: IPost[]

  constructor(private userService :UserService) {
  }

  ngOnInit(): void {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getPostsOfUser(id: number) {
    this.userService.getPostsOfUser(id).subscribe(value => this.postsOfCurrentUser = value)
  }
}
