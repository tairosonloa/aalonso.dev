export class Route {
  private readonly path: string

  static of(path: string): Route {
    return new Route(path)
  }

  private constructor(path: string) {
    this.path = path
  }

  getPath(): string {
    return this.path
  }
}

export const Routes = {
  home: (): Route => Route.of('/'),
  privacyPolicy: (): Route => Route.of('/privacy-policy'),
}
