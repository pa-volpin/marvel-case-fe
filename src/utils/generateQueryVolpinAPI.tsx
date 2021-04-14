interface query {
  collection: string
  search?: string
  orderBy?: string
  limit?: number
  page?: number
}

function generateQuery({
  collection,
  search,
  orderBy,
  limit,
  page,
}: query) {
  let query = `/${collection}?`
  
  if (search) query += `q=${search}&`;
  if (orderBy) query += `orderBy=${orderBy}&`;
  if (page) query += `page=${page}&`;
  if (limit) query += `limit=${limit}&`;

  query = query === `/${collection}?` ? `/${collection}` : query.slice(0, -1);
  return query;
}

export default generateQuery;