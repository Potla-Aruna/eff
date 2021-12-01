import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Product } from "../Interfaces/product";

@Injectable()
export class CustomProductService {
    status: string[] = ["OUTOFSTOCK", "INSTOCK", "LOWSTOCK"];

    productNames: string[] = [
        "Bamboo Watch",
        "Black Watch",
        "Blue Band",
        "Blue T-Shirt",
        "Bracelet",
        "Brown Purse",
        "Chakra Bracelet",
        "Galaxy Earrings",
        "Game Controller",
        "Gaming Set",
        "Gold Phone Case",
        "Green Earbuds",
        "Green T-Shirt",
        "Grey T-Shirt",
        "Headphones",
        "Light Green T-Shirt",
        "Lime Band",
        "Mini Speakers",
        "Painted Phone Case",
        "Pink Band",
        "Pink Purse",
        "Purple Band",
        "Purple Gemstone Necklace",
        "Purple T-Shirt",
        "Shoes",
        "Sneakers",
        "Teal T-Shirt",
        "Yellow Earbuds",
        "Yoga Mat",
        "Yoga Set",
    ];

    constructor(private http: HttpClient) {}

    getProductsSmall() {
        return this.http
            .get<any>("assets/demo/data/custom-products.json")
            .toPromise()
            .then((res) => <Product[]>res.data)
            .then((data) => {
                return data;
            });
    }

    getHeaders() {
        return this.http
            .get<any>("assets/demo/data/custom-products.json")
            .toPromise()
            .then((res) => <Product[]>res.headers)
            .then((data) => {
                return data;
            });
    }

    getPlaceholders() {
        return this.http
            .get<any>("assets/demo/data/custom-products.json")
            .toPromise()
            .then((res) => res.searchPlaceholders)
            .then((data) => {
                return data;
            });
    }


    generatePrduct(): Product {
        const product: Product = {
            driver_name: this.generateDriver(),
            // name: this.generateName(),
            // description: "Product Description",
            // price: this.generatePrice(),
            // quantity: this.generateQuantity(),
            // category: "Product Category",
            // inventoryStatus: this.generateStatus(),
            // rating: this.generateRating()
        };

        return product;
    }

    generateId() {
        let text = "";
        let possible =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(
                Math.floor(Math.random() * possible.length)
            );
        }

        return text;
    }

    generateName() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }

    generateDriver() {
        return this.productNames[Math.floor(Math.random() * Math.floor(30))];
    }
}
