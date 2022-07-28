import { CartItem } from "../interfaces/car-item";

export class Product implements CartItem {
    constructor(public name: string, public price: number) { }
}