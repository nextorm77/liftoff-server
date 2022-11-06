import { gql } from "apollo-server";

export const typeDefs = gql`
  type IncrementTrackViewsResponse {
    "Similar to HTTP status code, respresents the status of the mutation"
    code: Int!
    "Indicates whether the mutation was successful"
    success: Boolean!
    "Human-readable message for the UI"
    message: String!
    "Newly updated track after a successful mutation"
    track: Track
  }
  type Mutation {
    "Increment the number of views of a given track, when the track card is clicked"
    incrementTrackViews(id: ID!): IncrementTrackViewsResponse
  }
  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
    "Fetch a specific track, provided a track's ID"
    track(id: ID!): Track
  }
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    "The Track's title"
    title: String!
    "The track's main author"
    author: Author!
    "The track's main illustration to display in track card or track page detail"
    thumbnail: String
    "The track's approximate length to complete, in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The number of modules this track contains"
    modulesCount: Int
    "The Track's complete description, can be in Markdown foramt"
    description: String
    "The number of times a track has been viewed"
    numberOfViews: Int
    "Thr Track's complete array of Modules"
    modules: [Module!]!
    "The track's full duration, in secondes"
    durationInSeconds: Int
  }
  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    "Author's first and last name"
    name: String!
    "Author's profile picture url"
    photo: String
  }
  "A Module is a single unit of teaching. Multiple Modules compose a Track"
  type Module {
    id: ID!
    "The Module's title"
    title: String!
    "The Module's length in seconds"
    length: Int @deprecated(reason: "Use durationInSeconds")
    "The module's video duration, in seconds"
    durationInSeconds: Int
  }
`;
