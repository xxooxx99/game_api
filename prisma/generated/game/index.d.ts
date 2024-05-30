
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Item
 * 
 */
export type Item = $Result.DefaultSelection<Prisma.$ItemPayload>
/**
 * Model CharacterInventory
 * 
 */
export type CharacterInventory = $Result.DefaultSelection<Prisma.$CharacterInventoryPayload>
/**
 * Model CharacterItem
 * 
 */
export type CharacterItem = $Result.DefaultSelection<Prisma.$CharacterItemPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Items
 * const items = await prisma.item.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Items
   * const items = await prisma.item.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.item`: Exposes CRUD operations for the **Item** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Items
    * const items = await prisma.item.findMany()
    * ```
    */
  get item(): Prisma.ItemDelegate<ExtArgs>;

  /**
   * `prisma.characterInventory`: Exposes CRUD operations for the **CharacterInventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterInventories
    * const characterInventories = await prisma.characterInventory.findMany()
    * ```
    */
  get characterInventory(): Prisma.CharacterInventoryDelegate<ExtArgs>;

  /**
   * `prisma.characterItem`: Exposes CRUD operations for the **CharacterItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CharacterItems
    * const characterItems = await prisma.characterItem.findMany()
    * ```
    */
  get characterItem(): Prisma.CharacterItemDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.14.0
   * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Item: 'Item',
    CharacterInventory: 'CharacterInventory',
    CharacterItem: 'CharacterItem'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'item' | 'characterInventory' | 'characterItem'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Item: {
        payload: Prisma.$ItemPayload<ExtArgs>
        fields: Prisma.ItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findFirst: {
            args: Prisma.ItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          findMany: {
            args: Prisma.ItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>[]
          }
          create: {
            args: Prisma.ItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          createMany: {
            args: Prisma.ItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          update: {
            args: Prisma.ItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          deleteMany: {
            args: Prisma.ItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ItemPayload>
          }
          aggregate: {
            args: Prisma.ItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateItem>
          }
          groupBy: {
            args: Prisma.ItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.ItemCountArgs<ExtArgs>,
            result: $Utils.Optional<ItemCountAggregateOutputType> | number
          }
        }
      }
      CharacterInventory: {
        payload: Prisma.$CharacterInventoryPayload<ExtArgs>
        fields: Prisma.CharacterInventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterInventoryFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          findFirst: {
            args: Prisma.CharacterInventoryFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterInventoryFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          findMany: {
            args: Prisma.CharacterInventoryFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>[]
          }
          create: {
            args: Prisma.CharacterInventoryCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          createMany: {
            args: Prisma.CharacterInventoryCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharacterInventoryDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          update: {
            args: Prisma.CharacterInventoryUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          deleteMany: {
            args: Prisma.CharacterInventoryDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterInventoryUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharacterInventoryUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterInventoryPayload>
          }
          aggregate: {
            args: Prisma.CharacterInventoryAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacterInventory>
          }
          groupBy: {
            args: Prisma.CharacterInventoryGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharacterInventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterInventoryCountArgs<ExtArgs>,
            result: $Utils.Optional<CharacterInventoryCountAggregateOutputType> | number
          }
        }
      }
      CharacterItem: {
        payload: Prisma.$CharacterItemPayload<ExtArgs>
        fields: Prisma.CharacterItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CharacterItemFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CharacterItemFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          findFirst: {
            args: Prisma.CharacterItemFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CharacterItemFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          findMany: {
            args: Prisma.CharacterItemFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>[]
          }
          create: {
            args: Prisma.CharacterItemCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          createMany: {
            args: Prisma.CharacterItemCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CharacterItemDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          update: {
            args: Prisma.CharacterItemUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          deleteMany: {
            args: Prisma.CharacterItemDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CharacterItemUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CharacterItemUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CharacterItemPayload>
          }
          aggregate: {
            args: Prisma.CharacterItemAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCharacterItem>
          }
          groupBy: {
            args: Prisma.CharacterItemGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CharacterItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CharacterItemCountArgs<ExtArgs>,
            result: $Utils.Optional<CharacterItemCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */



  /**
   * Models
   */

  /**
   * Model Item
   */

  export type AggregateItem = {
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  export type ItemAvgAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type ItemSumAggregateOutputType = {
    id: number | null
    code: number | null
  }

  export type ItemMinAggregateOutputType = {
    id: number | null
    code: number | null
    name: string | null
  }

  export type ItemMaxAggregateOutputType = {
    id: number | null
    code: number | null
    name: string | null
  }

  export type ItemCountAggregateOutputType = {
    id: number
    code: number
    name: number
    stat: number
    _all: number
  }


  export type ItemAvgAggregateInputType = {
    id?: true
    code?: true
  }

  export type ItemSumAggregateInputType = {
    id?: true
    code?: true
  }

  export type ItemMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type ItemMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
  }

  export type ItemCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    stat?: true
    _all?: true
  }

  export type ItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Item to aggregate.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Items
    **/
    _count?: true | ItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ItemMaxAggregateInputType
  }

  export type GetItemAggregateType<T extends ItemAggregateArgs> = {
        [P in keyof T & keyof AggregateItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateItem[P]>
      : GetScalarType<T[P], AggregateItem[P]>
  }




  export type ItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ItemWhereInput
    orderBy?: ItemOrderByWithAggregationInput | ItemOrderByWithAggregationInput[]
    by: ItemScalarFieldEnum[] | ItemScalarFieldEnum
    having?: ItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ItemCountAggregateInputType | true
    _avg?: ItemAvgAggregateInputType
    _sum?: ItemSumAggregateInputType
    _min?: ItemMinAggregateInputType
    _max?: ItemMaxAggregateInputType
  }

  export type ItemGroupByOutputType = {
    id: number
    code: number
    name: string
    stat: JsonValue
    _count: ItemCountAggregateOutputType | null
    _avg: ItemAvgAggregateOutputType | null
    _sum: ItemSumAggregateOutputType | null
    _min: ItemMinAggregateOutputType | null
    _max: ItemMaxAggregateOutputType | null
  }

  type GetItemGroupByPayload<T extends ItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ItemGroupByOutputType[P]>
            : GetScalarType<T[P], ItemGroupByOutputType[P]>
        }
      >
    >


  export type ItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    stat?: boolean
  }, ExtArgs["result"]["item"]>

  export type ItemSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    stat?: boolean
  }



  export type $ItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Item"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      code: number
      name: string
      stat: Prisma.JsonValue
    }, ExtArgs["result"]["item"]>
    composites: {}
  }


  type ItemGetPayload<S extends boolean | null | undefined | ItemDefaultArgs> = $Result.GetResult<Prisma.$ItemPayload, S>

  type ItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ItemCountAggregateInputType | true
    }

  export interface ItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Item'], meta: { name: 'Item' } }
    /**
     * Find zero or one Item that matches the filter.
     * @param {ItemFindUniqueArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ItemFindUniqueArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Item that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ItemFindUniqueOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Item that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Item that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindFirstOrThrowArgs} args - Arguments to find a Item
     * @example
     * // Get one Item
     * const item = await prisma.item.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Items
     * const items = await prisma.item.findMany()
     * 
     * // Get first 10 Items
     * const items = await prisma.item.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const itemWithIdOnly = await prisma.item.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Item.
     * @param {ItemCreateArgs} args - Arguments to create a Item.
     * @example
     * // Create one Item
     * const Item = await prisma.item.create({
     *   data: {
     *     // ... data to create a Item
     *   }
     * })
     * 
    **/
    create<T extends ItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemCreateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Items.
     * @param {ItemCreateManyArgs} args - Arguments to create many Items.
     * @example
     * // Create many Items
     * const item = await prisma.item.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends ItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Item.
     * @param {ItemDeleteArgs} args - Arguments to delete one Item.
     * @example
     * // Delete one Item
     * const Item = await prisma.item.delete({
     *   where: {
     *     // ... filter to delete one Item
     *   }
     * })
     * 
    **/
    delete<T extends ItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ItemDeleteArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Item.
     * @param {ItemUpdateArgs} args - Arguments to update one Item.
     * @example
     * // Update one Item
     * const item = await prisma.item.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Items.
     * @param {ItemDeleteManyArgs} args - Arguments to filter Items to delete.
     * @example
     * // Delete a few Items
     * const { count } = await prisma.item.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Items
     * const item = await prisma.item.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Item.
     * @param {ItemUpsertArgs} args - Arguments to update or create a Item.
     * @example
     * // Update or create a Item
     * const item = await prisma.item.upsert({
     *   create: {
     *     // ... data to create a Item
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Item we want to update
     *   }
     * })
    **/
    upsert<T extends ItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ItemUpsertArgs<ExtArgs>>
    ): Prisma__ItemClient<$Result.GetResult<Prisma.$ItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemCountArgs} args - Arguments to filter Items to count.
     * @example
     * // Count the number of Items
     * const count = await prisma.item.count({
     *   where: {
     *     // ... the filter for the Items we want to count
     *   }
     * })
    **/
    count<T extends ItemCountArgs>(
      args?: Subset<T, ItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ItemAggregateArgs>(args: Subset<T, ItemAggregateArgs>): Prisma.PrismaPromise<GetItemAggregateType<T>>

    /**
     * Group by Item.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ItemGroupByArgs['orderBy'] }
        : { orderBy?: ItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Item model
   */
  readonly fields: ItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Item.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Item model
   */ 
  interface ItemFieldRefs {
    readonly id: FieldRef<"Item", 'Int'>
    readonly code: FieldRef<"Item", 'Int'>
    readonly name: FieldRef<"Item", 'String'>
    readonly stat: FieldRef<"Item", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * Item findUnique
   */
  export type ItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findUniqueOrThrow
   */
  export type ItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item findFirst
   */
  export type ItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findFirstOrThrow
   */
  export type ItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Item to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Items.
     */
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item findMany
   */
  export type ItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter, which Items to fetch.
     */
    where?: ItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Items to fetch.
     */
    orderBy?: ItemOrderByWithRelationInput | ItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Items.
     */
    cursor?: ItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Items.
     */
    skip?: number
    distinct?: ItemScalarFieldEnum | ItemScalarFieldEnum[]
  }

  /**
   * Item create
   */
  export type ItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The data needed to create a Item.
     */
    data: XOR<ItemCreateInput, ItemUncheckedCreateInput>
  }

  /**
   * Item createMany
   */
  export type ItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Items.
     */
    data: ItemCreateManyInput | ItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Item update
   */
  export type ItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The data needed to update a Item.
     */
    data: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
    /**
     * Choose, which Item to update.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item updateMany
   */
  export type ItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Items.
     */
    data: XOR<ItemUpdateManyMutationInput, ItemUncheckedUpdateManyInput>
    /**
     * Filter which Items to update
     */
    where?: ItemWhereInput
  }

  /**
   * Item upsert
   */
  export type ItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * The filter to search for the Item to update in case it exists.
     */
    where: ItemWhereUniqueInput
    /**
     * In case the Item found by the `where` argument doesn't exist, create a new Item with this data.
     */
    create: XOR<ItemCreateInput, ItemUncheckedCreateInput>
    /**
     * In case the Item was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ItemUpdateInput, ItemUncheckedUpdateInput>
  }

  /**
   * Item delete
   */
  export type ItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
    /**
     * Filter which Item to delete.
     */
    where: ItemWhereUniqueInput
  }

  /**
   * Item deleteMany
   */
  export type ItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Items to delete
     */
    where?: ItemWhereInput
  }

  /**
   * Item without action
   */
  export type ItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Item
     */
    select?: ItemSelect<ExtArgs> | null
  }


  /**
   * Model CharacterInventory
   */

  export type AggregateCharacterInventory = {
    _count: CharacterInventoryCountAggregateOutputType | null
    _avg: CharacterInventoryAvgAggregateOutputType | null
    _sum: CharacterInventorySumAggregateOutputType | null
    _min: CharacterInventoryMinAggregateOutputType | null
    _max: CharacterInventoryMaxAggregateOutputType | null
  }

  export type CharacterInventoryAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
    count: number | null
  }

  export type CharacterInventorySumAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
    count: number | null
  }

  export type CharacterInventoryMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
    count: number | null
  }

  export type CharacterInventoryMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
    count: number | null
  }

  export type CharacterInventoryCountAggregateOutputType = {
    id: number
    characterId: number
    itemId: number
    count: number
    _all: number
  }


  export type CharacterInventoryAvgAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    count?: true
  }

  export type CharacterInventorySumAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    count?: true
  }

  export type CharacterInventoryMinAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    count?: true
  }

  export type CharacterInventoryMaxAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    count?: true
  }

  export type CharacterInventoryCountAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    count?: true
    _all?: true
  }

  export type CharacterInventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterInventory to aggregate.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterInventories
    **/
    _count?: true | CharacterInventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterInventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterInventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterInventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterInventoryMaxAggregateInputType
  }

  export type GetCharacterInventoryAggregateType<T extends CharacterInventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterInventory[P]>
      : GetScalarType<T[P], AggregateCharacterInventory[P]>
  }




  export type CharacterInventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterInventoryWhereInput
    orderBy?: CharacterInventoryOrderByWithAggregationInput | CharacterInventoryOrderByWithAggregationInput[]
    by: CharacterInventoryScalarFieldEnum[] | CharacterInventoryScalarFieldEnum
    having?: CharacterInventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterInventoryCountAggregateInputType | true
    _avg?: CharacterInventoryAvgAggregateInputType
    _sum?: CharacterInventorySumAggregateInputType
    _min?: CharacterInventoryMinAggregateInputType
    _max?: CharacterInventoryMaxAggregateInputType
  }

  export type CharacterInventoryGroupByOutputType = {
    id: number
    characterId: number
    itemId: number
    count: number
    _count: CharacterInventoryCountAggregateOutputType | null
    _avg: CharacterInventoryAvgAggregateOutputType | null
    _sum: CharacterInventorySumAggregateOutputType | null
    _min: CharacterInventoryMinAggregateOutputType | null
    _max: CharacterInventoryMaxAggregateOutputType | null
  }

  type GetCharacterInventoryGroupByPayload<T extends CharacterInventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterInventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterInventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterInventoryGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterInventoryGroupByOutputType[P]>
        }
      >
    >


  export type CharacterInventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    itemId?: boolean
    count?: boolean
  }, ExtArgs["result"]["characterInventory"]>

  export type CharacterInventorySelectScalar = {
    id?: boolean
    characterId?: boolean
    itemId?: boolean
    count?: boolean
  }



  export type $CharacterInventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterInventory"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      itemId: number
      count: number
    }, ExtArgs["result"]["characterInventory"]>
    composites: {}
  }


  type CharacterInventoryGetPayload<S extends boolean | null | undefined | CharacterInventoryDefaultArgs> = $Result.GetResult<Prisma.$CharacterInventoryPayload, S>

  type CharacterInventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterInventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterInventoryCountAggregateInputType | true
    }

  export interface CharacterInventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterInventory'], meta: { name: 'CharacterInventory' } }
    /**
     * Find zero or one CharacterInventory that matches the filter.
     * @param {CharacterInventoryFindUniqueArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterInventoryFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryFindUniqueArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharacterInventory that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterInventoryFindUniqueOrThrowArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharacterInventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindFirstArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterInventoryFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindFirstArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharacterInventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindFirstOrThrowArgs} args - Arguments to find a CharacterInventory
     * @example
     * // Get one CharacterInventory
     * const characterInventory = await prisma.characterInventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharacterInventoryFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharacterInventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterInventories
     * const characterInventories = await prisma.characterInventory.findMany()
     * 
     * // Get first 10 CharacterInventories
     * const characterInventories = await prisma.characterInventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterInventoryWithIdOnly = await prisma.characterInventory.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CharacterInventoryFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharacterInventory.
     * @param {CharacterInventoryCreateArgs} args - Arguments to create a CharacterInventory.
     * @example
     * // Create one CharacterInventory
     * const CharacterInventory = await prisma.characterInventory.create({
     *   data: {
     *     // ... data to create a CharacterInventory
     *   }
     * })
     * 
    **/
    create<T extends CharacterInventoryCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryCreateArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharacterInventories.
     * @param {CharacterInventoryCreateManyArgs} args - Arguments to create many CharacterInventories.
     * @example
     * // Create many CharacterInventories
     * const characterInventory = await prisma.characterInventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharacterInventoryCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterInventory.
     * @param {CharacterInventoryDeleteArgs} args - Arguments to delete one CharacterInventory.
     * @example
     * // Delete one CharacterInventory
     * const CharacterInventory = await prisma.characterInventory.delete({
     *   where: {
     *     // ... filter to delete one CharacterInventory
     *   }
     * })
     * 
    **/
    delete<T extends CharacterInventoryDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryDeleteArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharacterInventory.
     * @param {CharacterInventoryUpdateArgs} args - Arguments to update one CharacterInventory.
     * @example
     * // Update one CharacterInventory
     * const characterInventory = await prisma.characterInventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterInventoryUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryUpdateArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharacterInventories.
     * @param {CharacterInventoryDeleteManyArgs} args - Arguments to filter CharacterInventories to delete.
     * @example
     * // Delete a few CharacterInventories
     * const { count } = await prisma.characterInventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterInventoryDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterInventoryDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterInventories
     * const characterInventory = await prisma.characterInventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterInventoryUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterInventory.
     * @param {CharacterInventoryUpsertArgs} args - Arguments to update or create a CharacterInventory.
     * @example
     * // Update or create a CharacterInventory
     * const characterInventory = await prisma.characterInventory.upsert({
     *   create: {
     *     // ... data to create a CharacterInventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterInventory we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterInventoryUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterInventoryUpsertArgs<ExtArgs>>
    ): Prisma__CharacterInventoryClient<$Result.GetResult<Prisma.$CharacterInventoryPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharacterInventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryCountArgs} args - Arguments to filter CharacterInventories to count.
     * @example
     * // Count the number of CharacterInventories
     * const count = await prisma.characterInventory.count({
     *   where: {
     *     // ... the filter for the CharacterInventories we want to count
     *   }
     * })
    **/
    count<T extends CharacterInventoryCountArgs>(
      args?: Subset<T, CharacterInventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterInventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterInventoryAggregateArgs>(args: Subset<T, CharacterInventoryAggregateArgs>): Prisma.PrismaPromise<GetCharacterInventoryAggregateType<T>>

    /**
     * Group by CharacterInventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterInventoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterInventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterInventoryGroupByArgs['orderBy'] }
        : { orderBy?: CharacterInventoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterInventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterInventory model
   */
  readonly fields: CharacterInventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterInventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterInventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharacterInventory model
   */ 
  interface CharacterInventoryFieldRefs {
    readonly id: FieldRef<"CharacterInventory", 'Int'>
    readonly characterId: FieldRef<"CharacterInventory", 'Int'>
    readonly itemId: FieldRef<"CharacterInventory", 'Int'>
    readonly count: FieldRef<"CharacterInventory", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterInventory findUnique
   */
  export type CharacterInventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory findUniqueOrThrow
   */
  export type CharacterInventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory findFirst
   */
  export type CharacterInventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterInventories.
     */
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory findFirstOrThrow
   */
  export type CharacterInventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Filter, which CharacterInventory to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterInventories.
     */
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory findMany
   */
  export type CharacterInventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Filter, which CharacterInventories to fetch.
     */
    where?: CharacterInventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterInventories to fetch.
     */
    orderBy?: CharacterInventoryOrderByWithRelationInput | CharacterInventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterInventories.
     */
    cursor?: CharacterInventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterInventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterInventories.
     */
    skip?: number
    distinct?: CharacterInventoryScalarFieldEnum | CharacterInventoryScalarFieldEnum[]
  }

  /**
   * CharacterInventory create
   */
  export type CharacterInventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * The data needed to create a CharacterInventory.
     */
    data: XOR<CharacterInventoryCreateInput, CharacterInventoryUncheckedCreateInput>
  }

  /**
   * CharacterInventory createMany
   */
  export type CharacterInventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterInventories.
     */
    data: CharacterInventoryCreateManyInput | CharacterInventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterInventory update
   */
  export type CharacterInventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * The data needed to update a CharacterInventory.
     */
    data: XOR<CharacterInventoryUpdateInput, CharacterInventoryUncheckedUpdateInput>
    /**
     * Choose, which CharacterInventory to update.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory updateMany
   */
  export type CharacterInventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterInventories.
     */
    data: XOR<CharacterInventoryUpdateManyMutationInput, CharacterInventoryUncheckedUpdateManyInput>
    /**
     * Filter which CharacterInventories to update
     */
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterInventory upsert
   */
  export type CharacterInventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * The filter to search for the CharacterInventory to update in case it exists.
     */
    where: CharacterInventoryWhereUniqueInput
    /**
     * In case the CharacterInventory found by the `where` argument doesn't exist, create a new CharacterInventory with this data.
     */
    create: XOR<CharacterInventoryCreateInput, CharacterInventoryUncheckedCreateInput>
    /**
     * In case the CharacterInventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterInventoryUpdateInput, CharacterInventoryUncheckedUpdateInput>
  }

  /**
   * CharacterInventory delete
   */
  export type CharacterInventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
    /**
     * Filter which CharacterInventory to delete.
     */
    where: CharacterInventoryWhereUniqueInput
  }

  /**
   * CharacterInventory deleteMany
   */
  export type CharacterInventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterInventories to delete
     */
    where?: CharacterInventoryWhereInput
  }

  /**
   * CharacterInventory without action
   */
  export type CharacterInventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterInventory
     */
    select?: CharacterInventorySelect<ExtArgs> | null
  }


  /**
   * Model CharacterItem
   */

  export type AggregateCharacterItem = {
    _count: CharacterItemCountAggregateOutputType | null
    _avg: CharacterItemAvgAggregateOutputType | null
    _sum: CharacterItemSumAggregateOutputType | null
    _min: CharacterItemMinAggregateOutputType | null
    _max: CharacterItemMaxAggregateOutputType | null
  }

  export type CharacterItemAvgAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemSumAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemMinAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemMaxAggregateOutputType = {
    id: number | null
    characterId: number | null
    itemId: number | null
  }

  export type CharacterItemCountAggregateOutputType = {
    id: number
    characterId: number
    itemId: number
    _all: number
  }


  export type CharacterItemAvgAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemSumAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemMinAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemMaxAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
  }

  export type CharacterItemCountAggregateInputType = {
    id?: true
    characterId?: true
    itemId?: true
    _all?: true
  }

  export type CharacterItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterItem to aggregate.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CharacterItems
    **/
    _count?: true | CharacterItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CharacterItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CharacterItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CharacterItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CharacterItemMaxAggregateInputType
  }

  export type GetCharacterItemAggregateType<T extends CharacterItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCharacterItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCharacterItem[P]>
      : GetScalarType<T[P], AggregateCharacterItem[P]>
  }




  export type CharacterItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CharacterItemWhereInput
    orderBy?: CharacterItemOrderByWithAggregationInput | CharacterItemOrderByWithAggregationInput[]
    by: CharacterItemScalarFieldEnum[] | CharacterItemScalarFieldEnum
    having?: CharacterItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CharacterItemCountAggregateInputType | true
    _avg?: CharacterItemAvgAggregateInputType
    _sum?: CharacterItemSumAggregateInputType
    _min?: CharacterItemMinAggregateInputType
    _max?: CharacterItemMaxAggregateInputType
  }

  export type CharacterItemGroupByOutputType = {
    id: number
    characterId: number
    itemId: number
    _count: CharacterItemCountAggregateOutputType | null
    _avg: CharacterItemAvgAggregateOutputType | null
    _sum: CharacterItemSumAggregateOutputType | null
    _min: CharacterItemMinAggregateOutputType | null
    _max: CharacterItemMaxAggregateOutputType | null
  }

  type GetCharacterItemGroupByPayload<T extends CharacterItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CharacterItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CharacterItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CharacterItemGroupByOutputType[P]>
            : GetScalarType<T[P], CharacterItemGroupByOutputType[P]>
        }
      >
    >


  export type CharacterItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    characterId?: boolean
    itemId?: boolean
  }, ExtArgs["result"]["characterItem"]>

  export type CharacterItemSelectScalar = {
    id?: boolean
    characterId?: boolean
    itemId?: boolean
  }



  export type $CharacterItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CharacterItem"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      characterId: number
      itemId: number
    }, ExtArgs["result"]["characterItem"]>
    composites: {}
  }


  type CharacterItemGetPayload<S extends boolean | null | undefined | CharacterItemDefaultArgs> = $Result.GetResult<Prisma.$CharacterItemPayload, S>

  type CharacterItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CharacterItemFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CharacterItemCountAggregateInputType | true
    }

  export interface CharacterItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CharacterItem'], meta: { name: 'CharacterItem' } }
    /**
     * Find zero or one CharacterItem that matches the filter.
     * @param {CharacterItemFindUniqueArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CharacterItemFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemFindUniqueArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one CharacterItem that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CharacterItemFindUniqueOrThrowArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CharacterItemFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first CharacterItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemFindFirstArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CharacterItemFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemFindFirstArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first CharacterItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemFindFirstOrThrowArgs} args - Arguments to find a CharacterItem
     * @example
     * // Get one CharacterItem
     * const characterItem = await prisma.characterItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CharacterItemFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more CharacterItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CharacterItems
     * const characterItems = await prisma.characterItem.findMany()
     * 
     * // Get first 10 CharacterItems
     * const characterItems = await prisma.characterItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const characterItemWithIdOnly = await prisma.characterItem.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CharacterItemFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a CharacterItem.
     * @param {CharacterItemCreateArgs} args - Arguments to create a CharacterItem.
     * @example
     * // Create one CharacterItem
     * const CharacterItem = await prisma.characterItem.create({
     *   data: {
     *     // ... data to create a CharacterItem
     *   }
     * })
     * 
    **/
    create<T extends CharacterItemCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemCreateArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many CharacterItems.
     * @param {CharacterItemCreateManyArgs} args - Arguments to create many CharacterItems.
     * @example
     * // Create many CharacterItems
     * const characterItem = await prisma.characterItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
    **/
    createMany<T extends CharacterItemCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a CharacterItem.
     * @param {CharacterItemDeleteArgs} args - Arguments to delete one CharacterItem.
     * @example
     * // Delete one CharacterItem
     * const CharacterItem = await prisma.characterItem.delete({
     *   where: {
     *     // ... filter to delete one CharacterItem
     *   }
     * })
     * 
    **/
    delete<T extends CharacterItemDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemDeleteArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one CharacterItem.
     * @param {CharacterItemUpdateArgs} args - Arguments to update one CharacterItem.
     * @example
     * // Update one CharacterItem
     * const characterItem = await prisma.characterItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CharacterItemUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemUpdateArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more CharacterItems.
     * @param {CharacterItemDeleteManyArgs} args - Arguments to filter CharacterItems to delete.
     * @example
     * // Delete a few CharacterItems
     * const { count } = await prisma.characterItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CharacterItemDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CharacterItemDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CharacterItems
     * const characterItem = await prisma.characterItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CharacterItemUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CharacterItem.
     * @param {CharacterItemUpsertArgs} args - Arguments to update or create a CharacterItem.
     * @example
     * // Update or create a CharacterItem
     * const characterItem = await prisma.characterItem.upsert({
     *   create: {
     *     // ... data to create a CharacterItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CharacterItem we want to update
     *   }
     * })
    **/
    upsert<T extends CharacterItemUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CharacterItemUpsertArgs<ExtArgs>>
    ): Prisma__CharacterItemClient<$Result.GetResult<Prisma.$CharacterItemPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of CharacterItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemCountArgs} args - Arguments to filter CharacterItems to count.
     * @example
     * // Count the number of CharacterItems
     * const count = await prisma.characterItem.count({
     *   where: {
     *     // ... the filter for the CharacterItems we want to count
     *   }
     * })
    **/
    count<T extends CharacterItemCountArgs>(
      args?: Subset<T, CharacterItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CharacterItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CharacterItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CharacterItemAggregateArgs>(args: Subset<T, CharacterItemAggregateArgs>): Prisma.PrismaPromise<GetCharacterItemAggregateType<T>>

    /**
     * Group by CharacterItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CharacterItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CharacterItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CharacterItemGroupByArgs['orderBy'] }
        : { orderBy?: CharacterItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CharacterItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCharacterItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CharacterItem model
   */
  readonly fields: CharacterItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CharacterItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CharacterItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the CharacterItem model
   */ 
  interface CharacterItemFieldRefs {
    readonly id: FieldRef<"CharacterItem", 'Int'>
    readonly characterId: FieldRef<"CharacterItem", 'Int'>
    readonly itemId: FieldRef<"CharacterItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CharacterItem findUnique
   */
  export type CharacterItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem findUniqueOrThrow
   */
  export type CharacterItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem findFirst
   */
  export type CharacterItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterItems.
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterItems.
     */
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * CharacterItem findFirstOrThrow
   */
  export type CharacterItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Filter, which CharacterItem to fetch.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CharacterItems.
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CharacterItems.
     */
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * CharacterItem findMany
   */
  export type CharacterItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Filter, which CharacterItems to fetch.
     */
    where?: CharacterItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CharacterItems to fetch.
     */
    orderBy?: CharacterItemOrderByWithRelationInput | CharacterItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CharacterItems.
     */
    cursor?: CharacterItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CharacterItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CharacterItems.
     */
    skip?: number
    distinct?: CharacterItemScalarFieldEnum | CharacterItemScalarFieldEnum[]
  }

  /**
   * CharacterItem create
   */
  export type CharacterItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * The data needed to create a CharacterItem.
     */
    data: XOR<CharacterItemCreateInput, CharacterItemUncheckedCreateInput>
  }

  /**
   * CharacterItem createMany
   */
  export type CharacterItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CharacterItems.
     */
    data: CharacterItemCreateManyInput | CharacterItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CharacterItem update
   */
  export type CharacterItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * The data needed to update a CharacterItem.
     */
    data: XOR<CharacterItemUpdateInput, CharacterItemUncheckedUpdateInput>
    /**
     * Choose, which CharacterItem to update.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem updateMany
   */
  export type CharacterItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CharacterItems.
     */
    data: XOR<CharacterItemUpdateManyMutationInput, CharacterItemUncheckedUpdateManyInput>
    /**
     * Filter which CharacterItems to update
     */
    where?: CharacterItemWhereInput
  }

  /**
   * CharacterItem upsert
   */
  export type CharacterItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * The filter to search for the CharacterItem to update in case it exists.
     */
    where: CharacterItemWhereUniqueInput
    /**
     * In case the CharacterItem found by the `where` argument doesn't exist, create a new CharacterItem with this data.
     */
    create: XOR<CharacterItemCreateInput, CharacterItemUncheckedCreateInput>
    /**
     * In case the CharacterItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CharacterItemUpdateInput, CharacterItemUncheckedUpdateInput>
  }

  /**
   * CharacterItem delete
   */
  export type CharacterItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
    /**
     * Filter which CharacterItem to delete.
     */
    where: CharacterItemWhereUniqueInput
  }

  /**
   * CharacterItem deleteMany
   */
  export type CharacterItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CharacterItems to delete
     */
    where?: CharacterItemWhereInput
  }

  /**
   * CharacterItem without action
   */
  export type CharacterItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CharacterItem
     */
    select?: CharacterItemSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ItemScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    stat: 'stat'
  };

  export type ItemScalarFieldEnum = (typeof ItemScalarFieldEnum)[keyof typeof ItemScalarFieldEnum]


  export const CharacterInventoryScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    itemId: 'itemId',
    count: 'count'
  };

  export type CharacterInventoryScalarFieldEnum = (typeof CharacterInventoryScalarFieldEnum)[keyof typeof CharacterInventoryScalarFieldEnum]


  export const CharacterItemScalarFieldEnum: {
    id: 'id',
    characterId: 'characterId',
    itemId: 'itemId'
  };

  export type CharacterItemScalarFieldEnum = (typeof CharacterItemScalarFieldEnum)[keyof typeof CharacterItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type ItemWhereInput = {
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    id?: IntFilter<"Item"> | number
    code?: IntFilter<"Item"> | number
    name?: StringFilter<"Item"> | string
    stat?: JsonFilter<"Item">
  }

  export type ItemOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    stat?: SortOrder
  }

  export type ItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    code?: number
    AND?: ItemWhereInput | ItemWhereInput[]
    OR?: ItemWhereInput[]
    NOT?: ItemWhereInput | ItemWhereInput[]
    name?: StringFilter<"Item"> | string
    stat?: JsonFilter<"Item">
  }, "id" | "code">

  export type ItemOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    stat?: SortOrder
    _count?: ItemCountOrderByAggregateInput
    _avg?: ItemAvgOrderByAggregateInput
    _max?: ItemMaxOrderByAggregateInput
    _min?: ItemMinOrderByAggregateInput
    _sum?: ItemSumOrderByAggregateInput
  }

  export type ItemScalarWhereWithAggregatesInput = {
    AND?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    OR?: ItemScalarWhereWithAggregatesInput[]
    NOT?: ItemScalarWhereWithAggregatesInput | ItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Item"> | number
    code?: IntWithAggregatesFilter<"Item"> | number
    name?: StringWithAggregatesFilter<"Item"> | string
    stat?: JsonWithAggregatesFilter<"Item">
  }

  export type CharacterInventoryWhereInput = {
    AND?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    OR?: CharacterInventoryWhereInput[]
    NOT?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    id?: IntFilter<"CharacterInventory"> | number
    characterId?: IntFilter<"CharacterInventory"> | number
    itemId?: IntFilter<"CharacterInventory"> | number
    count?: IntFilter<"CharacterInventory"> | number
  }

  export type CharacterInventoryOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
  }

  export type CharacterInventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    OR?: CharacterInventoryWhereInput[]
    NOT?: CharacterInventoryWhereInput | CharacterInventoryWhereInput[]
    characterId?: IntFilter<"CharacterInventory"> | number
    itemId?: IntFilter<"CharacterInventory"> | number
    count?: IntFilter<"CharacterInventory"> | number
  }, "id">

  export type CharacterInventoryOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
    _count?: CharacterInventoryCountOrderByAggregateInput
    _avg?: CharacterInventoryAvgOrderByAggregateInput
    _max?: CharacterInventoryMaxOrderByAggregateInput
    _min?: CharacterInventoryMinOrderByAggregateInput
    _sum?: CharacterInventorySumOrderByAggregateInput
  }

  export type CharacterInventoryScalarWhereWithAggregatesInput = {
    AND?: CharacterInventoryScalarWhereWithAggregatesInput | CharacterInventoryScalarWhereWithAggregatesInput[]
    OR?: CharacterInventoryScalarWhereWithAggregatesInput[]
    NOT?: CharacterInventoryScalarWhereWithAggregatesInput | CharacterInventoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterInventory"> | number
    characterId?: IntWithAggregatesFilter<"CharacterInventory"> | number
    itemId?: IntWithAggregatesFilter<"CharacterInventory"> | number
    count?: IntWithAggregatesFilter<"CharacterInventory"> | number
  }

  export type CharacterItemWhereInput = {
    AND?: CharacterItemWhereInput | CharacterItemWhereInput[]
    OR?: CharacterItemWhereInput[]
    NOT?: CharacterItemWhereInput | CharacterItemWhereInput[]
    id?: IntFilter<"CharacterItem"> | number
    characterId?: IntFilter<"CharacterItem"> | number
    itemId?: IntFilter<"CharacterItem"> | number
  }

  export type CharacterItemOrderByWithRelationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CharacterItemWhereInput | CharacterItemWhereInput[]
    OR?: CharacterItemWhereInput[]
    NOT?: CharacterItemWhereInput | CharacterItemWhereInput[]
    characterId?: IntFilter<"CharacterItem"> | number
    itemId?: IntFilter<"CharacterItem"> | number
  }, "id">

  export type CharacterItemOrderByWithAggregationInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    _count?: CharacterItemCountOrderByAggregateInput
    _avg?: CharacterItemAvgOrderByAggregateInput
    _max?: CharacterItemMaxOrderByAggregateInput
    _min?: CharacterItemMinOrderByAggregateInput
    _sum?: CharacterItemSumOrderByAggregateInput
  }

  export type CharacterItemScalarWhereWithAggregatesInput = {
    AND?: CharacterItemScalarWhereWithAggregatesInput | CharacterItemScalarWhereWithAggregatesInput[]
    OR?: CharacterItemScalarWhereWithAggregatesInput[]
    NOT?: CharacterItemScalarWhereWithAggregatesInput | CharacterItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CharacterItem"> | number
    characterId?: IntWithAggregatesFilter<"CharacterItem"> | number
    itemId?: IntWithAggregatesFilter<"CharacterItem"> | number
  }

  export type ItemCreateInput = {
    code: number
    name: string
    stat: JsonNullValueInput | InputJsonValue
  }

  export type ItemUncheckedCreateInput = {
    id?: number
    code: number
    name: string
    stat: JsonNullValueInput | InputJsonValue
  }

  export type ItemUpdateInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: JsonNullValueInput | InputJsonValue
  }

  export type ItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: JsonNullValueInput | InputJsonValue
  }

  export type ItemCreateManyInput = {
    id?: number
    code: number
    name: string
    stat: JsonNullValueInput | InputJsonValue
  }

  export type ItemUpdateManyMutationInput = {
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: JsonNullValueInput | InputJsonValue
  }

  export type ItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    stat?: JsonNullValueInput | InputJsonValue
  }

  export type CharacterInventoryCreateInput = {
    characterId: number
    itemId: number
    count: number
  }

  export type CharacterInventoryUncheckedCreateInput = {
    id?: number
    characterId: number
    itemId: number
    count: number
  }

  export type CharacterInventoryUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryCreateManyInput = {
    id?: number
    characterId: number
    itemId: number
    count: number
  }

  export type CharacterInventoryUpdateManyMutationInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterInventoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
    count?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemCreateInput = {
    characterId: number
    itemId: number
  }

  export type CharacterItemUncheckedCreateInput = {
    id?: number
    characterId: number
    itemId: number
  }

  export type CharacterItemUpdateInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemCreateManyInput = {
    id?: number
    characterId: number
    itemId: number
  }

  export type CharacterItemUpdateManyMutationInput = {
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type CharacterItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    characterId?: IntFieldUpdateOperationsInput | number
    itemId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ItemCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    stat?: SortOrder
  }

  export type ItemAvgOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type ItemMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type ItemMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
  }

  export type ItemSumOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type CharacterInventoryCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
  }

  export type CharacterInventoryAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
  }

  export type CharacterInventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
  }

  export type CharacterInventoryMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
  }

  export type CharacterInventorySumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
    count?: SortOrder
  }

  export type CharacterItemCountOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemAvgOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemMaxOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemMinOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type CharacterItemSumOrderByAggregateInput = {
    id?: SortOrder
    characterId?: SortOrder
    itemId?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use ItemDefaultArgs instead
     */
    export type ItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ItemDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterInventoryDefaultArgs instead
     */
    export type CharacterInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterInventoryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CharacterItemDefaultArgs instead
     */
    export type CharacterItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CharacterItemDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}