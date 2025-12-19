import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ApiServices } from '../../api-services';
import { Router, RouterLink } from "@angular/router";
import { CommonModule } from '@angular/common';
import { Productdetails } from '../../pages/productdetails/productdetails';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card implements OnInit {
  cards :any[]=[];

  constructor (private api_service:ApiServices,private cdr:ChangeDetectorRef,private router:Router){}
  ngOnInit(): void
    {
      this.api_service.getFakeStoreItems().subscribe((data:any) => 
      {
      this.cards = data;
      this.cdr.detectChanges();//to detect changes made as new info is reciecved
      })
      
    }
    viewProductDetail(product: any) {
    this.router.navigate(['/product', product.id], { state: { product } });
  }
    
  }
