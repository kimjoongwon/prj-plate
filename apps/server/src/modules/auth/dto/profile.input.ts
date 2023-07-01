import { InputType } from '@nestjs/graphql';
import { IsNotEmpty, MinLength } from 'class-validator';

@InputType()
export class ProfileInput {
  @IsNotEmpty()
  @MinLength(2)
  phone: string;

  @IsNotEmpty()
  @MinLength(2)
  nickname: string;
}
