export const types = {
  FETCH: '@@characters/FETCH_CHARACTERS',
  FETCH_ERROR: '@@characters/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@characters/FETCH_CHARACTERS_SUCCESS',
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface ICharacter {
    id: number
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

export interface ICharacters {
  data: { count: Number, rows: Array<ICharacter> }
  loading: boolean
  error: string
}


export interface IAction {
  type: string
  payload: ICharacters['data'] & ICharacters['error']
}
