import {Component, OnInit} from '@angular/core';

export interface Card {
  title: string
  text: string
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  toggle = true

  myDate: Date = new Date()


  cards: Card[] = [
    {title: 'Card1', text: 'This is card bumber 1'},
    {title: 'Card2', text: 'This is card bumber 2'},
    {title: 'Card3', text: 'This is card bumber 3'}
  ]



  toggleCards(){
    this.toggle = !this.toggle
  }
  ngOnInit() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))
  }
  // https://jsonplaceholder.typicode.com/albums/1/photos
}
