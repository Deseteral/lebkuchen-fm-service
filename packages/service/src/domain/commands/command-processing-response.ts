interface MessageBlock {
  text: string,
  type: ('HEADER' | 'PLAIN_TEXT'),
}

interface CommandProcessingResponse {
  messages: MessageBlock[],
  isVisibleToIssuerOnly: boolean,
}

function makeSingleTextMessage(text: string): MessageBlock[] {
  return [{ text, type: 'PLAIN_TEXT' }];
}

export default CommandProcessingResponse;
export {
  MessageBlock,
  makeSingleTextMessage,
};