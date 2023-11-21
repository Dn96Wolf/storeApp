import { Component, inject, signal } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  public hideSideMenu = signal<boolean>(true);


  private cartService = inject(CartService);

  public cart = this.cartService.cart;
  public total = this.cartService.total;


  public toogleSideMenu(): void {
    this.hideSideMenu.update((prevState: boolean) => !prevState);
  }


}
