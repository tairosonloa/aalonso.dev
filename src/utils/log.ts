/* eslint-disable no-console */
/**
 * Logs all the parameters. This is for avoiding this binding issues with the console
 * Also, is easier to track who is logging by finding the references to this function
 */
export const log = (action: string) => (...params: unknown[]): void =>
  console.log(action, ...params)
