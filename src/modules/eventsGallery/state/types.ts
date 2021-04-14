export const types = {
  FETCH: '@@events/FETCH_CHARACTERS',
  FETCH_ERROR: '@@events/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@events/FETCH_CHARACTERS_SUCCESS',
  FETCH_FAVORITES: '@@events/FETCH_FAVORITES_CHARACTERS',
  FETCH_FAVORITES_ERROR: '@@events/FETCH_FAVORITES_CHARACTERS_ERROR',
  FETCH_FAVORITES_SUCCESS: '@@events/FETCH_FAVORITES_CHARACTERS_SUCCESS',
  SET_PAGE: '@@events/SET_PAGE',
  SET_LIMIT: '@@events/SET_LIMIT',
  SET_ORDER_BY: '@@events/SET_ORDER_BY',
  SET_SEARCH: '@@events/SET_SEARCH',
  SET_SEARCH_TYPE: '@@events/SET_SEARCH_TYPE',
  LIKE: '@@events/LIKE',
  LIKE_SUCCESS: '@@events/LIKE_SUCCESS',
  LIKE_ERROR: '@@events/LIKE_ERROR',
  DISLIKE: '@@events/DISLIKE',
  DISLIKE_SUCCESS: '@@events/DISLIKE_SUCCESS',
  DISLIKE_ERROR: '@@events/DISLIKE_ERROR',
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface IEvent {
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

export interface IEvents {
  data: { count: number, rows: Array<IEvent> }
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
  payload: IEvents['data']
    & IEvents['error']
    & IEvents['limit']
    & IEvents['page'] 
    & IEvents['orderBy']
    & IEvents['search']
    & IEvents['searchType']
    & IEvents['favorites']['data']
    & IEvents['favorites']['error']
    & ILikePayload
    & ILikePayload['marvelId']
}
