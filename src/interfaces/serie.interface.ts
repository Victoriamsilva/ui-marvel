import { ICreatorList, IDate, IDefault, IList, IPrice, IStoryList } from './default.interface';

export interface ISerie extends IDefault {
  characters: IList;
  stories: IStoryList;
  events: IList;
  comics: IList;
  dates: IDate[];
  prices: IPrice[];
  creators: ICreatorList;
}
