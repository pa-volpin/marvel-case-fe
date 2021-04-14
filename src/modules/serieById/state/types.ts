export const types = {
  FETCH: '@@serie/FETCH_CHARACTERS',
  FETCH_ERROR: '@@serie/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@serie/FETCH_CHARACTERS_SUCCESS'
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface ISerieData {
    id: string
    title: string
    description: string
    modified: Date
    thumbnail: { path: string, extension: string }
    resourceURI: string
    characters: IRelatedCollections
    comics: IRelatedCollections
    stories: IRelatedCollections
    events: IRelatedCollections
    urls: Array<{ type: string, url: string }>
}

export interface ISerie {
  data: ISerieData
  loading: boolean
  error: string
}


export interface IAction {
  type: string
  payload: ISerie['data']
    & ISerie['error']
    & ISerie['data']['id']
}
