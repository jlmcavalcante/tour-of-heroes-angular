import { Injectable } from '@angular/core';

// Este serviço foi utilizado

@Injectable({
  // Disponibilizado no início da aplicação
  providedIn: 'root'
})
export class MessageService {
  private messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }

  getMessages(): string[] {
    return this.messages;
  }
}
