import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SimpleColumnType } from 'typeorm/driver/types/ColumnTypes';

@Entity('places')
export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('point')
    location: string;

    // humanized property.
    placeLocation: { lat: number, long: number };

    distance: number;

    address?: {
        city: string;
        zip?: string;
        state?: string;
        country: string;
        lines?: string[];
    };
    placedIn?: string;

    @Column()
    name?: string;

    @Column()
    description?: string;

    @Column('simple-array')
    tags?: string[];
}
