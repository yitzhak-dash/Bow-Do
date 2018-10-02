import { DistanceUnits } from '../models/place.model';

export function getPlacesByLocation(location: GeoJSON.Point, radius: number, distanceUnit: DistanceUnits = 'km'): any {
    return {
        query: {
            bool: {
                must: {match_all: {}},
                filter: {
                    geo_distance: {
                        distance: `${radius}${distanceUnit}`,
                        'location.coordinates': {
                            lat: location.coordinates[0],
                            lon: location.coordinates[1]
                        }
                    }
                }
            }
        },
        sort: [
            '_score',
            {
                _geo_distance: {
                    'location.coordinates': {
                        lat: location.coordinates[0],
                        lon: location.coordinates[1]
                    },
                    order: 'asc',
                    unit: `${distanceUnit}`,
                    distance_type: 'plane'
                }
            }
        ]
    };
}
