export interface IChat {
  title: string;
  link?: string;
}
export interface IChatsGroup {
  title: string;
  chats: IChat[];
}

export interface IChatHistory {
  id: string;
  questions: string;
  answers: string;
}
