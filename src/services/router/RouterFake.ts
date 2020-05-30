import noop from 'lodash/noop'
import { Router } from './Router'
import { Route } from './Routes'

type Options = {
  /**
   * Push spy
   */
  push: (path: string) => void
  /**
   * Replace spy
   */
  replace: (path: string) => void
}

export class RouterFake implements Router {
  private readonly push: (path: string) => void

  private readonly replace: (path: string) => void

  constructor({ push = noop, replace = noop }: Partial<Options> = {}) {
    this.push = push
    this.replace = replace
  }

  async pushTo(route: Route): Promise<void> {
    this.push(route.getPath())
  }

  async replaceWith(route: Route): Promise<void> {
    this.replace(route.getPath())
  }
}
