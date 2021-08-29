import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-card-scroller',
  templateUrl: './card-scroller.component.html',
  styleUrls: ['./card-scroller.component.scss']
})




export class CardScrollerComponent implements OnInit {

   cards: any[] = [
    {
      'name': 'Atlantic',
      'price': '$79.99',
      'imgUrl': 'https://i.ibb.co/ZNyqXTT/charc1.jpg',
      'isSoldOut': 'false',
    },
    {
      'name': 'Pacific',
      'price': '$69.99',
      'imgUrl': 'https://i.ibb.co/N3rsJqj/charc2.jpg',
      'isSoldOut': 'false',
  
    },
    {
      'name': 'Indian',
      'price': '$99.99',
      'imgUrl': 'https://i.ibb.co/n6jPCzs/charc3.jpg',
      'isSoldOut': 'true',
  
    },
    {
      'name': 'Meditteranean',
      'price': '$99.99',
      'imgUrl': 'https://i.ibb.co/RSsJ7vG/charc4.jpg',
      'isSoldOut': 'true',
  
    },]

  constructor() { }

  ngOnInit(): void {
  }



}
