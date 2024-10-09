import { NgFor } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule,HttpClientModule,NgFor],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  ProductArray : any[] = [];
 
  name: string ="";
  description: string ="";

  currentProductID = "";

  constructor(private http: HttpClient )
  {
    this.getAllProduct();
 
  }

  saveRecords()
  {
  
    let bodyData = {
      "name" : this.name,
      "description" : this.description,
    };
 
    this.http.post("http://127.0.0.1:8000/product",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Added Successfully");
        this.getAllProduct();
        this.name='';
        this.description='';
    });
  }
  getAllProduct()
  {
    this.http.get("http://127.0.0.1:8000/product")
    .subscribe((resultData: any)=>
    {
        console.log(resultData);
        this.ProductArray = resultData;
    });
  }

  setDelete(data: any)
  {
    this.http.delete("http://127.0.0.1:8000/product"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Product Deletedddd")
        this.getAllProduct();
    });
 
  }
}
