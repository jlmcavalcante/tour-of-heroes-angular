import { Injectable } from '@angular/core';

@Injectable({
  // Service fornecido no início da aplicação (root)
  providedIn: 'root'
})
export class MessageService {
  // Private: Promover abstração e proteção dos dados através do encapsulamento
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  // Método para obter - sem comprometer - os dados.
  getMessages(): string[] {
    return this.messages;
  }
}
