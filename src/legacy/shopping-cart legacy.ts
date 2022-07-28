type CartItem = {
    name: string,
    price: number,
}
type OrderStatus = 'open' | 'closed'
export class ShoppingCartLegacy {
    private readonly _items: CartItem[] = []
    private _orderStatus: OrderStatus = 'open'
    addItem(item: CartItem): void {
        this._items.push(item)
    }

    removeItem(index: number): void {
        this._items.splice(index, 1)
    }

    get items(): Readonly<CartItem[]> {
        return this._items
    }

    get orderStatus(): OrderStatus {
        return this._orderStatus
    }

    total(): number {
        return Number(
            this._items
                .reduce((total, item) => total + item.price, 0)
                .toFixed(2)
        )
    }

    checkout(): void {
        if (this.isEmpty()) {
            throw new Error('Carrinho vazio')
        }
        this._orderStatus = 'closed'
        this.sendMessage('Pedido realizado com sucesso')
        this.saveOrder()
        this.clear()
    }

    isEmpty(): boolean {
        return this._items.length === 0
    }

    sendMessage(message: string): void {
        console.log('Mensagem enviada: ', message)
    }

    saveOrder(): void {
        console.log('Pedido salvo')
    }

    clear(): void {
        this._items.length = 0
    }
}