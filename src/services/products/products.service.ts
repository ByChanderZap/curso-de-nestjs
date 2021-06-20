import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

import {
  CreateProductDto,
  UpdateProductDto,
} from '../../dtos/products/products.dtos';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    const data = this.products.find((item) => item.id === id);
    if (!data) throw new NotFoundException('Product not found');
    return data;
  }

  create(payload: CreateProductDto) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: UpdateProductDto) {
    const product = this.findOne(id);
    if (!product) throw new NotFoundException('Product not found');

    const index = this.products.findIndex((item) => item.id === id);
    this.products[index] = {
      ...product,
      ...payload,
    };
    return this.products[index];
  }

  delete(id: number) {
    const found = this.products.findIndex((item) => item.id == id);
    if (found === -1) throw new NotFoundException('Product not found');

    this.products.splice(found, 1);
    return true;
  }
}
