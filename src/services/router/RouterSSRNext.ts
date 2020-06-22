import { GetServerSidePropsContext } from 'next'
import { Router } from './Router'
import { Route } from './Routes'

export class RouterSSRNext implements Router {
  private ctx: GetServerSidePropsContext

  constructor(ctx: GetServerSidePropsContext) {
    this.ctx = ctx
  }

  async pushTo(route: Route): Promise<void> {
    this.ctx.res.writeHead(302, { Location: route.getPath() })
    this.ctx.res.end()
  }

  async replaceWith(route: Route): Promise<void> {
    await this.pushTo(route)
  }
}
