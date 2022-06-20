import type { PostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'

const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  justify-content: space-evenly;
`

const Post = styled.div`
  border: 2px solid black;
`

export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      author
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ posts }: CellSuccessProps<PostsQuery>) => {
  return (
    <Container>
      {posts.map(({ id, title, author }) => {
        return (
          <Post key={id}>
            <Link to={routes.detailedPost({ id: id })}>
              <h2>{title}</h2>
              <span>{author}</span>
            </Link>
          </Post>
        )
      })}
    </Container>
  )
}
