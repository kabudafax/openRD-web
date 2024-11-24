export type DiseaseType = 'FSHD' | 'CROHN'

export interface Article {
  id: string
  title: string
  description: string
  imageUrl: string
  diseaseType: DiseaseType
}
