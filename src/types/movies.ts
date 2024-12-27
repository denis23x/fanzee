export type Movie = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
}

export type MovieActors = {
  name: string
  imdb_id: string
}

export type MovieDetails = {
  id: number
  name: string
  description: string
  duration: string
  rating: number
  poster: string
  genre: string
  trivia: string[]
  actors: MovieActors[]
}
