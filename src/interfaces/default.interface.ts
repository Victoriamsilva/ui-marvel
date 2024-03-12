export interface IPrice {
  type: string;
  price: number;
}

export interface ISummary {
  resourceURI: string;
  name: string;
}

export interface IList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ISummary[];
}

export interface IDate {
  type: string;
  date: string;
}

export interface IImage {
  path: string;
  extension: string;
}

export interface ICreatorList extends IList {
  items: ICreatorSummary[];
}

export interface ICreatorSummary extends ISummary {
  role: string;
}

export interface IStoryList extends IList {
  items: IStorySummary[];
}

export interface IStorySummary extends ISummary {
  type: string;
}

export interface IDefault {
  id: number;
  title?: string;
  name?: string;
  description: string;
  modified?: Date;
  resourceURI?: string;
  thumbnail: IImage;
}
