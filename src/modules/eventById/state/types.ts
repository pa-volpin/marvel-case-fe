export const types = {
  FETCH: '@@event/FETCH_CHARACTERS',
  FETCH_ERROR: '@@event/FETCH_CHARACTERS_ERROR',
  FETCH_SUCCESS: '@@event/FETCH_CHARACTERS_SUCCESS'
}

interface IRelatedCollections {
  available: number,
  collectionURI: string,
  items: Array<{ resourceURI: string, name: string }>,
  returned: number
}

export interface IEventData {
    id: string
    title: string
    description: string
    modified: Date
    thumbnail: { path: string, extension: string }
    resourceURI: string
    characters: IRelatedCollections
    comics: IRelatedCollections
    series: IRelatedCollections
    stories: IRelatedCollections
    events: IRelatedCollections
    urls: Array<{ type: string, url: string }>
}

export interface IEvent {
  data: IEventData
  loading: boolean
  error: string
}


export interface IAction {
  type: string
  payload: IEvent['data']
    & IEvent['error']
    & IEvent['data']['id']
}
