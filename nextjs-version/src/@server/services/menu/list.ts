import { getDataSource } from '@/@server/datasource'
import { Menu } from '@/@server/entities/Menu'

const list = async (): Promise<any> => {
  const AppDataSource = await getDataSource()

  const menuRepo = AppDataSource.getRepository(Menu)
  const menus = await menuRepo.find({
    select: ['id', 'parentId', 'title', 'description', 'icon', 'path']
  })

  return menus
}

export default list
