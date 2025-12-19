import { Component } from '@angular/core';
import { Navbar } from '../../component/navbar/navbar';
import { Carousel } from '../../component/carousel/carousel';
import { Card } from '../../component/card/card';
import { Footer } from '../../component/footer/footer';

@Component({
  selector: 'app-home',
  imports: [Carousel, Card],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
