import type {  IGuid } from './base.interface.js';
import type { IEventInstanceSpirit } from './event.interface.js';
import type { INode } from './node.interface.js';
import type { ISpecialVisitSpirit } from './special-visit-spirit.interface.js';
import type { ISpirit } from './spirit.interface.js';
import type { ITravelingSpirit } from './traveling-spirit.interface.js';

export interface ISpiritTree extends IGuid {
  name?: string;
  draft?: boolean;

  /// References ///
  permanent?: boolean | string;
  node?: INode;
  tier?: ISpiritTreeTier;
  spirit?: ISpirit;
  travelingSpirit?: ITravelingSpirit;
  specialVisitSpirit?: ISpecialVisitSpirit;
  eventInstanceSpirit?: IEventInstanceSpirit;
}

export interface IRevisedSpiritTree extends ISpiritTree {
  revisionType: 'DuringSeason' | 'AfterSeason' | 'Limited' | 'Patch';
}

export interface ISpiritTreeTier extends IGuid {
  /// References ///
  tree?: ISpiritTree;
  prev?: ISpiritTreeTier;
  next?: ISpiritTreeTier;
  root?: ISpiritTreeTier;
  rows: Array<SpiritTreeTierRow>;
}


export type SpiritTreeTierRow = [INode?, INode?, INode?];
