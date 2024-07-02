import { In } from 'typeorm'
import { generateToken } from '@/utils/jwt'
import aes from '@/utils/aes'
import { getDataSource } from '@/@server/datasource'
import { User, UserRole } from '@/@server/entities/User'
import { RoleMenu } from '@/@server/entities/Role'
import { Menu } from '@/@server/entities/Menu'

const login = async (params: any): Promise<any> => {
  params.password = aes.encrypt(params.password)

  const AppDataSource = await getDataSource()
  const userRepo = AppDataSource.getRepository(User)
  const user = await userRepo.findOne({
    select: ['id', 'firstName', 'lastName'],
    where: { account: params.account, password: params.password }
  })
  if (!user) {
    return null
  }

  const userRoleRepo = AppDataSource.getRepository(UserRole)
  const roleIds = await userRoleRepo.find({ where: { userId: user.id } })
  if (roleIds.length === 0) {
    return { menus: [] }
  }

  const roleMenuRepo = AppDataSource.getRepository(RoleMenu)
  const menuIds = await roleMenuRepo.find({ where: { roleId: In(roleIds.map(item => item.roleId)) } })
  if (menuIds.length === 0) {
    return { menus: [] }
  }

  const menuRepo = AppDataSource.getRepository(Menu)
  const menus = await menuRepo.find({ where: { id: In(menuIds.map(item => item.menuId)) } })

  const claims = {
    ...user,
    role: 'admin',
    roleIds: [1, 2, 3]
  }
  const token = generateToken(claims)

  const result = {
    token,
    user,
    menus
  }
  return result
}

export default login
