import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('places')
export class Place {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('point')
    location: { lat: number, long: number };


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