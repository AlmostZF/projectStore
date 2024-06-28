import { Component, OnInit } from '@angular/core';
import { Products, mockProducts } from '../../models/products-model';
import { CommonModule } from '@angular/common';
import { BtnPrimaryComponent } from '../../components/btn-primary/btn-primary.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProductsService } from '../../service/products.service';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [CommonModule, BtnPrimaryComponent, CardsComponent, FooterComponent],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent implements OnInit{

  listProducts: Products[] = mockProducts;

  constructor(private productsService: ProductsService) { }

  ngOnInit() {
  }

  getStars(vote: number): any {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= vote) {
        stars.push('bi-star-fill');
      } else if (i === Math.ceil(vote) && !Number.isInteger(vote)) {
        stars.push('bi-star-half');
      } else {
        stars.push('bi-star');
      }
    }
    return stars;
  }
}
