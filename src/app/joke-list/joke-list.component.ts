import { Component, OnInit } from '@angular/core';
import { Joke } from './../testEntity/Joke';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  jokeList: string;
    constructor() {
    }


  ngOnInit() {
    this.jokeList = 'List of Jokes';
  }

}
