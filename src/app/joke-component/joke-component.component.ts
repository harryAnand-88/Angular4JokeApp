import { Input, Component, OnInit } from '@angular/core';
import { Joke } from '../testEntity/Joke';

@Component({
  selector: 'app-joke-component',
  templateUrl: './joke-component.component.html',
  styleUrls: ['./joke-component.component.css']
})
export class JokeComponent implements OnInit {

  tellBtn: string;
  delBtn: string;
  jokes: Joke[];

  constructor() {
    this.tellBtn = 'Tell Me !';
    this.delBtn = 'Delete this Joke';
    this.jokes = [
        new Joke('What kind of cheese do you use to disguise a small horse?', 'Mask-apony (Mascarpone)'),
        new Joke('A kid threw a lump of cheddar at me', 'I thought ‘That’s not very mature’'),
        ];
  }

  addJoke(joke) {
  this.jokes.unshift(joke);
  }

  toggle(joke) {
    joke.hide = !joke.hide;
  }

  delete(idx) {
    this.jokes.splice(idx, 1);
  }

  ngOnInit() {
  }

}
