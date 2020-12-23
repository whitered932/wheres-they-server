import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { VisitEntity } from './visit.entity';
import { GroupEntity } from './group.entity';
import { VisitorTypeEntity } from './visitor-type.entity';

@Entity('visitors')
export class VisitorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @OneToMany(() => VisitEntity, (visit) => visit.visitor)
  visits: VisitEntity[];

  @ManyToOne(() => GroupEntity, (group) => group.visitors)
  group: GroupEntity;

  @ManyToMany(() => VisitorTypeEntity, (type) => type.visitors, {
    nullable: true,
  })
  @JoinTable({ name: 'visitor_types_types' })
  types: VisitorTypeEntity[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at;

  @DeleteDateColumn()
  deleted_at;
}
