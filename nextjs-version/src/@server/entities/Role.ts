import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity({ name: 't_role' })
export class Role extends BaseEntity {
  constructor(role?: any) {
    super()
    this.id = role?.id
    this.roleName = role?.roleName
    this.description = role?.description
  }

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ name: 'role_name' })
  roleName!: string

  @Column({ name: 'description' })
  description!: string
}

@Entity({ name: 't_role_menu' })
export class RoleMenu extends BaseEntity {
  constructor(roleMenu?: any) {
    super()
    this.id = roleMenu?.id
    this.roleId = roleMenu?.roleId
    this.menuId = roleMenu?.menuId
  }

  @PrimaryGeneratedColumn()
  id?: number

  @Column({ name: 'role_id' })
  roleId!: number

  @Column({ name: 'menu_id' })
  menuId!: number
}
