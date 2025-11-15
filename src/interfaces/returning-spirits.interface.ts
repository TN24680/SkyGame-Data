import type { IConfig, IGuid, IPeriod } from './base.interface.js';
import type { ISpiritTree } from './spirit-tree.interface.js';
import type { ISpirit } from './spirit.interface.js';
import type { IArea } from './area.interface.js';
import type { ICalendarFm, IWiki } from './wiki.interface.js';

export interface IReturningSpiritsConfig extends IConfig<IReturningSpirits> {}

export interface IReturningSpirits extends IGuid, IPeriod {
  /** Name of the occassion. */
  name?: string;

  /** Area the spirits visited.  */
  area?: IArea;
  /** Visiting spirits. */
  spirits: Array<IReturningSpirit>;

  imageUrl?: string;
  draft?: boolean;

  /// Metadata ///
  _wiki?: IWiki;
  _calendar?: ICalendarFm;
}

export interface IReturningSpirit extends IGuid {
  /// References ///
  return: IReturningSpirits;
  spirit: ISpirit;
  tree: ISpiritTree;
}
