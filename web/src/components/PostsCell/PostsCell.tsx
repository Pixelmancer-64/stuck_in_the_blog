import type { PostsQuery } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'
import styled from 'styled-components'
import { Link, routes } from '@redwoodjs/router'

const Container = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;
  gap: 4vh;
`

const Post = styled.div`
  color: white;
  font-family: sans-serif;
  font-weight: 400;

  a {
    color: inherit;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  &:hover {
    h3 {
      color: #d5043c;
    }
  }
`

const Title = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
`
const ReadMore = styled.span`
  font-weight: 600;
`
export const QUERY = gql`
  query PostsQuery {
    posts {
      id
      title
      body
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
      {posts.map(({ id, title, body }) => {
        return (
          <Post key={id}>
            <Link to={routes.detailedPost({ id: id })}>
              <Title>{title}</Title>
              <span>{body}</span>
              <ReadMore>Read More</ReadMore>
            </Link>
          </Post>
        )
      })}
    </Container>
  )
}
