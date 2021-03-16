import { HttpStatus, HttpException } from '@nestjs/common';
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { ProductDto } from './dto/products.dto';
import { Product } from './products.entity';
import { ProductsService } from './products.service';

@ApiTags("product")
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'get all products',
    type: [Product],
  })
  getAll(): Promise<Product[]> {
    const products: Promise<Product[]> = this.productsService.getAll();

    return products;
  }

  @Post()
  @ApiResponse({
    status: 200,
    description: 'Create product',
    type: [Product],
  })
  async create(@Body() productDto: ProductDto): Promise<Product> {
    const product: Product = await this.productsService.create(productDto);

    return product;
  }

  @Put(':id')
  @ApiResponse({
    status: 200,
    description: 'Update product',
    type: [Product],
  })
  async update(@Body() productDto: ProductDto, @Param('id') id: number): Promise<Product> {
    try {
      const product: Product = await this.productsService.updateById(productDto, id);

      return product;
    } catch (err) {
      throw new HttpException('Product not found or db error', HttpStatus.NOT_FOUND);
    }
  }

  @Delete(':id')
  @ApiResponse({
    status: 200,
    description: 'Delete product',
    type: [Product],
  })
  async remove(@Param('id') id: number) {
    try {
      const product: Product = await this.productsService.deleteById(id);

      return product;
    } catch (err) {
      throw new HttpException('Product not found or db error', HttpStatus.NOT_FOUND);
    }
  }
}
