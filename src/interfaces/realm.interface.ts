import type { IConfig, IGuid } from './base.interface.js';
import type { IArea } from './area.interface.js';
import type { IWiki } from './wiki.interface.js';
import type { IMapData } from './map-data.interface.js';
import type { ISpirit } from './spirit.interface.js';

export interface IRealmConfig extends IConfig<IRealm> {
  _wiki: IWiki;
}

export interface IRealm extends IGuid {
  name: string;
  shortName: string;

  /** Path to realm overview image. */
  imageUrl?: string;
  imagePosition?: string;
  /** Hidden from main view. */
  hidden?: boolean;

  /// References ///
  areas?: Array<IArea>;
  constellation?: IRealmConstellation;
  elder?: ISpirit;

  /// Metadata ///
  mapData?: IMapData;
  _wiki?: IWiki;
}

export interface IRealmConstellation {
  imageUrl: string;
  icons: Array<IRealmConstellationIcon>;
}

export interface IRealmConstellationIcon {
  imageUrl: string;
  position: [number, number];
  spirit?: ISpirit;
  flag?: boolean;
}
