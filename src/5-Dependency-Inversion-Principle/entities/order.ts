import { CustomerOrderProtocol } from "./interfaces/customers";
import { MessagingProtocol } from "./interfaces/messaging-protocol";
import { OrderStatus } from "./interfaces/order-status";
import { PersistencyProtocol } from "./interfaces/persistency-protocolo";
import { ShoppingCartProtocol } from "./interfaces/shopping-cart-protocolo";

/* Módulos de alto nível não devem depender de módulos de baixo nível. Ambos devem depender de abstrações.
Dependa de abstrações, não de implementações. 
Abstrações não devem depender de detalhes. Detalhes devem depender de abstrações. 

Classes de baixo nível são classes que executam tarefas(os detalhes)
Classes de alto nível são classes que gerenciam as classes de baixo nível.
*/

export class Order {
    private _orderStatus: OrderStatus = 'open'

    /*  constructor(
        private readonly cart: ShoppingCart, // Dependência de baixo nível 
        private readonly messaging: Messaging, // Dependência de baixo nível
        private readonly persistency: Persistency, // Dependência de baixo nível
        private readonly customer: CustomerOrder
     ) { } */
    constructor(
        private readonly cart: ShoppingCartProtocol,  // Abstração, protocolo
        private readonly messaging: MessagingProtocol, // Abstração, protocolo
        private readonly persistency: PersistencyProtocol, // Abstração, protocolo
        private readonly customer: CustomerOrderProtocol // Abstração, protocolo
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
        console.log(`O cliente é ${this.customer.getName()} e o seu IDN é ${this.customer.getIDN()}`)
    }

}