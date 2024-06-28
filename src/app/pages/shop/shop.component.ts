import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { CardsComponent } from '../../components/cards/cards.component';
import { CommonModule } from '@angular/common';
import { Products, ProductsItens, mockParams, mockProducts, nameItens, queryParam } from '../../models/products-model';
import { FooterComponent } from '../../components/footer/footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [CardsComponent,CommonModule, FooterComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss'
})
export class ShopComponent implements OnInit{
  listItens: Products[] = mockProducts ;
  listStarts: any = [5,4,3,2,1];
  listplaceHolder: any = [6,5,4,3,2,1];
  seachTerm: string = '';
  loading: boolean = true;

  findTerms: ProductsItens[] = nameItens;

  selectedType: ProductsItens | null = null;
  selectedVote: number | null = null;
  queryParam: queryParam = mockParams;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private product: ProductsService) {
  }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((queryParams) => {
      this.filterteste(queryParams);
    });
  }

  addParams(queryParams: queryParam):void {
    this.router.navigate([], {
      queryParams: queryParams,
    });
  }

  verify(vote?:number){
    if(vote) this.selectedVote = vote;
    this.verifyParams();
  }

  filterteste(queryParam:any):void {
      if(queryParam['vote'] !== undefined){
        this.queryParam.vote = queryParam['vote'];
      }
      if(queryParam['name'] !== undefined){
        this.queryParam.name = queryParam['name'];
      }
      if(queryParam['type'] !== undefined){
        this.queryParam.type = queryParam['type'] ;
      }
      this.mountURL(this.queryParam);
  }

  mountURL(querys:queryParam): void{
    let mountURL:string = '?';

    if(querys.name !== null){
     mountURL += `name=${querys.name}&`;
    }
    if(querys.value !== null){
      mountURL += `value=${querys.value}&`;
    }
    if(querys.type !== null){
      mountURL += `type=${querys.type}&`;
    }
    if(querys.vote !== null){
      mountURL += `vote=${querys.vote}&`;
    }
    this.filter(mountURL.slice(0,-1))
  }

  verifyParams(): void{
    if(this.selectedVote !== null){
      this.queryParam.vote = this.selectedVote ?? null;
    }
    if(this.seachTerm !== ''){
      this.queryParam.name = this.seachTerm;
    }
    if(this.selectedType !== null){
      this.queryParam.type = this.selectedType?.field ?? null;
    }

    this.addParams(this.queryParam);
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

  filter(parametros:string):void {
    this.loading = true;

    this.product.filter(parametros).subscribe({
      next: (result) => {
        setTimeout(() => {
          this.loading = false;
          console.log(result.data.products)
          console.log([result.data.products])
          this.listItens = result.data.products
        }, 500);
      },
      error: (err) => {
        console.error(err)
      },
      complete() {

      },
    })

  }
}
