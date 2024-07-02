import { getDataSource } from '@/@server/datasource'
import { Role, RoleMenu } from '@/@server/entities/Role'

const create = async (role: any): Promise<any> => {
  const AppDataSource = await getDataSource()
  await AppDataSource.manager.transaction(async transactionalEntityManager => {
    const roleInfo = await transactionalEntityManager.save(new Role(role))

    const roleMenus: RoleMenu[] = []
    role.menuIds?.forEach((menuId: number) => {
      roleMenus.push(new RoleMenu({ roleId: roleInfo.id, menuId }))
    })
    await transactionalEntityManager.save(roleMenus)
  })

  return true
}

export default create
