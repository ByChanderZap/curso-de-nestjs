import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getOneProduct(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get()
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `Limit: ${limit}, offset: ${offset}, Brand: ${brand}`;
  }
}
