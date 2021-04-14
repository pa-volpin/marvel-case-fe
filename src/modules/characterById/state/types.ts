export const types = {
  FETCH: '@@character/FETCH_CHARACTERS',
  FETCH_ERROR: '@@character/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@character/FETCH_CHARACTERS_SUCCESS'
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface ICharacterData {
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

export interface ICharacter {
  data: ICharacterData
  loading: boolean
  error: string
}


export interface IAction {
  type: string
  payload: ICharacter['data']
    & ICharacter['error']
    & ICharacter['data']['id']
}
