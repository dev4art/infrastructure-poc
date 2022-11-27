import {Injectable} from '@nestjs/common';
import {CreateMessageInput} from './dto/create-message.input';
import {UpdateMessageInput} from './dto/update-message.input';
import {Message} from "./entities/message.entity";

@Injectable()
export class MessageService {
  public create(createMessageInput: CreateMessageInput) {
    return 'This action adds a new message';
  }

  public findAll() {
    const result = [];

    for (let i = 0; i < 5; i++) {
      const message = new Message();
      message.id = i + 1
      message.text = String(Math.random())
      result.push(message)
    }

    return result;
  }

  public findOne(id: number): Message {
    const message = new Message();
    message.id = id;
    message.text = String(Math.random());

    return message;
  }

  public update(id: number, updateMessageInput: UpdateMessageInput) {
    return `This action updates a #${id} message`;
  }

  public remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
