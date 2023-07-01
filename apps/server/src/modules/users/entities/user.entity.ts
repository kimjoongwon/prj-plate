import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../../common/models/base.model';
import { Profile } from '../../profiles/entities/profile.entity';

@ObjectType()
export class User extends BaseModel {
  id: string;
  email: string;

  @Field(() => Profile)
  profile: Profile;
}
