import type { IConfig, IGuid } from './base.interface.js';
import type { IEventInstance } from './event.interface.js';
import type { IIAP } from './iap.interface.js';
import type { IItemList } from './item-list.interface.js';
import type { ISeason } from './season.interface.js';
import type { ISpirit } from './spirit.interface.js';
import type { IWiki } from './wiki.interface.js';
import { DateTime } from 'luxon';

export interface IShopConfig extends IConfig<IShop> {}

export type ShopType = 'Store' | 'Spirit' | 'Object';

export interface IShop extends IGuid {
  type: ShopType;
  name?: string;

  date?: DateTime;
  endDate?: DateTime;

  permanent?: boolean | string;

  /// References ///
  iaps?: Array<IIAP>;
  itemList?: IItemList;
  event?: IEventInstance;
  spirit?: ISpirit;
  season?: ISeason;

  _wiki?: IWiki;
}
