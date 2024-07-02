import { getDataSource } from '@/@server/datasource'
import { User, UserRole } from '@/@server/entities/User'

const deleteUser = async (id: number) => {
  const AppDataSource = await getDataSource()
  await AppDataSource.manager.transaction(async transactionalEntityManager => {
    const result = await transactionalEntityManager.findOne(UserRole, { where: { userId: id } })
    if (result) {
      await transactionalEntityManager.delete(UserRole, result.id)
    }

    await transactionalEntityManager.delete(User, id)
  })

  return true
}

export default deleteUser
