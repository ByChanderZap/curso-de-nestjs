import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product.entity';

@Injectable()
export class ProductsService {
  private counterId = 0;
  private products: Product[] = [];

  findAll() {
    return this.products;
  }

  findOne(id: number) {
    return this.products.find((item) => item.id === id);
  }

  create(payload: any) {
    this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    this.products.push(newProduct);
    return newProduct;
  }

  update(id: number, payload: any) {
    const found = this.products.findIndex((item) => item.id == id);

    if (found === -1) throw new Error('Product not found');
    this.products[found] = {
      id: id,
      ...payload,
    };
    return {
      Message: 'Product updated',
      Updated: this.products[found],
    };
  }

  delete(id: number) {
    const found = this.products.findIndex((item) => item.id == id);
    if (found === -1) throw new Error('Product not found');

    this.products.splice(found, 1);
    return true;
  }
}
