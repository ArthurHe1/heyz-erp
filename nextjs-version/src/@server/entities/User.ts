import "reflect-metadata";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@Entity({ name: "t_user" })
export class User extends BaseEntity {
  constructor(user?: any) {
    super();
    this.id = user?.id;
    this.fullName = user?.fullName;
    this.status = user?.status;
  }

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: "first_name" })
  firstName!: string;

  @Column({ name: "last_name" })
  lastName!: string;

  @Column({ name: "full_name" })
  fullName!: string;

  @Column({ name: "account" })
  account!: string;

  @Column({ name: "password", readonly: true })
  password!: string;

  @Column({ name: "status" })
  status!: number;
}

@Entity({ name: "t_user_role" })
export class UserRole extends BaseEntity {
  constructor(userRole?: any) {
    super();
    this.id = userRole?.id;
    this.userId = userRole?.userId;
    this.roleId = userRole?.roleId;
  }

  @PrimaryGeneratedColumn()
  id?: number;

  @Column({ name: "user_id" })
  userId!: number;

  @Column({ name: "role_id" })
  roleId!: number;
}
