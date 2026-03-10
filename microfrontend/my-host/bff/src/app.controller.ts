import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("getHello")
  getHello(): string {
    return this.appService.getHello();
  }
  @Get("getUsers")
  getUsers() {
    console.log("getUsers called");
    return this.appService.fetchUser();
  }
}
