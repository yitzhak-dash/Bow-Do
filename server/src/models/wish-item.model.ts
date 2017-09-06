import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('wishes')
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
    completed: boolean;

    @Column('simple-array')
    tags: string[] = [];
}
