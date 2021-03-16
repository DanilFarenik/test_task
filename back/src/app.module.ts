import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductsModule } from './products/products.module';

@Module({
  imports: [ProductsModule, TypeOrmModule.forRoot({
    type: 'postgres',
    host: '35.192.46.125',
    port: 5432,
    username: 'postgres',
    password: 'qweqwe',
    database: 'hotdog',
    entities: [
      __dirname + '/**/*.entity{.ts,.js}',
    ],
    synchronize: false,
  }),],
  controllers: [],
  providers: [],
})
export class AppModule { }