import { Component } from '@angular/core';
import { CartService } from 'src/app/Services/cart.service';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {

  totalCartNo : any = '';
  constructor(private cartService : CartService){

  }

  getCartItems(): number {
    this.totalCartNo = this.cartService.getTotalCartItems()
    ////console.log(this.totalCartNo)
    return this.cartService.getTotalCartItems();
  }

}
