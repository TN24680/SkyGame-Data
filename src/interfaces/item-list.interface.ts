import type { IConfig, IGuid } from './base.interface.js';
import type { ICost } from './cost.interface.js';
import type { IItem } from './item.interface.js';
import type { IShop } from './shop.interface.js';

export interface IItemListConfig extends IConfig<IItemList> {}

export interface IItemList extends IGuid {
  /** All items in the list. */
  items: Array<IItemListNode>;
  description?: string;

  /// References ///
  shop?: IShop;

}

export interface IItemListNode extends IGuid, ICost {
  /** Item unlocked through this node. */
  item: IItem;
  quantity?: number;

  /// References ///
  itemList: IItemList;

  /// Progress ///
  unlocked?: boolean;
}
