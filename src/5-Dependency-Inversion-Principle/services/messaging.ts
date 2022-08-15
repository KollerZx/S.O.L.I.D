import { MessagingProtocol } from "../entities/interfaces/messaging-protocol";

export class Messaging implements MessagingProtocol {

    sendMessage(message: string): string {
        return `Mensagem enviada: ${message}`
    }
}