import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from 'typeorm';

import { ProductDto } from "./dto/products.dto";
import { Product } from "./products.entity";


@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) { }


  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async create(productDto: ProductDto): Promise<Product> {
    const newProducts = new Product();

    newProducts.title = productDto.title;
    newProducts.price = productDto.price;
    newProducts.description = productDto.description;
    newProducts.img = productDto.img;

    return await this.productRepository.save(productDto);
  }

  async updateById(productDto: ProductDto, id: number): Promise<Product> {
    try {
      const product: Product = await this.productRepository.findOneOrFail(id);

      this.productRepository.merge(product, productDto);

      return this.productRepository.save(product);
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async deleteById(id: number): Promise<Product> {
    try {
      const product: Product = await this.productRepository.findOneOrFail(id);

      await this.productRepository.delete(id);

      return product;
    } catch (err) {
      return Promise.reject(err)
    }
  }

}