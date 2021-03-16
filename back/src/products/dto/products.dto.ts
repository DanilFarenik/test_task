import { ApiProperty } from "@nestjs/swagger"
import { IsNumberString, Length } from 'class-validator';

export class ProductDto {
  @ApiProperty()
  @Length(5, 20, { message: "incorrect length  title" })
  readonly title: string

  @IsNumberString()
  @ApiProperty()
  readonly price: number

  @Length(5, 255, { message: "incorrect length description" })
  @ApiProperty()
  readonly description: string

  @Length(5, 255, { message: "incorrect length  image src" })
  @ApiProperty()
  readonly img: string

  @ApiProperty()
  readonly id?: string
}