export const types = {
  FETCH: '@@favoritesevents/FETCH_CHARACTERS',
  FETCH_ERROR: '@@favoritesevents/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@favoritesevents/FETCH_CHARACTERS_SUCCESS',
  SET_PAGE: '@@favoritesevents/SET_PAGE',
  SET_LIMIT: '@@favoritesevents/SET_LIMIT',
  SET_ORDER_BY: '@@favoritesevents/SET_ORDER_BY',
  SET_SEARCH: '@@favoritesevents/SET_SEARCH',
  SET_SEARCH_TYPE: '@@favoritesevents/SET_SEARCH_TYPE',
  DISLIKE: '@@favoritesevents/DISLIKE_CHARACTERS',
  DISLIKE_ERROR: '@@favoritesevents/DISLIKE_CHARACTERS_ERROR',
  DISLIKE_SUCCESS: '@@favoritesevents/DISLIKE_CHARACTERS_SUCCESS',
}

export interface IFavorite {
    id: string
    name: string
    marvelId: string
    photo: string
}

export interface IFavoritesEvents {
  data: { count: number, rows: Array<IFavorite> }
  loading: boolean
  error: string
  limit: number
  page: number
  orderBy: string
  search: string
}


export interface IAction {
  type: string
  payload: IFavoritesEvents['data']
    & IFavoritesEvents['error']
    & IFavoritesEvents['limit']
    & IFavoritesEvents['page'] 
    & IFavoritesEvents['orderBy']
    & IFavoritesEvents['search']
    & IFavorite['marvelId']

}
