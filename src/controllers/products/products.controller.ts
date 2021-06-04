import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

import { ProductsService } from '../../services/products/products.service';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get(':id')
  getOne(@Param('id') id: number) {
    const oneProd = this.productService.findOne(id);
    return {
      Message: 'One product',
      Product: oneProd,
    };
  }

  @Get()
  @HttpCode(HttpStatus.ACCEPTED)
  getAll(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    const allProducts = this.productService.findAll();
    return {
      Message: `All products`,
      Products: allProducts,
    };
  }

  @Post()
  create(@Body() payload: any) {
    const created = this.productService.create(payload);
    return {
      Message: 'Product created',
      Created: created,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    const updated = this.productService.update(id, payload);
    return {
      Message: 'Product updated',
      Updated: updated,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    this.productService.delete(id);
    return {
      Message: `Product ${id} deleted`,
    };
  }
}
