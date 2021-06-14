import os from 'os'
import path from 'path'
import sha from 'sha1'
import { DOMAIN } from '../constants'
import sleep from '../utils/sleep'
import { readJsonFile, writeJsonFile } from './fs-read-write'

type CacheEntry<V> =
  | {
      status: 'done'
      expiresAt: number
      value: V
    }
  | {
      status: 'pending'
      expiresAt: number
    }

const getCacheEntry = async <V>(key: string): Promise<CacheEntry<V> | undefined> =>
  readJsonFile(path.join(os.tmpdir(), `./.cache-${DOMAIN}-${sha(key)}.json`))

const revalidateCache = async <V>(
  key: string,
  fetchFn: () => Promise<V>,
  cacheDurationMs: number,
): Promise<V> => {
  await writeJsonFile(path.join(os.tmpdir(), `./.cache-${DOMAIN}-${sha(key)}.json`), {
    status: 'pending',
    expiresAt: new Date().getTime() + 10000,
  })
  const value = await fetchFn()
  await writeJsonFile(path.join(os.tmpdir(), `./.cache-${DOMAIN}-${sha(key)}.json`), {
    status: 'done',
    expiresAt: new Date().getTime() + cacheDurationMs,
    value,
  })
  return value
}

const entryHasExpired = (entry: CacheEntry<unknown>) => new Date().getTime() > entry.expiresAt

export const getCached = async <V>(
  key: string,
  fetchFn: () => Promise<V>,
  cacheDurationMs: number,
): Promise<V> => {
  const entry = await getCacheEntry<V>(key)
  if (entry) {
    if (entry.status === 'done' && !entryHasExpired(entry)) {
      return entry.value
    }
    if (entry.status === 'pending' && !entryHasExpired(entry)) {
      await sleep(500)
      return getCached<V>(key, fetchFn, cacheDurationMs)
    }
  }
  return revalidateCache<V>(key, fetchFn, cacheDurationMs)
}
