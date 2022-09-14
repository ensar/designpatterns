interface IMessage {
  send(message: string): void;
}

class SMS implements IMessage {
  send(message: string): void {
    console.log(`SMS ile ${message} gönderildi.`);
  }
}

class Email implements IMessage {
  send(message: string): void {
    console.log(`Email ile ${message} gönderildi.`);
  }
}

class Message {
  private _message: IMessage;

  constructor(message: IMessage) {
    this._message = message;
  }

  public SendMessage(message: string): void {
    this._message.send(message);
  }
}

function run() {
  const message = new Message(new SMS());
  message.SendMessage('Strategy Pattern');
}
run();
