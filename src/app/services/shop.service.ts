import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { map } from "rxjs/operators";
import { PRODUCTS } from "./data/products";
import { Product } from "../models/Product";
@Injectable({
  providedIn: "root",
})
export class ShopService {
  private products: Observable<Product[]>;
  constructor() {
    this.products = of(PRODUCTS);
  }

  getProducts(): Observable<Product[]> {
    return this.products;
  }

  getProduct(id: string): Observable<Product> {
    return this.getProducts().pipe(
      map((products: Product[]) => products.find((blog) => blog.id === id)!)
    );
  }
}
