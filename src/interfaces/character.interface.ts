import { IDefault, IList, IStoryList } from './default.interface';

export interface ICharacter extends IDefault {
  comics: IList;
  stories: IStoryList;
  events: IList;
  series: IList;
}
