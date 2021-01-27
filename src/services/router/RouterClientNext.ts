import { Router } from './Router'
import { Route } from './Routes'

export class RouterClientNext implements Router {
  // TODO: review this class
  private router: any

  constructor(router: any) {
    this.router = router
  }

  async pushTo(route: Route): Promise<void> {
    await this.router.push(route.getPath())
  }

  async replaceWith(route: Route): Promise<void> {
    await this.router.replace(route.getPath())
  }
}
