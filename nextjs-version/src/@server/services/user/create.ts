import { getDataSource } from "@/@server/datasource";
import { User } from "@/@server/entities/User";
// import aes from '@/utils/aes'

const create = async (user: any): Promise<any> => {
  // user.password = aes.encrypt(aes.encrypt('aa123456'))

  const AppDataSource = await getDataSource();
  const userRepo = AppDataSource.getRepository(User);
  return userRepo.save(new User(user));
};

export default create;
