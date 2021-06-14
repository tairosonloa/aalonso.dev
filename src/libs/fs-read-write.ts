import fs from 'fs'

export const readJsonFile = async <T>(path: string): Promise<T | undefined> => {
  return new Promise<T | undefined>((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf8' }, (err, cache) => {
      if (err) {
        resolve(undefined)
      } else {
        try {
          resolve(JSON.parse(cache))
        } catch (e) {
          reject(e.toString())
        }
      }
    })
  })
}

export const writeJsonFile = async <T>(path: string, data: T): Promise<void> => {
  return new Promise<void>((resolve, reject) => {
    fs.writeFile(path, JSON.stringify(data), 'utf8', (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
