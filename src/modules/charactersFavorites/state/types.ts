export const types = {
  FETCH: '@@favoritescharacters/FETCH_CHARACTERS',
  FETCH_ERROR: '@@favoritescharacters/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@favoritescharacters/FETCH_CHARACTERS_SUCCESS',
  SET_PAGE: '@@favoritescharacters/SET_PAGE',
  SET_LIMIT: '@@favoritescharacters/SET_LIMIT',
  SET_ORDER_BY: '@@favoritescharacters/SET_ORDER_BY',
  SET_SEARCH: '@@favoritescharacters/SET_SEARCH',
  SET_SEARCH_TYPE: '@@favoritescharacters/SET_SEARCH_TYPE',
  DISLIKE: '@@favoritescharacters/DISLIKE_CHARACTERS',
  DISLIKE_ERROR: '@@favoritescharacters/DISLIKE_CHARACTERS_ERROR',
  DISLIKE_SUCCESS: '@@favoritescharacters/DISLIKE_CHARACTERS_SUCCESS',
}

export interface IFavorite {
    id: string
    name: string
    marvelId: string
    photo: string
}

export interface IFavoritesCharacters {
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
  payload: IFavoritesCharacters['data']
    & IFavoritesCharacters['error']
    & IFavoritesCharacters['limit']
    & IFavoritesCharacters['page'] 
    & IFavoritesCharacters['orderBy']
    & IFavoritesCharacters['search']
    & IFavorite['marvelId']

}
