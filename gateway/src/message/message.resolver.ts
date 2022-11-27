import {Args, Int, Mutation, Query, Resolver} from '@nestjs/graphql';
import {MessageService} from './message.service';
import {Message} from './entities/message.entity';
import {CreateMessageInput} from './dto/create-message.input';
import {UpdateMessageInput} from './dto/update-message.input';

@Resolver(() => Message)
export class MessageResolver {
  constructor(private readonly messageService: MessageService) {
  }

  @Query(() => [Message], {name: 'messageList'})
  public findAll(): Message[] {
    return this.messageService.findAll();
  }

  @Query(() => Message, {name: 'message'})
  public findOne(@Args('id', {type: () => Int}) id: number): Message {
    return this.messageService.findOne(id);
  }


  @Mutation(() => Message)
  public createMessage(@Args('createMessageInput') createMessageInput: CreateMessageInput) {
    return this.messageService.create(createMessageInput);
  }

  @Mutation(() => Message)
  public updateMessage(@Args('updateMessageInput') updateMessageInput: UpdateMessageInput) {
    return this.messageService.update(updateMessageInput.id, updateMessageInput);
  }

  @Mutation(() => Message)
  public removeMessage(@Args('id', {type: () => Int}) id: number) {
    return this.messageService.remove(id);
  }
}
