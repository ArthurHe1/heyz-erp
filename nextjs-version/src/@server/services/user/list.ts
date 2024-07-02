import { getDataSource } from "@/@server/datasource";

const list = async (params: any): Promise<any> => {
  const AppDataSource = await getDataSource();

  let where = "";
  if (params.userName && params.status) {
    where = `WHERE t1.full_name LIKE '%${params.userName}%' and t1.status = ${params.status}`;
  } else if (params.userName) {
    where = `WHERE t1.full_name LIKE '%${params.userName}%'`;
  } else if (params.status) {
    where = `WHERE t1.status = ${params.status}`;
  }

  const skip = (Number(params.page) - 1) * Number(params.pageSize);
  const take = Number(params.pageSize);

  const totalCount = await AppDataSource.manager.query(
    `select count(1) num from t_user`
  );
  const users = await AppDataSource.manager.query(
    `SELECT
      t1.id,
      t1.full_name fullName,
      t1.account,
      t1.status,
      GROUP_CONCAT( t3.role_name) roles 
    FROM
      t_user t1
      LEFT JOIN t_user_role t2 ON t1.id = t2.user_id
      LEFT JOIN t_role t3 ON t2.role_id = t3.id 
    GROUP BY
      t1.id,
      t1.full_name,
      t1.account,
      t1.status
    ${where} 
    LIMIT ${skip},${take}`
  );

  return { items: users, totalCount: totalCount?.[0]?.num };
};

export default list;
