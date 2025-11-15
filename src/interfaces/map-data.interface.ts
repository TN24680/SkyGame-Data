type LatLngTuple = [number, number, number?];

export interface IMapData {
  position?: LatLngTuple;
  zoom?: number;
  boundary?: Array<LatLngTuple>;
  boundaryLabelAlign?: string;
  boundaryColor?: string;
  videoUrl?: string;
}
