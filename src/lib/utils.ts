import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export class Sanitizer {
  static formatDate(date: string) {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  }

  static formatPrice(price: number) {
    return price.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
}

export class MotivationalMessages {
  static getRandomMessage() {
    const messages = [
      "Muito bem! Continue assim!",
      "Você está fazendo um ótimo trabalho! Continue assim!",
      "Orgulho de você! Continue assim!",
      "Você está se saindo muito bem! Continue assim!",
    ];

    return messages[Math.floor(Math.random() * messages.length)];
  }
}

export class Greetings {
  static getGreeting() {
    const hour = new Date().getHours();

    if (hour < 12) {
      return "dia";
    }

    if (hour < 18) {
      return "tarde";
    }

    return "noite";
  }
}
