import type { FindPostById } from 'types/graphql'
import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

export const QUERY = gql`
  query FindPostById($id: Int!) {
    post: post(id: $id) {
      id
      title
      body
      slug
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }: CellFailureProps<FindPostById>) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ post }: CellSuccessProps<FindPostById>) => {
  const { id, title, body, slug } = post
  return (
    <div>
      <ul>
        <li>{id}</li>
        <li>{title}</li>
        <li>{body}</li>
        <li>{slug}</li>
        <li></li>
      </ul>
    </div>
  )
}
