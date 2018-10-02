import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SimpleColumnType } from 'typeorm/driver/types/ColumnTypes';

export interface Place {
    id: string;

    // humanized property.
    placeLocation: { lat: number, long: number };

    distance?: any;

    address?: string;

    placedIn?: string;

    name?: string;

    description?: string;

    tags?: string[];
}

export interface EsPlace {
    id: string;
    name: string;
    location: {
        coordinates: {
            lat: number;
            lon: number;
        },
        address: string;
        mapId: string;
    };
    openHours: {
        'day': string;
        'hours': string[];
    }[];
    categories: string[];
}

export type DistanceUnits = 'km' | 'm' ;
