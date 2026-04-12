import type { IArea } from './area.interface.js';
import type { IGuid } from './base.interface.js';
import type { IMapData } from './map-data.interface.js';
import type { IWiki } from './wiki.interface.js';

export interface IWingedLight extends IGuid {
  order: number;
  name?: string;
  description?: string;
  mapData?: IMapData;

  /// References ///
  area: IArea;

  /// Progress ///
  unlocked?: boolean;

  _wiki?: IWiki;
}
