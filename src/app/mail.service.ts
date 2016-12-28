import { Injectable } from '@angular/core';

@Injectable()
export class MailService {

  messages = [
    "You're now friends with Lenny",
    "Lenny liked your tweet",
    "You'll never believe what ..."
  ];

  constructor() { }

}
