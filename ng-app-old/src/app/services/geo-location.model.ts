export class GeoPosition {
  constructor(public long: any, public lat: any, public accuracy: any) {
  }

  toString() {
    return `lat: ${this.lat}, long: ${this.long}`;
  }
}
