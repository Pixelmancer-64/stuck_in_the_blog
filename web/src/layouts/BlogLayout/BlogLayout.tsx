import styled from 'styled-components'

type BlogLayoutProps = {
  children?: React.ReactNode
}

const Header = styled.header`
  display: flex;
  position: sticky;
  width: 100%;
  flex-grow: 1;
  top: 0;
  max-width: 70em;
  margin: 0 auto;
  padding: 0 2rem;
  justify-content: space-between;
`
const LogoWrapper = styled.div``

const Navbar = styled.nav`
  flex-grow: 1;
  ul {
    display: flex;
    justify-content: space-around;
  }
`
const Controls = styled.div`
  flex-grow: 1;

  ul {
    display: flex;
    justify-content: space-around;
  }
`

const Footer = styled.footer`
  display: grid;
  grid-template-columns: 1fr 2fr;
`
const RandomLinks = styled.div`
  background-color: red;
`
const Ps = styled.div`
  background-color: purple;
`

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <>
      <Header>
        <LogoWrapper>
          <img src="/favicon.png" alt="logo" />
        </LogoWrapper>

        <Navbar>
          <ul>
            <li>
              <a href="/">latest</a>
            </li>
            <li>
              <a href="/">Posts</a>
            </li>
            <li>
              <a href="/">Galerry</a>
            </li>
          </ul>
        </Navbar>

        <Controls>
          <ul>
            <li>
              <button>HI</button>
            </li>
            <li>
              <button>HI</button>
            </li>
            <li>
              <button>HI</button>
            </li>
          </ul>
        </Controls>
      </Header>
      {children}
      <Footer>
        <Ps>Ps</Ps>
        <RandomLinks>RandomLinks</RandomLinks>
      </Footer>
    </>
  )
}

export default BlogLayout
