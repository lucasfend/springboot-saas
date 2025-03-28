import { Component, OnInit } from '@angular/core';
import { Firstinsert } from '../../interfaces/firstinsert';
import { StockFirstService } from '../../services/stock-first.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-element-frst',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-element-frst.component.html',
  styleUrl: './stock-element-frst.component.scss'
})

export class StockElementFrstComponent implements OnInit {
  stockFirstItems: Firstinsert[] = [];
  isLoading = true;
  error = '';

  constructor(private stockFirstService: StockFirstService) {}

  ngOnInit(): void {
    this.loadStockFirstItems();
  }

  loadStockFirstItems(): void{
    this.isLoading = true;
    this.stockFirstService.getFirstStock().subscribe({
      next: (data) => {
        this.stockFirstItems = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar itens do estoque';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  deleteItemFirst(id: number): void {
    if (confirm('Tem certeza que deseja deletar este item da lista?')) {
      this.stockFirstService.deleteItemFirst(id).subscribe({
        next: () => {
          this.stockFirstItems = this.stockFirstItems.filter(item => item.id !== id);
          alert('Item excluído com sucesso.');
        },
        error: (err) => {
          console.error('Erro ao excluir o item: ', err);
          alert('Erro ao exlcuir item.');
        }
      })
    }
  }

}
