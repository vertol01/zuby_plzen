export interface IMarker {
    position: IPosition
}

export interface IPosition {
    lat: number,
    lng: number,
}
export interface IData {
    apiKey: string,
    zoom: number,
    center: IPosition,
    marker: IMarker 
}