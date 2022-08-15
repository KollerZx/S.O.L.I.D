# S.O.L.I.D

Nesse pequeno exemplo, será apresentado a aplicação dos princípios SOLID, iniciando um projeto de forma totalmente acoplada e sem abstrações, 
e a medida que se for refatorando, vamos aplicando um príncipio de cada vez, sempre mantendo uma versão anterior como comparação.

Para cada caso de aplicação há um arquivo de teste `index.spec.ts` que testa cada modificação implementada.
Para rodar os testes:
```sh
    yarn test
    #OR
    npm test
```

## Código Legado

O Exemplo de código legado, sem a aplicação dos princípios, pode ser encontrado [aqui](./src/0%20-%20Legacy/shopping-cart%20legacy.ts)

## 1. Single Responsability Principle

> "Every class should have only one reason to change"

Uma classe deve fazer uma única coisa, e somente por esse motivo ela deve mudar. Uma classe que realiza várias ações, já possui mais de um motivo para mudar.

Veja sua aplicação [aqui](./src/1-%20Single-Responsability-Principle/)

## 2.  Open/Closed Principle

>" Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification."

Uma classe é fechada, pois pode ser compilada, armazenada em uma biblioteca, baseada e usada por classes cliente. 
Mas também é aberto, pois qualquer nova classe pode usá-lo como pai, adicionando novas funcionalidades. Quando uma classe descendente é definida, não há necessidade de alterar a original ou incomodar seus clientes.

Veja sua aplicação [aqui](./src/2-Open-Closed-Principle/)

## 3. Liskov Substitution Principle
> "Let Φ(x) be a property provable about objects x of type T. Then Φ(y) should be true for objects y of type S where S is a subtype of T."

Calma, concordamos que essa definição científica deixa muito mais confuso esse príncipio.

De maneira bem simples, esse princípio define que subtipos podem ser substituidos por seus tipos de base, ou seja, se o programa espera um Animal, 
algo do tipo Cachorro (que herda de Animal) pode substituir o Animal.

Veja sua aplicação [aqui](./src/3-Liskov-Substitution-Principle/)

## 4. Interface Segregation Principle

> "Clients(classes) should not be forced to depend upon interfaces that they do not use."

Ao se implementar uma interface as mesmas devem ser específicas para cada situação.

Veja sua aplicação [aqui](./src/4-Interface-Segregation-Principle/)

## 5. Dependency Inversion Principle

> "high-level modules should not depend on low-level modules; both should depend on abstractions. Abstractions should not depend on details. Details should depend upon abstractions."

- Classes de baixo nível são classes que executam tarefas(os detalhes)
- Classes de alto nível são classes que gerenciam as classes de baixo nível.

Veja sua aplicação [aqui](./src/5-Dependency-Inversion-Principle/)