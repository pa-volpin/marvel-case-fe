export const types = {
  FETCH: '@@favoritesseries/FETCH_CHARACTERS',
  FETCH_ERROR: '@@favoritesseries/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@favoritesseries/FETCH_CHARACTERS_SUCCESS',
  SET_PAGE: '@@favoritesseries/SET_PAGE',
  SET_LIMIT: '@@favoritesseries/SET_LIMIT',
  SET_ORDER_BY: '@@favoritesseries/SET_ORDER_BY',
  SET_SEARCH: '@@favoritesseries/SET_SEARCH',
  SET_SEARCH_TYPE: '@@favoritesseries/SET_SEARCH_TYPE',
  DISLIKE: '@@favoritesseries/DISLIKE_CHARACTERS',
  DISLIKE_ERROR: '@@favoritesseries/DISLIKE_CHARACTERS_ERROR',
  DISLIKE_SUCCESS: '@@favoritesseries/DISLIKE_CHARACTERS_SUCCESS',
}

export interface IFavorite {
    id: string
    name: string
    marvelId: string
    photo: string
}

export interface IFavoritesSeries {
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
  payload: IFavoritesSeries['data']
    & IFavoritesSeries['error']
    & IFavoritesSeries['limit']
    & IFavoritesSeries['page'] 
    & IFavoritesSeries['orderBy']
    & IFavoritesSeries['search']
    & IFavorite['marvelId']

}
