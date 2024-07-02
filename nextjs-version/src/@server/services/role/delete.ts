import { getDataSource } from '@/@server/datasource'
import { Role, RoleMenu } from '@/@server/entities/Role'

const deleteRole = async (id: number) => {
  const AppDataSource = await getDataSource()
  await AppDataSource.manager.transaction(async transactionalEntityManager => {
    await transactionalEntityManager.delete(RoleMenu, { roleId: id })
    await transactionalEntityManager.delete(Role, id)
  })

  return true
}

export default deleteRole
