import { MetaTags } from '@redwoodjs/web'
import styled from 'styled-components'
import PostsCell from 'src/components/PostsCell'

const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  padding: 3vh 3vw;
  background-color: #0e141b;
`
const Posts = styled.div``
const Featured = styled.div`
  background-color: #f2eded;
`
const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Container>
        <Posts>
          TEMPORÁRIO, USAR O CELL AQUI
          <PostsCell />
        </Posts>
        <Featured></Featured>
      </Container>
    </>
  )
}

export default HomePage
