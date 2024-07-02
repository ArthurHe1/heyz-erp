import { getDataSource } from '@/@server/datasource'
import { User, UserRole } from '@/@server/entities/User'

const update = async (user: any): Promise<any> => {
  const AppDataSource = await getDataSource()
  await AppDataSource.manager.transaction(async transactionalEntityManager => {
    await transactionalEntityManager.save(new User(user))

    const result = await transactionalEntityManager.findOne(UserRole, { where: { userId: user.id } })
    const userRole: any = { userId: user.id, roleId: user.roleId }
    result && (userRole.id = result.id)
    await transactionalEntityManager.save(new UserRole(userRole))
  })

  return true
}

export default update
