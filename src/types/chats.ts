export interface IChat {
  title: string;
  link?: string;
}
export interface IChatsGroup {
  title: string;
  chats: IChat[];
}
