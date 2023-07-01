import {
  IsEmail,
  IsNotEmpty,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';
import { ProfileInput } from './profile.input';
import { Type } from 'class-transformer';

@InputType()
export class SignupInput {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Type()
  @ValidateNested()
  profile: ProfileInput;
}
