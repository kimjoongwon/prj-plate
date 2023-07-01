import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserGroupCategoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
