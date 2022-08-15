import { Discount } from "./discount"
import { CartItem } from "./interfaces/cart-item"
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocolo"

export class ShoppingCart implements ShoppingCartProtocol {
    private readonly _items: CartItem[] = []

    constructor(private readonly _discount: Discount) { }
    addItem(item: CartItem): void {
        this._items.push(item)
    }

    removeItem(index: number): void {
        this._items.splice(index, 1)
    }

    get items(): Readonly<CartItem[]> {
        return this._items
    }

    total(): number {
        return Number(
            this._items
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)
        )
    }

    totalWithDiscount(): number {
        return this._discount.calculate(this.total())
    }

    isEmpty(): boolean {
        return this._items.length === 0
    }

    clear(): void {
        this._items.length = 0
    }
}