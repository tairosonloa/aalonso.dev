import { NextRouter } from 'next/router'
import { Router } from './Router'
import { Route } from './Routes'

export class RouterClientNext implements Router {
  private router: NextRouter

  constructor(router: NextRouter) {
    this.router = router
  }

  async pushTo(route: Route): Promise<void> {
    await this.router.push(route.getPath())
  }

  async replaceWith(route: Route): Promise<void> {
    await this.router.replace(route.getPath())
  }
}
