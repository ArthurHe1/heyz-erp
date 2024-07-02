import { getDataSource } from '@/@server/datasource'
import { Role } from '@/@server/entities/Role'

const list = async (): Promise<any> => {
  const AppDataSource = await getDataSource()

  const roleRepo = AppDataSource.getRepository(Role)
  const roles = await roleRepo.find({
    select: ['id', 'roleName', 'description']
  })

  return roles
}

export default list
