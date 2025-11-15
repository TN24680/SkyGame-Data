import type { IConfig, IGuid } from './base.interface.js';
import type { IArea } from './area.interface.js';
import type { IMapData } from './map-data.interface.js';
import type { IWiki } from './wiki.interface.js';

export interface IMapShrineConfig extends IConfig<IMapShrine> {}

export interface IMapShrine extends IGuid {
  description?: string;
  imageUrl?: string;
  mapData?: IMapData;

  /// References ///
  area: IArea;

  _wiki?: IWiki;
}
