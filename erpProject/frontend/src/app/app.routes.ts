import { Routes } from '@angular/router';
import { ProductComponent } from './inventory/product/product.component';
import { ProductScreenComponent } from './inventory/product-screen/product-screen.component';
import { AppScreenComponent } from './app-screen/app-screen.component';

export const routes: Routes = [
    { path: '', component: AppScreenComponent },
    {path: 'inventory', component:ProductScreenComponent},
];

export default routes;

