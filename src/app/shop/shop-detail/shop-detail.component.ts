import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Product } from "src/app/models/Product";
import { ShopService } from "src/app/services/shop.service";

@Component({
  selector: "app-shop-detail",
  templateUrl: "./shop-detail.component.html",
  styleUrls: ["./shop-detail.component.scss"],
})
export class ShopDetailComponent implements OnInit {
  product$!: Observable<Product>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.shopService.getProduct(params.get("id")!)
      )
    );
  }

  goToCareer(product: Product) {
    const productId = product ? product.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(["/shop", { id: productId, foo: "foo" }]);
  }
}
