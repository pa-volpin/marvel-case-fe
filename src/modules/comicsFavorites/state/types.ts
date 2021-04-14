export const types = {
  FETCH: '@@favoritescomics/FETCH_CHARACTERS',
  FETCH_ERROR: '@@favoritescomics/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@favoritescomics/FETCH_CHARACTERS_SUCCESS',
  SET_PAGE: '@@favoritescomics/SET_PAGE',
  SET_LIMIT: '@@favoritescomics/SET_LIMIT',
  SET_ORDER_BY: '@@favoritescomics/SET_ORDER_BY',
  SET_SEARCH: '@@favoritescomics/SET_SEARCH',
  SET_SEARCH_TYPE: '@@favoritescomics/SET_SEARCH_TYPE',
  DISLIKE: '@@favoritescomics/DISLIKE_CHARACTERS',
  DISLIKE_ERROR: '@@favoritescomics/DISLIKE_CHARACTERS_ERROR',
  DISLIKE_SUCCESS: '@@favoritescomics/DISLIKE_CHARACTERS_SUCCESS',
}

export interface IFavorite {
    id: string
    name: string
    marvelId: string
    photo: string
}

export interface IFavoritesComics {
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
  payload: IFavoritesComics['data']
    & IFavoritesComics['error']
    & IFavoritesComics['limit']
    & IFavoritesComics['page'] 
    & IFavoritesComics['orderBy']
    & IFavoritesComics['search']
    & IFavorite['marvelId']

}
