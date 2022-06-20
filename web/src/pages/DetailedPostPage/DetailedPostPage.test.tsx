import { render } from '@redwoodjs/testing/web'

import DetailedPostPage from './DetailedPostPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('DetailedPostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DetailedPostPage />)
    }).not.toThrow()
  })
})
