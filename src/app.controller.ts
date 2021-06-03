import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('new')
  newEndpoint() {
    return 'im new'
  }

  @Get('products/:id')
  getOneProduct(@Param('id') id: string) {

    return `product ${id}`
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(@Param('categoryId') categoyId: string, @Param('productId') productId: string) {
    return `Product: ${productId} category: ${categoyId}`
  }
}
