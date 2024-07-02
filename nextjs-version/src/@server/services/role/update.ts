import { getDataSource } from '@/@server/datasource'
import { Role, RoleMenu } from '@/@server/entities/Role'

const create = async (role: any): Promise<any> => {
  const AppDataSource = await getDataSource()
  await AppDataSource.manager.transaction(async transactionalEntityManager => {
    await transactionalEntityManager.save(new Role(role))

    const roleMenus = await transactionalEntityManager.find(RoleMenu, { where: { roleId: role.id } })
    const removeRoleMenus = roleMenus.filter((roleMenu: RoleMenu) => !role.menuIds.includes(roleMenu.menuId))
    removeRoleMenus?.length > 0 && (await transactionalEntityManager.remove(removeRoleMenus))

    const addRoleMenuIds = role.menuIds.filter(
      (menuId: number) => !roleMenus.map((x: RoleMenu) => x.menuId).includes(menuId)
    )
    if (addRoleMenuIds?.length > 0) {
      const addRoleMenus: RoleMenu[] = []
      addRoleMenuIds?.forEach((menuId: number) => {
        addRoleMenus.push(new RoleMenu({ roleId: role.id, menuId }))
      })
      await transactionalEntityManager.save(addRoleMenus)
    }
  })

  return true
}

export default create
