export interface ICharacter {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  thumbnail: IImage;
  comics: IList;
  stories: StoryList;
  events: IList;
  series: IList;
}

export interface IImage {
  path: string;
  extension: string;
}

export interface StoryList {
  available: number;
  returned: number;
  collectionURI: string;
  items: IStorySummary[];
}

export interface IStorySummary extends ISummary {
  type: string;
}

export interface IList {
  available: number;
  returned: number;
  collectionURI: string;
  items: ISummary[];
}

export interface ISummary {
  resourceURI: string;
  name: string;
}
