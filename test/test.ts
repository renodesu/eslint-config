import foo from 'fs'
import path from 'path'

const x = 666

export { foo, path, x }

export interface Foo {
  lul: string
  lil: boolean
}

export class Kek {
  private foo = 1

  public static readonly myField1 = 1
}
