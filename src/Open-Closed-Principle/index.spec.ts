import { FiftyPercentDiscount, WithoutDiscount } from "./entities/discount"
import { Order } from "./entities/order"
import { Product } from "./entities/product"
import { ShoppingCart } from "./entities/shopping-cart"
import { Messaging } from "./services/messaging"
import { Persistency } from "./services/persistency"

describe("Open Closed Principle", () => {
    test("Deve ser possível adicionar itens ao carrinho", () => {
        const withoutDiscount = new WithoutDiscount()
        const cart = new ShoppingCart(withoutDiscount)
        const item1 = new Product("Calculadora", 10.0)
        const item2 = new Product("Mouse", 15.0)
        const item3 = new Product("Teclado", 25.0)
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        expect(cart.items[0]).toEqual(item1)
        expect(cart.total()).toBe(50)
        expect(cart.items.length).toBe(3)
    })

    test("Deve ser possível remover itens do carrinho", () => {
        const withoutDiscount = new WithoutDiscount()
        const cart = new ShoppingCart(withoutDiscount)
        const item1 = new Product("Calculadora", 7.5)
        const item2 = new Product("Mouse", 15.0)
        const item3 = new Product("Teclado", 25.0)
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        cart.removeItem(0)
        expect(cart.items[0]).toEqual(item2)
        expect(cart.total()).toBe(40.0)
    })

    test("Deve ser possível aplicar um desconto na compra", () => {
        const fiftyPercentDiscount = new FiftyPercentDiscount()
        const cart = new ShoppingCart(fiftyPercentDiscount)
        const item1 = new Product("Calculadora", 10)
        const item2 = new Product("Mouse", 15.0)
        const item3 = new Product("Teclado", 25.0)
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        expect(cart.total()).toBe(50)
        expect(cart.totalWithDiscount()).toBe(25)
    })

    test("O carrinho deve ser limpo após o checkout", () => {
        const withoutDiscount = new WithoutDiscount()
        const cart = new ShoppingCart(withoutDiscount)
        const messaging = new Messaging()
        const persistency = new Persistency()
        const order = new Order(cart, messaging, persistency)
        const item1 = new Product("Calculadora", 7.5)
        const item2 = new Product("Mouse", 15.0)
        const item3 = new Product("Teclado", 25.0)
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        order.checkout()
        expect(cart.items.length).toBe(0)
    })

    test("O status do pedido deve ser 'closed' após o checkout", () => {
        const withoutDiscount = new WithoutDiscount()
        const cart = new ShoppingCart(withoutDiscount)
        const messaging = new Messaging()
        const persistency = new Persistency()
        const order = new Order(cart, messaging, persistency)
        const item1 = new Product("Calculadora", 7.5)
        const item2 = new Product("Mouse", 15.0)
        const item3 = new Product("Teclado", 25.0)
        cart.addItem(item1)
        cart.addItem(item2)
        cart.addItem(item3)
        order.checkout()
        expect(order.orderStatus).toBe('closed')
    })
})