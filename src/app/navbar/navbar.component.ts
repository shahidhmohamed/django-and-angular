import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  NavItems = [
    { name: 'Home',route:'' },
    { name: 'Sales', route:'inventory'},
    { name: 'Inventory',route:'inventory' },
  ];

  constructor (){}

  navigateTo(appRoute: string){
    window.location.href = `/${appRoute}`;
  }

}
