import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WishItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created: Date;

    @Column()
    indexNum: number;

    @Column()
    completed: boolean;

    @Column('simple-array')
    tags: string[];
}
