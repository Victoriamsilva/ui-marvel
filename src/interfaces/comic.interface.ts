import { ICreatorList, IDate, IDefault, IList, IPrice, IStoryList } from './default.interface';

export interface IComic extends IDefault {
  characters: IList;
  stories: IStoryList;
  events: IList;
  series: IList;
  dates: IDate[];
  prices: IPrice[];
  creators: ICreatorList;
}
