const MessageFormat = {
  error: (message) => {
    return `[ERROR] ${message}`;
  },
  winners: (winners) => {
    return `최종 우승자: ${winners.join(', ')}`;
  },
};

export default MessageFormat;
