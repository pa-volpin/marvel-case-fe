interface query {
  collection: string
  search?: string
  searchType?: string
  modifiedSince?: Date
  comics?: number
  series?: number
  events?: number
  stories?: number
  orderBy?: string
  limit?: number
  offset?: number
  id?:string
}

function generateQuery({
  collection,
  search,
  searchType,
  modifiedSince,
  comics,
  series,
  events,
  stories,
  orderBy,
  limit,
  offset,
  id
}: query) {
  const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  let query = `/${collection}?apikey=${apiKey}&`

  if (id) query = `/${collection}/${id}?apikey=${apiKey}`
  
  if (search && searchType) query += `${searchType}=${search}&`;
  if (modifiedSince) query += `&modifiedSince=${modifiedSince}&`;
  if (comics) query += `comics=${comics}&`;
  if (series) query += `series=${series}&`;
  if (events) query += `events=${events}&`;
  if (stories) query += `stories=${stories}&`;
  if (orderBy) query += `orderBy=${orderBy}&`;
  if (limit) query += `limit=${limit}&`;
  if (offset) query += `offset=${offset}&`;

  query = id ? query : query.slice(0, -1);

  return query;
}

export default generateQuery;