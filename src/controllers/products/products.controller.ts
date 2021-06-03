import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get(':id')
  getOne(@Param('id') id: string) {
    return `product ${id}`;
  }

  @Get()
  getAll(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
    @Query('brand') brand: string,
  ) {
    return `Limit: ${limit}, offset: ${offset}, Brand: ${brand}`;
  }

  @Post()
  create(@Body() payload: any) {
    return {
      Message: 'Created',
      Product: payload,
    };
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() payload: any) {
    payload.id = id;
    return {
      Message: 'Created',
      Updated: payload,
    };
  }

  @Delete(':id')
  delete(@Param('id') id: number) {
    return {
      Message: `Product ${id} created`,
    };
  }
}
