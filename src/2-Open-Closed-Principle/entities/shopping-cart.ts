import { Discount } from "./discount"
import { CartItem } from "./interfaces/car-item"


/*Imagine o seguinte cenário: 
     * Em que haverá um evento de promoção, e para cada dia da semana o percentual de desconto será diferente.
     * Ao se implementar o método de calculo de desconto, definindo diretamente o valor do desconto, todos os dias o código deverá ser alterado, 
     * para que seja possível aplicar os descontos de acordo com o dia da semana.
     * 
     * totalWithDiscount(): number {
     *  return this.total - this.total() * 0.1
     * }
     * 
     * O Princípio do Open-Closed é que o código deve ser aberto para extensão, e fechado para alteração.
     * Sendo assim, devemos abstrair o código de calculo de desconto para uma classe abstrata Discount, e implementar classes concretas que extendem a classe Discount.
     * Dessa forma, podemos adicionar novas formas de calcular desconto, sem alterar o código de calculo de desconto.
     * 
     * Essa forma de implementação é um padrão de projeto chamado Strategy, da Gang of Four.
*/

export class ShoppingCart {
    private readonly _items: CartItem[] = []

    constructor(private readonly _discount: Discount) { } // Ao instanciar um ShoppingCart, devemos passar um objeto do tipo Discount para o construtor.
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