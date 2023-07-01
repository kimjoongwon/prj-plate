import { InputType, PartialType } from '@nestjs/graphql';
import { Profile } from '../entities/profile.entity';

@InputType()
export class CreateProfileInput extends PartialType(Profile, InputType) {}
