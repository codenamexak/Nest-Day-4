import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiServices } from '../../api-services';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productdetails',
  imports: [CommonModule],
  templateUrl: './productdetails.html',
  styleUrl: './productdetails.css',
})
export class Productdetails implements OnInit {
 product:any;
 constructor (private route:ActivatedRoute, private apiService: ApiServices){}
 ngOnInit(): void {
   this.route.params.subscribe(params => {
     const id = +params['id']; // + to convert to number
     if (history.state && history.state.product) {
       this.product = history.state.product;
     }
   });
}

}

