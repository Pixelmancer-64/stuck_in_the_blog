import { MetaTags } from '@redwoodjs/web'
import DetailedPostCell from 'src/components/DetailedPostCell'

interface Props {
  id: number
}

const DetailedPostPage = ({ id }: Props) => {
  return (
    <>
      <MetaTags title="DetailedPost" description="DetailedPost page" />

      <main>
        <h1>DetailedPostPage</h1>

        <DetailedPostCell id={id} />
      </main>
    </>
  )
}

export default DetailedPostPage
