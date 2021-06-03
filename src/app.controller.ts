import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('products/:id')
  getOneProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get('products')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `Limit: ${limit}, offset: ${offset}, Brand: ${brand}`;
  }

  @Get('categories/:categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoyId: string,
    @Param('productId') productId: string,
  ) {
    return `Product: ${productId} category: ${categoyId}`;
  }
}
