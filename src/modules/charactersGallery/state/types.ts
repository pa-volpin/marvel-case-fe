export const types = {
  FETCH: '@@characters/FETCH_CHARACTERS',
  FETCH_ERROR: '@@characters/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@characters/FETCH_CHARACTERS_SUCCESS',
  FETCH_FAVORITES: '@@characters/FETCH_FAVORITES_CHARACTERS',
  FETCH_FAVORITES_ERROR: '@@characters/FETCH_FAVORITES_CHARACTERS_ERROR',
  FETCH_FAVORITES_SUCCESS: '@@characters/FETCH_FAVORITES_CHARACTERS_SUCCESS',
  SET_PAGE: '@@characters/SET_PAGE',
  SET_LIMIT: '@@characters/SET_LIMIT',
  SET_ORDER_BY: '@@characters/SET_ORDER_BY',
  SET_SEARCH: '@@characters/SET_SEARCH',
  SET_SEARCH_TYPE: '@@characters/SET_SEARCH_TYPE',
  LIKE: '@@characters/LIKE',
  LIKE_SUCCESS: '@@characters/LIKE_SUCCESS',
  LIKE_ERROR: '@@characters/LIKE_ERROR',
  DISLIKE: '@@characters/DISLIKE',
  DISLIKE_SUCCESS: '@@characters/DISLIKE_SUCCESS',
  DISLIKE_ERROR: '@@characters/DISLIKE_ERROR',
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface ICharacter {
    id: string
    name: string
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

export interface ICharacters {
  data: { count: number, rows: Array<ICharacter> }
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
  payload: ICharacters['data']
    & ICharacters['error']
    & ICharacters['limit']
    & ICharacters['page'] 
    & ICharacters['orderBy']
    & ICharacters['search']
    & ICharacters['searchType']
    & ICharacters['favorites']['data']
    & ICharacters['favorites']['error']
    & ILikePayload
    & ILikePayload['marvelId']
}
