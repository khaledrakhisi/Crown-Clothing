import ICollectionItem from "./collectionItems";

export default interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: Array<ICollectionItem>;
}
