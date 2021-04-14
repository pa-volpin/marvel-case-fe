export const types = {
  FETCH: '@@comic/FETCH_CHARACTERS',
  FETCH_ERROR: '@@comic/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@comic/FETCH_CHARACTERS_SUCCESS'
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface IComicData {
    id: string
    title: string
    description: string
    modified: Date
    thumbnail: { path: string, extension: string }
    resourceURI: string
    characters: IRelatedCollections
    series: IRelatedCollections
    stories: IRelatedCollections
    events: IRelatedCollections
    urls: Array<{ type: string, url: string }>
}

export interface IComic {
  data: IComicData
  loading: boolean
  error: string
}


export interface IAction {
  type: string
  payload: IComic['data']
    & IComic['error']
    & IComic['data']['id']
}
