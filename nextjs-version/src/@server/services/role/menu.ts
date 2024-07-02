import { getDataSource } from '@/@server/datasource'
import { RoleMenu } from '@/@server/entities/Role'

const menu = async (roleId: number): Promise<any> => {
  const AppDataSource = await getDataSource()

  const roleMenuRepo = AppDataSource.getRepository(RoleMenu)
  const menus = await roleMenuRepo.find({
    select: ['id', 'roleId', 'menuId'],
    where: { roleId }
  })

  return menus
}

export default menu
