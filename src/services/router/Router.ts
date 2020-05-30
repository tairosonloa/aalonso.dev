import { Route } from './Routes'

export interface Router {
  replaceWith(route: Route): Promise<void>
  pushTo(route: Route): Promise<void>
}
