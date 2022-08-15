export interface Customer {
    firstName: string
    lastName: string
    email: string
    phone: string
    cpf: string
    cnpj: string
}

export interface CustomerOrderProtocol {
    getName(): string
    getIDN(): string
}

export interface IndividualCustomerProtocol {
    firstName: string
    lastName: string
    email: string
    phone: string
    cpf: string
}

export interface EntrepriseCustomerProtocol {
    razaoSocial: string
    nomeFantasia: string
    email: string
    phone: string
    cnpj: string
}