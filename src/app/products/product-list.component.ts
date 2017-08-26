import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = 'Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    errorMessage: string;
    //listFilter: string = 'carts';
    // we can use the event buinding (key presss or value changes)
    // but the easier way is change 'listFilter' property into a greater or setter 
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filterProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    filterProducts: IProduct[];
    products: IProduct[] = [];  // custome type ar jonno interface use kora hoi

    //Longer syntex
    //private _productService
    // constructor(productService: ProductService) {
    //this._productService = productService;
    // }

    //shorthand syntex
    constructor(private _productService: ProductService) {
        // call when the component is created **Before ngOnInit call**
        // the best place to set default values (it is primarily used for initialization and not for code that has
        // sideefects and take times to execute )
        //look aikhane ami call dite partum product service theke data anar jonno but backend call korar code aikhane likha thik hobe na
    }

    performFilter(filterBy: string): IProduct[] {
        filterBy = filterBy.toLowerCase();
        return this.products.filter((product: IProduct) =>
            product.productName.toLowerCase().indexOf(filterBy) !== -1)
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        //obserable are lazy. doesn't start emmiting value until subcribe is called  
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products
                this.filterProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }

    onRatingClicked(messege: string): void {
        this.pageTitle = 'Product List: ' + messege;
    }
}