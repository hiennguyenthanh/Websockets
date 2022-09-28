import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';

// @WebSocketGateway(80, { namespace: 'message' })
@WebSocketGateway()
export class ChatGateway {
  @WebSocketServer()
  server;
  @SubscribeMessage('message')
  handleMessage(@MessageBody() message: string): void {
    this.server.emit('message', message);
  }
}
