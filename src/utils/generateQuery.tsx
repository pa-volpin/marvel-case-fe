interface query {
  collection: string
  // name: string
  // nameStartsWith: string
  // modifiedSince?: Date
  // comics: number
  // series: number
  // events: number
  // stories: number
  // orderBy: string
  // limit: number
  // offset: number
}

function generateQuery({
  collection,
  // name = '',
  // nameStartsWith = '',
  // modifiedSince = new Date(),
  // comics = 0,
  // series = 0,
  // events = 0,
  // stories = 0,
  // orderBy = '',
  // limit = 0,
  // offset = 0,
}: query) {
  const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  const query = `/${collection}?apikey=${apiKey}`
  return query;
}

export default generateQuery;