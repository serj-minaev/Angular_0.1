import {Component, Input, OnInit} from '@angular/core';
import {Card} from "../app.component";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit{

  @Input() card: Card


  title = 'My Card Title'
  text = 'My sample text'
  obj = {
    name: 'Serj',
    Info: {
      age: 30,
      workIn: 'devdino',
      job: 'Designer & Frontend developer'
    }}


  textColor: string

  imgUrl = 'https://images.aif.ru/008/475/4c639e0a9c293ee970868ce5649f2be1.jpg'
  disabled = false
  ngOnInit() {

    setTimeout(() => {
      this.imgUrl = 'https://lh3.googleusercontent.com/proxy/NNFbyCEru0onfhvfqWZCRLI48IbkhuYJNn6cZ8Q0nFws7WXLiKZjJ4tmnZhZy4KUWXlD-r4vjdrvzu-3EiLCT0ZZMVtmfomXAQ'
      this.disabled = true
    }, 3000)

  }
  changeTitle(){
    this.card.title = 'Title has been changed!'
  }
  inputHandler(value){
    this.card.title = value
  }

}
