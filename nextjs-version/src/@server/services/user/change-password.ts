import { getDataSource } from '@/@server/datasource'
import { User, UserRole } from '@/@server/entities/User'

const changePassword = async (params: any): Promise<any> => {
  const AppDataSource = await getDataSource()

  const userRepo = AppDataSource.getRepository(User)
  const user = await userRepo.findOne({
    select: ['id', 'firstName', 'lastName'],
    where: { id: params.id, password: params.oldPassword }
  })
  if (!user) {
    return false
  }

  await userRepo.update(user.id!, { password: params.newPassword })

  return true
}

export default changePassword
