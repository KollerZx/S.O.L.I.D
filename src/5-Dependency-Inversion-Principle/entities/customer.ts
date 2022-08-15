import { Customer, CustomerOrderProtocol, EntrepriseCustomerProtocol, IndividualCustomerProtocol } from "./interfaces/customers";


/* 
Interface Segregation Principle - Os clientes não devem ser forçados a depender de types, interfaces ou classes abstratas que não utilizam.
*/


/*
====================== Exemplo de código que não segue o princípio ======================
*/
class Individual_Customer implements Customer {
    firstName: string
    lastName: string
    email: string
    phone: string
    cpf: string
    cnpj: string // Um cliente individual não deveria ser forçado a implementar a propriedade cnpj

    constructor(firstName: string, lastName: string, email: string, phone: string, cpf: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.cpf = cpf
        this.cnpj = ''
    }

}

class Entreprise_Customer implements Customer {
    firstName: string // O mais correto seria Razão Social, Nome Fantasia... 
    lastName: string
    email: string
    phone: string
    cpf: string // Um cliente de empresa não deveria ser forçado a implementar a propriedade cpf
    cnpj: string

    constructor(firstName: string, lastName: string, email: string, phone: string, cnpj: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.cpf = ''
        this.cnpj = cnpj
    }

}

//====================================================================================

export class IndividualCustomer implements IndividualCustomerProtocol, CustomerOrderProtocol {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cpf: string;

    constructor(firstName: string, lastName: string, email: string, phone: string, cpf: string) {
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.phone = phone
        this.cpf = cpf
    }
    getName(): string {
        return `${this.firstName} ${this.lastName}`
    }
    getIDN(): string {
        return this.cpf
    }

}

export class EntrepriseCustomer implements EntrepriseCustomerProtocol, CustomerOrderProtocol {
    razaoSocial: string;
    nomeFantasia: string;
    email: string;
    phone: string;
    cnpj: string;

    constructor(razaoSocial: string, nomeFantasia: string, email: string, phone: string, cnpj: string) {
        this.razaoSocial = razaoSocial
        this.nomeFantasia = nomeFantasia
        this.email = email
        this.phone = phone
        this.cnpj = cnpj
    }
    getName(): string {
        return `Razão Social: ${this.razaoSocial} - Nome Fantasia: ${this.nomeFantasia}`
    }
    getIDN(): string {
        return this.cnpj
    }
}

