import type { IConfig, IGuid, IPeriod } from './base.interface.js';
import type { ISpiritTree } from './spirit-tree.interface.js';
import type { ISpirit } from './spirit.interface.js';

export interface ITravelingSpiritConfig extends IConfig<ITravelingSpirit> {}

export interface ITravelingSpirit extends IGuid, IPeriod {
  /** Traveling Spirit number, starting at 1 for the first TS visit. */
  number: number;
  /** This is the n-th visit of this spirit. */
  visit: number;

  /// References ///
  spirit: ISpirit;
  tree: ISpiritTree;
}
