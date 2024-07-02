import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 't_menu' })
export class Menu extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column({ name: 'parent_id' })
  parentId!: number

  @Column({ name: 'title' })
  title!: string

  @Column({ name: 'description' })
  description!: string

  @Column({ name: 'icon' })
  icon!: string

  @Column({ name: 'path' })
  path!: string
}
