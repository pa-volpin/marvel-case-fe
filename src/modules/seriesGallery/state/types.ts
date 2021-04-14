export const types = {
  FETCH: '@@series/FETCH_CHARACTERS',
  FETCH_ERROR: '@@series/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@series/FETCH_CHARACTERS_SUCCESS',
  FETCH_FAVORITES: '@@series/FETCH_FAVORITES_CHARACTERS',
  FETCH_FAVORITES_ERROR: '@@series/FETCH_FAVORITES_CHARACTERS_ERROR',
  FETCH_FAVORITES_SUCCESS: '@@series/FETCH_FAVORITES_CHARACTERS_SUCCESS',
  SET_PAGE: '@@series/SET_PAGE',
  SET_LIMIT: '@@series/SET_LIMIT',
  SET_ORDER_BY: '@@series/SET_ORDER_BY',
  SET_SEARCH: '@@series/SET_SEARCH',
  SET_SEARCH_TYPE: '@@series/SET_SEARCH_TYPE',
  LIKE: '@@series/LIKE',
  LIKE_SUCCESS: '@@series/LIKE_SUCCESS',
  LIKE_ERROR: '@@series/LIKE_ERROR',
  DISLIKE: '@@series/DISLIKE',
  DISLIKE_SUCCESS: '@@series/DISLIKE_SUCCESS',
  DISLIKE_ERROR: '@@series/DISLIKE_ERROR',
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface ISerie {
    id: string
    title: string
    description: string
    modified: Date
    thumbnail: { path: string, extension: string }
    resourceURI: string
    comics: IRelatedCollections
    characters: IRelatedCollections
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

export interface ISeries {
  data: { count: number, rows: Array<ISerie> }
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
  payload: ISeries['data']
    & ISeries['error']
    & ISeries['limit']
    & ISeries['page'] 
    & ISeries['orderBy']
    & ISeries['search']
    & ISeries['searchType']
    & ISeries['favorites']['data']
    & ISeries['favorites']['error']
    & ILikePayload
    & ILikePayload['marvelId']
}
