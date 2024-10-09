import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-app-screen',
  standalone: true,
  imports: [NgFor,RouterModule],
  templateUrl: './app-screen.component.html',
  styleUrl: './app-screen.component.css'
})
export class AppScreenComponent {
  apps = [
    { name: 'Sales', icon: '🛒' , route:'inventory'},
    { name: 'Inventory', icon: '📦',route:'inventory' },
    { name: 'Accounting', icon: '💰' ,route:'inventory'},
    { name: 'Human Resources', icon: '👥' ,route:'inventory'},
    { name: 'CRM', icon: '📊' ,route:'inventory'},
    { name: 'Projects', icon: '📅' ,route:'inventory'},
  ];

  constructor (){}

  navigateTo(appRoute: string){
    window.location.href = `/${appRoute}`;
  }
}
