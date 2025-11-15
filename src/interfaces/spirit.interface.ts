import type { IArea } from './area.interface.js';
import type { IConfig, IGuid } from './base.interface.js';
import type { IEventInstanceSpirit } from './event.interface.js';
import type { IReturningSpirit } from './returning-spirits.interface.js';
import type { ISeason } from './season.interface.js';
import type { IShop } from './shop.interface.js';
import type { ISpiritTree, IRevisedSpiritTree as IRevisedSpiritTree } from './spirit-tree.interface.js';
import type { ITravelingSpirit } from './traveling-spirit.interface.js';
import type { IWiki } from './wiki.interface.js';

export interface ISpiritConfig extends IConfig<ISpirit> {}

export type SpiritType =  'Regular' | 'Elder' | 'Guide' | 'Season' | 'Event' | 'Special';

export interface ISpirit extends IGuid {
  /** Name of the spirit. */
  name: string;
  /** Type of the spirit. */
  type: SpiritType;

  /** Image URL. */
  imageUrl?: string;

  /// References ///

  /**
   * Main spirit tree(s).
   * For regular spirits this is the constellation tree.
   * For season spirits this is the seasonal tree.
   */
  tree?: ISpiritTree;

  /** Revised versions of the main spirit tree. */
  treeRevisions?: Array<IRevisedSpiritTree>;

  /** Area this spirit can be found in normally. */
  area?: IArea;
  /** Season this spirit is part of. */
  season?: ISeason;
  /** All Traveling Spirit visits of this spirit. */
  ts?: Array<ITravelingSpirit>;
  /** All visits as returning spirits.  */
  returns?: Array<IReturningSpirit>;
  /** All visits during events. */
  events?: Array<IEventInstanceSpirit>;
  /** All shop instances. */
  shops?: Array<IShop>;

  /// Progress ///

  /** Memory of spirit is relived. */
  relived?: boolean;

  /// Metadata ///
  _wiki?: IWiki
  _index: number;
}
