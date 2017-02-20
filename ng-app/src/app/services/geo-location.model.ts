export class GoeLocation {
  constructor(public lat: any, public long: any, public accuracy: any) {
  }

  toString() {
    return `lat: ${this.lat}, long: ${this.long}`;
  }
}
