import { Controller, Get, Param } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get(':categoryId/products/:productId')
  getCategory(
    @Param('categoryId') categoyId: string,
    @Param('productId') productId: string,
  ) {
    return `Product: ${productId} category: ${categoyId}`;
  }
}
