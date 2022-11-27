import {Field, Int, ObjectType,} from '@nestjs/graphql';

@ObjectType()
export class Message {
  @Field(() => Int, {description: 'Message ID'})
  public id: number;

  @Field(() => String, {description: 'Text message'})
  public text: string;
}
