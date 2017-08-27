import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class WishItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    created: Date = new Date();

    @Column()
    indexNum: number;

    @Column()
    completed: boolean = false;

    @Column('simple-array')
    tags: string[];
}
