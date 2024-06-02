import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateOrderDTO {
  @IsOptional()
  @IsUUID()
  productId: string;

  @IsOptional()
  @IsUUID()
  clientId: string;

  @IsOptional()
  @IsString()
  address: string;
}
