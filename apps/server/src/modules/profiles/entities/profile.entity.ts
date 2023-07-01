import { ObjectType } from '@nestjs/graphql';
import { BaseModel } from '../../../common/models/base.model';

@ObjectType()
export class Profile extends BaseModel {
  phone: string;
  nickname: string;
  userId: string;
}
