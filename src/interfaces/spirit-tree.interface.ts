import { DateTime } from 'luxon';
import type { IConfig, IGuid } from './base.interface.js';
import type { IEventInstanceSpirit } from './event.interface.js';
import type { INode } from './node.interface.js';
import type { IReturningSpirit } from './returning-spirits.interface.js';
import type { ISpirit } from './spirit.interface.js';
import type { ITravelingSpirit } from './traveling-spirit.interface.js';

export interface ISpiritTreeConfig extends IConfig<ISpiritTree> {}

export interface ISpiritTree extends IGuid {
  name?: string;
  draft?: boolean;

  /// References ///
  permanent?: boolean | string;
  node?: INode;
  tier?: ISpiritTreeTier;
  ts?: ITravelingSpirit;
  visit?: IReturningSpirit;
  spirit?: ISpirit;
  eventInstanceSpirit?: IEventInstanceSpirit;
}

export interface IRevisedSpiritTree extends ISpiritTree {
  revisionType: 'DuringSeason' | 'AfterSeason' | 'Limited';
}

export interface ISpiritTreeTier extends IGuid {
  /// References ///
  spiritTree?: ISpiritTree;
  prev?: ISpiritTreeTier;
  next?: ISpiritTreeTier;
  root?: ISpiritTreeTier;
  rows: Array<SpiritTreeTierRow>;
}


export type SpiritTreeTierRow = [INode?, INode?, INode?];
