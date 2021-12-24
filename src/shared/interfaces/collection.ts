import { ICollectionItem } from "../../pages/shop/components/CollectionItem";

export default interface ICollection {
  id: number;
  title: string;
  routeName: string;
  items: Array<ICollectionItem>;
}
