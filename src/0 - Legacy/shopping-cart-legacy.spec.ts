import { ShoppingCartLegacy } from "./shopping-cart legacy"

describe('ShoppingCart - Legacy', () => {
    test("Deve ser possível adicionar itens ao carrinho", () => {
        const cart = new ShoppingCartLegacy()
        const item1 = { name: "Calculadora", price: 7.5 }
        const item2 = { name: "Mouse", price: 15.0 }
        const item3 = { name: "Teclado", price: 25.0 }
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        expect(cart.items[0]).toEqual(item1)
        expect(cart.total()).toBe(47.5)
        expect(cart.items.length).toBe(3)
        expect(cart.orderStatus).toBe('open')
    })

    test("Deve ser possível remover itens do carrinho", () => {
        const cart = new ShoppingCartLegacy()
        const item1 = { name: "Calculadora", price: 7.5 }
        const item2 = { name: "Mouse", price: 15.0 }
        const item3 = { name: "Teclado", price: 25.0 }
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        cart.removeItem(0)
        expect(cart.items[0]).toEqual(item2)
        expect(cart.total()).toBe(40.0)
    })

    test("O carrinho deve ser limpo após o checkout", () => {
        const cart = new ShoppingCartLegacy()
        const item1 = { name: "Calculadora", price: 7.5 }
        const item2 = { name: "Mouse", price: 15.0 }
        const item3 = { name: "Teclado", price: 25.0 }
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        cart.checkout()
        expect(cart.items.length).toBe(0)
    })

    test("O status do carrinho deve ser 'closed' após o checkout", () => {
        const cart = new ShoppingCartLegacy()
        const item1 = { name: "Calculadora", price: 7.5 }
        const item2 = { name: "Mouse", price: 15.0 }
        const item3 = { name: "Teclado", price: 25.0 }
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        cart.checkout()
        expect(cart.orderStatus).toBe('closed')
    })
})