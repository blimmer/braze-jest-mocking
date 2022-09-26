import { initializeBraze } from "./braze"

jest.mock('@braze/web-sdk')

describe('initializeBraze', () => {
  it('does something', () => {
    initializeBraze()
  })
})
