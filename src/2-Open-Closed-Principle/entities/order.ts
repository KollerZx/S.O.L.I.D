import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";
import { OrderStatus } from "./interfaces/order-status";
import { ShoppingCart } from "./shopping-cart";

export class Order {
    private _orderStatus: OrderStatus = 'open'

    constructor(
        private readonly cart: ShoppingCart,
        private readonly messaging: Messaging,
        private readonly persistency: Persistency
    ) { }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    checkout(): void {
        if (this.cart.isEmpty()) {
            throw new Error('Carrinho vazio')
        }
        this._orderStatus = 'closed'
        this.messaging.sendMessage(`Seu pedido com total de R$ ${this.cart.totalWithDiscount()} foi recebido`)
        this.persistency.saveOrder()
        this.cart.clear()
    }



}