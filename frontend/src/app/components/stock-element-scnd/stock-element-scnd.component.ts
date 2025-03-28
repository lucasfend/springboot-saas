import { Component, OnInit } from '@angular/core';
import { StockSecondService } from '../../services/stock-second.service';
import { Secondinsert } from '../../interfaces/secondinsert';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-element-scnd',
  imports: [CommonModule],
  templateUrl: './stock-element-scnd.component.html',
  styleUrl: './stock-element-scnd.component.scss'
})

export class StockElementScndComponent implements OnInit {
  stockScndItems: Secondinsert[] = [];
  isLoading = true;
  error = '';

  constructor(private stockScndService: StockSecondService) {}

  ngOnInit(): void {
    this.loadStockScndItems();
  }

  loadStockScndItems(): void {
    this.isLoading = true;
    this.stockScndService.getScndStock().subscribe({
      next: (data) => {
        this.stockScndItems = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Erro ao carregar itens da despensa';
        this.isLoading = false;
        console.error(err);
      }
    });
  }

  deleteItemScnd(id: number): void {
    if (confirm('Tem certeza que deseja deletar este item da lista?')) {
      this.stockScndService.deleteItemScnd(id).subscribe({
        next: () => {
          this.stockScndItems = this.stockScndItems.filter(item => item.id !== id);
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
