import { Component } from '@angular/core';
import { ProductComponent } from "../product/product.component";
import { ProductListComponent } from "../product-list/product-list.component";
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-product-screen',
  standalone: true,
  imports: [ProductComponent, ProductListComponent , NavbarComponent],
  templateUrl: './product-screen.component.html',
  styleUrl: './product-screen.component.css'
})
export class ProductScreenComponent {

}
