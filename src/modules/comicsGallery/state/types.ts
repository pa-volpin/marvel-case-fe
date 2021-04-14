export const types = {
  FETCH: '@@comics/FETCH_CHARACTERS',
  FETCH_ERROR: '@@comics/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@comics/FETCH_CHARACTERS_SUCCESS',
  FETCH_FAVORITES: '@@comics/FETCH_FAVORITES_CHARACTERS',
  FETCH_FAVORITES_ERROR: '@@comics/FETCH_FAVORITES_CHARACTERS_ERROR',
  FETCH_FAVORITES_SUCCESS: '@@comics/FETCH_FAVORITES_CHARACTERS_SUCCESS',
  SET_PAGE: '@@comics/SET_PAGE',
  SET_LIMIT: '@@comics/SET_LIMIT',
  SET_ORDER_BY: '@@comics/SET_ORDER_BY',
  SET_SEARCH: '@@comics/SET_SEARCH',
  SET_SEARCH_TYPE: '@@comics/SET_SEARCH_TYPE',
  LIKE: '@@comics/LIKE',
  LIKE_SUCCESS: '@@comics/LIKE_SUCCESS',
  LIKE_ERROR: '@@comics/LIKE_ERROR',
  DISLIKE: '@@comics/DISLIKE',
  DISLIKE_SUCCESS: '@@comics/DISLIKE_SUCCESS',
  DISLIKE_ERROR: '@@comics/DISLIKE_ERROR',
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface IComic {
    id: string
    title: string
    description: string
    modified: Date
    thumbnail: { path: string, extension: string }
    resourceURI: string
    comics: IRelatedCollections
    series: IRelatedCollections
    stories: IRelatedCollections
    events: IRelatedCollections
    urls: Array<{ type: string, url: string }>
}

interface IFavorites {
  data: Array<string>
  error: string
  loading: boolean
}

export interface ILikePayload {
  marvelId: string
  name: string
  photo: string
}

export interface IComics {
  data: { count: number, rows: Array<IComic> }
  loading: boolean
  error: string
  limit: number
  page: number
  orderBy: string
  search: string
  searchType: string
  favorites: IFavorites
}


export interface IAction {
  type: string
  payload: IComics['data']
    & IComics['error']
    & IComics['limit']
    & IComics['page'] 
    & IComics['orderBy']
    & IComics['search']
    & IComics['searchType']
    & IComics['favorites']['data']
    & IComics['favorites']['error']
    & ILikePayload
    & ILikePayload['marvelId']
}
