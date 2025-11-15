import type { IConfig, IGuid } from './base.interface.js';
import type { IItem } from './item.interface.js';
import type { IShop } from './shop.interface.js';

export interface IIAPConfig extends IConfig<IIAP> {}

export interface IIAP extends IGuid {
  /** Price in USD. */
  price?: number;
  /** Name of the IAP. */
  name?: string;
  /** If true this is a returning IAP or catch-up pack. */
  returning?: boolean;

  /** Regular candles included in purchase. */
  c?: number;
  /** Season candles included in purchase. */
  sc?: number;
  /** Season Gift Passes included in purchase. */
  sp?: number;

  /// References ///

  items?: Array<IItem>;
  shop?: IShop;

  /// Progress ///

  bought?: boolean;
  gifted?: boolean;
}
