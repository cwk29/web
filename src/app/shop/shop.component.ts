import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";
import { OnExecuteData, OnExecuteErrorData, ReCaptchaV3Service } from "ng-recaptcha";
import { Subscription, Observable } from "rxjs";
import { switchMap } from "rxjs/operators";
import { Product } from "../models/Product";
import { ContactService } from "../services/contact.service";
import { ShopService } from "../services/shop.service";

@Component({
  selector: "app-shop",
  templateUrl: "./shop.component.html",
  styleUrls: ["./shop.component.scss"],
})
export class ShopComponent implements OnInit {
  products$!: Observable<Product[]>;

  constructor(private shopService: ShopService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.products$ = this.route.paramMap.pipe(
      switchMap((params) => {
        // this.selectedId = String(params.get("id"));
        return this.shopService.getProducts();
      })
    );
  }
}
