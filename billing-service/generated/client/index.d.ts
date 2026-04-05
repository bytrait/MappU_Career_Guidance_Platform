
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
 * Model PaymentOrder
 * 
 */
export type PaymentOrder = $Result.DefaultSelection<Prisma.$PaymentOrderPayload>
/**
 * Model CounsellorCredit
 * 
 */
export type CounsellorCredit = $Result.DefaultSelection<Prisma.$CounsellorCreditPayload>
/**
 * Model PaymentWebhookLog
 * 
 */
export type PaymentWebhookLog = $Result.DefaultSelection<Prisma.$PaymentWebhookLogPayload>
/**
 * Model CreditTransaction
 * 
 */
export type CreditTransaction = $Result.DefaultSelection<Prisma.$CreditTransactionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const CreditTransactionType: {
  PURCHASE: 'PURCHASE',
  CONSUME: 'CONSUME',
  REFUND: 'REFUND',
  SIGNUP_BONUS: 'SIGNUP_BONUS'
};

export type CreditTransactionType = (typeof CreditTransactionType)[keyof typeof CreditTransactionType]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type CreditTransactionType = $Enums.CreditTransactionType

export const CreditTransactionType: typeof $Enums.CreditTransactionType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more PaymentOrders
 * const paymentOrders = await prisma.paymentOrder.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more PaymentOrders
   * const paymentOrders = await prisma.paymentOrder.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.paymentOrder`: Exposes CRUD operations for the **PaymentOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentOrders
    * const paymentOrders = await prisma.paymentOrder.findMany()
    * ```
    */
  get paymentOrder(): Prisma.PaymentOrderDelegate<ExtArgs>;

  /**
   * `prisma.counsellorCredit`: Exposes CRUD operations for the **CounsellorCredit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CounsellorCredits
    * const counsellorCredits = await prisma.counsellorCredit.findMany()
    * ```
    */
  get counsellorCredit(): Prisma.CounsellorCreditDelegate<ExtArgs>;

  /**
   * `prisma.paymentWebhookLog`: Exposes CRUD operations for the **PaymentWebhookLog** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PaymentWebhookLogs
    * const paymentWebhookLogs = await prisma.paymentWebhookLog.findMany()
    * ```
    */
  get paymentWebhookLog(): Prisma.PaymentWebhookLogDelegate<ExtArgs>;

  /**
   * `prisma.creditTransaction`: Exposes CRUD operations for the **CreditTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CreditTransactions
    * const creditTransactions = await prisma.creditTransaction.findMany()
    * ```
    */
  get creditTransaction(): Prisma.CreditTransactionDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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
    PaymentOrder: 'PaymentOrder',
    CounsellorCredit: 'CounsellorCredit',
    PaymentWebhookLog: 'PaymentWebhookLog',
    CreditTransaction: 'CreditTransaction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "paymentOrder" | "counsellorCredit" | "paymentWebhookLog" | "creditTransaction"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      PaymentOrder: {
        payload: Prisma.$PaymentOrderPayload<ExtArgs>
        fields: Prisma.PaymentOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>
          }
          findFirst: {
            args: Prisma.PaymentOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>
          }
          findMany: {
            args: Prisma.PaymentOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>[]
          }
          create: {
            args: Prisma.PaymentOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>
          }
          createMany: {
            args: Prisma.PaymentOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>[]
          }
          delete: {
            args: Prisma.PaymentOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>
          }
          update: {
            args: Prisma.PaymentOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>
          }
          deleteMany: {
            args: Prisma.PaymentOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentOrderPayload>
          }
          aggregate: {
            args: Prisma.PaymentOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentOrder>
          }
          groupBy: {
            args: Prisma.PaymentOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentOrderCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentOrderCountAggregateOutputType> | number
          }
        }
      }
      CounsellorCredit: {
        payload: Prisma.$CounsellorCreditPayload<ExtArgs>
        fields: Prisma.CounsellorCreditFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounsellorCreditFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounsellorCreditFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>
          }
          findFirst: {
            args: Prisma.CounsellorCreditFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounsellorCreditFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>
          }
          findMany: {
            args: Prisma.CounsellorCreditFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>[]
          }
          create: {
            args: Prisma.CounsellorCreditCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>
          }
          createMany: {
            args: Prisma.CounsellorCreditCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CounsellorCreditCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>[]
          }
          delete: {
            args: Prisma.CounsellorCreditDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>
          }
          update: {
            args: Prisma.CounsellorCreditUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>
          }
          deleteMany: {
            args: Prisma.CounsellorCreditDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounsellorCreditUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CounsellorCreditUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorCreditPayload>
          }
          aggregate: {
            args: Prisma.CounsellorCreditAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounsellorCredit>
          }
          groupBy: {
            args: Prisma.CounsellorCreditGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounsellorCreditGroupByOutputType>[]
          }
          count: {
            args: Prisma.CounsellorCreditCountArgs<ExtArgs>
            result: $Utils.Optional<CounsellorCreditCountAggregateOutputType> | number
          }
        }
      }
      PaymentWebhookLog: {
        payload: Prisma.$PaymentWebhookLogPayload<ExtArgs>
        fields: Prisma.PaymentWebhookLogFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentWebhookLogFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentWebhookLogFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>
          }
          findFirst: {
            args: Prisma.PaymentWebhookLogFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentWebhookLogFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>
          }
          findMany: {
            args: Prisma.PaymentWebhookLogFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>[]
          }
          create: {
            args: Prisma.PaymentWebhookLogCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>
          }
          createMany: {
            args: Prisma.PaymentWebhookLogCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentWebhookLogCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>[]
          }
          delete: {
            args: Prisma.PaymentWebhookLogDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>
          }
          update: {
            args: Prisma.PaymentWebhookLogUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>
          }
          deleteMany: {
            args: Prisma.PaymentWebhookLogDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentWebhookLogUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.PaymentWebhookLogUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentWebhookLogPayload>
          }
          aggregate: {
            args: Prisma.PaymentWebhookLogAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePaymentWebhookLog>
          }
          groupBy: {
            args: Prisma.PaymentWebhookLogGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentWebhookLogGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentWebhookLogCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentWebhookLogCountAggregateOutputType> | number
          }
        }
      }
      CreditTransaction: {
        payload: Prisma.$CreditTransactionPayload<ExtArgs>
        fields: Prisma.CreditTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CreditTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CreditTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findFirst: {
            args: Prisma.CreditTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CreditTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          findMany: {
            args: Prisma.CreditTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          create: {
            args: Prisma.CreditTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          createMany: {
            args: Prisma.CreditTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CreditTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>[]
          }
          delete: {
            args: Prisma.CreditTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          update: {
            args: Prisma.CreditTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          deleteMany: {
            args: Prisma.CreditTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CreditTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CreditTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CreditTransactionPayload>
          }
          aggregate: {
            args: Prisma.CreditTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCreditTransaction>
          }
          groupBy: {
            args: Prisma.CreditTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CreditTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<CreditTransactionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Model PaymentOrder
   */

  export type AggregatePaymentOrder = {
    _count: PaymentOrderCountAggregateOutputType | null
    _avg: PaymentOrderAvgAggregateOutputType | null
    _sum: PaymentOrderSumAggregateOutputType | null
    _min: PaymentOrderMinAggregateOutputType | null
    _max: PaymentOrderMaxAggregateOutputType | null
  }

  export type PaymentOrderAvgAggregateOutputType = {
    studentCount: number | null
    pricePerStudent: number | null
    totalAmount: number | null
  }

  export type PaymentOrderSumAggregateOutputType = {
    studentCount: number | null
    pricePerStudent: number | null
    totalAmount: number | null
  }

  export type PaymentOrderMinAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    razorpayOrderId: string | null
    studentCount: number | null
    pricePerStudent: number | null
    totalAmount: number | null
    status: $Enums.PaymentStatus | null
    razorpayPaymentId: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentOrderMaxAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    razorpayOrderId: string | null
    studentCount: number | null
    pricePerStudent: number | null
    totalAmount: number | null
    status: $Enums.PaymentStatus | null
    razorpayPaymentId: string | null
    failureReason: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentOrderCountAggregateOutputType = {
    id: number
    counsellorId: number
    razorpayOrderId: number
    studentCount: number
    pricePerStudent: number
    totalAmount: number
    status: number
    razorpayPaymentId: number
    failureReason: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentOrderAvgAggregateInputType = {
    studentCount?: true
    pricePerStudent?: true
    totalAmount?: true
  }

  export type PaymentOrderSumAggregateInputType = {
    studentCount?: true
    pricePerStudent?: true
    totalAmount?: true
  }

  export type PaymentOrderMinAggregateInputType = {
    id?: true
    counsellorId?: true
    razorpayOrderId?: true
    studentCount?: true
    pricePerStudent?: true
    totalAmount?: true
    status?: true
    razorpayPaymentId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentOrderMaxAggregateInputType = {
    id?: true
    counsellorId?: true
    razorpayOrderId?: true
    studentCount?: true
    pricePerStudent?: true
    totalAmount?: true
    status?: true
    razorpayPaymentId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentOrderCountAggregateInputType = {
    id?: true
    counsellorId?: true
    razorpayOrderId?: true
    studentCount?: true
    pricePerStudent?: true
    totalAmount?: true
    status?: true
    razorpayPaymentId?: true
    failureReason?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentOrder to aggregate.
     */
    where?: PaymentOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentOrders to fetch.
     */
    orderBy?: PaymentOrderOrderByWithRelationInput | PaymentOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentOrders
    **/
    _count?: true | PaymentOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentOrderMaxAggregateInputType
  }

  export type GetPaymentOrderAggregateType<T extends PaymentOrderAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentOrder[P]>
      : GetScalarType<T[P], AggregatePaymentOrder[P]>
  }




  export type PaymentOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentOrderWhereInput
    orderBy?: PaymentOrderOrderByWithAggregationInput | PaymentOrderOrderByWithAggregationInput[]
    by: PaymentOrderScalarFieldEnum[] | PaymentOrderScalarFieldEnum
    having?: PaymentOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentOrderCountAggregateInputType | true
    _avg?: PaymentOrderAvgAggregateInputType
    _sum?: PaymentOrderSumAggregateInputType
    _min?: PaymentOrderMinAggregateInputType
    _max?: PaymentOrderMaxAggregateInputType
  }

  export type PaymentOrderGroupByOutputType = {
    id: string
    counsellorId: string
    razorpayOrderId: string
    studentCount: number
    pricePerStudent: number
    totalAmount: number
    status: $Enums.PaymentStatus
    razorpayPaymentId: string | null
    failureReason: string | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentOrderCountAggregateOutputType | null
    _avg: PaymentOrderAvgAggregateOutputType | null
    _sum: PaymentOrderSumAggregateOutputType | null
    _min: PaymentOrderMinAggregateOutputType | null
    _max: PaymentOrderMaxAggregateOutputType | null
  }

  type GetPaymentOrderGroupByPayload<T extends PaymentOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentOrderGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentOrderGroupByOutputType[P]>
        }
      >
    >


  export type PaymentOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    razorpayOrderId?: boolean
    studentCount?: boolean
    pricePerStudent?: boolean
    totalAmount?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentOrder"]>

  export type PaymentOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    razorpayOrderId?: boolean
    studentCount?: boolean
    pricePerStudent?: boolean
    totalAmount?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["paymentOrder"]>

  export type PaymentOrderSelectScalar = {
    id?: boolean
    counsellorId?: boolean
    razorpayOrderId?: boolean
    studentCount?: boolean
    pricePerStudent?: boolean
    totalAmount?: boolean
    status?: boolean
    razorpayPaymentId?: boolean
    failureReason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $PaymentOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentOrder"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      counsellorId: string
      razorpayOrderId: string
      studentCount: number
      pricePerStudent: number
      totalAmount: number
      status: $Enums.PaymentStatus
      razorpayPaymentId: string | null
      failureReason: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["paymentOrder"]>
    composites: {}
  }

  type PaymentOrderGetPayload<S extends boolean | null | undefined | PaymentOrderDefaultArgs> = $Result.GetResult<Prisma.$PaymentOrderPayload, S>

  type PaymentOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentOrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentOrderCountAggregateInputType | true
    }

  export interface PaymentOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentOrder'], meta: { name: 'PaymentOrder' } }
    /**
     * Find zero or one PaymentOrder that matches the filter.
     * @param {PaymentOrderFindUniqueArgs} args - Arguments to find a PaymentOrder
     * @example
     * // Get one PaymentOrder
     * const paymentOrder = await prisma.paymentOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentOrderFindUniqueArgs>(args: SelectSubset<T, PaymentOrderFindUniqueArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentOrder that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentOrderFindUniqueOrThrowArgs} args - Arguments to find a PaymentOrder
     * @example
     * // Get one PaymentOrder
     * const paymentOrder = await prisma.paymentOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderFindFirstArgs} args - Arguments to find a PaymentOrder
     * @example
     * // Get one PaymentOrder
     * const paymentOrder = await prisma.paymentOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentOrderFindFirstArgs>(args?: SelectSubset<T, PaymentOrderFindFirstArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderFindFirstOrThrowArgs} args - Arguments to find a PaymentOrder
     * @example
     * // Get one PaymentOrder
     * const paymentOrder = await prisma.paymentOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentOrders
     * const paymentOrders = await prisma.paymentOrder.findMany()
     * 
     * // Get first 10 PaymentOrders
     * const paymentOrders = await prisma.paymentOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentOrderWithIdOnly = await prisma.paymentOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentOrderFindManyArgs>(args?: SelectSubset<T, PaymentOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentOrder.
     * @param {PaymentOrderCreateArgs} args - Arguments to create a PaymentOrder.
     * @example
     * // Create one PaymentOrder
     * const PaymentOrder = await prisma.paymentOrder.create({
     *   data: {
     *     // ... data to create a PaymentOrder
     *   }
     * })
     * 
     */
    create<T extends PaymentOrderCreateArgs>(args: SelectSubset<T, PaymentOrderCreateArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentOrders.
     * @param {PaymentOrderCreateManyArgs} args - Arguments to create many PaymentOrders.
     * @example
     * // Create many PaymentOrders
     * const paymentOrder = await prisma.paymentOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentOrderCreateManyArgs>(args?: SelectSubset<T, PaymentOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentOrders and returns the data saved in the database.
     * @param {PaymentOrderCreateManyAndReturnArgs} args - Arguments to create many PaymentOrders.
     * @example
     * // Create many PaymentOrders
     * const paymentOrder = await prisma.paymentOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentOrders and only return the `id`
     * const paymentOrderWithIdOnly = await prisma.paymentOrder.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentOrder.
     * @param {PaymentOrderDeleteArgs} args - Arguments to delete one PaymentOrder.
     * @example
     * // Delete one PaymentOrder
     * const PaymentOrder = await prisma.paymentOrder.delete({
     *   where: {
     *     // ... filter to delete one PaymentOrder
     *   }
     * })
     * 
     */
    delete<T extends PaymentOrderDeleteArgs>(args: SelectSubset<T, PaymentOrderDeleteArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentOrder.
     * @param {PaymentOrderUpdateArgs} args - Arguments to update one PaymentOrder.
     * @example
     * // Update one PaymentOrder
     * const paymentOrder = await prisma.paymentOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentOrderUpdateArgs>(args: SelectSubset<T, PaymentOrderUpdateArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentOrders.
     * @param {PaymentOrderDeleteManyArgs} args - Arguments to filter PaymentOrders to delete.
     * @example
     * // Delete a few PaymentOrders
     * const { count } = await prisma.paymentOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentOrderDeleteManyArgs>(args?: SelectSubset<T, PaymentOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentOrders
     * const paymentOrder = await prisma.paymentOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentOrderUpdateManyArgs>(args: SelectSubset<T, PaymentOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentOrder.
     * @param {PaymentOrderUpsertArgs} args - Arguments to update or create a PaymentOrder.
     * @example
     * // Update or create a PaymentOrder
     * const paymentOrder = await prisma.paymentOrder.upsert({
     *   create: {
     *     // ... data to create a PaymentOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentOrder we want to update
     *   }
     * })
     */
    upsert<T extends PaymentOrderUpsertArgs>(args: SelectSubset<T, PaymentOrderUpsertArgs<ExtArgs>>): Prisma__PaymentOrderClient<$Result.GetResult<Prisma.$PaymentOrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderCountArgs} args - Arguments to filter PaymentOrders to count.
     * @example
     * // Count the number of PaymentOrders
     * const count = await prisma.paymentOrder.count({
     *   where: {
     *     // ... the filter for the PaymentOrders we want to count
     *   }
     * })
    **/
    count<T extends PaymentOrderCountArgs>(
      args?: Subset<T, PaymentOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentOrderAggregateArgs>(args: Subset<T, PaymentOrderAggregateArgs>): Prisma.PrismaPromise<GetPaymentOrderAggregateType<T>>

    /**
     * Group by PaymentOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentOrderGroupByArgs} args - Group by arguments.
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
      T extends PaymentOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentOrderGroupByArgs['orderBy'] }
        : { orderBy?: PaymentOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentOrder model
   */
  readonly fields: PaymentOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentOrder model
   */ 
  interface PaymentOrderFieldRefs {
    readonly id: FieldRef<"PaymentOrder", 'String'>
    readonly counsellorId: FieldRef<"PaymentOrder", 'String'>
    readonly razorpayOrderId: FieldRef<"PaymentOrder", 'String'>
    readonly studentCount: FieldRef<"PaymentOrder", 'Int'>
    readonly pricePerStudent: FieldRef<"PaymentOrder", 'Int'>
    readonly totalAmount: FieldRef<"PaymentOrder", 'Int'>
    readonly status: FieldRef<"PaymentOrder", 'PaymentStatus'>
    readonly razorpayPaymentId: FieldRef<"PaymentOrder", 'String'>
    readonly failureReason: FieldRef<"PaymentOrder", 'String'>
    readonly createdAt: FieldRef<"PaymentOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"PaymentOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentOrder findUnique
   */
  export type PaymentOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * Filter, which PaymentOrder to fetch.
     */
    where: PaymentOrderWhereUniqueInput
  }

  /**
   * PaymentOrder findUniqueOrThrow
   */
  export type PaymentOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * Filter, which PaymentOrder to fetch.
     */
    where: PaymentOrderWhereUniqueInput
  }

  /**
   * PaymentOrder findFirst
   */
  export type PaymentOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * Filter, which PaymentOrder to fetch.
     */
    where?: PaymentOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentOrders to fetch.
     */
    orderBy?: PaymentOrderOrderByWithRelationInput | PaymentOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentOrders.
     */
    cursor?: PaymentOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentOrders.
     */
    distinct?: PaymentOrderScalarFieldEnum | PaymentOrderScalarFieldEnum[]
  }

  /**
   * PaymentOrder findFirstOrThrow
   */
  export type PaymentOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * Filter, which PaymentOrder to fetch.
     */
    where?: PaymentOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentOrders to fetch.
     */
    orderBy?: PaymentOrderOrderByWithRelationInput | PaymentOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentOrders.
     */
    cursor?: PaymentOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentOrders.
     */
    distinct?: PaymentOrderScalarFieldEnum | PaymentOrderScalarFieldEnum[]
  }

  /**
   * PaymentOrder findMany
   */
  export type PaymentOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * Filter, which PaymentOrders to fetch.
     */
    where?: PaymentOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentOrders to fetch.
     */
    orderBy?: PaymentOrderOrderByWithRelationInput | PaymentOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentOrders.
     */
    cursor?: PaymentOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentOrders.
     */
    skip?: number
    distinct?: PaymentOrderScalarFieldEnum | PaymentOrderScalarFieldEnum[]
  }

  /**
   * PaymentOrder create
   */
  export type PaymentOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * The data needed to create a PaymentOrder.
     */
    data: XOR<PaymentOrderCreateInput, PaymentOrderUncheckedCreateInput>
  }

  /**
   * PaymentOrder createMany
   */
  export type PaymentOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentOrders.
     */
    data: PaymentOrderCreateManyInput | PaymentOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentOrder createManyAndReturn
   */
  export type PaymentOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentOrders.
     */
    data: PaymentOrderCreateManyInput | PaymentOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentOrder update
   */
  export type PaymentOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * The data needed to update a PaymentOrder.
     */
    data: XOR<PaymentOrderUpdateInput, PaymentOrderUncheckedUpdateInput>
    /**
     * Choose, which PaymentOrder to update.
     */
    where: PaymentOrderWhereUniqueInput
  }

  /**
   * PaymentOrder updateMany
   */
  export type PaymentOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentOrders.
     */
    data: XOR<PaymentOrderUpdateManyMutationInput, PaymentOrderUncheckedUpdateManyInput>
    /**
     * Filter which PaymentOrders to update
     */
    where?: PaymentOrderWhereInput
  }

  /**
   * PaymentOrder upsert
   */
  export type PaymentOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * The filter to search for the PaymentOrder to update in case it exists.
     */
    where: PaymentOrderWhereUniqueInput
    /**
     * In case the PaymentOrder found by the `where` argument doesn't exist, create a new PaymentOrder with this data.
     */
    create: XOR<PaymentOrderCreateInput, PaymentOrderUncheckedCreateInput>
    /**
     * In case the PaymentOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentOrderUpdateInput, PaymentOrderUncheckedUpdateInput>
  }

  /**
   * PaymentOrder delete
   */
  export type PaymentOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
    /**
     * Filter which PaymentOrder to delete.
     */
    where: PaymentOrderWhereUniqueInput
  }

  /**
   * PaymentOrder deleteMany
   */
  export type PaymentOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentOrders to delete
     */
    where?: PaymentOrderWhereInput
  }

  /**
   * PaymentOrder without action
   */
  export type PaymentOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentOrder
     */
    select?: PaymentOrderSelect<ExtArgs> | null
  }


  /**
   * Model CounsellorCredit
   */

  export type AggregateCounsellorCredit = {
    _count: CounsellorCreditCountAggregateOutputType | null
    _avg: CounsellorCreditAvgAggregateOutputType | null
    _sum: CounsellorCreditSumAggregateOutputType | null
    _min: CounsellorCreditMinAggregateOutputType | null
    _max: CounsellorCreditMaxAggregateOutputType | null
  }

  export type CounsellorCreditAvgAggregateOutputType = {
    totalCredits: number | null
    usedCredits: number | null
  }

  export type CounsellorCreditSumAggregateOutputType = {
    totalCredits: number | null
    usedCredits: number | null
  }

  export type CounsellorCreditMinAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    totalCredits: number | null
    usedCredits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CounsellorCreditMaxAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    totalCredits: number | null
    usedCredits: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CounsellorCreditCountAggregateOutputType = {
    id: number
    counsellorId: number
    totalCredits: number
    usedCredits: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CounsellorCreditAvgAggregateInputType = {
    totalCredits?: true
    usedCredits?: true
  }

  export type CounsellorCreditSumAggregateInputType = {
    totalCredits?: true
    usedCredits?: true
  }

  export type CounsellorCreditMinAggregateInputType = {
    id?: true
    counsellorId?: true
    totalCredits?: true
    usedCredits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CounsellorCreditMaxAggregateInputType = {
    id?: true
    counsellorId?: true
    totalCredits?: true
    usedCredits?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CounsellorCreditCountAggregateInputType = {
    id?: true
    counsellorId?: true
    totalCredits?: true
    usedCredits?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CounsellorCreditAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounsellorCredit to aggregate.
     */
    where?: CounsellorCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorCredits to fetch.
     */
    orderBy?: CounsellorCreditOrderByWithRelationInput | CounsellorCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounsellorCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CounsellorCredits
    **/
    _count?: true | CounsellorCreditCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounsellorCreditAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounsellorCreditSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounsellorCreditMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounsellorCreditMaxAggregateInputType
  }

  export type GetCounsellorCreditAggregateType<T extends CounsellorCreditAggregateArgs> = {
        [P in keyof T & keyof AggregateCounsellorCredit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounsellorCredit[P]>
      : GetScalarType<T[P], AggregateCounsellorCredit[P]>
  }




  export type CounsellorCreditGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounsellorCreditWhereInput
    orderBy?: CounsellorCreditOrderByWithAggregationInput | CounsellorCreditOrderByWithAggregationInput[]
    by: CounsellorCreditScalarFieldEnum[] | CounsellorCreditScalarFieldEnum
    having?: CounsellorCreditScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounsellorCreditCountAggregateInputType | true
    _avg?: CounsellorCreditAvgAggregateInputType
    _sum?: CounsellorCreditSumAggregateInputType
    _min?: CounsellorCreditMinAggregateInputType
    _max?: CounsellorCreditMaxAggregateInputType
  }

  export type CounsellorCreditGroupByOutputType = {
    id: string
    counsellorId: string
    totalCredits: number
    usedCredits: number
    createdAt: Date
    updatedAt: Date
    _count: CounsellorCreditCountAggregateOutputType | null
    _avg: CounsellorCreditAvgAggregateOutputType | null
    _sum: CounsellorCreditSumAggregateOutputType | null
    _min: CounsellorCreditMinAggregateOutputType | null
    _max: CounsellorCreditMaxAggregateOutputType | null
  }

  type GetCounsellorCreditGroupByPayload<T extends CounsellorCreditGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounsellorCreditGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounsellorCreditGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounsellorCreditGroupByOutputType[P]>
            : GetScalarType<T[P], CounsellorCreditGroupByOutputType[P]>
        }
      >
    >


  export type CounsellorCreditSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    totalCredits?: boolean
    usedCredits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["counsellorCredit"]>

  export type CounsellorCreditSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    totalCredits?: boolean
    usedCredits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["counsellorCredit"]>

  export type CounsellorCreditSelectScalar = {
    id?: boolean
    counsellorId?: boolean
    totalCredits?: boolean
    usedCredits?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $CounsellorCreditPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CounsellorCredit"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      counsellorId: string
      totalCredits: number
      usedCredits: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["counsellorCredit"]>
    composites: {}
  }

  type CounsellorCreditGetPayload<S extends boolean | null | undefined | CounsellorCreditDefaultArgs> = $Result.GetResult<Prisma.$CounsellorCreditPayload, S>

  type CounsellorCreditCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CounsellorCreditFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CounsellorCreditCountAggregateInputType | true
    }

  export interface CounsellorCreditDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CounsellorCredit'], meta: { name: 'CounsellorCredit' } }
    /**
     * Find zero or one CounsellorCredit that matches the filter.
     * @param {CounsellorCreditFindUniqueArgs} args - Arguments to find a CounsellorCredit
     * @example
     * // Get one CounsellorCredit
     * const counsellorCredit = await prisma.counsellorCredit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounsellorCreditFindUniqueArgs>(args: SelectSubset<T, CounsellorCreditFindUniqueArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CounsellorCredit that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CounsellorCreditFindUniqueOrThrowArgs} args - Arguments to find a CounsellorCredit
     * @example
     * // Get one CounsellorCredit
     * const counsellorCredit = await prisma.counsellorCredit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounsellorCreditFindUniqueOrThrowArgs>(args: SelectSubset<T, CounsellorCreditFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CounsellorCredit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditFindFirstArgs} args - Arguments to find a CounsellorCredit
     * @example
     * // Get one CounsellorCredit
     * const counsellorCredit = await prisma.counsellorCredit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounsellorCreditFindFirstArgs>(args?: SelectSubset<T, CounsellorCreditFindFirstArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CounsellorCredit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditFindFirstOrThrowArgs} args - Arguments to find a CounsellorCredit
     * @example
     * // Get one CounsellorCredit
     * const counsellorCredit = await prisma.counsellorCredit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounsellorCreditFindFirstOrThrowArgs>(args?: SelectSubset<T, CounsellorCreditFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CounsellorCredits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CounsellorCredits
     * const counsellorCredits = await prisma.counsellorCredit.findMany()
     * 
     * // Get first 10 CounsellorCredits
     * const counsellorCredits = await prisma.counsellorCredit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counsellorCreditWithIdOnly = await prisma.counsellorCredit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounsellorCreditFindManyArgs>(args?: SelectSubset<T, CounsellorCreditFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CounsellorCredit.
     * @param {CounsellorCreditCreateArgs} args - Arguments to create a CounsellorCredit.
     * @example
     * // Create one CounsellorCredit
     * const CounsellorCredit = await prisma.counsellorCredit.create({
     *   data: {
     *     // ... data to create a CounsellorCredit
     *   }
     * })
     * 
     */
    create<T extends CounsellorCreditCreateArgs>(args: SelectSubset<T, CounsellorCreditCreateArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CounsellorCredits.
     * @param {CounsellorCreditCreateManyArgs} args - Arguments to create many CounsellorCredits.
     * @example
     * // Create many CounsellorCredits
     * const counsellorCredit = await prisma.counsellorCredit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounsellorCreditCreateManyArgs>(args?: SelectSubset<T, CounsellorCreditCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CounsellorCredits and returns the data saved in the database.
     * @param {CounsellorCreditCreateManyAndReturnArgs} args - Arguments to create many CounsellorCredits.
     * @example
     * // Create many CounsellorCredits
     * const counsellorCredit = await prisma.counsellorCredit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CounsellorCredits and only return the `id`
     * const counsellorCreditWithIdOnly = await prisma.counsellorCredit.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CounsellorCreditCreateManyAndReturnArgs>(args?: SelectSubset<T, CounsellorCreditCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CounsellorCredit.
     * @param {CounsellorCreditDeleteArgs} args - Arguments to delete one CounsellorCredit.
     * @example
     * // Delete one CounsellorCredit
     * const CounsellorCredit = await prisma.counsellorCredit.delete({
     *   where: {
     *     // ... filter to delete one CounsellorCredit
     *   }
     * })
     * 
     */
    delete<T extends CounsellorCreditDeleteArgs>(args: SelectSubset<T, CounsellorCreditDeleteArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CounsellorCredit.
     * @param {CounsellorCreditUpdateArgs} args - Arguments to update one CounsellorCredit.
     * @example
     * // Update one CounsellorCredit
     * const counsellorCredit = await prisma.counsellorCredit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounsellorCreditUpdateArgs>(args: SelectSubset<T, CounsellorCreditUpdateArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CounsellorCredits.
     * @param {CounsellorCreditDeleteManyArgs} args - Arguments to filter CounsellorCredits to delete.
     * @example
     * // Delete a few CounsellorCredits
     * const { count } = await prisma.counsellorCredit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounsellorCreditDeleteManyArgs>(args?: SelectSubset<T, CounsellorCreditDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CounsellorCredits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CounsellorCredits
     * const counsellorCredit = await prisma.counsellorCredit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounsellorCreditUpdateManyArgs>(args: SelectSubset<T, CounsellorCreditUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CounsellorCredit.
     * @param {CounsellorCreditUpsertArgs} args - Arguments to update or create a CounsellorCredit.
     * @example
     * // Update or create a CounsellorCredit
     * const counsellorCredit = await prisma.counsellorCredit.upsert({
     *   create: {
     *     // ... data to create a CounsellorCredit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CounsellorCredit we want to update
     *   }
     * })
     */
    upsert<T extends CounsellorCreditUpsertArgs>(args: SelectSubset<T, CounsellorCreditUpsertArgs<ExtArgs>>): Prisma__CounsellorCreditClient<$Result.GetResult<Prisma.$CounsellorCreditPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CounsellorCredits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditCountArgs} args - Arguments to filter CounsellorCredits to count.
     * @example
     * // Count the number of CounsellorCredits
     * const count = await prisma.counsellorCredit.count({
     *   where: {
     *     // ... the filter for the CounsellorCredits we want to count
     *   }
     * })
    **/
    count<T extends CounsellorCreditCountArgs>(
      args?: Subset<T, CounsellorCreditCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounsellorCreditCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CounsellorCredit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CounsellorCreditAggregateArgs>(args: Subset<T, CounsellorCreditAggregateArgs>): Prisma.PrismaPromise<GetCounsellorCreditAggregateType<T>>

    /**
     * Group by CounsellorCredit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorCreditGroupByArgs} args - Group by arguments.
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
      T extends CounsellorCreditGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounsellorCreditGroupByArgs['orderBy'] }
        : { orderBy?: CounsellorCreditGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CounsellorCreditGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounsellorCreditGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CounsellorCredit model
   */
  readonly fields: CounsellorCreditFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CounsellorCredit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounsellorCreditClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CounsellorCredit model
   */ 
  interface CounsellorCreditFieldRefs {
    readonly id: FieldRef<"CounsellorCredit", 'String'>
    readonly counsellorId: FieldRef<"CounsellorCredit", 'String'>
    readonly totalCredits: FieldRef<"CounsellorCredit", 'Int'>
    readonly usedCredits: FieldRef<"CounsellorCredit", 'Int'>
    readonly createdAt: FieldRef<"CounsellorCredit", 'DateTime'>
    readonly updatedAt: FieldRef<"CounsellorCredit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CounsellorCredit findUnique
   */
  export type CounsellorCreditFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * Filter, which CounsellorCredit to fetch.
     */
    where: CounsellorCreditWhereUniqueInput
  }

  /**
   * CounsellorCredit findUniqueOrThrow
   */
  export type CounsellorCreditFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * Filter, which CounsellorCredit to fetch.
     */
    where: CounsellorCreditWhereUniqueInput
  }

  /**
   * CounsellorCredit findFirst
   */
  export type CounsellorCreditFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * Filter, which CounsellorCredit to fetch.
     */
    where?: CounsellorCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorCredits to fetch.
     */
    orderBy?: CounsellorCreditOrderByWithRelationInput | CounsellorCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounsellorCredits.
     */
    cursor?: CounsellorCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounsellorCredits.
     */
    distinct?: CounsellorCreditScalarFieldEnum | CounsellorCreditScalarFieldEnum[]
  }

  /**
   * CounsellorCredit findFirstOrThrow
   */
  export type CounsellorCreditFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * Filter, which CounsellorCredit to fetch.
     */
    where?: CounsellorCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorCredits to fetch.
     */
    orderBy?: CounsellorCreditOrderByWithRelationInput | CounsellorCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounsellorCredits.
     */
    cursor?: CounsellorCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorCredits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounsellorCredits.
     */
    distinct?: CounsellorCreditScalarFieldEnum | CounsellorCreditScalarFieldEnum[]
  }

  /**
   * CounsellorCredit findMany
   */
  export type CounsellorCreditFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * Filter, which CounsellorCredits to fetch.
     */
    where?: CounsellorCreditWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorCredits to fetch.
     */
    orderBy?: CounsellorCreditOrderByWithRelationInput | CounsellorCreditOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CounsellorCredits.
     */
    cursor?: CounsellorCreditWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorCredits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorCredits.
     */
    skip?: number
    distinct?: CounsellorCreditScalarFieldEnum | CounsellorCreditScalarFieldEnum[]
  }

  /**
   * CounsellorCredit create
   */
  export type CounsellorCreditCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * The data needed to create a CounsellorCredit.
     */
    data: XOR<CounsellorCreditCreateInput, CounsellorCreditUncheckedCreateInput>
  }

  /**
   * CounsellorCredit createMany
   */
  export type CounsellorCreditCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CounsellorCredits.
     */
    data: CounsellorCreditCreateManyInput | CounsellorCreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounsellorCredit createManyAndReturn
   */
  export type CounsellorCreditCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CounsellorCredits.
     */
    data: CounsellorCreditCreateManyInput | CounsellorCreditCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounsellorCredit update
   */
  export type CounsellorCreditUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * The data needed to update a CounsellorCredit.
     */
    data: XOR<CounsellorCreditUpdateInput, CounsellorCreditUncheckedUpdateInput>
    /**
     * Choose, which CounsellorCredit to update.
     */
    where: CounsellorCreditWhereUniqueInput
  }

  /**
   * CounsellorCredit updateMany
   */
  export type CounsellorCreditUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CounsellorCredits.
     */
    data: XOR<CounsellorCreditUpdateManyMutationInput, CounsellorCreditUncheckedUpdateManyInput>
    /**
     * Filter which CounsellorCredits to update
     */
    where?: CounsellorCreditWhereInput
  }

  /**
   * CounsellorCredit upsert
   */
  export type CounsellorCreditUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * The filter to search for the CounsellorCredit to update in case it exists.
     */
    where: CounsellorCreditWhereUniqueInput
    /**
     * In case the CounsellorCredit found by the `where` argument doesn't exist, create a new CounsellorCredit with this data.
     */
    create: XOR<CounsellorCreditCreateInput, CounsellorCreditUncheckedCreateInput>
    /**
     * In case the CounsellorCredit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounsellorCreditUpdateInput, CounsellorCreditUncheckedUpdateInput>
  }

  /**
   * CounsellorCredit delete
   */
  export type CounsellorCreditDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
    /**
     * Filter which CounsellorCredit to delete.
     */
    where: CounsellorCreditWhereUniqueInput
  }

  /**
   * CounsellorCredit deleteMany
   */
  export type CounsellorCreditDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounsellorCredits to delete
     */
    where?: CounsellorCreditWhereInput
  }

  /**
   * CounsellorCredit without action
   */
  export type CounsellorCreditDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorCredit
     */
    select?: CounsellorCreditSelect<ExtArgs> | null
  }


  /**
   * Model PaymentWebhookLog
   */

  export type AggregatePaymentWebhookLog = {
    _count: PaymentWebhookLogCountAggregateOutputType | null
    _min: PaymentWebhookLogMinAggregateOutputType | null
    _max: PaymentWebhookLogMaxAggregateOutputType | null
  }

  export type PaymentWebhookLogMinAggregateOutputType = {
    id: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type PaymentWebhookLogMaxAggregateOutputType = {
    id: string | null
    eventType: string | null
    createdAt: Date | null
  }

  export type PaymentWebhookLogCountAggregateOutputType = {
    id: number
    eventType: number
    payload: number
    createdAt: number
    _all: number
  }


  export type PaymentWebhookLogMinAggregateInputType = {
    id?: true
    eventType?: true
    createdAt?: true
  }

  export type PaymentWebhookLogMaxAggregateInputType = {
    id?: true
    eventType?: true
    createdAt?: true
  }

  export type PaymentWebhookLogCountAggregateInputType = {
    id?: true
    eventType?: true
    payload?: true
    createdAt?: true
    _all?: true
  }

  export type PaymentWebhookLogAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentWebhookLog to aggregate.
     */
    where?: PaymentWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookLogs to fetch.
     */
    orderBy?: PaymentWebhookLogOrderByWithRelationInput | PaymentWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PaymentWebhookLogs
    **/
    _count?: true | PaymentWebhookLogCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentWebhookLogMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentWebhookLogMaxAggregateInputType
  }

  export type GetPaymentWebhookLogAggregateType<T extends PaymentWebhookLogAggregateArgs> = {
        [P in keyof T & keyof AggregatePaymentWebhookLog]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePaymentWebhookLog[P]>
      : GetScalarType<T[P], AggregatePaymentWebhookLog[P]>
  }




  export type PaymentWebhookLogGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWebhookLogWhereInput
    orderBy?: PaymentWebhookLogOrderByWithAggregationInput | PaymentWebhookLogOrderByWithAggregationInput[]
    by: PaymentWebhookLogScalarFieldEnum[] | PaymentWebhookLogScalarFieldEnum
    having?: PaymentWebhookLogScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentWebhookLogCountAggregateInputType | true
    _min?: PaymentWebhookLogMinAggregateInputType
    _max?: PaymentWebhookLogMaxAggregateInputType
  }

  export type PaymentWebhookLogGroupByOutputType = {
    id: string
    eventType: string
    payload: JsonValue
    createdAt: Date
    _count: PaymentWebhookLogCountAggregateOutputType | null
    _min: PaymentWebhookLogMinAggregateOutputType | null
    _max: PaymentWebhookLogMaxAggregateOutputType | null
  }

  type GetPaymentWebhookLogGroupByPayload<T extends PaymentWebhookLogGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentWebhookLogGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentWebhookLogGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentWebhookLogGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentWebhookLogGroupByOutputType[P]>
        }
      >
    >


  export type PaymentWebhookLogSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["paymentWebhookLog"]>

  export type PaymentWebhookLogSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["paymentWebhookLog"]>

  export type PaymentWebhookLogSelectScalar = {
    id?: boolean
    eventType?: boolean
    payload?: boolean
    createdAt?: boolean
  }


  export type $PaymentWebhookLogPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PaymentWebhookLog"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      eventType: string
      payload: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["paymentWebhookLog"]>
    composites: {}
  }

  type PaymentWebhookLogGetPayload<S extends boolean | null | undefined | PaymentWebhookLogDefaultArgs> = $Result.GetResult<Prisma.$PaymentWebhookLogPayload, S>

  type PaymentWebhookLogCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PaymentWebhookLogFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PaymentWebhookLogCountAggregateInputType | true
    }

  export interface PaymentWebhookLogDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PaymentWebhookLog'], meta: { name: 'PaymentWebhookLog' } }
    /**
     * Find zero or one PaymentWebhookLog that matches the filter.
     * @param {PaymentWebhookLogFindUniqueArgs} args - Arguments to find a PaymentWebhookLog
     * @example
     * // Get one PaymentWebhookLog
     * const paymentWebhookLog = await prisma.paymentWebhookLog.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentWebhookLogFindUniqueArgs>(args: SelectSubset<T, PaymentWebhookLogFindUniqueArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PaymentWebhookLog that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {PaymentWebhookLogFindUniqueOrThrowArgs} args - Arguments to find a PaymentWebhookLog
     * @example
     * // Get one PaymentWebhookLog
     * const paymentWebhookLog = await prisma.paymentWebhookLog.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentWebhookLogFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentWebhookLogFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PaymentWebhookLog that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogFindFirstArgs} args - Arguments to find a PaymentWebhookLog
     * @example
     * // Get one PaymentWebhookLog
     * const paymentWebhookLog = await prisma.paymentWebhookLog.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentWebhookLogFindFirstArgs>(args?: SelectSubset<T, PaymentWebhookLogFindFirstArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PaymentWebhookLog that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogFindFirstOrThrowArgs} args - Arguments to find a PaymentWebhookLog
     * @example
     * // Get one PaymentWebhookLog
     * const paymentWebhookLog = await prisma.paymentWebhookLog.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentWebhookLogFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentWebhookLogFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PaymentWebhookLogs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PaymentWebhookLogs
     * const paymentWebhookLogs = await prisma.paymentWebhookLog.findMany()
     * 
     * // Get first 10 PaymentWebhookLogs
     * const paymentWebhookLogs = await prisma.paymentWebhookLog.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWebhookLogWithIdOnly = await prisma.paymentWebhookLog.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentWebhookLogFindManyArgs>(args?: SelectSubset<T, PaymentWebhookLogFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PaymentWebhookLog.
     * @param {PaymentWebhookLogCreateArgs} args - Arguments to create a PaymentWebhookLog.
     * @example
     * // Create one PaymentWebhookLog
     * const PaymentWebhookLog = await prisma.paymentWebhookLog.create({
     *   data: {
     *     // ... data to create a PaymentWebhookLog
     *   }
     * })
     * 
     */
    create<T extends PaymentWebhookLogCreateArgs>(args: SelectSubset<T, PaymentWebhookLogCreateArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PaymentWebhookLogs.
     * @param {PaymentWebhookLogCreateManyArgs} args - Arguments to create many PaymentWebhookLogs.
     * @example
     * // Create many PaymentWebhookLogs
     * const paymentWebhookLog = await prisma.paymentWebhookLog.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentWebhookLogCreateManyArgs>(args?: SelectSubset<T, PaymentWebhookLogCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PaymentWebhookLogs and returns the data saved in the database.
     * @param {PaymentWebhookLogCreateManyAndReturnArgs} args - Arguments to create many PaymentWebhookLogs.
     * @example
     * // Create many PaymentWebhookLogs
     * const paymentWebhookLog = await prisma.paymentWebhookLog.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PaymentWebhookLogs and only return the `id`
     * const paymentWebhookLogWithIdOnly = await prisma.paymentWebhookLog.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentWebhookLogCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentWebhookLogCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PaymentWebhookLog.
     * @param {PaymentWebhookLogDeleteArgs} args - Arguments to delete one PaymentWebhookLog.
     * @example
     * // Delete one PaymentWebhookLog
     * const PaymentWebhookLog = await prisma.paymentWebhookLog.delete({
     *   where: {
     *     // ... filter to delete one PaymentWebhookLog
     *   }
     * })
     * 
     */
    delete<T extends PaymentWebhookLogDeleteArgs>(args: SelectSubset<T, PaymentWebhookLogDeleteArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PaymentWebhookLog.
     * @param {PaymentWebhookLogUpdateArgs} args - Arguments to update one PaymentWebhookLog.
     * @example
     * // Update one PaymentWebhookLog
     * const paymentWebhookLog = await prisma.paymentWebhookLog.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentWebhookLogUpdateArgs>(args: SelectSubset<T, PaymentWebhookLogUpdateArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PaymentWebhookLogs.
     * @param {PaymentWebhookLogDeleteManyArgs} args - Arguments to filter PaymentWebhookLogs to delete.
     * @example
     * // Delete a few PaymentWebhookLogs
     * const { count } = await prisma.paymentWebhookLog.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentWebhookLogDeleteManyArgs>(args?: SelectSubset<T, PaymentWebhookLogDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PaymentWebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PaymentWebhookLogs
     * const paymentWebhookLog = await prisma.paymentWebhookLog.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentWebhookLogUpdateManyArgs>(args: SelectSubset<T, PaymentWebhookLogUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PaymentWebhookLog.
     * @param {PaymentWebhookLogUpsertArgs} args - Arguments to update or create a PaymentWebhookLog.
     * @example
     * // Update or create a PaymentWebhookLog
     * const paymentWebhookLog = await prisma.paymentWebhookLog.upsert({
     *   create: {
     *     // ... data to create a PaymentWebhookLog
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PaymentWebhookLog we want to update
     *   }
     * })
     */
    upsert<T extends PaymentWebhookLogUpsertArgs>(args: SelectSubset<T, PaymentWebhookLogUpsertArgs<ExtArgs>>): Prisma__PaymentWebhookLogClient<$Result.GetResult<Prisma.$PaymentWebhookLogPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PaymentWebhookLogs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogCountArgs} args - Arguments to filter PaymentWebhookLogs to count.
     * @example
     * // Count the number of PaymentWebhookLogs
     * const count = await prisma.paymentWebhookLog.count({
     *   where: {
     *     // ... the filter for the PaymentWebhookLogs we want to count
     *   }
     * })
    **/
    count<T extends PaymentWebhookLogCountArgs>(
      args?: Subset<T, PaymentWebhookLogCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentWebhookLogCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PaymentWebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentWebhookLogAggregateArgs>(args: Subset<T, PaymentWebhookLogAggregateArgs>): Prisma.PrismaPromise<GetPaymentWebhookLogAggregateType<T>>

    /**
     * Group by PaymentWebhookLog.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentWebhookLogGroupByArgs} args - Group by arguments.
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
      T extends PaymentWebhookLogGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentWebhookLogGroupByArgs['orderBy'] }
        : { orderBy?: PaymentWebhookLogGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentWebhookLogGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentWebhookLogGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PaymentWebhookLog model
   */
  readonly fields: PaymentWebhookLogFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PaymentWebhookLog.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentWebhookLogClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PaymentWebhookLog model
   */ 
  interface PaymentWebhookLogFieldRefs {
    readonly id: FieldRef<"PaymentWebhookLog", 'String'>
    readonly eventType: FieldRef<"PaymentWebhookLog", 'String'>
    readonly payload: FieldRef<"PaymentWebhookLog", 'Json'>
    readonly createdAt: FieldRef<"PaymentWebhookLog", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PaymentWebhookLog findUnique
   */
  export type PaymentWebhookLogFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookLog to fetch.
     */
    where: PaymentWebhookLogWhereUniqueInput
  }

  /**
   * PaymentWebhookLog findUniqueOrThrow
   */
  export type PaymentWebhookLogFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookLog to fetch.
     */
    where: PaymentWebhookLogWhereUniqueInput
  }

  /**
   * PaymentWebhookLog findFirst
   */
  export type PaymentWebhookLogFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookLog to fetch.
     */
    where?: PaymentWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookLogs to fetch.
     */
    orderBy?: PaymentWebhookLogOrderByWithRelationInput | PaymentWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentWebhookLogs.
     */
    cursor?: PaymentWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentWebhookLogs.
     */
    distinct?: PaymentWebhookLogScalarFieldEnum | PaymentWebhookLogScalarFieldEnum[]
  }

  /**
   * PaymentWebhookLog findFirstOrThrow
   */
  export type PaymentWebhookLogFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookLog to fetch.
     */
    where?: PaymentWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookLogs to fetch.
     */
    orderBy?: PaymentWebhookLogOrderByWithRelationInput | PaymentWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PaymentWebhookLogs.
     */
    cursor?: PaymentWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookLogs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PaymentWebhookLogs.
     */
    distinct?: PaymentWebhookLogScalarFieldEnum | PaymentWebhookLogScalarFieldEnum[]
  }

  /**
   * PaymentWebhookLog findMany
   */
  export type PaymentWebhookLogFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * Filter, which PaymentWebhookLogs to fetch.
     */
    where?: PaymentWebhookLogWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PaymentWebhookLogs to fetch.
     */
    orderBy?: PaymentWebhookLogOrderByWithRelationInput | PaymentWebhookLogOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PaymentWebhookLogs.
     */
    cursor?: PaymentWebhookLogWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PaymentWebhookLogs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PaymentWebhookLogs.
     */
    skip?: number
    distinct?: PaymentWebhookLogScalarFieldEnum | PaymentWebhookLogScalarFieldEnum[]
  }

  /**
   * PaymentWebhookLog create
   */
  export type PaymentWebhookLogCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * The data needed to create a PaymentWebhookLog.
     */
    data: XOR<PaymentWebhookLogCreateInput, PaymentWebhookLogUncheckedCreateInput>
  }

  /**
   * PaymentWebhookLog createMany
   */
  export type PaymentWebhookLogCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PaymentWebhookLogs.
     */
    data: PaymentWebhookLogCreateManyInput | PaymentWebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentWebhookLog createManyAndReturn
   */
  export type PaymentWebhookLogCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PaymentWebhookLogs.
     */
    data: PaymentWebhookLogCreateManyInput | PaymentWebhookLogCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PaymentWebhookLog update
   */
  export type PaymentWebhookLogUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * The data needed to update a PaymentWebhookLog.
     */
    data: XOR<PaymentWebhookLogUpdateInput, PaymentWebhookLogUncheckedUpdateInput>
    /**
     * Choose, which PaymentWebhookLog to update.
     */
    where: PaymentWebhookLogWhereUniqueInput
  }

  /**
   * PaymentWebhookLog updateMany
   */
  export type PaymentWebhookLogUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PaymentWebhookLogs.
     */
    data: XOR<PaymentWebhookLogUpdateManyMutationInput, PaymentWebhookLogUncheckedUpdateManyInput>
    /**
     * Filter which PaymentWebhookLogs to update
     */
    where?: PaymentWebhookLogWhereInput
  }

  /**
   * PaymentWebhookLog upsert
   */
  export type PaymentWebhookLogUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * The filter to search for the PaymentWebhookLog to update in case it exists.
     */
    where: PaymentWebhookLogWhereUniqueInput
    /**
     * In case the PaymentWebhookLog found by the `where` argument doesn't exist, create a new PaymentWebhookLog with this data.
     */
    create: XOR<PaymentWebhookLogCreateInput, PaymentWebhookLogUncheckedCreateInput>
    /**
     * In case the PaymentWebhookLog was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentWebhookLogUpdateInput, PaymentWebhookLogUncheckedUpdateInput>
  }

  /**
   * PaymentWebhookLog delete
   */
  export type PaymentWebhookLogDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
    /**
     * Filter which PaymentWebhookLog to delete.
     */
    where: PaymentWebhookLogWhereUniqueInput
  }

  /**
   * PaymentWebhookLog deleteMany
   */
  export type PaymentWebhookLogDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PaymentWebhookLogs to delete
     */
    where?: PaymentWebhookLogWhereInput
  }

  /**
   * PaymentWebhookLog without action
   */
  export type PaymentWebhookLogDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PaymentWebhookLog
     */
    select?: PaymentWebhookLogSelect<ExtArgs> | null
  }


  /**
   * Model CreditTransaction
   */

  export type AggregateCreditTransaction = {
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  export type CreditTransactionAvgAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionSumAggregateOutputType = {
    amount: number | null
  }

  export type CreditTransactionMinAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    type: $Enums.CreditTransactionType | null
    amount: number | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CreditTransactionMaxAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    type: $Enums.CreditTransactionType | null
    amount: number | null
    referenceId: string | null
    description: string | null
    createdAt: Date | null
  }

  export type CreditTransactionCountAggregateOutputType = {
    id: number
    counsellorId: number
    type: number
    amount: number
    referenceId: number
    description: number
    createdAt: number
    _all: number
  }


  export type CreditTransactionAvgAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionSumAggregateInputType = {
    amount?: true
  }

  export type CreditTransactionMinAggregateInputType = {
    id?: true
    counsellorId?: true
    type?: true
    amount?: true
    referenceId?: true
    description?: true
    createdAt?: true
  }

  export type CreditTransactionMaxAggregateInputType = {
    id?: true
    counsellorId?: true
    type?: true
    amount?: true
    referenceId?: true
    description?: true
    createdAt?: true
  }

  export type CreditTransactionCountAggregateInputType = {
    id?: true
    counsellorId?: true
    type?: true
    amount?: true
    referenceId?: true
    description?: true
    createdAt?: true
    _all?: true
  }

  export type CreditTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransaction to aggregate.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CreditTransactions
    **/
    _count?: true | CreditTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CreditTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CreditTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CreditTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type GetCreditTransactionAggregateType<T extends CreditTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateCreditTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCreditTransaction[P]>
      : GetScalarType<T[P], AggregateCreditTransaction[P]>
  }




  export type CreditTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CreditTransactionWhereInput
    orderBy?: CreditTransactionOrderByWithAggregationInput | CreditTransactionOrderByWithAggregationInput[]
    by: CreditTransactionScalarFieldEnum[] | CreditTransactionScalarFieldEnum
    having?: CreditTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CreditTransactionCountAggregateInputType | true
    _avg?: CreditTransactionAvgAggregateInputType
    _sum?: CreditTransactionSumAggregateInputType
    _min?: CreditTransactionMinAggregateInputType
    _max?: CreditTransactionMaxAggregateInputType
  }

  export type CreditTransactionGroupByOutputType = {
    id: string
    counsellorId: string
    type: $Enums.CreditTransactionType
    amount: number
    referenceId: string | null
    description: string | null
    createdAt: Date
    _count: CreditTransactionCountAggregateOutputType | null
    _avg: CreditTransactionAvgAggregateOutputType | null
    _sum: CreditTransactionSumAggregateOutputType | null
    _min: CreditTransactionMinAggregateOutputType | null
    _max: CreditTransactionMaxAggregateOutputType | null
  }

  type GetCreditTransactionGroupByPayload<T extends CreditTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CreditTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CreditTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], CreditTransactionGroupByOutputType[P]>
        }
      >
    >


  export type CreditTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    type?: boolean
    amount?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    type?: boolean
    amount?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["creditTransaction"]>

  export type CreditTransactionSelectScalar = {
    id?: boolean
    counsellorId?: boolean
    type?: boolean
    amount?: boolean
    referenceId?: boolean
    description?: boolean
    createdAt?: boolean
  }


  export type $CreditTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CreditTransaction"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      counsellorId: string
      type: $Enums.CreditTransactionType
      amount: number
      referenceId: string | null
      description: string | null
      createdAt: Date
    }, ExtArgs["result"]["creditTransaction"]>
    composites: {}
  }

  type CreditTransactionGetPayload<S extends boolean | null | undefined | CreditTransactionDefaultArgs> = $Result.GetResult<Prisma.$CreditTransactionPayload, S>

  type CreditTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CreditTransactionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CreditTransactionCountAggregateInputType | true
    }

  export interface CreditTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CreditTransaction'], meta: { name: 'CreditTransaction' } }
    /**
     * Find zero or one CreditTransaction that matches the filter.
     * @param {CreditTransactionFindUniqueArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CreditTransactionFindUniqueArgs>(args: SelectSubset<T, CreditTransactionFindUniqueArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CreditTransaction that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CreditTransactionFindUniqueOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CreditTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, CreditTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CreditTransactionFindFirstArgs>(args?: SelectSubset<T, CreditTransactionFindFirstArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CreditTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindFirstOrThrowArgs} args - Arguments to find a CreditTransaction
     * @example
     * // Get one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CreditTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, CreditTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CreditTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany()
     * 
     * // Get first 10 CreditTransactions
     * const creditTransactions = await prisma.creditTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CreditTransactionFindManyArgs>(args?: SelectSubset<T, CreditTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CreditTransaction.
     * @param {CreditTransactionCreateArgs} args - Arguments to create a CreditTransaction.
     * @example
     * // Create one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.create({
     *   data: {
     *     // ... data to create a CreditTransaction
     *   }
     * })
     * 
     */
    create<T extends CreditTransactionCreateArgs>(args: SelectSubset<T, CreditTransactionCreateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CreditTransactions.
     * @param {CreditTransactionCreateManyArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CreditTransactionCreateManyArgs>(args?: SelectSubset<T, CreditTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CreditTransactions and returns the data saved in the database.
     * @param {CreditTransactionCreateManyAndReturnArgs} args - Arguments to create many CreditTransactions.
     * @example
     * // Create many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CreditTransactions and only return the `id`
     * const creditTransactionWithIdOnly = await prisma.creditTransaction.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CreditTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, CreditTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CreditTransaction.
     * @param {CreditTransactionDeleteArgs} args - Arguments to delete one CreditTransaction.
     * @example
     * // Delete one CreditTransaction
     * const CreditTransaction = await prisma.creditTransaction.delete({
     *   where: {
     *     // ... filter to delete one CreditTransaction
     *   }
     * })
     * 
     */
    delete<T extends CreditTransactionDeleteArgs>(args: SelectSubset<T, CreditTransactionDeleteArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CreditTransaction.
     * @param {CreditTransactionUpdateArgs} args - Arguments to update one CreditTransaction.
     * @example
     * // Update one CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CreditTransactionUpdateArgs>(args: SelectSubset<T, CreditTransactionUpdateArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CreditTransactions.
     * @param {CreditTransactionDeleteManyArgs} args - Arguments to filter CreditTransactions to delete.
     * @example
     * // Delete a few CreditTransactions
     * const { count } = await prisma.creditTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CreditTransactionDeleteManyArgs>(args?: SelectSubset<T, CreditTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CreditTransactions
     * const creditTransaction = await prisma.creditTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CreditTransactionUpdateManyArgs>(args: SelectSubset<T, CreditTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CreditTransaction.
     * @param {CreditTransactionUpsertArgs} args - Arguments to update or create a CreditTransaction.
     * @example
     * // Update or create a CreditTransaction
     * const creditTransaction = await prisma.creditTransaction.upsert({
     *   create: {
     *     // ... data to create a CreditTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CreditTransaction we want to update
     *   }
     * })
     */
    upsert<T extends CreditTransactionUpsertArgs>(args: SelectSubset<T, CreditTransactionUpsertArgs<ExtArgs>>): Prisma__CreditTransactionClient<$Result.GetResult<Prisma.$CreditTransactionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CreditTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionCountArgs} args - Arguments to filter CreditTransactions to count.
     * @example
     * // Count the number of CreditTransactions
     * const count = await prisma.creditTransaction.count({
     *   where: {
     *     // ... the filter for the CreditTransactions we want to count
     *   }
     * })
    **/
    count<T extends CreditTransactionCountArgs>(
      args?: Subset<T, CreditTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CreditTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CreditTransactionAggregateArgs>(args: Subset<T, CreditTransactionAggregateArgs>): Prisma.PrismaPromise<GetCreditTransactionAggregateType<T>>

    /**
     * Group by CreditTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CreditTransactionGroupByArgs} args - Group by arguments.
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
      T extends CreditTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CreditTransactionGroupByArgs['orderBy'] }
        : { orderBy?: CreditTransactionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CreditTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCreditTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CreditTransaction model
   */
  readonly fields: CreditTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CreditTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CreditTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CreditTransaction model
   */ 
  interface CreditTransactionFieldRefs {
    readonly id: FieldRef<"CreditTransaction", 'String'>
    readonly counsellorId: FieldRef<"CreditTransaction", 'String'>
    readonly type: FieldRef<"CreditTransaction", 'CreditTransactionType'>
    readonly amount: FieldRef<"CreditTransaction", 'Int'>
    readonly referenceId: FieldRef<"CreditTransaction", 'String'>
    readonly description: FieldRef<"CreditTransaction", 'String'>
    readonly createdAt: FieldRef<"CreditTransaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CreditTransaction findUnique
   */
  export type CreditTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findUniqueOrThrow
   */
  export type CreditTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction findFirst
   */
  export type CreditTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findFirstOrThrow
   */
  export type CreditTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Filter, which CreditTransaction to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CreditTransactions.
     */
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction findMany
   */
  export type CreditTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Filter, which CreditTransactions to fetch.
     */
    where?: CreditTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CreditTransactions to fetch.
     */
    orderBy?: CreditTransactionOrderByWithRelationInput | CreditTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CreditTransactions.
     */
    cursor?: CreditTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CreditTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CreditTransactions.
     */
    skip?: number
    distinct?: CreditTransactionScalarFieldEnum | CreditTransactionScalarFieldEnum[]
  }

  /**
   * CreditTransaction create
   */
  export type CreditTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * The data needed to create a CreditTransaction.
     */
    data: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
  }

  /**
   * CreditTransaction createMany
   */
  export type CreditTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction createManyAndReturn
   */
  export type CreditTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CreditTransactions.
     */
    data: CreditTransactionCreateManyInput | CreditTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CreditTransaction update
   */
  export type CreditTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * The data needed to update a CreditTransaction.
     */
    data: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
    /**
     * Choose, which CreditTransaction to update.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction updateMany
   */
  export type CreditTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CreditTransactions.
     */
    data: XOR<CreditTransactionUpdateManyMutationInput, CreditTransactionUncheckedUpdateManyInput>
    /**
     * Filter which CreditTransactions to update
     */
    where?: CreditTransactionWhereInput
  }

  /**
   * CreditTransaction upsert
   */
  export type CreditTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * The filter to search for the CreditTransaction to update in case it exists.
     */
    where: CreditTransactionWhereUniqueInput
    /**
     * In case the CreditTransaction found by the `where` argument doesn't exist, create a new CreditTransaction with this data.
     */
    create: XOR<CreditTransactionCreateInput, CreditTransactionUncheckedCreateInput>
    /**
     * In case the CreditTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CreditTransactionUpdateInput, CreditTransactionUncheckedUpdateInput>
  }

  /**
   * CreditTransaction delete
   */
  export type CreditTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
    /**
     * Filter which CreditTransaction to delete.
     */
    where: CreditTransactionWhereUniqueInput
  }

  /**
   * CreditTransaction deleteMany
   */
  export type CreditTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CreditTransactions to delete
     */
    where?: CreditTransactionWhereInput
  }

  /**
   * CreditTransaction without action
   */
  export type CreditTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CreditTransaction
     */
    select?: CreditTransactionSelect<ExtArgs> | null
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


  export const PaymentOrderScalarFieldEnum: {
    id: 'id',
    counsellorId: 'counsellorId',
    razorpayOrderId: 'razorpayOrderId',
    studentCount: 'studentCount',
    pricePerStudent: 'pricePerStudent',
    totalAmount: 'totalAmount',
    status: 'status',
    razorpayPaymentId: 'razorpayPaymentId',
    failureReason: 'failureReason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentOrderScalarFieldEnum = (typeof PaymentOrderScalarFieldEnum)[keyof typeof PaymentOrderScalarFieldEnum]


  export const CounsellorCreditScalarFieldEnum: {
    id: 'id',
    counsellorId: 'counsellorId',
    totalCredits: 'totalCredits',
    usedCredits: 'usedCredits',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CounsellorCreditScalarFieldEnum = (typeof CounsellorCreditScalarFieldEnum)[keyof typeof CounsellorCreditScalarFieldEnum]


  export const PaymentWebhookLogScalarFieldEnum: {
    id: 'id',
    eventType: 'eventType',
    payload: 'payload',
    createdAt: 'createdAt'
  };

  export type PaymentWebhookLogScalarFieldEnum = (typeof PaymentWebhookLogScalarFieldEnum)[keyof typeof PaymentWebhookLogScalarFieldEnum]


  export const CreditTransactionScalarFieldEnum: {
    id: 'id',
    counsellorId: 'counsellorId',
    type: 'type',
    amount: 'amount',
    referenceId: 'referenceId',
    description: 'description',
    createdAt: 'createdAt'
  };

  export type CreditTransactionScalarFieldEnum = (typeof CreditTransactionScalarFieldEnum)[keyof typeof CreditTransactionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'CreditTransactionType'
   */
  export type EnumCreditTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditTransactionType'>
    


  /**
   * Reference to a field of type 'CreditTransactionType[]'
   */
  export type ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'CreditTransactionType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type PaymentOrderWhereInput = {
    AND?: PaymentOrderWhereInput | PaymentOrderWhereInput[]
    OR?: PaymentOrderWhereInput[]
    NOT?: PaymentOrderWhereInput | PaymentOrderWhereInput[]
    id?: StringFilter<"PaymentOrder"> | string
    counsellorId?: StringFilter<"PaymentOrder"> | string
    razorpayOrderId?: StringFilter<"PaymentOrder"> | string
    studentCount?: IntFilter<"PaymentOrder"> | number
    pricePerStudent?: IntFilter<"PaymentOrder"> | number
    totalAmount?: IntFilter<"PaymentOrder"> | number
    status?: EnumPaymentStatusFilter<"PaymentOrder"> | $Enums.PaymentStatus
    razorpayPaymentId?: StringNullableFilter<"PaymentOrder"> | string | null
    failureReason?: StringNullableFilter<"PaymentOrder"> | string | null
    createdAt?: DateTimeFilter<"PaymentOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentOrder"> | Date | string
  }

  export type PaymentOrderOrderByWithRelationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    razorpayOrderId?: SortOrder
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    razorpayOrderId?: string
    AND?: PaymentOrderWhereInput | PaymentOrderWhereInput[]
    OR?: PaymentOrderWhereInput[]
    NOT?: PaymentOrderWhereInput | PaymentOrderWhereInput[]
    counsellorId?: StringFilter<"PaymentOrder"> | string
    studentCount?: IntFilter<"PaymentOrder"> | number
    pricePerStudent?: IntFilter<"PaymentOrder"> | number
    totalAmount?: IntFilter<"PaymentOrder"> | number
    status?: EnumPaymentStatusFilter<"PaymentOrder"> | $Enums.PaymentStatus
    razorpayPaymentId?: StringNullableFilter<"PaymentOrder"> | string | null
    failureReason?: StringNullableFilter<"PaymentOrder"> | string | null
    createdAt?: DateTimeFilter<"PaymentOrder"> | Date | string
    updatedAt?: DateTimeFilter<"PaymentOrder"> | Date | string
  }, "id" | "razorpayOrderId">

  export type PaymentOrderOrderByWithAggregationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    razorpayOrderId?: SortOrder
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentOrderCountOrderByAggregateInput
    _avg?: PaymentOrderAvgOrderByAggregateInput
    _max?: PaymentOrderMaxOrderByAggregateInput
    _min?: PaymentOrderMinOrderByAggregateInput
    _sum?: PaymentOrderSumOrderByAggregateInput
  }

  export type PaymentOrderScalarWhereWithAggregatesInput = {
    AND?: PaymentOrderScalarWhereWithAggregatesInput | PaymentOrderScalarWhereWithAggregatesInput[]
    OR?: PaymentOrderScalarWhereWithAggregatesInput[]
    NOT?: PaymentOrderScalarWhereWithAggregatesInput | PaymentOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentOrder"> | string
    counsellorId?: StringWithAggregatesFilter<"PaymentOrder"> | string
    razorpayOrderId?: StringWithAggregatesFilter<"PaymentOrder"> | string
    studentCount?: IntWithAggregatesFilter<"PaymentOrder"> | number
    pricePerStudent?: IntWithAggregatesFilter<"PaymentOrder"> | number
    totalAmount?: IntWithAggregatesFilter<"PaymentOrder"> | number
    status?: EnumPaymentStatusWithAggregatesFilter<"PaymentOrder"> | $Enums.PaymentStatus
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"PaymentOrder"> | string | null
    failureReason?: StringNullableWithAggregatesFilter<"PaymentOrder"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"PaymentOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PaymentOrder"> | Date | string
  }

  export type CounsellorCreditWhereInput = {
    AND?: CounsellorCreditWhereInput | CounsellorCreditWhereInput[]
    OR?: CounsellorCreditWhereInput[]
    NOT?: CounsellorCreditWhereInput | CounsellorCreditWhereInput[]
    id?: StringFilter<"CounsellorCredit"> | string
    counsellorId?: StringFilter<"CounsellorCredit"> | string
    totalCredits?: IntFilter<"CounsellorCredit"> | number
    usedCredits?: IntFilter<"CounsellorCredit"> | number
    createdAt?: DateTimeFilter<"CounsellorCredit"> | Date | string
    updatedAt?: DateTimeFilter<"CounsellorCredit"> | Date | string
  }

  export type CounsellorCreditOrderByWithRelationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    totalCredits?: SortOrder
    usedCredits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorCreditWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    counsellorId?: string
    AND?: CounsellorCreditWhereInput | CounsellorCreditWhereInput[]
    OR?: CounsellorCreditWhereInput[]
    NOT?: CounsellorCreditWhereInput | CounsellorCreditWhereInput[]
    totalCredits?: IntFilter<"CounsellorCredit"> | number
    usedCredits?: IntFilter<"CounsellorCredit"> | number
    createdAt?: DateTimeFilter<"CounsellorCredit"> | Date | string
    updatedAt?: DateTimeFilter<"CounsellorCredit"> | Date | string
  }, "id" | "counsellorId">

  export type CounsellorCreditOrderByWithAggregationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    totalCredits?: SortOrder
    usedCredits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CounsellorCreditCountOrderByAggregateInput
    _avg?: CounsellorCreditAvgOrderByAggregateInput
    _max?: CounsellorCreditMaxOrderByAggregateInput
    _min?: CounsellorCreditMinOrderByAggregateInput
    _sum?: CounsellorCreditSumOrderByAggregateInput
  }

  export type CounsellorCreditScalarWhereWithAggregatesInput = {
    AND?: CounsellorCreditScalarWhereWithAggregatesInput | CounsellorCreditScalarWhereWithAggregatesInput[]
    OR?: CounsellorCreditScalarWhereWithAggregatesInput[]
    NOT?: CounsellorCreditScalarWhereWithAggregatesInput | CounsellorCreditScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CounsellorCredit"> | string
    counsellorId?: StringWithAggregatesFilter<"CounsellorCredit"> | string
    totalCredits?: IntWithAggregatesFilter<"CounsellorCredit"> | number
    usedCredits?: IntWithAggregatesFilter<"CounsellorCredit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"CounsellorCredit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CounsellorCredit"> | Date | string
  }

  export type PaymentWebhookLogWhereInput = {
    AND?: PaymentWebhookLogWhereInput | PaymentWebhookLogWhereInput[]
    OR?: PaymentWebhookLogWhereInput[]
    NOT?: PaymentWebhookLogWhereInput | PaymentWebhookLogWhereInput[]
    id?: StringFilter<"PaymentWebhookLog"> | string
    eventType?: StringFilter<"PaymentWebhookLog"> | string
    payload?: JsonFilter<"PaymentWebhookLog">
    createdAt?: DateTimeFilter<"PaymentWebhookLog"> | Date | string
  }

  export type PaymentWebhookLogOrderByWithRelationInput = {
    id?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookLogWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWebhookLogWhereInput | PaymentWebhookLogWhereInput[]
    OR?: PaymentWebhookLogWhereInput[]
    NOT?: PaymentWebhookLogWhereInput | PaymentWebhookLogWhereInput[]
    eventType?: StringFilter<"PaymentWebhookLog"> | string
    payload?: JsonFilter<"PaymentWebhookLog">
    createdAt?: DateTimeFilter<"PaymentWebhookLog"> | Date | string
  }, "id">

  export type PaymentWebhookLogOrderByWithAggregationInput = {
    id?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
    _count?: PaymentWebhookLogCountOrderByAggregateInput
    _max?: PaymentWebhookLogMaxOrderByAggregateInput
    _min?: PaymentWebhookLogMinOrderByAggregateInput
  }

  export type PaymentWebhookLogScalarWhereWithAggregatesInput = {
    AND?: PaymentWebhookLogScalarWhereWithAggregatesInput | PaymentWebhookLogScalarWhereWithAggregatesInput[]
    OR?: PaymentWebhookLogScalarWhereWithAggregatesInput[]
    NOT?: PaymentWebhookLogScalarWhereWithAggregatesInput | PaymentWebhookLogScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PaymentWebhookLog"> | string
    eventType?: StringWithAggregatesFilter<"PaymentWebhookLog"> | string
    payload?: JsonWithAggregatesFilter<"PaymentWebhookLog">
    createdAt?: DateTimeWithAggregatesFilter<"PaymentWebhookLog"> | Date | string
  }

  export type CreditTransactionWhereInput = {
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    id?: StringFilter<"CreditTransaction"> | string
    counsellorId?: StringFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntFilter<"CreditTransaction"> | number
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }

  export type CreditTransactionOrderByWithRelationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    OR?: CreditTransactionWhereInput[]
    NOT?: CreditTransactionWhereInput | CreditTransactionWhereInput[]
    counsellorId?: StringFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntFilter<"CreditTransaction"> | number
    referenceId?: StringNullableFilter<"CreditTransaction"> | string | null
    description?: StringNullableFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeFilter<"CreditTransaction"> | Date | string
  }, "id">

  export type CreditTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    referenceId?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CreditTransactionCountOrderByAggregateInput
    _avg?: CreditTransactionAvgOrderByAggregateInput
    _max?: CreditTransactionMaxOrderByAggregateInput
    _min?: CreditTransactionMinOrderByAggregateInput
    _sum?: CreditTransactionSumOrderByAggregateInput
  }

  export type CreditTransactionScalarWhereWithAggregatesInput = {
    AND?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    OR?: CreditTransactionScalarWhereWithAggregatesInput[]
    NOT?: CreditTransactionScalarWhereWithAggregatesInput | CreditTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CreditTransaction"> | string
    counsellorId?: StringWithAggregatesFilter<"CreditTransaction"> | string
    type?: EnumCreditTransactionTypeWithAggregatesFilter<"CreditTransaction"> | $Enums.CreditTransactionType
    amount?: IntWithAggregatesFilter<"CreditTransaction"> | number
    referenceId?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    description?: StringNullableWithAggregatesFilter<"CreditTransaction"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CreditTransaction"> | Date | string
  }

  export type PaymentOrderCreateInput = {
    id?: string
    counsellorId: string
    razorpayOrderId: string
    studentCount: number
    pricePerStudent: number
    totalAmount: number
    status?: $Enums.PaymentStatus
    razorpayPaymentId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentOrderUncheckedCreateInput = {
    id?: string
    counsellorId: string
    razorpayOrderId: string
    studentCount: number
    pricePerStudent: number
    totalAmount: number
    status?: $Enums.PaymentStatus
    razorpayPaymentId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    pricePerStudent?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    pricePerStudent?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentOrderCreateManyInput = {
    id?: string
    counsellorId: string
    razorpayOrderId: string
    studentCount: number
    pricePerStudent: number
    totalAmount: number
    status?: $Enums.PaymentStatus
    razorpayPaymentId?: string | null
    failureReason?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    pricePerStudent?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    razorpayOrderId?: StringFieldUpdateOperationsInput | string
    studentCount?: IntFieldUpdateOperationsInput | number
    pricePerStudent?: IntFieldUpdateOperationsInput | number
    totalAmount?: IntFieldUpdateOperationsInput | number
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounsellorCreditCreateInput = {
    id?: string
    counsellorId: string
    totalCredits?: number
    usedCredits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounsellorCreditUncheckedCreateInput = {
    id?: string
    counsellorId: string
    totalCredits?: number
    usedCredits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounsellorCreditUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    totalCredits?: IntFieldUpdateOperationsInput | number
    usedCredits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounsellorCreditUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    totalCredits?: IntFieldUpdateOperationsInput | number
    usedCredits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounsellorCreditCreateManyInput = {
    id?: string
    counsellorId: string
    totalCredits?: number
    usedCredits?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounsellorCreditUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    totalCredits?: IntFieldUpdateOperationsInput | number
    usedCredits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounsellorCreditUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    totalCredits?: IntFieldUpdateOperationsInput | number
    usedCredits?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookLogCreateInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentWebhookLogUncheckedCreateInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentWebhookLogUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookLogUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookLogCreateManyInput = {
    id?: string
    eventType: string
    payload: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type PaymentWebhookLogUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentWebhookLogUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    eventType?: StringFieldUpdateOperationsInput | string
    payload?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateInput = {
    id?: string
    counsellorId: string
    type: $Enums.CreditTransactionType
    amount: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUncheckedCreateInput = {
    id?: string
    counsellorId: string
    type: $Enums.CreditTransactionType
    amount: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionCreateManyInput = {
    id?: string
    counsellorId: string
    type: $Enums.CreditTransactionType
    amount: number
    referenceId?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type CreditTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CreditTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: EnumCreditTransactionTypeFieldUpdateOperationsInput | $Enums.CreditTransactionType
    amount?: IntFieldUpdateOperationsInput | number
    referenceId?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PaymentOrderCountOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    razorpayOrderId?: SortOrder
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentOrderAvgOrderByAggregateInput = {
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
  }

  export type PaymentOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    razorpayOrderId?: SortOrder
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentOrderMinOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    razorpayOrderId?: SortOrder
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    razorpayPaymentId?: SortOrder
    failureReason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentOrderSumOrderByAggregateInput = {
    studentCount?: SortOrder
    pricePerStudent?: SortOrder
    totalAmount?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type CounsellorCreditCountOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    totalCredits?: SortOrder
    usedCredits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorCreditAvgOrderByAggregateInput = {
    totalCredits?: SortOrder
    usedCredits?: SortOrder
  }

  export type CounsellorCreditMaxOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    totalCredits?: SortOrder
    usedCredits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorCreditMinOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    totalCredits?: SortOrder
    usedCredits?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorCreditSumOrderByAggregateInput = {
    totalCredits?: SortOrder
    usedCredits?: SortOrder
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type PaymentWebhookLogCountOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    payload?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookLogMaxOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }

  export type PaymentWebhookLogMinOrderByAggregateInput = {
    id?: SortOrder
    eventType?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EnumCreditTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeFilter<$PrismaModel> | $Enums.CreditTransactionType
  }

  export type CreditTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CreditTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    referenceId?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
  }

  export type CreditTransactionSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type EnumCreditTransactionTypeFieldUpdateOperationsInput = {
    set?: $Enums.CreditTransactionType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedEnumCreditTransactionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeFilter<$PrismaModel> | $Enums.CreditTransactionType
  }

  export type NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.CreditTransactionType | EnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.CreditTransactionType[] | ListEnumCreditTransactionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumCreditTransactionTypeWithAggregatesFilter<$PrismaModel> | $Enums.CreditTransactionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
    _max?: NestedEnumCreditTransactionTypeFilter<$PrismaModel>
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use PaymentOrderDefaultArgs instead
     */
    export type PaymentOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentOrderDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CounsellorCreditDefaultArgs instead
     */
    export type CounsellorCreditArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CounsellorCreditDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PaymentWebhookLogDefaultArgs instead
     */
    export type PaymentWebhookLogArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PaymentWebhookLogDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CreditTransactionDefaultArgs instead
     */
    export type CreditTransactionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CreditTransactionDefaultArgs<ExtArgs>

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