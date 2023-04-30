export interface FolderType {
  id: string
  uid: string
  name: string
  count: number
}

export interface User {
  uid: string
  name: string
}

export interface SaveAlbumType {
  folderId: string
  title: string
  imgUrl: string
  text: string
  tag: string[]
}
