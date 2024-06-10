import { Component, OnInit } from '@angular/core';
import { Itens } from '../../models/itens-model';
import { mockItens } from '../../models/itens-model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-initial-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './initial-page.component.html',
  styleUrl: './initial-page.component.scss'
})
export class InitialPageComponent implements OnInit{

  listItens: Itens[] = mockItens;
  constructor() { }

  ngOnInit() {
  }
}
