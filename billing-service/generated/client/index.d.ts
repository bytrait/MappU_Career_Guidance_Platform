
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
 * Model CounsellorPricingConfig
 * 
 */
export type CounsellorPricingConfig = $Result.DefaultSelection<Prisma.$CounsellorPricingConfigPayload>
/**
 * Model SchoolPricing
 * 
 */
export type SchoolPricing = $Result.DefaultSelection<Prisma.$SchoolPricingPayload>
/**
 * Model ReferenceTokenPrice
 * 
 */
export type ReferenceTokenPrice = $Result.DefaultSelection<Prisma.$ReferenceTokenPricePayload>
/**
 * Model StudentPayment
 * 
 */
export type StudentPayment = $Result.DefaultSelection<Prisma.$StudentPaymentPayload>

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


export const RegistrationPricingType: {
  INDIVIDUAL: 'INDIVIDUAL',
  SCHOOL: 'SCHOOL'
};

export type RegistrationPricingType = (typeof RegistrationPricingType)[keyof typeof RegistrationPricingType]


export const StudentPaymentStatus: {
  PENDING: 'PENDING',
  PAID: 'PAID',
  FAILED: 'FAILED',
  CANCELLED: 'CANCELLED',
  FREE: 'FREE',
  WAIVED: 'WAIVED'
};

export type StudentPaymentStatus = (typeof StudentPaymentStatus)[keyof typeof StudentPaymentStatus]

}

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type CreditTransactionType = $Enums.CreditTransactionType

export const CreditTransactionType: typeof $Enums.CreditTransactionType

export type RegistrationPricingType = $Enums.RegistrationPricingType

export const RegistrationPricingType: typeof $Enums.RegistrationPricingType

export type StudentPaymentStatus = $Enums.StudentPaymentStatus

export const StudentPaymentStatus: typeof $Enums.StudentPaymentStatus

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

  /**
   * `prisma.counsellorPricingConfig`: Exposes CRUD operations for the **CounsellorPricingConfig** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CounsellorPricingConfigs
    * const counsellorPricingConfigs = await prisma.counsellorPricingConfig.findMany()
    * ```
    */
  get counsellorPricingConfig(): Prisma.CounsellorPricingConfigDelegate<ExtArgs>;

  /**
   * `prisma.schoolPricing`: Exposes CRUD operations for the **SchoolPricing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SchoolPricings
    * const schoolPricings = await prisma.schoolPricing.findMany()
    * ```
    */
  get schoolPricing(): Prisma.SchoolPricingDelegate<ExtArgs>;

  /**
   * `prisma.referenceTokenPrice`: Exposes CRUD operations for the **ReferenceTokenPrice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ReferenceTokenPrices
    * const referenceTokenPrices = await prisma.referenceTokenPrice.findMany()
    * ```
    */
  get referenceTokenPrice(): Prisma.ReferenceTokenPriceDelegate<ExtArgs>;

  /**
   * `prisma.studentPayment`: Exposes CRUD operations for the **StudentPayment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StudentPayments
    * const studentPayments = await prisma.studentPayment.findMany()
    * ```
    */
  get studentPayment(): Prisma.StudentPaymentDelegate<ExtArgs>;
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
    CreditTransaction: 'CreditTransaction',
    CounsellorPricingConfig: 'CounsellorPricingConfig',
    SchoolPricing: 'SchoolPricing',
    ReferenceTokenPrice: 'ReferenceTokenPrice',
    StudentPayment: 'StudentPayment'
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
      modelProps: "paymentOrder" | "counsellorCredit" | "paymentWebhookLog" | "creditTransaction" | "counsellorPricingConfig" | "schoolPricing" | "referenceTokenPrice" | "studentPayment"
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
      CounsellorPricingConfig: {
        payload: Prisma.$CounsellorPricingConfigPayload<ExtArgs>
        fields: Prisma.CounsellorPricingConfigFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CounsellorPricingConfigFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CounsellorPricingConfigFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>
          }
          findFirst: {
            args: Prisma.CounsellorPricingConfigFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CounsellorPricingConfigFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>
          }
          findMany: {
            args: Prisma.CounsellorPricingConfigFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>[]
          }
          create: {
            args: Prisma.CounsellorPricingConfigCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>
          }
          createMany: {
            args: Prisma.CounsellorPricingConfigCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CounsellorPricingConfigCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>[]
          }
          delete: {
            args: Prisma.CounsellorPricingConfigDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>
          }
          update: {
            args: Prisma.CounsellorPricingConfigUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>
          }
          deleteMany: {
            args: Prisma.CounsellorPricingConfigDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CounsellorPricingConfigUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CounsellorPricingConfigUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CounsellorPricingConfigPayload>
          }
          aggregate: {
            args: Prisma.CounsellorPricingConfigAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCounsellorPricingConfig>
          }
          groupBy: {
            args: Prisma.CounsellorPricingConfigGroupByArgs<ExtArgs>
            result: $Utils.Optional<CounsellorPricingConfigGroupByOutputType>[]
          }
          count: {
            args: Prisma.CounsellorPricingConfigCountArgs<ExtArgs>
            result: $Utils.Optional<CounsellorPricingConfigCountAggregateOutputType> | number
          }
        }
      }
      SchoolPricing: {
        payload: Prisma.$SchoolPricingPayload<ExtArgs>
        fields: Prisma.SchoolPricingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchoolPricingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchoolPricingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>
          }
          findFirst: {
            args: Prisma.SchoolPricingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchoolPricingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>
          }
          findMany: {
            args: Prisma.SchoolPricingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>[]
          }
          create: {
            args: Prisma.SchoolPricingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>
          }
          createMany: {
            args: Prisma.SchoolPricingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchoolPricingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>[]
          }
          delete: {
            args: Prisma.SchoolPricingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>
          }
          update: {
            args: Prisma.SchoolPricingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>
          }
          deleteMany: {
            args: Prisma.SchoolPricingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchoolPricingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.SchoolPricingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchoolPricingPayload>
          }
          aggregate: {
            args: Prisma.SchoolPricingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSchoolPricing>
          }
          groupBy: {
            args: Prisma.SchoolPricingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchoolPricingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchoolPricingCountArgs<ExtArgs>
            result: $Utils.Optional<SchoolPricingCountAggregateOutputType> | number
          }
        }
      }
      ReferenceTokenPrice: {
        payload: Prisma.$ReferenceTokenPricePayload<ExtArgs>
        fields: Prisma.ReferenceTokenPriceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReferenceTokenPriceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReferenceTokenPriceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>
          }
          findFirst: {
            args: Prisma.ReferenceTokenPriceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReferenceTokenPriceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>
          }
          findMany: {
            args: Prisma.ReferenceTokenPriceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>[]
          }
          create: {
            args: Prisma.ReferenceTokenPriceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>
          }
          createMany: {
            args: Prisma.ReferenceTokenPriceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReferenceTokenPriceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>[]
          }
          delete: {
            args: Prisma.ReferenceTokenPriceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>
          }
          update: {
            args: Prisma.ReferenceTokenPriceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>
          }
          deleteMany: {
            args: Prisma.ReferenceTokenPriceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReferenceTokenPriceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ReferenceTokenPriceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReferenceTokenPricePayload>
          }
          aggregate: {
            args: Prisma.ReferenceTokenPriceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReferenceTokenPrice>
          }
          groupBy: {
            args: Prisma.ReferenceTokenPriceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReferenceTokenPriceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReferenceTokenPriceCountArgs<ExtArgs>
            result: $Utils.Optional<ReferenceTokenPriceCountAggregateOutputType> | number
          }
        }
      }
      StudentPayment: {
        payload: Prisma.$StudentPaymentPayload<ExtArgs>
        fields: Prisma.StudentPaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentPaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentPaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>
          }
          findFirst: {
            args: Prisma.StudentPaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentPaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>
          }
          findMany: {
            args: Prisma.StudentPaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>[]
          }
          create: {
            args: Prisma.StudentPaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>
          }
          createMany: {
            args: Prisma.StudentPaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentPaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>[]
          }
          delete: {
            args: Prisma.StudentPaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>
          }
          update: {
            args: Prisma.StudentPaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>
          }
          deleteMany: {
            args: Prisma.StudentPaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentPaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.StudentPaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentPaymentPayload>
          }
          aggregate: {
            args: Prisma.StudentPaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudentPayment>
          }
          groupBy: {
            args: Prisma.StudentPaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentPaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentPaymentCountArgs<ExtArgs>
            result: $Utils.Optional<StudentPaymentCountAggregateOutputType> | number
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
   * Count Type CounsellorPricingConfigCountOutputType
   */

  export type CounsellorPricingConfigCountOutputType = {
    schoolPrices: number
  }

  export type CounsellorPricingConfigCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolPrices?: boolean | CounsellorPricingConfigCountOutputTypeCountSchoolPricesArgs
  }

  // Custom InputTypes
  /**
   * CounsellorPricingConfigCountOutputType without action
   */
  export type CounsellorPricingConfigCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfigCountOutputType
     */
    select?: CounsellorPricingConfigCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CounsellorPricingConfigCountOutputType without action
   */
  export type CounsellorPricingConfigCountOutputTypeCountSchoolPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolPricingWhereInput
  }


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
   * Model CounsellorPricingConfig
   */

  export type AggregateCounsellorPricingConfig = {
    _count: CounsellorPricingConfigCountAggregateOutputType | null
    _avg: CounsellorPricingConfigAvgAggregateOutputType | null
    _sum: CounsellorPricingConfigSumAggregateOutputType | null
    _min: CounsellorPricingConfigMinAggregateOutputType | null
    _max: CounsellorPricingConfigMaxAggregateOutputType | null
  }

  export type CounsellorPricingConfigAvgAggregateOutputType = {
    individualPrice: number | null
  }

  export type CounsellorPricingConfigSumAggregateOutputType = {
    individualPrice: number | null
  }

  export type CounsellorPricingConfigMinAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    paymentEnabled: boolean | null
    individualPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CounsellorPricingConfigMaxAggregateOutputType = {
    id: string | null
    counsellorId: string | null
    paymentEnabled: boolean | null
    individualPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CounsellorPricingConfigCountAggregateOutputType = {
    id: number
    counsellorId: number
    paymentEnabled: number
    individualPrice: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CounsellorPricingConfigAvgAggregateInputType = {
    individualPrice?: true
  }

  export type CounsellorPricingConfigSumAggregateInputType = {
    individualPrice?: true
  }

  export type CounsellorPricingConfigMinAggregateInputType = {
    id?: true
    counsellorId?: true
    paymentEnabled?: true
    individualPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CounsellorPricingConfigMaxAggregateInputType = {
    id?: true
    counsellorId?: true
    paymentEnabled?: true
    individualPrice?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CounsellorPricingConfigCountAggregateInputType = {
    id?: true
    counsellorId?: true
    paymentEnabled?: true
    individualPrice?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CounsellorPricingConfigAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounsellorPricingConfig to aggregate.
     */
    where?: CounsellorPricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorPricingConfigs to fetch.
     */
    orderBy?: CounsellorPricingConfigOrderByWithRelationInput | CounsellorPricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CounsellorPricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorPricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorPricingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CounsellorPricingConfigs
    **/
    _count?: true | CounsellorPricingConfigCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CounsellorPricingConfigAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CounsellorPricingConfigSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CounsellorPricingConfigMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CounsellorPricingConfigMaxAggregateInputType
  }

  export type GetCounsellorPricingConfigAggregateType<T extends CounsellorPricingConfigAggregateArgs> = {
        [P in keyof T & keyof AggregateCounsellorPricingConfig]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCounsellorPricingConfig[P]>
      : GetScalarType<T[P], AggregateCounsellorPricingConfig[P]>
  }




  export type CounsellorPricingConfigGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CounsellorPricingConfigWhereInput
    orderBy?: CounsellorPricingConfigOrderByWithAggregationInput | CounsellorPricingConfigOrderByWithAggregationInput[]
    by: CounsellorPricingConfigScalarFieldEnum[] | CounsellorPricingConfigScalarFieldEnum
    having?: CounsellorPricingConfigScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CounsellorPricingConfigCountAggregateInputType | true
    _avg?: CounsellorPricingConfigAvgAggregateInputType
    _sum?: CounsellorPricingConfigSumAggregateInputType
    _min?: CounsellorPricingConfigMinAggregateInputType
    _max?: CounsellorPricingConfigMaxAggregateInputType
  }

  export type CounsellorPricingConfigGroupByOutputType = {
    id: string
    counsellorId: string
    paymentEnabled: boolean
    individualPrice: number | null
    createdAt: Date
    updatedAt: Date
    _count: CounsellorPricingConfigCountAggregateOutputType | null
    _avg: CounsellorPricingConfigAvgAggregateOutputType | null
    _sum: CounsellorPricingConfigSumAggregateOutputType | null
    _min: CounsellorPricingConfigMinAggregateOutputType | null
    _max: CounsellorPricingConfigMaxAggregateOutputType | null
  }

  type GetCounsellorPricingConfigGroupByPayload<T extends CounsellorPricingConfigGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CounsellorPricingConfigGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CounsellorPricingConfigGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CounsellorPricingConfigGroupByOutputType[P]>
            : GetScalarType<T[P], CounsellorPricingConfigGroupByOutputType[P]>
        }
      >
    >


  export type CounsellorPricingConfigSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    paymentEnabled?: boolean
    individualPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    schoolPrices?: boolean | CounsellorPricingConfig$schoolPricesArgs<ExtArgs>
    _count?: boolean | CounsellorPricingConfigCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["counsellorPricingConfig"]>

  export type CounsellorPricingConfigSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    counsellorId?: boolean
    paymentEnabled?: boolean
    individualPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["counsellorPricingConfig"]>

  export type CounsellorPricingConfigSelectScalar = {
    id?: boolean
    counsellorId?: boolean
    paymentEnabled?: boolean
    individualPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CounsellorPricingConfigInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schoolPrices?: boolean | CounsellorPricingConfig$schoolPricesArgs<ExtArgs>
    _count?: boolean | CounsellorPricingConfigCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CounsellorPricingConfigIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CounsellorPricingConfigPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CounsellorPricingConfig"
    objects: {
      schoolPrices: Prisma.$SchoolPricingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      counsellorId: string
      paymentEnabled: boolean
      individualPrice: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["counsellorPricingConfig"]>
    composites: {}
  }

  type CounsellorPricingConfigGetPayload<S extends boolean | null | undefined | CounsellorPricingConfigDefaultArgs> = $Result.GetResult<Prisma.$CounsellorPricingConfigPayload, S>

  type CounsellorPricingConfigCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CounsellorPricingConfigFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CounsellorPricingConfigCountAggregateInputType | true
    }

  export interface CounsellorPricingConfigDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CounsellorPricingConfig'], meta: { name: 'CounsellorPricingConfig' } }
    /**
     * Find zero or one CounsellorPricingConfig that matches the filter.
     * @param {CounsellorPricingConfigFindUniqueArgs} args - Arguments to find a CounsellorPricingConfig
     * @example
     * // Get one CounsellorPricingConfig
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CounsellorPricingConfigFindUniqueArgs>(args: SelectSubset<T, CounsellorPricingConfigFindUniqueArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CounsellorPricingConfig that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CounsellorPricingConfigFindUniqueOrThrowArgs} args - Arguments to find a CounsellorPricingConfig
     * @example
     * // Get one CounsellorPricingConfig
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CounsellorPricingConfigFindUniqueOrThrowArgs>(args: SelectSubset<T, CounsellorPricingConfigFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CounsellorPricingConfig that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigFindFirstArgs} args - Arguments to find a CounsellorPricingConfig
     * @example
     * // Get one CounsellorPricingConfig
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CounsellorPricingConfigFindFirstArgs>(args?: SelectSubset<T, CounsellorPricingConfigFindFirstArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CounsellorPricingConfig that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigFindFirstOrThrowArgs} args - Arguments to find a CounsellorPricingConfig
     * @example
     * // Get one CounsellorPricingConfig
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CounsellorPricingConfigFindFirstOrThrowArgs>(args?: SelectSubset<T, CounsellorPricingConfigFindFirstOrThrowArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CounsellorPricingConfigs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CounsellorPricingConfigs
     * const counsellorPricingConfigs = await prisma.counsellorPricingConfig.findMany()
     * 
     * // Get first 10 CounsellorPricingConfigs
     * const counsellorPricingConfigs = await prisma.counsellorPricingConfig.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const counsellorPricingConfigWithIdOnly = await prisma.counsellorPricingConfig.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CounsellorPricingConfigFindManyArgs>(args?: SelectSubset<T, CounsellorPricingConfigFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CounsellorPricingConfig.
     * @param {CounsellorPricingConfigCreateArgs} args - Arguments to create a CounsellorPricingConfig.
     * @example
     * // Create one CounsellorPricingConfig
     * const CounsellorPricingConfig = await prisma.counsellorPricingConfig.create({
     *   data: {
     *     // ... data to create a CounsellorPricingConfig
     *   }
     * })
     * 
     */
    create<T extends CounsellorPricingConfigCreateArgs>(args: SelectSubset<T, CounsellorPricingConfigCreateArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CounsellorPricingConfigs.
     * @param {CounsellorPricingConfigCreateManyArgs} args - Arguments to create many CounsellorPricingConfigs.
     * @example
     * // Create many CounsellorPricingConfigs
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CounsellorPricingConfigCreateManyArgs>(args?: SelectSubset<T, CounsellorPricingConfigCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CounsellorPricingConfigs and returns the data saved in the database.
     * @param {CounsellorPricingConfigCreateManyAndReturnArgs} args - Arguments to create many CounsellorPricingConfigs.
     * @example
     * // Create many CounsellorPricingConfigs
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CounsellorPricingConfigs and only return the `id`
     * const counsellorPricingConfigWithIdOnly = await prisma.counsellorPricingConfig.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CounsellorPricingConfigCreateManyAndReturnArgs>(args?: SelectSubset<T, CounsellorPricingConfigCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CounsellorPricingConfig.
     * @param {CounsellorPricingConfigDeleteArgs} args - Arguments to delete one CounsellorPricingConfig.
     * @example
     * // Delete one CounsellorPricingConfig
     * const CounsellorPricingConfig = await prisma.counsellorPricingConfig.delete({
     *   where: {
     *     // ... filter to delete one CounsellorPricingConfig
     *   }
     * })
     * 
     */
    delete<T extends CounsellorPricingConfigDeleteArgs>(args: SelectSubset<T, CounsellorPricingConfigDeleteArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CounsellorPricingConfig.
     * @param {CounsellorPricingConfigUpdateArgs} args - Arguments to update one CounsellorPricingConfig.
     * @example
     * // Update one CounsellorPricingConfig
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CounsellorPricingConfigUpdateArgs>(args: SelectSubset<T, CounsellorPricingConfigUpdateArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CounsellorPricingConfigs.
     * @param {CounsellorPricingConfigDeleteManyArgs} args - Arguments to filter CounsellorPricingConfigs to delete.
     * @example
     * // Delete a few CounsellorPricingConfigs
     * const { count } = await prisma.counsellorPricingConfig.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CounsellorPricingConfigDeleteManyArgs>(args?: SelectSubset<T, CounsellorPricingConfigDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CounsellorPricingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CounsellorPricingConfigs
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CounsellorPricingConfigUpdateManyArgs>(args: SelectSubset<T, CounsellorPricingConfigUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CounsellorPricingConfig.
     * @param {CounsellorPricingConfigUpsertArgs} args - Arguments to update or create a CounsellorPricingConfig.
     * @example
     * // Update or create a CounsellorPricingConfig
     * const counsellorPricingConfig = await prisma.counsellorPricingConfig.upsert({
     *   create: {
     *     // ... data to create a CounsellorPricingConfig
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CounsellorPricingConfig we want to update
     *   }
     * })
     */
    upsert<T extends CounsellorPricingConfigUpsertArgs>(args: SelectSubset<T, CounsellorPricingConfigUpsertArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CounsellorPricingConfigs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigCountArgs} args - Arguments to filter CounsellorPricingConfigs to count.
     * @example
     * // Count the number of CounsellorPricingConfigs
     * const count = await prisma.counsellorPricingConfig.count({
     *   where: {
     *     // ... the filter for the CounsellorPricingConfigs we want to count
     *   }
     * })
    **/
    count<T extends CounsellorPricingConfigCountArgs>(
      args?: Subset<T, CounsellorPricingConfigCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CounsellorPricingConfigCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CounsellorPricingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CounsellorPricingConfigAggregateArgs>(args: Subset<T, CounsellorPricingConfigAggregateArgs>): Prisma.PrismaPromise<GetCounsellorPricingConfigAggregateType<T>>

    /**
     * Group by CounsellorPricingConfig.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CounsellorPricingConfigGroupByArgs} args - Group by arguments.
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
      T extends CounsellorPricingConfigGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CounsellorPricingConfigGroupByArgs['orderBy'] }
        : { orderBy?: CounsellorPricingConfigGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CounsellorPricingConfigGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCounsellorPricingConfigGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CounsellorPricingConfig model
   */
  readonly fields: CounsellorPricingConfigFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CounsellorPricingConfig.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CounsellorPricingConfigClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schoolPrices<T extends CounsellorPricingConfig$schoolPricesArgs<ExtArgs> = {}>(args?: Subset<T, CounsellorPricingConfig$schoolPricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the CounsellorPricingConfig model
   */ 
  interface CounsellorPricingConfigFieldRefs {
    readonly id: FieldRef<"CounsellorPricingConfig", 'String'>
    readonly counsellorId: FieldRef<"CounsellorPricingConfig", 'String'>
    readonly paymentEnabled: FieldRef<"CounsellorPricingConfig", 'Boolean'>
    readonly individualPrice: FieldRef<"CounsellorPricingConfig", 'Int'>
    readonly createdAt: FieldRef<"CounsellorPricingConfig", 'DateTime'>
    readonly updatedAt: FieldRef<"CounsellorPricingConfig", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CounsellorPricingConfig findUnique
   */
  export type CounsellorPricingConfigFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which CounsellorPricingConfig to fetch.
     */
    where: CounsellorPricingConfigWhereUniqueInput
  }

  /**
   * CounsellorPricingConfig findUniqueOrThrow
   */
  export type CounsellorPricingConfigFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which CounsellorPricingConfig to fetch.
     */
    where: CounsellorPricingConfigWhereUniqueInput
  }

  /**
   * CounsellorPricingConfig findFirst
   */
  export type CounsellorPricingConfigFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which CounsellorPricingConfig to fetch.
     */
    where?: CounsellorPricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorPricingConfigs to fetch.
     */
    orderBy?: CounsellorPricingConfigOrderByWithRelationInput | CounsellorPricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounsellorPricingConfigs.
     */
    cursor?: CounsellorPricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorPricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorPricingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounsellorPricingConfigs.
     */
    distinct?: CounsellorPricingConfigScalarFieldEnum | CounsellorPricingConfigScalarFieldEnum[]
  }

  /**
   * CounsellorPricingConfig findFirstOrThrow
   */
  export type CounsellorPricingConfigFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which CounsellorPricingConfig to fetch.
     */
    where?: CounsellorPricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorPricingConfigs to fetch.
     */
    orderBy?: CounsellorPricingConfigOrderByWithRelationInput | CounsellorPricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CounsellorPricingConfigs.
     */
    cursor?: CounsellorPricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorPricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorPricingConfigs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CounsellorPricingConfigs.
     */
    distinct?: CounsellorPricingConfigScalarFieldEnum | CounsellorPricingConfigScalarFieldEnum[]
  }

  /**
   * CounsellorPricingConfig findMany
   */
  export type CounsellorPricingConfigFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * Filter, which CounsellorPricingConfigs to fetch.
     */
    where?: CounsellorPricingConfigWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CounsellorPricingConfigs to fetch.
     */
    orderBy?: CounsellorPricingConfigOrderByWithRelationInput | CounsellorPricingConfigOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CounsellorPricingConfigs.
     */
    cursor?: CounsellorPricingConfigWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CounsellorPricingConfigs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CounsellorPricingConfigs.
     */
    skip?: number
    distinct?: CounsellorPricingConfigScalarFieldEnum | CounsellorPricingConfigScalarFieldEnum[]
  }

  /**
   * CounsellorPricingConfig create
   */
  export type CounsellorPricingConfigCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * The data needed to create a CounsellorPricingConfig.
     */
    data: XOR<CounsellorPricingConfigCreateInput, CounsellorPricingConfigUncheckedCreateInput>
  }

  /**
   * CounsellorPricingConfig createMany
   */
  export type CounsellorPricingConfigCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CounsellorPricingConfigs.
     */
    data: CounsellorPricingConfigCreateManyInput | CounsellorPricingConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounsellorPricingConfig createManyAndReturn
   */
  export type CounsellorPricingConfigCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CounsellorPricingConfigs.
     */
    data: CounsellorPricingConfigCreateManyInput | CounsellorPricingConfigCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CounsellorPricingConfig update
   */
  export type CounsellorPricingConfigUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * The data needed to update a CounsellorPricingConfig.
     */
    data: XOR<CounsellorPricingConfigUpdateInput, CounsellorPricingConfigUncheckedUpdateInput>
    /**
     * Choose, which CounsellorPricingConfig to update.
     */
    where: CounsellorPricingConfigWhereUniqueInput
  }

  /**
   * CounsellorPricingConfig updateMany
   */
  export type CounsellorPricingConfigUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CounsellorPricingConfigs.
     */
    data: XOR<CounsellorPricingConfigUpdateManyMutationInput, CounsellorPricingConfigUncheckedUpdateManyInput>
    /**
     * Filter which CounsellorPricingConfigs to update
     */
    where?: CounsellorPricingConfigWhereInput
  }

  /**
   * CounsellorPricingConfig upsert
   */
  export type CounsellorPricingConfigUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * The filter to search for the CounsellorPricingConfig to update in case it exists.
     */
    where: CounsellorPricingConfigWhereUniqueInput
    /**
     * In case the CounsellorPricingConfig found by the `where` argument doesn't exist, create a new CounsellorPricingConfig with this data.
     */
    create: XOR<CounsellorPricingConfigCreateInput, CounsellorPricingConfigUncheckedCreateInput>
    /**
     * In case the CounsellorPricingConfig was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CounsellorPricingConfigUpdateInput, CounsellorPricingConfigUncheckedUpdateInput>
  }

  /**
   * CounsellorPricingConfig delete
   */
  export type CounsellorPricingConfigDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
    /**
     * Filter which CounsellorPricingConfig to delete.
     */
    where: CounsellorPricingConfigWhereUniqueInput
  }

  /**
   * CounsellorPricingConfig deleteMany
   */
  export type CounsellorPricingConfigDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CounsellorPricingConfigs to delete
     */
    where?: CounsellorPricingConfigWhereInput
  }

  /**
   * CounsellorPricingConfig.schoolPrices
   */
  export type CounsellorPricingConfig$schoolPricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    where?: SchoolPricingWhereInput
    orderBy?: SchoolPricingOrderByWithRelationInput | SchoolPricingOrderByWithRelationInput[]
    cursor?: SchoolPricingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchoolPricingScalarFieldEnum | SchoolPricingScalarFieldEnum[]
  }

  /**
   * CounsellorPricingConfig without action
   */
  export type CounsellorPricingConfigDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CounsellorPricingConfig
     */
    select?: CounsellorPricingConfigSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CounsellorPricingConfigInclude<ExtArgs> | null
  }


  /**
   * Model SchoolPricing
   */

  export type AggregateSchoolPricing = {
    _count: SchoolPricingCountAggregateOutputType | null
    _avg: SchoolPricingAvgAggregateOutputType | null
    _sum: SchoolPricingSumAggregateOutputType | null
    _min: SchoolPricingMinAggregateOutputType | null
    _max: SchoolPricingMaxAggregateOutputType | null
  }

  export type SchoolPricingAvgAggregateOutputType = {
    amount: number | null
  }

  export type SchoolPricingSumAggregateOutputType = {
    amount: number | null
  }

  export type SchoolPricingMinAggregateOutputType = {
    id: string | null
    pricingConfigId: string | null
    counsellorId: string | null
    schoolId: string | null
    schoolName: string | null
    amount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolPricingMaxAggregateOutputType = {
    id: string | null
    pricingConfigId: string | null
    counsellorId: string | null
    schoolId: string | null
    schoolName: string | null
    amount: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SchoolPricingCountAggregateOutputType = {
    id: number
    pricingConfigId: number
    counsellorId: number
    schoolId: number
    schoolName: number
    amount: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SchoolPricingAvgAggregateInputType = {
    amount?: true
  }

  export type SchoolPricingSumAggregateInputType = {
    amount?: true
  }

  export type SchoolPricingMinAggregateInputType = {
    id?: true
    pricingConfigId?: true
    counsellorId?: true
    schoolId?: true
    schoolName?: true
    amount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolPricingMaxAggregateInputType = {
    id?: true
    pricingConfigId?: true
    counsellorId?: true
    schoolId?: true
    schoolName?: true
    amount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SchoolPricingCountAggregateInputType = {
    id?: true
    pricingConfigId?: true
    counsellorId?: true
    schoolId?: true
    schoolName?: true
    amount?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SchoolPricingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolPricing to aggregate.
     */
    where?: SchoolPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolPricings to fetch.
     */
    orderBy?: SchoolPricingOrderByWithRelationInput | SchoolPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchoolPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SchoolPricings
    **/
    _count?: true | SchoolPricingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchoolPricingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchoolPricingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchoolPricingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchoolPricingMaxAggregateInputType
  }

  export type GetSchoolPricingAggregateType<T extends SchoolPricingAggregateArgs> = {
        [P in keyof T & keyof AggregateSchoolPricing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSchoolPricing[P]>
      : GetScalarType<T[P], AggregateSchoolPricing[P]>
  }




  export type SchoolPricingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchoolPricingWhereInput
    orderBy?: SchoolPricingOrderByWithAggregationInput | SchoolPricingOrderByWithAggregationInput[]
    by: SchoolPricingScalarFieldEnum[] | SchoolPricingScalarFieldEnum
    having?: SchoolPricingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchoolPricingCountAggregateInputType | true
    _avg?: SchoolPricingAvgAggregateInputType
    _sum?: SchoolPricingSumAggregateInputType
    _min?: SchoolPricingMinAggregateInputType
    _max?: SchoolPricingMaxAggregateInputType
  }

  export type SchoolPricingGroupByOutputType = {
    id: string
    pricingConfigId: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SchoolPricingCountAggregateOutputType | null
    _avg: SchoolPricingAvgAggregateOutputType | null
    _sum: SchoolPricingSumAggregateOutputType | null
    _min: SchoolPricingMinAggregateOutputType | null
    _max: SchoolPricingMaxAggregateOutputType | null
  }

  type GetSchoolPricingGroupByPayload<T extends SchoolPricingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchoolPricingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchoolPricingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchoolPricingGroupByOutputType[P]>
            : GetScalarType<T[P], SchoolPricingGroupByOutputType[P]>
        }
      >
    >


  export type SchoolPricingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricingConfigId?: boolean
    counsellorId?: boolean
    schoolId?: boolean
    schoolName?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pricingConfig?: boolean | CounsellorPricingConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolPricing"]>

  export type SchoolPricingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pricingConfigId?: boolean
    counsellorId?: boolean
    schoolId?: boolean
    schoolName?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    pricingConfig?: boolean | CounsellorPricingConfigDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["schoolPricing"]>

  export type SchoolPricingSelectScalar = {
    id?: boolean
    pricingConfigId?: boolean
    counsellorId?: boolean
    schoolId?: boolean
    schoolName?: boolean
    amount?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SchoolPricingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingConfig?: boolean | CounsellorPricingConfigDefaultArgs<ExtArgs>
  }
  export type SchoolPricingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pricingConfig?: boolean | CounsellorPricingConfigDefaultArgs<ExtArgs>
  }

  export type $SchoolPricingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SchoolPricing"
    objects: {
      pricingConfig: Prisma.$CounsellorPricingConfigPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      pricingConfigId: string
      counsellorId: string
      schoolId: string
      schoolName: string
      amount: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["schoolPricing"]>
    composites: {}
  }

  type SchoolPricingGetPayload<S extends boolean | null | undefined | SchoolPricingDefaultArgs> = $Result.GetResult<Prisma.$SchoolPricingPayload, S>

  type SchoolPricingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<SchoolPricingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: SchoolPricingCountAggregateInputType | true
    }

  export interface SchoolPricingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SchoolPricing'], meta: { name: 'SchoolPricing' } }
    /**
     * Find zero or one SchoolPricing that matches the filter.
     * @param {SchoolPricingFindUniqueArgs} args - Arguments to find a SchoolPricing
     * @example
     * // Get one SchoolPricing
     * const schoolPricing = await prisma.schoolPricing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchoolPricingFindUniqueArgs>(args: SelectSubset<T, SchoolPricingFindUniqueArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one SchoolPricing that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {SchoolPricingFindUniqueOrThrowArgs} args - Arguments to find a SchoolPricing
     * @example
     * // Get one SchoolPricing
     * const schoolPricing = await prisma.schoolPricing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchoolPricingFindUniqueOrThrowArgs>(args: SelectSubset<T, SchoolPricingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first SchoolPricing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingFindFirstArgs} args - Arguments to find a SchoolPricing
     * @example
     * // Get one SchoolPricing
     * const schoolPricing = await prisma.schoolPricing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchoolPricingFindFirstArgs>(args?: SelectSubset<T, SchoolPricingFindFirstArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first SchoolPricing that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingFindFirstOrThrowArgs} args - Arguments to find a SchoolPricing
     * @example
     * // Get one SchoolPricing
     * const schoolPricing = await prisma.schoolPricing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchoolPricingFindFirstOrThrowArgs>(args?: SelectSubset<T, SchoolPricingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more SchoolPricings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SchoolPricings
     * const schoolPricings = await prisma.schoolPricing.findMany()
     * 
     * // Get first 10 SchoolPricings
     * const schoolPricings = await prisma.schoolPricing.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schoolPricingWithIdOnly = await prisma.schoolPricing.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchoolPricingFindManyArgs>(args?: SelectSubset<T, SchoolPricingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a SchoolPricing.
     * @param {SchoolPricingCreateArgs} args - Arguments to create a SchoolPricing.
     * @example
     * // Create one SchoolPricing
     * const SchoolPricing = await prisma.schoolPricing.create({
     *   data: {
     *     // ... data to create a SchoolPricing
     *   }
     * })
     * 
     */
    create<T extends SchoolPricingCreateArgs>(args: SelectSubset<T, SchoolPricingCreateArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many SchoolPricings.
     * @param {SchoolPricingCreateManyArgs} args - Arguments to create many SchoolPricings.
     * @example
     * // Create many SchoolPricings
     * const schoolPricing = await prisma.schoolPricing.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchoolPricingCreateManyArgs>(args?: SelectSubset<T, SchoolPricingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SchoolPricings and returns the data saved in the database.
     * @param {SchoolPricingCreateManyAndReturnArgs} args - Arguments to create many SchoolPricings.
     * @example
     * // Create many SchoolPricings
     * const schoolPricing = await prisma.schoolPricing.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SchoolPricings and only return the `id`
     * const schoolPricingWithIdOnly = await prisma.schoolPricing.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchoolPricingCreateManyAndReturnArgs>(args?: SelectSubset<T, SchoolPricingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a SchoolPricing.
     * @param {SchoolPricingDeleteArgs} args - Arguments to delete one SchoolPricing.
     * @example
     * // Delete one SchoolPricing
     * const SchoolPricing = await prisma.schoolPricing.delete({
     *   where: {
     *     // ... filter to delete one SchoolPricing
     *   }
     * })
     * 
     */
    delete<T extends SchoolPricingDeleteArgs>(args: SelectSubset<T, SchoolPricingDeleteArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one SchoolPricing.
     * @param {SchoolPricingUpdateArgs} args - Arguments to update one SchoolPricing.
     * @example
     * // Update one SchoolPricing
     * const schoolPricing = await prisma.schoolPricing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchoolPricingUpdateArgs>(args: SelectSubset<T, SchoolPricingUpdateArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more SchoolPricings.
     * @param {SchoolPricingDeleteManyArgs} args - Arguments to filter SchoolPricings to delete.
     * @example
     * // Delete a few SchoolPricings
     * const { count } = await prisma.schoolPricing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchoolPricingDeleteManyArgs>(args?: SelectSubset<T, SchoolPricingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SchoolPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SchoolPricings
     * const schoolPricing = await prisma.schoolPricing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchoolPricingUpdateManyArgs>(args: SelectSubset<T, SchoolPricingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one SchoolPricing.
     * @param {SchoolPricingUpsertArgs} args - Arguments to update or create a SchoolPricing.
     * @example
     * // Update or create a SchoolPricing
     * const schoolPricing = await prisma.schoolPricing.upsert({
     *   create: {
     *     // ... data to create a SchoolPricing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SchoolPricing we want to update
     *   }
     * })
     */
    upsert<T extends SchoolPricingUpsertArgs>(args: SelectSubset<T, SchoolPricingUpsertArgs<ExtArgs>>): Prisma__SchoolPricingClient<$Result.GetResult<Prisma.$SchoolPricingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of SchoolPricings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingCountArgs} args - Arguments to filter SchoolPricings to count.
     * @example
     * // Count the number of SchoolPricings
     * const count = await prisma.schoolPricing.count({
     *   where: {
     *     // ... the filter for the SchoolPricings we want to count
     *   }
     * })
    **/
    count<T extends SchoolPricingCountArgs>(
      args?: Subset<T, SchoolPricingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchoolPricingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SchoolPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchoolPricingAggregateArgs>(args: Subset<T, SchoolPricingAggregateArgs>): Prisma.PrismaPromise<GetSchoolPricingAggregateType<T>>

    /**
     * Group by SchoolPricing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchoolPricingGroupByArgs} args - Group by arguments.
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
      T extends SchoolPricingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchoolPricingGroupByArgs['orderBy'] }
        : { orderBy?: SchoolPricingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchoolPricingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchoolPricingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SchoolPricing model
   */
  readonly fields: SchoolPricingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SchoolPricing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchoolPricingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    pricingConfig<T extends CounsellorPricingConfigDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CounsellorPricingConfigDefaultArgs<ExtArgs>>): Prisma__CounsellorPricingConfigClient<$Result.GetResult<Prisma.$CounsellorPricingConfigPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the SchoolPricing model
   */ 
  interface SchoolPricingFieldRefs {
    readonly id: FieldRef<"SchoolPricing", 'String'>
    readonly pricingConfigId: FieldRef<"SchoolPricing", 'String'>
    readonly counsellorId: FieldRef<"SchoolPricing", 'String'>
    readonly schoolId: FieldRef<"SchoolPricing", 'String'>
    readonly schoolName: FieldRef<"SchoolPricing", 'String'>
    readonly amount: FieldRef<"SchoolPricing", 'Int'>
    readonly isActive: FieldRef<"SchoolPricing", 'Boolean'>
    readonly createdAt: FieldRef<"SchoolPricing", 'DateTime'>
    readonly updatedAt: FieldRef<"SchoolPricing", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SchoolPricing findUnique
   */
  export type SchoolPricingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolPricing to fetch.
     */
    where: SchoolPricingWhereUniqueInput
  }

  /**
   * SchoolPricing findUniqueOrThrow
   */
  export type SchoolPricingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolPricing to fetch.
     */
    where: SchoolPricingWhereUniqueInput
  }

  /**
   * SchoolPricing findFirst
   */
  export type SchoolPricingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolPricing to fetch.
     */
    where?: SchoolPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolPricings to fetch.
     */
    orderBy?: SchoolPricingOrderByWithRelationInput | SchoolPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolPricings.
     */
    cursor?: SchoolPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolPricings.
     */
    distinct?: SchoolPricingScalarFieldEnum | SchoolPricingScalarFieldEnum[]
  }

  /**
   * SchoolPricing findFirstOrThrow
   */
  export type SchoolPricingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolPricing to fetch.
     */
    where?: SchoolPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolPricings to fetch.
     */
    orderBy?: SchoolPricingOrderByWithRelationInput | SchoolPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SchoolPricings.
     */
    cursor?: SchoolPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolPricings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SchoolPricings.
     */
    distinct?: SchoolPricingScalarFieldEnum | SchoolPricingScalarFieldEnum[]
  }

  /**
   * SchoolPricing findMany
   */
  export type SchoolPricingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * Filter, which SchoolPricings to fetch.
     */
    where?: SchoolPricingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SchoolPricings to fetch.
     */
    orderBy?: SchoolPricingOrderByWithRelationInput | SchoolPricingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SchoolPricings.
     */
    cursor?: SchoolPricingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SchoolPricings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SchoolPricings.
     */
    skip?: number
    distinct?: SchoolPricingScalarFieldEnum | SchoolPricingScalarFieldEnum[]
  }

  /**
   * SchoolPricing create
   */
  export type SchoolPricingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * The data needed to create a SchoolPricing.
     */
    data: XOR<SchoolPricingCreateInput, SchoolPricingUncheckedCreateInput>
  }

  /**
   * SchoolPricing createMany
   */
  export type SchoolPricingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SchoolPricings.
     */
    data: SchoolPricingCreateManyInput | SchoolPricingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SchoolPricing createManyAndReturn
   */
  export type SchoolPricingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many SchoolPricings.
     */
    data: SchoolPricingCreateManyInput | SchoolPricingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SchoolPricing update
   */
  export type SchoolPricingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * The data needed to update a SchoolPricing.
     */
    data: XOR<SchoolPricingUpdateInput, SchoolPricingUncheckedUpdateInput>
    /**
     * Choose, which SchoolPricing to update.
     */
    where: SchoolPricingWhereUniqueInput
  }

  /**
   * SchoolPricing updateMany
   */
  export type SchoolPricingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SchoolPricings.
     */
    data: XOR<SchoolPricingUpdateManyMutationInput, SchoolPricingUncheckedUpdateManyInput>
    /**
     * Filter which SchoolPricings to update
     */
    where?: SchoolPricingWhereInput
  }

  /**
   * SchoolPricing upsert
   */
  export type SchoolPricingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * The filter to search for the SchoolPricing to update in case it exists.
     */
    where: SchoolPricingWhereUniqueInput
    /**
     * In case the SchoolPricing found by the `where` argument doesn't exist, create a new SchoolPricing with this data.
     */
    create: XOR<SchoolPricingCreateInput, SchoolPricingUncheckedCreateInput>
    /**
     * In case the SchoolPricing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchoolPricingUpdateInput, SchoolPricingUncheckedUpdateInput>
  }

  /**
   * SchoolPricing delete
   */
  export type SchoolPricingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
    /**
     * Filter which SchoolPricing to delete.
     */
    where: SchoolPricingWhereUniqueInput
  }

  /**
   * SchoolPricing deleteMany
   */
  export type SchoolPricingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SchoolPricings to delete
     */
    where?: SchoolPricingWhereInput
  }

  /**
   * SchoolPricing without action
   */
  export type SchoolPricingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SchoolPricing
     */
    select?: SchoolPricingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchoolPricingInclude<ExtArgs> | null
  }


  /**
   * Model ReferenceTokenPrice
   */

  export type AggregateReferenceTokenPrice = {
    _count: ReferenceTokenPriceCountAggregateOutputType | null
    _avg: ReferenceTokenPriceAvgAggregateOutputType | null
    _sum: ReferenceTokenPriceSumAggregateOutputType | null
    _min: ReferenceTokenPriceMinAggregateOutputType | null
    _max: ReferenceTokenPriceMaxAggregateOutputType | null
  }

  export type ReferenceTokenPriceAvgAggregateOutputType = {
    amount: number | null
  }

  export type ReferenceTokenPriceSumAggregateOutputType = {
    amount: number | null
  }

  export type ReferenceTokenPriceMinAggregateOutputType = {
    id: string | null
    tokenId: string | null
    code: string | null
    counsellorId: string | null
    type: string | null
    targetId: string | null
    amount: number | null
    currency: string | null
    label: string | null
    startDate: Date | null
    expiryDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferenceTokenPriceMaxAggregateOutputType = {
    id: string | null
    tokenId: string | null
    code: string | null
    counsellorId: string | null
    type: string | null
    targetId: string | null
    amount: number | null
    currency: string | null
    label: string | null
    startDate: Date | null
    expiryDate: Date | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ReferenceTokenPriceCountAggregateOutputType = {
    id: number
    tokenId: number
    code: number
    counsellorId: number
    type: number
    targetId: number
    amount: number
    currency: number
    label: number
    startDate: number
    expiryDate: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ReferenceTokenPriceAvgAggregateInputType = {
    amount?: true
  }

  export type ReferenceTokenPriceSumAggregateInputType = {
    amount?: true
  }

  export type ReferenceTokenPriceMinAggregateInputType = {
    id?: true
    tokenId?: true
    code?: true
    counsellorId?: true
    type?: true
    targetId?: true
    amount?: true
    currency?: true
    label?: true
    startDate?: true
    expiryDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferenceTokenPriceMaxAggregateInputType = {
    id?: true
    tokenId?: true
    code?: true
    counsellorId?: true
    type?: true
    targetId?: true
    amount?: true
    currency?: true
    label?: true
    startDate?: true
    expiryDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ReferenceTokenPriceCountAggregateInputType = {
    id?: true
    tokenId?: true
    code?: true
    counsellorId?: true
    type?: true
    targetId?: true
    amount?: true
    currency?: true
    label?: true
    startDate?: true
    expiryDate?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ReferenceTokenPriceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferenceTokenPrice to aggregate.
     */
    where?: ReferenceTokenPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceTokenPrices to fetch.
     */
    orderBy?: ReferenceTokenPriceOrderByWithRelationInput | ReferenceTokenPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReferenceTokenPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceTokenPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceTokenPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ReferenceTokenPrices
    **/
    _count?: true | ReferenceTokenPriceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReferenceTokenPriceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReferenceTokenPriceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReferenceTokenPriceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReferenceTokenPriceMaxAggregateInputType
  }

  export type GetReferenceTokenPriceAggregateType<T extends ReferenceTokenPriceAggregateArgs> = {
        [P in keyof T & keyof AggregateReferenceTokenPrice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReferenceTokenPrice[P]>
      : GetScalarType<T[P], AggregateReferenceTokenPrice[P]>
  }




  export type ReferenceTokenPriceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReferenceTokenPriceWhereInput
    orderBy?: ReferenceTokenPriceOrderByWithAggregationInput | ReferenceTokenPriceOrderByWithAggregationInput[]
    by: ReferenceTokenPriceScalarFieldEnum[] | ReferenceTokenPriceScalarFieldEnum
    having?: ReferenceTokenPriceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReferenceTokenPriceCountAggregateInputType | true
    _avg?: ReferenceTokenPriceAvgAggregateInputType
    _sum?: ReferenceTokenPriceSumAggregateInputType
    _min?: ReferenceTokenPriceMinAggregateInputType
    _max?: ReferenceTokenPriceMaxAggregateInputType
  }

  export type ReferenceTokenPriceGroupByOutputType = {
    id: string
    tokenId: string
    code: string
    counsellorId: string
    type: string
    targetId: string
    amount: number
    currency: string
    label: string | null
    startDate: Date | null
    expiryDate: Date | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ReferenceTokenPriceCountAggregateOutputType | null
    _avg: ReferenceTokenPriceAvgAggregateOutputType | null
    _sum: ReferenceTokenPriceSumAggregateOutputType | null
    _min: ReferenceTokenPriceMinAggregateOutputType | null
    _max: ReferenceTokenPriceMaxAggregateOutputType | null
  }

  type GetReferenceTokenPriceGroupByPayload<T extends ReferenceTokenPriceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReferenceTokenPriceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReferenceTokenPriceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReferenceTokenPriceGroupByOutputType[P]>
            : GetScalarType<T[P], ReferenceTokenPriceGroupByOutputType[P]>
        }
      >
    >


  export type ReferenceTokenPriceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    code?: boolean
    counsellorId?: boolean
    type?: boolean
    targetId?: boolean
    amount?: boolean
    currency?: boolean
    label?: boolean
    startDate?: boolean
    expiryDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["referenceTokenPrice"]>

  export type ReferenceTokenPriceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tokenId?: boolean
    code?: boolean
    counsellorId?: boolean
    type?: boolean
    targetId?: boolean
    amount?: boolean
    currency?: boolean
    label?: boolean
    startDate?: boolean
    expiryDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["referenceTokenPrice"]>

  export type ReferenceTokenPriceSelectScalar = {
    id?: boolean
    tokenId?: boolean
    code?: boolean
    counsellorId?: boolean
    type?: boolean
    targetId?: boolean
    amount?: boolean
    currency?: boolean
    label?: boolean
    startDate?: boolean
    expiryDate?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $ReferenceTokenPricePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ReferenceTokenPrice"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tokenId: string
      code: string
      counsellorId: string
      type: string
      targetId: string
      amount: number
      currency: string
      label: string | null
      startDate: Date | null
      expiryDate: Date | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["referenceTokenPrice"]>
    composites: {}
  }

  type ReferenceTokenPriceGetPayload<S extends boolean | null | undefined | ReferenceTokenPriceDefaultArgs> = $Result.GetResult<Prisma.$ReferenceTokenPricePayload, S>

  type ReferenceTokenPriceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReferenceTokenPriceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ReferenceTokenPriceCountAggregateInputType | true
    }

  export interface ReferenceTokenPriceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ReferenceTokenPrice'], meta: { name: 'ReferenceTokenPrice' } }
    /**
     * Find zero or one ReferenceTokenPrice that matches the filter.
     * @param {ReferenceTokenPriceFindUniqueArgs} args - Arguments to find a ReferenceTokenPrice
     * @example
     * // Get one ReferenceTokenPrice
     * const referenceTokenPrice = await prisma.referenceTokenPrice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReferenceTokenPriceFindUniqueArgs>(args: SelectSubset<T, ReferenceTokenPriceFindUniqueArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ReferenceTokenPrice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ReferenceTokenPriceFindUniqueOrThrowArgs} args - Arguments to find a ReferenceTokenPrice
     * @example
     * // Get one ReferenceTokenPrice
     * const referenceTokenPrice = await prisma.referenceTokenPrice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReferenceTokenPriceFindUniqueOrThrowArgs>(args: SelectSubset<T, ReferenceTokenPriceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ReferenceTokenPrice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceFindFirstArgs} args - Arguments to find a ReferenceTokenPrice
     * @example
     * // Get one ReferenceTokenPrice
     * const referenceTokenPrice = await prisma.referenceTokenPrice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReferenceTokenPriceFindFirstArgs>(args?: SelectSubset<T, ReferenceTokenPriceFindFirstArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ReferenceTokenPrice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceFindFirstOrThrowArgs} args - Arguments to find a ReferenceTokenPrice
     * @example
     * // Get one ReferenceTokenPrice
     * const referenceTokenPrice = await prisma.referenceTokenPrice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReferenceTokenPriceFindFirstOrThrowArgs>(args?: SelectSubset<T, ReferenceTokenPriceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ReferenceTokenPrices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ReferenceTokenPrices
     * const referenceTokenPrices = await prisma.referenceTokenPrice.findMany()
     * 
     * // Get first 10 ReferenceTokenPrices
     * const referenceTokenPrices = await prisma.referenceTokenPrice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const referenceTokenPriceWithIdOnly = await prisma.referenceTokenPrice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReferenceTokenPriceFindManyArgs>(args?: SelectSubset<T, ReferenceTokenPriceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ReferenceTokenPrice.
     * @param {ReferenceTokenPriceCreateArgs} args - Arguments to create a ReferenceTokenPrice.
     * @example
     * // Create one ReferenceTokenPrice
     * const ReferenceTokenPrice = await prisma.referenceTokenPrice.create({
     *   data: {
     *     // ... data to create a ReferenceTokenPrice
     *   }
     * })
     * 
     */
    create<T extends ReferenceTokenPriceCreateArgs>(args: SelectSubset<T, ReferenceTokenPriceCreateArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ReferenceTokenPrices.
     * @param {ReferenceTokenPriceCreateManyArgs} args - Arguments to create many ReferenceTokenPrices.
     * @example
     * // Create many ReferenceTokenPrices
     * const referenceTokenPrice = await prisma.referenceTokenPrice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReferenceTokenPriceCreateManyArgs>(args?: SelectSubset<T, ReferenceTokenPriceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ReferenceTokenPrices and returns the data saved in the database.
     * @param {ReferenceTokenPriceCreateManyAndReturnArgs} args - Arguments to create many ReferenceTokenPrices.
     * @example
     * // Create many ReferenceTokenPrices
     * const referenceTokenPrice = await prisma.referenceTokenPrice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ReferenceTokenPrices and only return the `id`
     * const referenceTokenPriceWithIdOnly = await prisma.referenceTokenPrice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReferenceTokenPriceCreateManyAndReturnArgs>(args?: SelectSubset<T, ReferenceTokenPriceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ReferenceTokenPrice.
     * @param {ReferenceTokenPriceDeleteArgs} args - Arguments to delete one ReferenceTokenPrice.
     * @example
     * // Delete one ReferenceTokenPrice
     * const ReferenceTokenPrice = await prisma.referenceTokenPrice.delete({
     *   where: {
     *     // ... filter to delete one ReferenceTokenPrice
     *   }
     * })
     * 
     */
    delete<T extends ReferenceTokenPriceDeleteArgs>(args: SelectSubset<T, ReferenceTokenPriceDeleteArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ReferenceTokenPrice.
     * @param {ReferenceTokenPriceUpdateArgs} args - Arguments to update one ReferenceTokenPrice.
     * @example
     * // Update one ReferenceTokenPrice
     * const referenceTokenPrice = await prisma.referenceTokenPrice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReferenceTokenPriceUpdateArgs>(args: SelectSubset<T, ReferenceTokenPriceUpdateArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ReferenceTokenPrices.
     * @param {ReferenceTokenPriceDeleteManyArgs} args - Arguments to filter ReferenceTokenPrices to delete.
     * @example
     * // Delete a few ReferenceTokenPrices
     * const { count } = await prisma.referenceTokenPrice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReferenceTokenPriceDeleteManyArgs>(args?: SelectSubset<T, ReferenceTokenPriceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ReferenceTokenPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ReferenceTokenPrices
     * const referenceTokenPrice = await prisma.referenceTokenPrice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReferenceTokenPriceUpdateManyArgs>(args: SelectSubset<T, ReferenceTokenPriceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ReferenceTokenPrice.
     * @param {ReferenceTokenPriceUpsertArgs} args - Arguments to update or create a ReferenceTokenPrice.
     * @example
     * // Update or create a ReferenceTokenPrice
     * const referenceTokenPrice = await prisma.referenceTokenPrice.upsert({
     *   create: {
     *     // ... data to create a ReferenceTokenPrice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ReferenceTokenPrice we want to update
     *   }
     * })
     */
    upsert<T extends ReferenceTokenPriceUpsertArgs>(args: SelectSubset<T, ReferenceTokenPriceUpsertArgs<ExtArgs>>): Prisma__ReferenceTokenPriceClient<$Result.GetResult<Prisma.$ReferenceTokenPricePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ReferenceTokenPrices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceCountArgs} args - Arguments to filter ReferenceTokenPrices to count.
     * @example
     * // Count the number of ReferenceTokenPrices
     * const count = await prisma.referenceTokenPrice.count({
     *   where: {
     *     // ... the filter for the ReferenceTokenPrices we want to count
     *   }
     * })
    **/
    count<T extends ReferenceTokenPriceCountArgs>(
      args?: Subset<T, ReferenceTokenPriceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReferenceTokenPriceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ReferenceTokenPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReferenceTokenPriceAggregateArgs>(args: Subset<T, ReferenceTokenPriceAggregateArgs>): Prisma.PrismaPromise<GetReferenceTokenPriceAggregateType<T>>

    /**
     * Group by ReferenceTokenPrice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReferenceTokenPriceGroupByArgs} args - Group by arguments.
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
      T extends ReferenceTokenPriceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReferenceTokenPriceGroupByArgs['orderBy'] }
        : { orderBy?: ReferenceTokenPriceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReferenceTokenPriceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReferenceTokenPriceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ReferenceTokenPrice model
   */
  readonly fields: ReferenceTokenPriceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ReferenceTokenPrice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReferenceTokenPriceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ReferenceTokenPrice model
   */ 
  interface ReferenceTokenPriceFieldRefs {
    readonly id: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly tokenId: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly code: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly counsellorId: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly type: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly targetId: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly amount: FieldRef<"ReferenceTokenPrice", 'Int'>
    readonly currency: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly label: FieldRef<"ReferenceTokenPrice", 'String'>
    readonly startDate: FieldRef<"ReferenceTokenPrice", 'DateTime'>
    readonly expiryDate: FieldRef<"ReferenceTokenPrice", 'DateTime'>
    readonly isActive: FieldRef<"ReferenceTokenPrice", 'Boolean'>
    readonly createdAt: FieldRef<"ReferenceTokenPrice", 'DateTime'>
    readonly updatedAt: FieldRef<"ReferenceTokenPrice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ReferenceTokenPrice findUnique
   */
  export type ReferenceTokenPriceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * Filter, which ReferenceTokenPrice to fetch.
     */
    where: ReferenceTokenPriceWhereUniqueInput
  }

  /**
   * ReferenceTokenPrice findUniqueOrThrow
   */
  export type ReferenceTokenPriceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * Filter, which ReferenceTokenPrice to fetch.
     */
    where: ReferenceTokenPriceWhereUniqueInput
  }

  /**
   * ReferenceTokenPrice findFirst
   */
  export type ReferenceTokenPriceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * Filter, which ReferenceTokenPrice to fetch.
     */
    where?: ReferenceTokenPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceTokenPrices to fetch.
     */
    orderBy?: ReferenceTokenPriceOrderByWithRelationInput | ReferenceTokenPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferenceTokenPrices.
     */
    cursor?: ReferenceTokenPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceTokenPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceTokenPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferenceTokenPrices.
     */
    distinct?: ReferenceTokenPriceScalarFieldEnum | ReferenceTokenPriceScalarFieldEnum[]
  }

  /**
   * ReferenceTokenPrice findFirstOrThrow
   */
  export type ReferenceTokenPriceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * Filter, which ReferenceTokenPrice to fetch.
     */
    where?: ReferenceTokenPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceTokenPrices to fetch.
     */
    orderBy?: ReferenceTokenPriceOrderByWithRelationInput | ReferenceTokenPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ReferenceTokenPrices.
     */
    cursor?: ReferenceTokenPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceTokenPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceTokenPrices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ReferenceTokenPrices.
     */
    distinct?: ReferenceTokenPriceScalarFieldEnum | ReferenceTokenPriceScalarFieldEnum[]
  }

  /**
   * ReferenceTokenPrice findMany
   */
  export type ReferenceTokenPriceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * Filter, which ReferenceTokenPrices to fetch.
     */
    where?: ReferenceTokenPriceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ReferenceTokenPrices to fetch.
     */
    orderBy?: ReferenceTokenPriceOrderByWithRelationInput | ReferenceTokenPriceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ReferenceTokenPrices.
     */
    cursor?: ReferenceTokenPriceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ReferenceTokenPrices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ReferenceTokenPrices.
     */
    skip?: number
    distinct?: ReferenceTokenPriceScalarFieldEnum | ReferenceTokenPriceScalarFieldEnum[]
  }

  /**
   * ReferenceTokenPrice create
   */
  export type ReferenceTokenPriceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * The data needed to create a ReferenceTokenPrice.
     */
    data: XOR<ReferenceTokenPriceCreateInput, ReferenceTokenPriceUncheckedCreateInput>
  }

  /**
   * ReferenceTokenPrice createMany
   */
  export type ReferenceTokenPriceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ReferenceTokenPrices.
     */
    data: ReferenceTokenPriceCreateManyInput | ReferenceTokenPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferenceTokenPrice createManyAndReturn
   */
  export type ReferenceTokenPriceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ReferenceTokenPrices.
     */
    data: ReferenceTokenPriceCreateManyInput | ReferenceTokenPriceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ReferenceTokenPrice update
   */
  export type ReferenceTokenPriceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * The data needed to update a ReferenceTokenPrice.
     */
    data: XOR<ReferenceTokenPriceUpdateInput, ReferenceTokenPriceUncheckedUpdateInput>
    /**
     * Choose, which ReferenceTokenPrice to update.
     */
    where: ReferenceTokenPriceWhereUniqueInput
  }

  /**
   * ReferenceTokenPrice updateMany
   */
  export type ReferenceTokenPriceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ReferenceTokenPrices.
     */
    data: XOR<ReferenceTokenPriceUpdateManyMutationInput, ReferenceTokenPriceUncheckedUpdateManyInput>
    /**
     * Filter which ReferenceTokenPrices to update
     */
    where?: ReferenceTokenPriceWhereInput
  }

  /**
   * ReferenceTokenPrice upsert
   */
  export type ReferenceTokenPriceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * The filter to search for the ReferenceTokenPrice to update in case it exists.
     */
    where: ReferenceTokenPriceWhereUniqueInput
    /**
     * In case the ReferenceTokenPrice found by the `where` argument doesn't exist, create a new ReferenceTokenPrice with this data.
     */
    create: XOR<ReferenceTokenPriceCreateInput, ReferenceTokenPriceUncheckedCreateInput>
    /**
     * In case the ReferenceTokenPrice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReferenceTokenPriceUpdateInput, ReferenceTokenPriceUncheckedUpdateInput>
  }

  /**
   * ReferenceTokenPrice delete
   */
  export type ReferenceTokenPriceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
    /**
     * Filter which ReferenceTokenPrice to delete.
     */
    where: ReferenceTokenPriceWhereUniqueInput
  }

  /**
   * ReferenceTokenPrice deleteMany
   */
  export type ReferenceTokenPriceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ReferenceTokenPrices to delete
     */
    where?: ReferenceTokenPriceWhereInput
  }

  /**
   * ReferenceTokenPrice without action
   */
  export type ReferenceTokenPriceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReferenceTokenPrice
     */
    select?: ReferenceTokenPriceSelect<ExtArgs> | null
  }


  /**
   * Model StudentPayment
   */

  export type AggregateStudentPayment = {
    _count: StudentPaymentCountAggregateOutputType | null
    _avg: StudentPaymentAvgAggregateOutputType | null
    _sum: StudentPaymentSumAggregateOutputType | null
    _min: StudentPaymentMinAggregateOutputType | null
    _max: StudentPaymentMaxAggregateOutputType | null
  }

  export type StudentPaymentAvgAggregateOutputType = {
    amount: number | null
  }

  export type StudentPaymentSumAggregateOutputType = {
    amount: number | null
  }

  export type StudentPaymentMinAggregateOutputType = {
    id: string | null
    studentId: string | null
    counsellorId: string | null
    registrationType: $Enums.RegistrationPricingType | null
    schoolId: string | null
    schoolName: string | null
    referenceCode: string | null
    referenceCodeId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.StudentPaymentStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    receiptNumber: string | null
    receiptSent: boolean | null
    receiptSentAt: Date | null
    failureReason: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentPaymentMaxAggregateOutputType = {
    id: string | null
    studentId: string | null
    counsellorId: string | null
    registrationType: $Enums.RegistrationPricingType | null
    schoolId: string | null
    schoolName: string | null
    referenceCode: string | null
    referenceCodeId: string | null
    amount: number | null
    currency: string | null
    status: $Enums.StudentPaymentStatus | null
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    receiptNumber: string | null
    receiptSent: boolean | null
    receiptSentAt: Date | null
    failureReason: string | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type StudentPaymentCountAggregateOutputType = {
    id: number
    studentId: number
    counsellorId: number
    registrationType: number
    schoolId: number
    schoolName: number
    referenceCode: number
    referenceCodeId: number
    amount: number
    currency: number
    status: number
    razorpayOrderId: number
    razorpayPaymentId: number
    razorpaySignature: number
    receiptNumber: number
    receiptSent: number
    receiptSentAt: number
    failureReason: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type StudentPaymentAvgAggregateInputType = {
    amount?: true
  }

  export type StudentPaymentSumAggregateInputType = {
    amount?: true
  }

  export type StudentPaymentMinAggregateInputType = {
    id?: true
    studentId?: true
    counsellorId?: true
    registrationType?: true
    schoolId?: true
    schoolName?: true
    referenceCode?: true
    referenceCodeId?: true
    amount?: true
    currency?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    receiptNumber?: true
    receiptSent?: true
    receiptSentAt?: true
    failureReason?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentPaymentMaxAggregateInputType = {
    id?: true
    studentId?: true
    counsellorId?: true
    registrationType?: true
    schoolId?: true
    schoolName?: true
    referenceCode?: true
    referenceCodeId?: true
    amount?: true
    currency?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    receiptNumber?: true
    receiptSent?: true
    receiptSentAt?: true
    failureReason?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type StudentPaymentCountAggregateInputType = {
    id?: true
    studentId?: true
    counsellorId?: true
    registrationType?: true
    schoolId?: true
    schoolName?: true
    referenceCode?: true
    referenceCodeId?: true
    amount?: true
    currency?: true
    status?: true
    razorpayOrderId?: true
    razorpayPaymentId?: true
    razorpaySignature?: true
    receiptNumber?: true
    receiptSent?: true
    receiptSentAt?: true
    failureReason?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type StudentPaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPayment to aggregate.
     */
    where?: StudentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPayments to fetch.
     */
    orderBy?: StudentPaymentOrderByWithRelationInput | StudentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StudentPayments
    **/
    _count?: true | StudentPaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StudentPaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StudentPaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentPaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentPaymentMaxAggregateInputType
  }

  export type GetStudentPaymentAggregateType<T extends StudentPaymentAggregateArgs> = {
        [P in keyof T & keyof AggregateStudentPayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudentPayment[P]>
      : GetScalarType<T[P], AggregateStudentPayment[P]>
  }




  export type StudentPaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentPaymentWhereInput
    orderBy?: StudentPaymentOrderByWithAggregationInput | StudentPaymentOrderByWithAggregationInput[]
    by: StudentPaymentScalarFieldEnum[] | StudentPaymentScalarFieldEnum
    having?: StudentPaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentPaymentCountAggregateInputType | true
    _avg?: StudentPaymentAvgAggregateInputType
    _sum?: StudentPaymentSumAggregateInputType
    _min?: StudentPaymentMinAggregateInputType
    _max?: StudentPaymentMaxAggregateInputType
  }

  export type StudentPaymentGroupByOutputType = {
    id: string
    studentId: string
    counsellorId: string
    registrationType: $Enums.RegistrationPricingType
    schoolId: string | null
    schoolName: string | null
    referenceCode: string | null
    referenceCodeId: string | null
    amount: number
    currency: string
    status: $Enums.StudentPaymentStatus
    razorpayOrderId: string | null
    razorpayPaymentId: string | null
    razorpaySignature: string | null
    receiptNumber: string | null
    receiptSent: boolean
    receiptSentAt: Date | null
    failureReason: string | null
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: StudentPaymentCountAggregateOutputType | null
    _avg: StudentPaymentAvgAggregateOutputType | null
    _sum: StudentPaymentSumAggregateOutputType | null
    _min: StudentPaymentMinAggregateOutputType | null
    _max: StudentPaymentMaxAggregateOutputType | null
  }

  type GetStudentPaymentGroupByPayload<T extends StudentPaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentPaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentPaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentPaymentGroupByOutputType[P]>
            : GetScalarType<T[P], StudentPaymentGroupByOutputType[P]>
        }
      >
    >


  export type StudentPaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counsellorId?: boolean
    registrationType?: boolean
    schoolId?: boolean
    schoolName?: boolean
    referenceCode?: boolean
    referenceCodeId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    receiptNumber?: boolean
    receiptSent?: boolean
    receiptSentAt?: boolean
    failureReason?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentPayment"]>

  export type StudentPaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studentId?: boolean
    counsellorId?: boolean
    registrationType?: boolean
    schoolId?: boolean
    schoolName?: boolean
    referenceCode?: boolean
    referenceCodeId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    receiptNumber?: boolean
    receiptSent?: boolean
    receiptSentAt?: boolean
    failureReason?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["studentPayment"]>

  export type StudentPaymentSelectScalar = {
    id?: boolean
    studentId?: boolean
    counsellorId?: boolean
    registrationType?: boolean
    schoolId?: boolean
    schoolName?: boolean
    referenceCode?: boolean
    referenceCodeId?: boolean
    amount?: boolean
    currency?: boolean
    status?: boolean
    razorpayOrderId?: boolean
    razorpayPaymentId?: boolean
    razorpaySignature?: boolean
    receiptNumber?: boolean
    receiptSent?: boolean
    receiptSentAt?: boolean
    failureReason?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $StudentPaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StudentPayment"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studentId: string
      counsellorId: string
      registrationType: $Enums.RegistrationPricingType
      schoolId: string | null
      schoolName: string | null
      referenceCode: string | null
      referenceCodeId: string | null
      amount: number
      currency: string
      status: $Enums.StudentPaymentStatus
      razorpayOrderId: string | null
      razorpayPaymentId: string | null
      razorpaySignature: string | null
      receiptNumber: string | null
      receiptSent: boolean
      receiptSentAt: Date | null
      failureReason: string | null
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["studentPayment"]>
    composites: {}
  }

  type StudentPaymentGetPayload<S extends boolean | null | undefined | StudentPaymentDefaultArgs> = $Result.GetResult<Prisma.$StudentPaymentPayload, S>

  type StudentPaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<StudentPaymentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: StudentPaymentCountAggregateInputType | true
    }

  export interface StudentPaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StudentPayment'], meta: { name: 'StudentPayment' } }
    /**
     * Find zero or one StudentPayment that matches the filter.
     * @param {StudentPaymentFindUniqueArgs} args - Arguments to find a StudentPayment
     * @example
     * // Get one StudentPayment
     * const studentPayment = await prisma.studentPayment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentPaymentFindUniqueArgs>(args: SelectSubset<T, StudentPaymentFindUniqueArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one StudentPayment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {StudentPaymentFindUniqueOrThrowArgs} args - Arguments to find a StudentPayment
     * @example
     * // Get one StudentPayment
     * const studentPayment = await prisma.studentPayment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentPaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentPaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first StudentPayment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentFindFirstArgs} args - Arguments to find a StudentPayment
     * @example
     * // Get one StudentPayment
     * const studentPayment = await prisma.studentPayment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentPaymentFindFirstArgs>(args?: SelectSubset<T, StudentPaymentFindFirstArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first StudentPayment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentFindFirstOrThrowArgs} args - Arguments to find a StudentPayment
     * @example
     * // Get one StudentPayment
     * const studentPayment = await prisma.studentPayment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentPaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentPaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more StudentPayments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StudentPayments
     * const studentPayments = await prisma.studentPayment.findMany()
     * 
     * // Get first 10 StudentPayments
     * const studentPayments = await prisma.studentPayment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentPaymentWithIdOnly = await prisma.studentPayment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentPaymentFindManyArgs>(args?: SelectSubset<T, StudentPaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a StudentPayment.
     * @param {StudentPaymentCreateArgs} args - Arguments to create a StudentPayment.
     * @example
     * // Create one StudentPayment
     * const StudentPayment = await prisma.studentPayment.create({
     *   data: {
     *     // ... data to create a StudentPayment
     *   }
     * })
     * 
     */
    create<T extends StudentPaymentCreateArgs>(args: SelectSubset<T, StudentPaymentCreateArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many StudentPayments.
     * @param {StudentPaymentCreateManyArgs} args - Arguments to create many StudentPayments.
     * @example
     * // Create many StudentPayments
     * const studentPayment = await prisma.studentPayment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentPaymentCreateManyArgs>(args?: SelectSubset<T, StudentPaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StudentPayments and returns the data saved in the database.
     * @param {StudentPaymentCreateManyAndReturnArgs} args - Arguments to create many StudentPayments.
     * @example
     * // Create many StudentPayments
     * const studentPayment = await prisma.studentPayment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StudentPayments and only return the `id`
     * const studentPaymentWithIdOnly = await prisma.studentPayment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentPaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentPaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a StudentPayment.
     * @param {StudentPaymentDeleteArgs} args - Arguments to delete one StudentPayment.
     * @example
     * // Delete one StudentPayment
     * const StudentPayment = await prisma.studentPayment.delete({
     *   where: {
     *     // ... filter to delete one StudentPayment
     *   }
     * })
     * 
     */
    delete<T extends StudentPaymentDeleteArgs>(args: SelectSubset<T, StudentPaymentDeleteArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one StudentPayment.
     * @param {StudentPaymentUpdateArgs} args - Arguments to update one StudentPayment.
     * @example
     * // Update one StudentPayment
     * const studentPayment = await prisma.studentPayment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentPaymentUpdateArgs>(args: SelectSubset<T, StudentPaymentUpdateArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more StudentPayments.
     * @param {StudentPaymentDeleteManyArgs} args - Arguments to filter StudentPayments to delete.
     * @example
     * // Delete a few StudentPayments
     * const { count } = await prisma.studentPayment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentPaymentDeleteManyArgs>(args?: SelectSubset<T, StudentPaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StudentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StudentPayments
     * const studentPayment = await prisma.studentPayment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentPaymentUpdateManyArgs>(args: SelectSubset<T, StudentPaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one StudentPayment.
     * @param {StudentPaymentUpsertArgs} args - Arguments to update or create a StudentPayment.
     * @example
     * // Update or create a StudentPayment
     * const studentPayment = await prisma.studentPayment.upsert({
     *   create: {
     *     // ... data to create a StudentPayment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StudentPayment we want to update
     *   }
     * })
     */
    upsert<T extends StudentPaymentUpsertArgs>(args: SelectSubset<T, StudentPaymentUpsertArgs<ExtArgs>>): Prisma__StudentPaymentClient<$Result.GetResult<Prisma.$StudentPaymentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of StudentPayments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentCountArgs} args - Arguments to filter StudentPayments to count.
     * @example
     * // Count the number of StudentPayments
     * const count = await prisma.studentPayment.count({
     *   where: {
     *     // ... the filter for the StudentPayments we want to count
     *   }
     * })
    **/
    count<T extends StudentPaymentCountArgs>(
      args?: Subset<T, StudentPaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentPaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StudentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentPaymentAggregateArgs>(args: Subset<T, StudentPaymentAggregateArgs>): Prisma.PrismaPromise<GetStudentPaymentAggregateType<T>>

    /**
     * Group by StudentPayment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentPaymentGroupByArgs} args - Group by arguments.
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
      T extends StudentPaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentPaymentGroupByArgs['orderBy'] }
        : { orderBy?: StudentPaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentPaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StudentPayment model
   */
  readonly fields: StudentPaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StudentPayment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentPaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the StudentPayment model
   */ 
  interface StudentPaymentFieldRefs {
    readonly id: FieldRef<"StudentPayment", 'String'>
    readonly studentId: FieldRef<"StudentPayment", 'String'>
    readonly counsellorId: FieldRef<"StudentPayment", 'String'>
    readonly registrationType: FieldRef<"StudentPayment", 'RegistrationPricingType'>
    readonly schoolId: FieldRef<"StudentPayment", 'String'>
    readonly schoolName: FieldRef<"StudentPayment", 'String'>
    readonly referenceCode: FieldRef<"StudentPayment", 'String'>
    readonly referenceCodeId: FieldRef<"StudentPayment", 'String'>
    readonly amount: FieldRef<"StudentPayment", 'Int'>
    readonly currency: FieldRef<"StudentPayment", 'String'>
    readonly status: FieldRef<"StudentPayment", 'StudentPaymentStatus'>
    readonly razorpayOrderId: FieldRef<"StudentPayment", 'String'>
    readonly razorpayPaymentId: FieldRef<"StudentPayment", 'String'>
    readonly razorpaySignature: FieldRef<"StudentPayment", 'String'>
    readonly receiptNumber: FieldRef<"StudentPayment", 'String'>
    readonly receiptSent: FieldRef<"StudentPayment", 'Boolean'>
    readonly receiptSentAt: FieldRef<"StudentPayment", 'DateTime'>
    readonly failureReason: FieldRef<"StudentPayment", 'String'>
    readonly paidAt: FieldRef<"StudentPayment", 'DateTime'>
    readonly createdAt: FieldRef<"StudentPayment", 'DateTime'>
    readonly updatedAt: FieldRef<"StudentPayment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * StudentPayment findUnique
   */
  export type StudentPaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * Filter, which StudentPayment to fetch.
     */
    where: StudentPaymentWhereUniqueInput
  }

  /**
   * StudentPayment findUniqueOrThrow
   */
  export type StudentPaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * Filter, which StudentPayment to fetch.
     */
    where: StudentPaymentWhereUniqueInput
  }

  /**
   * StudentPayment findFirst
   */
  export type StudentPaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * Filter, which StudentPayment to fetch.
     */
    where?: StudentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPayments to fetch.
     */
    orderBy?: StudentPaymentOrderByWithRelationInput | StudentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPayments.
     */
    cursor?: StudentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPayments.
     */
    distinct?: StudentPaymentScalarFieldEnum | StudentPaymentScalarFieldEnum[]
  }

  /**
   * StudentPayment findFirstOrThrow
   */
  export type StudentPaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * Filter, which StudentPayment to fetch.
     */
    where?: StudentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPayments to fetch.
     */
    orderBy?: StudentPaymentOrderByWithRelationInput | StudentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StudentPayments.
     */
    cursor?: StudentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPayments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StudentPayments.
     */
    distinct?: StudentPaymentScalarFieldEnum | StudentPaymentScalarFieldEnum[]
  }

  /**
   * StudentPayment findMany
   */
  export type StudentPaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * Filter, which StudentPayments to fetch.
     */
    where?: StudentPaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StudentPayments to fetch.
     */
    orderBy?: StudentPaymentOrderByWithRelationInput | StudentPaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StudentPayments.
     */
    cursor?: StudentPaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StudentPayments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StudentPayments.
     */
    skip?: number
    distinct?: StudentPaymentScalarFieldEnum | StudentPaymentScalarFieldEnum[]
  }

  /**
   * StudentPayment create
   */
  export type StudentPaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * The data needed to create a StudentPayment.
     */
    data: XOR<StudentPaymentCreateInput, StudentPaymentUncheckedCreateInput>
  }

  /**
   * StudentPayment createMany
   */
  export type StudentPaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StudentPayments.
     */
    data: StudentPaymentCreateManyInput | StudentPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentPayment createManyAndReturn
   */
  export type StudentPaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many StudentPayments.
     */
    data: StudentPaymentCreateManyInput | StudentPaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StudentPayment update
   */
  export type StudentPaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * The data needed to update a StudentPayment.
     */
    data: XOR<StudentPaymentUpdateInput, StudentPaymentUncheckedUpdateInput>
    /**
     * Choose, which StudentPayment to update.
     */
    where: StudentPaymentWhereUniqueInput
  }

  /**
   * StudentPayment updateMany
   */
  export type StudentPaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StudentPayments.
     */
    data: XOR<StudentPaymentUpdateManyMutationInput, StudentPaymentUncheckedUpdateManyInput>
    /**
     * Filter which StudentPayments to update
     */
    where?: StudentPaymentWhereInput
  }

  /**
   * StudentPayment upsert
   */
  export type StudentPaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * The filter to search for the StudentPayment to update in case it exists.
     */
    where: StudentPaymentWhereUniqueInput
    /**
     * In case the StudentPayment found by the `where` argument doesn't exist, create a new StudentPayment with this data.
     */
    create: XOR<StudentPaymentCreateInput, StudentPaymentUncheckedCreateInput>
    /**
     * In case the StudentPayment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentPaymentUpdateInput, StudentPaymentUncheckedUpdateInput>
  }

  /**
   * StudentPayment delete
   */
  export type StudentPaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
    /**
     * Filter which StudentPayment to delete.
     */
    where: StudentPaymentWhereUniqueInput
  }

  /**
   * StudentPayment deleteMany
   */
  export type StudentPaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StudentPayments to delete
     */
    where?: StudentPaymentWhereInput
  }

  /**
   * StudentPayment without action
   */
  export type StudentPaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentPayment
     */
    select?: StudentPaymentSelect<ExtArgs> | null
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


  export const CounsellorPricingConfigScalarFieldEnum: {
    id: 'id',
    counsellorId: 'counsellorId',
    paymentEnabled: 'paymentEnabled',
    individualPrice: 'individualPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CounsellorPricingConfigScalarFieldEnum = (typeof CounsellorPricingConfigScalarFieldEnum)[keyof typeof CounsellorPricingConfigScalarFieldEnum]


  export const SchoolPricingScalarFieldEnum: {
    id: 'id',
    pricingConfigId: 'pricingConfigId',
    counsellorId: 'counsellorId',
    schoolId: 'schoolId',
    schoolName: 'schoolName',
    amount: 'amount',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SchoolPricingScalarFieldEnum = (typeof SchoolPricingScalarFieldEnum)[keyof typeof SchoolPricingScalarFieldEnum]


  export const ReferenceTokenPriceScalarFieldEnum: {
    id: 'id',
    tokenId: 'tokenId',
    code: 'code',
    counsellorId: 'counsellorId',
    type: 'type',
    targetId: 'targetId',
    amount: 'amount',
    currency: 'currency',
    label: 'label',
    startDate: 'startDate',
    expiryDate: 'expiryDate',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ReferenceTokenPriceScalarFieldEnum = (typeof ReferenceTokenPriceScalarFieldEnum)[keyof typeof ReferenceTokenPriceScalarFieldEnum]


  export const StudentPaymentScalarFieldEnum: {
    id: 'id',
    studentId: 'studentId',
    counsellorId: 'counsellorId',
    registrationType: 'registrationType',
    schoolId: 'schoolId',
    schoolName: 'schoolName',
    referenceCode: 'referenceCode',
    referenceCodeId: 'referenceCodeId',
    amount: 'amount',
    currency: 'currency',
    status: 'status',
    razorpayOrderId: 'razorpayOrderId',
    razorpayPaymentId: 'razorpayPaymentId',
    razorpaySignature: 'razorpaySignature',
    receiptNumber: 'receiptNumber',
    receiptSent: 'receiptSent',
    receiptSentAt: 'receiptSentAt',
    failureReason: 'failureReason',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type StudentPaymentScalarFieldEnum = (typeof StudentPaymentScalarFieldEnum)[keyof typeof StudentPaymentScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RegistrationPricingType'
   */
  export type EnumRegistrationPricingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationPricingType'>
    


  /**
   * Reference to a field of type 'RegistrationPricingType[]'
   */
  export type ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RegistrationPricingType[]'>
    


  /**
   * Reference to a field of type 'StudentPaymentStatus'
   */
  export type EnumStudentPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentPaymentStatus'>
    


  /**
   * Reference to a field of type 'StudentPaymentStatus[]'
   */
  export type ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'StudentPaymentStatus[]'>
    


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

  export type CounsellorPricingConfigWhereInput = {
    AND?: CounsellorPricingConfigWhereInput | CounsellorPricingConfigWhereInput[]
    OR?: CounsellorPricingConfigWhereInput[]
    NOT?: CounsellorPricingConfigWhereInput | CounsellorPricingConfigWhereInput[]
    id?: StringFilter<"CounsellorPricingConfig"> | string
    counsellorId?: StringFilter<"CounsellorPricingConfig"> | string
    paymentEnabled?: BoolFilter<"CounsellorPricingConfig"> | boolean
    individualPrice?: IntNullableFilter<"CounsellorPricingConfig"> | number | null
    createdAt?: DateTimeFilter<"CounsellorPricingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"CounsellorPricingConfig"> | Date | string
    schoolPrices?: SchoolPricingListRelationFilter
  }

  export type CounsellorPricingConfigOrderByWithRelationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    paymentEnabled?: SortOrder
    individualPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    schoolPrices?: SchoolPricingOrderByRelationAggregateInput
  }

  export type CounsellorPricingConfigWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    counsellorId?: string
    AND?: CounsellorPricingConfigWhereInput | CounsellorPricingConfigWhereInput[]
    OR?: CounsellorPricingConfigWhereInput[]
    NOT?: CounsellorPricingConfigWhereInput | CounsellorPricingConfigWhereInput[]
    paymentEnabled?: BoolFilter<"CounsellorPricingConfig"> | boolean
    individualPrice?: IntNullableFilter<"CounsellorPricingConfig"> | number | null
    createdAt?: DateTimeFilter<"CounsellorPricingConfig"> | Date | string
    updatedAt?: DateTimeFilter<"CounsellorPricingConfig"> | Date | string
    schoolPrices?: SchoolPricingListRelationFilter
  }, "id" | "counsellorId">

  export type CounsellorPricingConfigOrderByWithAggregationInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    paymentEnabled?: SortOrder
    individualPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CounsellorPricingConfigCountOrderByAggregateInput
    _avg?: CounsellorPricingConfigAvgOrderByAggregateInput
    _max?: CounsellorPricingConfigMaxOrderByAggregateInput
    _min?: CounsellorPricingConfigMinOrderByAggregateInput
    _sum?: CounsellorPricingConfigSumOrderByAggregateInput
  }

  export type CounsellorPricingConfigScalarWhereWithAggregatesInput = {
    AND?: CounsellorPricingConfigScalarWhereWithAggregatesInput | CounsellorPricingConfigScalarWhereWithAggregatesInput[]
    OR?: CounsellorPricingConfigScalarWhereWithAggregatesInput[]
    NOT?: CounsellorPricingConfigScalarWhereWithAggregatesInput | CounsellorPricingConfigScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CounsellorPricingConfig"> | string
    counsellorId?: StringWithAggregatesFilter<"CounsellorPricingConfig"> | string
    paymentEnabled?: BoolWithAggregatesFilter<"CounsellorPricingConfig"> | boolean
    individualPrice?: IntNullableWithAggregatesFilter<"CounsellorPricingConfig"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"CounsellorPricingConfig"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CounsellorPricingConfig"> | Date | string
  }

  export type SchoolPricingWhereInput = {
    AND?: SchoolPricingWhereInput | SchoolPricingWhereInput[]
    OR?: SchoolPricingWhereInput[]
    NOT?: SchoolPricingWhereInput | SchoolPricingWhereInput[]
    id?: StringFilter<"SchoolPricing"> | string
    pricingConfigId?: StringFilter<"SchoolPricing"> | string
    counsellorId?: StringFilter<"SchoolPricing"> | string
    schoolId?: StringFilter<"SchoolPricing"> | string
    schoolName?: StringFilter<"SchoolPricing"> | string
    amount?: IntFilter<"SchoolPricing"> | number
    isActive?: BoolFilter<"SchoolPricing"> | boolean
    createdAt?: DateTimeFilter<"SchoolPricing"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolPricing"> | Date | string
    pricingConfig?: XOR<CounsellorPricingConfigRelationFilter, CounsellorPricingConfigWhereInput>
  }

  export type SchoolPricingOrderByWithRelationInput = {
    id?: SortOrder
    pricingConfigId?: SortOrder
    counsellorId?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    pricingConfig?: CounsellorPricingConfigOrderByWithRelationInput
  }

  export type SchoolPricingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchoolPricingWhereInput | SchoolPricingWhereInput[]
    OR?: SchoolPricingWhereInput[]
    NOT?: SchoolPricingWhereInput | SchoolPricingWhereInput[]
    pricingConfigId?: StringFilter<"SchoolPricing"> | string
    counsellorId?: StringFilter<"SchoolPricing"> | string
    schoolId?: StringFilter<"SchoolPricing"> | string
    schoolName?: StringFilter<"SchoolPricing"> | string
    amount?: IntFilter<"SchoolPricing"> | number
    isActive?: BoolFilter<"SchoolPricing"> | boolean
    createdAt?: DateTimeFilter<"SchoolPricing"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolPricing"> | Date | string
    pricingConfig?: XOR<CounsellorPricingConfigRelationFilter, CounsellorPricingConfigWhereInput>
  }, "id">

  export type SchoolPricingOrderByWithAggregationInput = {
    id?: SortOrder
    pricingConfigId?: SortOrder
    counsellorId?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SchoolPricingCountOrderByAggregateInput
    _avg?: SchoolPricingAvgOrderByAggregateInput
    _max?: SchoolPricingMaxOrderByAggregateInput
    _min?: SchoolPricingMinOrderByAggregateInput
    _sum?: SchoolPricingSumOrderByAggregateInput
  }

  export type SchoolPricingScalarWhereWithAggregatesInput = {
    AND?: SchoolPricingScalarWhereWithAggregatesInput | SchoolPricingScalarWhereWithAggregatesInput[]
    OR?: SchoolPricingScalarWhereWithAggregatesInput[]
    NOT?: SchoolPricingScalarWhereWithAggregatesInput | SchoolPricingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SchoolPricing"> | string
    pricingConfigId?: StringWithAggregatesFilter<"SchoolPricing"> | string
    counsellorId?: StringWithAggregatesFilter<"SchoolPricing"> | string
    schoolId?: StringWithAggregatesFilter<"SchoolPricing"> | string
    schoolName?: StringWithAggregatesFilter<"SchoolPricing"> | string
    amount?: IntWithAggregatesFilter<"SchoolPricing"> | number
    isActive?: BoolWithAggregatesFilter<"SchoolPricing"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SchoolPricing"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SchoolPricing"> | Date | string
  }

  export type ReferenceTokenPriceWhereInput = {
    AND?: ReferenceTokenPriceWhereInput | ReferenceTokenPriceWhereInput[]
    OR?: ReferenceTokenPriceWhereInput[]
    NOT?: ReferenceTokenPriceWhereInput | ReferenceTokenPriceWhereInput[]
    id?: StringFilter<"ReferenceTokenPrice"> | string
    tokenId?: StringFilter<"ReferenceTokenPrice"> | string
    code?: StringFilter<"ReferenceTokenPrice"> | string
    counsellorId?: StringFilter<"ReferenceTokenPrice"> | string
    type?: StringFilter<"ReferenceTokenPrice"> | string
    targetId?: StringFilter<"ReferenceTokenPrice"> | string
    amount?: IntFilter<"ReferenceTokenPrice"> | number
    currency?: StringFilter<"ReferenceTokenPrice"> | string
    label?: StringNullableFilter<"ReferenceTokenPrice"> | string | null
    startDate?: DateTimeNullableFilter<"ReferenceTokenPrice"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"ReferenceTokenPrice"> | Date | string | null
    isActive?: BoolFilter<"ReferenceTokenPrice"> | boolean
    createdAt?: DateTimeFilter<"ReferenceTokenPrice"> | Date | string
    updatedAt?: DateTimeFilter<"ReferenceTokenPrice"> | Date | string
  }

  export type ReferenceTokenPriceOrderByWithRelationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    code?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    label?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferenceTokenPriceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    tokenId?: string
    code?: string
    AND?: ReferenceTokenPriceWhereInput | ReferenceTokenPriceWhereInput[]
    OR?: ReferenceTokenPriceWhereInput[]
    NOT?: ReferenceTokenPriceWhereInput | ReferenceTokenPriceWhereInput[]
    counsellorId?: StringFilter<"ReferenceTokenPrice"> | string
    type?: StringFilter<"ReferenceTokenPrice"> | string
    targetId?: StringFilter<"ReferenceTokenPrice"> | string
    amount?: IntFilter<"ReferenceTokenPrice"> | number
    currency?: StringFilter<"ReferenceTokenPrice"> | string
    label?: StringNullableFilter<"ReferenceTokenPrice"> | string | null
    startDate?: DateTimeNullableFilter<"ReferenceTokenPrice"> | Date | string | null
    expiryDate?: DateTimeNullableFilter<"ReferenceTokenPrice"> | Date | string | null
    isActive?: BoolFilter<"ReferenceTokenPrice"> | boolean
    createdAt?: DateTimeFilter<"ReferenceTokenPrice"> | Date | string
    updatedAt?: DateTimeFilter<"ReferenceTokenPrice"> | Date | string
  }, "id" | "tokenId" | "code">

  export type ReferenceTokenPriceOrderByWithAggregationInput = {
    id?: SortOrder
    tokenId?: SortOrder
    code?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    label?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    expiryDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ReferenceTokenPriceCountOrderByAggregateInput
    _avg?: ReferenceTokenPriceAvgOrderByAggregateInput
    _max?: ReferenceTokenPriceMaxOrderByAggregateInput
    _min?: ReferenceTokenPriceMinOrderByAggregateInput
    _sum?: ReferenceTokenPriceSumOrderByAggregateInput
  }

  export type ReferenceTokenPriceScalarWhereWithAggregatesInput = {
    AND?: ReferenceTokenPriceScalarWhereWithAggregatesInput | ReferenceTokenPriceScalarWhereWithAggregatesInput[]
    OR?: ReferenceTokenPriceScalarWhereWithAggregatesInput[]
    NOT?: ReferenceTokenPriceScalarWhereWithAggregatesInput | ReferenceTokenPriceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    tokenId?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    code?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    counsellorId?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    type?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    targetId?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    amount?: IntWithAggregatesFilter<"ReferenceTokenPrice"> | number
    currency?: StringWithAggregatesFilter<"ReferenceTokenPrice"> | string
    label?: StringNullableWithAggregatesFilter<"ReferenceTokenPrice"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"ReferenceTokenPrice"> | Date | string | null
    expiryDate?: DateTimeNullableWithAggregatesFilter<"ReferenceTokenPrice"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"ReferenceTokenPrice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"ReferenceTokenPrice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ReferenceTokenPrice"> | Date | string
  }

  export type StudentPaymentWhereInput = {
    AND?: StudentPaymentWhereInput | StudentPaymentWhereInput[]
    OR?: StudentPaymentWhereInput[]
    NOT?: StudentPaymentWhereInput | StudentPaymentWhereInput[]
    id?: StringFilter<"StudentPayment"> | string
    studentId?: StringFilter<"StudentPayment"> | string
    counsellorId?: StringFilter<"StudentPayment"> | string
    registrationType?: EnumRegistrationPricingTypeFilter<"StudentPayment"> | $Enums.RegistrationPricingType
    schoolId?: StringNullableFilter<"StudentPayment"> | string | null
    schoolName?: StringNullableFilter<"StudentPayment"> | string | null
    referenceCode?: StringNullableFilter<"StudentPayment"> | string | null
    referenceCodeId?: StringNullableFilter<"StudentPayment"> | string | null
    amount?: IntFilter<"StudentPayment"> | number
    currency?: StringFilter<"StudentPayment"> | string
    status?: EnumStudentPaymentStatusFilter<"StudentPayment"> | $Enums.StudentPaymentStatus
    razorpayOrderId?: StringNullableFilter<"StudentPayment"> | string | null
    razorpayPaymentId?: StringNullableFilter<"StudentPayment"> | string | null
    razorpaySignature?: StringNullableFilter<"StudentPayment"> | string | null
    receiptNumber?: StringNullableFilter<"StudentPayment"> | string | null
    receiptSent?: BoolFilter<"StudentPayment"> | boolean
    receiptSentAt?: DateTimeNullableFilter<"StudentPayment"> | Date | string | null
    failureReason?: StringNullableFilter<"StudentPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"StudentPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentPayment"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPayment"> | Date | string
  }

  export type StudentPaymentOrderByWithRelationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counsellorId?: SortOrder
    registrationType?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    schoolName?: SortOrderInput | SortOrder
    referenceCode?: SortOrderInput | SortOrder
    referenceCodeId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    receiptSent?: SortOrder
    receiptSentAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    studentId?: string
    razorpayOrderId?: string
    receiptNumber?: string
    AND?: StudentPaymentWhereInput | StudentPaymentWhereInput[]
    OR?: StudentPaymentWhereInput[]
    NOT?: StudentPaymentWhereInput | StudentPaymentWhereInput[]
    counsellorId?: StringFilter<"StudentPayment"> | string
    registrationType?: EnumRegistrationPricingTypeFilter<"StudentPayment"> | $Enums.RegistrationPricingType
    schoolId?: StringNullableFilter<"StudentPayment"> | string | null
    schoolName?: StringNullableFilter<"StudentPayment"> | string | null
    referenceCode?: StringNullableFilter<"StudentPayment"> | string | null
    referenceCodeId?: StringNullableFilter<"StudentPayment"> | string | null
    amount?: IntFilter<"StudentPayment"> | number
    currency?: StringFilter<"StudentPayment"> | string
    status?: EnumStudentPaymentStatusFilter<"StudentPayment"> | $Enums.StudentPaymentStatus
    razorpayPaymentId?: StringNullableFilter<"StudentPayment"> | string | null
    razorpaySignature?: StringNullableFilter<"StudentPayment"> | string | null
    receiptSent?: BoolFilter<"StudentPayment"> | boolean
    receiptSentAt?: DateTimeNullableFilter<"StudentPayment"> | Date | string | null
    failureReason?: StringNullableFilter<"StudentPayment"> | string | null
    paidAt?: DateTimeNullableFilter<"StudentPayment"> | Date | string | null
    createdAt?: DateTimeFilter<"StudentPayment"> | Date | string
    updatedAt?: DateTimeFilter<"StudentPayment"> | Date | string
  }, "id" | "studentId" | "razorpayOrderId" | "receiptNumber">

  export type StudentPaymentOrderByWithAggregationInput = {
    id?: SortOrder
    studentId?: SortOrder
    counsellorId?: SortOrder
    registrationType?: SortOrder
    schoolId?: SortOrderInput | SortOrder
    schoolName?: SortOrderInput | SortOrder
    referenceCode?: SortOrderInput | SortOrder
    referenceCodeId?: SortOrderInput | SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrderInput | SortOrder
    razorpayPaymentId?: SortOrderInput | SortOrder
    razorpaySignature?: SortOrderInput | SortOrder
    receiptNumber?: SortOrderInput | SortOrder
    receiptSent?: SortOrder
    receiptSentAt?: SortOrderInput | SortOrder
    failureReason?: SortOrderInput | SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: StudentPaymentCountOrderByAggregateInput
    _avg?: StudentPaymentAvgOrderByAggregateInput
    _max?: StudentPaymentMaxOrderByAggregateInput
    _min?: StudentPaymentMinOrderByAggregateInput
    _sum?: StudentPaymentSumOrderByAggregateInput
  }

  export type StudentPaymentScalarWhereWithAggregatesInput = {
    AND?: StudentPaymentScalarWhereWithAggregatesInput | StudentPaymentScalarWhereWithAggregatesInput[]
    OR?: StudentPaymentScalarWhereWithAggregatesInput[]
    NOT?: StudentPaymentScalarWhereWithAggregatesInput | StudentPaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StudentPayment"> | string
    studentId?: StringWithAggregatesFilter<"StudentPayment"> | string
    counsellorId?: StringWithAggregatesFilter<"StudentPayment"> | string
    registrationType?: EnumRegistrationPricingTypeWithAggregatesFilter<"StudentPayment"> | $Enums.RegistrationPricingType
    schoolId?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    schoolName?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    referenceCode?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    referenceCodeId?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    amount?: IntWithAggregatesFilter<"StudentPayment"> | number
    currency?: StringWithAggregatesFilter<"StudentPayment"> | string
    status?: EnumStudentPaymentStatusWithAggregatesFilter<"StudentPayment"> | $Enums.StudentPaymentStatus
    razorpayOrderId?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    razorpayPaymentId?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    razorpaySignature?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    receiptNumber?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    receiptSent?: BoolWithAggregatesFilter<"StudentPayment"> | boolean
    receiptSentAt?: DateTimeNullableWithAggregatesFilter<"StudentPayment"> | Date | string | null
    failureReason?: StringNullableWithAggregatesFilter<"StudentPayment"> | string | null
    paidAt?: DateTimeNullableWithAggregatesFilter<"StudentPayment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"StudentPayment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StudentPayment"> | Date | string
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

  export type CounsellorPricingConfigCreateInput = {
    id?: string
    counsellorId: string
    paymentEnabled?: boolean
    individualPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolPrices?: SchoolPricingCreateNestedManyWithoutPricingConfigInput
  }

  export type CounsellorPricingConfigUncheckedCreateInput = {
    id?: string
    counsellorId: string
    paymentEnabled?: boolean
    individualPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    schoolPrices?: SchoolPricingUncheckedCreateNestedManyWithoutPricingConfigInput
  }

  export type CounsellorPricingConfigUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    paymentEnabled?: BoolFieldUpdateOperationsInput | boolean
    individualPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolPrices?: SchoolPricingUpdateManyWithoutPricingConfigNestedInput
  }

  export type CounsellorPricingConfigUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    paymentEnabled?: BoolFieldUpdateOperationsInput | boolean
    individualPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    schoolPrices?: SchoolPricingUncheckedUpdateManyWithoutPricingConfigNestedInput
  }

  export type CounsellorPricingConfigCreateManyInput = {
    id?: string
    counsellorId: string
    paymentEnabled?: boolean
    individualPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounsellorPricingConfigUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    paymentEnabled?: BoolFieldUpdateOperationsInput | boolean
    individualPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounsellorPricingConfigUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    paymentEnabled?: BoolFieldUpdateOperationsInput | boolean
    individualPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolPricingCreateInput = {
    id?: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    pricingConfig: CounsellorPricingConfigCreateNestedOneWithoutSchoolPricesInput
  }

  export type SchoolPricingUncheckedCreateInput = {
    id?: string
    pricingConfigId: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolPricingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pricingConfig?: CounsellorPricingConfigUpdateOneRequiredWithoutSchoolPricesNestedInput
  }

  export type SchoolPricingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricingConfigId?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolPricingCreateManyInput = {
    id?: string
    pricingConfigId: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolPricingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolPricingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    pricingConfigId?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceTokenPriceCreateInput = {
    id?: string
    tokenId: string
    code: string
    counsellorId: string
    type: string
    targetId: string
    amount: number
    currency?: string
    label?: string | null
    startDate?: Date | string | null
    expiryDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferenceTokenPriceUncheckedCreateInput = {
    id?: string
    tokenId: string
    code: string
    counsellorId: string
    type: string
    targetId: string
    amount: number
    currency?: string
    label?: string | null
    startDate?: Date | string | null
    expiryDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferenceTokenPriceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceTokenPriceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceTokenPriceCreateManyInput = {
    id?: string
    tokenId: string
    code: string
    counsellorId: string
    type: string
    targetId: string
    amount: number
    currency?: string
    label?: string | null
    startDate?: Date | string | null
    expiryDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReferenceTokenPriceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReferenceTokenPriceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tokenId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    targetId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    label?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    expiryDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPaymentCreateInput = {
    id?: string
    studentId: string
    counsellorId: string
    registrationType: $Enums.RegistrationPricingType
    schoolId?: string | null
    schoolName?: string | null
    referenceCode?: string | null
    referenceCodeId?: string | null
    amount: number
    currency?: string
    status?: $Enums.StudentPaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    receiptNumber?: string | null
    receiptSent?: boolean
    receiptSentAt?: Date | string | null
    failureReason?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPaymentUncheckedCreateInput = {
    id?: string
    studentId: string
    counsellorId: string
    registrationType: $Enums.RegistrationPricingType
    schoolId?: string | null
    schoolName?: string | null
    referenceCode?: string | null
    referenceCodeId?: string | null
    amount: number
    currency?: string
    status?: $Enums.StudentPaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    receiptNumber?: string | null
    receiptSent?: boolean
    receiptSentAt?: Date | string | null
    failureReason?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    registrationType?: EnumRegistrationPricingTypeFieldUpdateOperationsInput | $Enums.RegistrationPricingType
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentPaymentStatusFieldUpdateOperationsInput | $Enums.StudentPaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSent?: BoolFieldUpdateOperationsInput | boolean
    receiptSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    registrationType?: EnumRegistrationPricingTypeFieldUpdateOperationsInput | $Enums.RegistrationPricingType
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentPaymentStatusFieldUpdateOperationsInput | $Enums.StudentPaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSent?: BoolFieldUpdateOperationsInput | boolean
    receiptSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPaymentCreateManyInput = {
    id?: string
    studentId: string
    counsellorId: string
    registrationType: $Enums.RegistrationPricingType
    schoolId?: string | null
    schoolName?: string | null
    referenceCode?: string | null
    referenceCodeId?: string | null
    amount: number
    currency?: string
    status?: $Enums.StudentPaymentStatus
    razorpayOrderId?: string | null
    razorpayPaymentId?: string | null
    razorpaySignature?: string | null
    receiptNumber?: string | null
    receiptSent?: boolean
    receiptSentAt?: Date | string | null
    failureReason?: string | null
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type StudentPaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    registrationType?: EnumRegistrationPricingTypeFieldUpdateOperationsInput | $Enums.RegistrationPricingType
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentPaymentStatusFieldUpdateOperationsInput | $Enums.StudentPaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSent?: BoolFieldUpdateOperationsInput | boolean
    receiptSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentPaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studentId?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    registrationType?: EnumRegistrationPricingTypeFieldUpdateOperationsInput | $Enums.RegistrationPricingType
    schoolId?: NullableStringFieldUpdateOperationsInput | string | null
    schoolName?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCode?: NullableStringFieldUpdateOperationsInput | string | null
    referenceCodeId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    status?: EnumStudentPaymentStatusFieldUpdateOperationsInput | $Enums.StudentPaymentStatus
    razorpayOrderId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpayPaymentId?: NullableStringFieldUpdateOperationsInput | string | null
    razorpaySignature?: NullableStringFieldUpdateOperationsInput | string | null
    receiptNumber?: NullableStringFieldUpdateOperationsInput | string | null
    receiptSent?: BoolFieldUpdateOperationsInput | boolean
    receiptSentAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    failureReason?: NullableStringFieldUpdateOperationsInput | string | null
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type SchoolPricingListRelationFilter = {
    every?: SchoolPricingWhereInput
    some?: SchoolPricingWhereInput
    none?: SchoolPricingWhereInput
  }

  export type SchoolPricingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CounsellorPricingConfigCountOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    paymentEnabled?: SortOrder
    individualPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorPricingConfigAvgOrderByAggregateInput = {
    individualPrice?: SortOrder
  }

  export type CounsellorPricingConfigMaxOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    paymentEnabled?: SortOrder
    individualPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorPricingConfigMinOrderByAggregateInput = {
    id?: SortOrder
    counsellorId?: SortOrder
    paymentEnabled?: SortOrder
    individualPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CounsellorPricingConfigSumOrderByAggregateInput = {
    individualPrice?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type CounsellorPricingConfigRelationFilter = {
    is?: CounsellorPricingConfigWhereInput
    isNot?: CounsellorPricingConfigWhereInput
  }

  export type SchoolPricingCountOrderByAggregateInput = {
    id?: SortOrder
    pricingConfigId?: SortOrder
    counsellorId?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolPricingAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type SchoolPricingMaxOrderByAggregateInput = {
    id?: SortOrder
    pricingConfigId?: SortOrder
    counsellorId?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolPricingMinOrderByAggregateInput = {
    id?: SortOrder
    pricingConfigId?: SortOrder
    counsellorId?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    amount?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SchoolPricingSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ReferenceTokenPriceCountOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    code?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    label?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferenceTokenPriceAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type ReferenceTokenPriceMaxOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    code?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    label?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferenceTokenPriceMinOrderByAggregateInput = {
    id?: SortOrder
    tokenId?: SortOrder
    code?: SortOrder
    counsellorId?: SortOrder
    type?: SortOrder
    targetId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    label?: SortOrder
    startDate?: SortOrder
    expiryDate?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ReferenceTokenPriceSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRegistrationPricingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationPricingType | EnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationPricingTypeFilter<$PrismaModel> | $Enums.RegistrationPricingType
  }

  export type EnumStudentPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentPaymentStatus | EnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentPaymentStatusFilter<$PrismaModel> | $Enums.StudentPaymentStatus
  }

  export type StudentPaymentCountOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counsellorId?: SortOrder
    registrationType?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    referenceCode?: SortOrder
    referenceCodeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    receiptNumber?: SortOrder
    receiptSent?: SortOrder
    receiptSentAt?: SortOrder
    failureReason?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type StudentPaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counsellorId?: SortOrder
    registrationType?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    referenceCode?: SortOrder
    referenceCodeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    receiptNumber?: SortOrder
    receiptSent?: SortOrder
    receiptSentAt?: SortOrder
    failureReason?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPaymentMinOrderByAggregateInput = {
    id?: SortOrder
    studentId?: SortOrder
    counsellorId?: SortOrder
    registrationType?: SortOrder
    schoolId?: SortOrder
    schoolName?: SortOrder
    referenceCode?: SortOrder
    referenceCodeId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    status?: SortOrder
    razorpayOrderId?: SortOrder
    razorpayPaymentId?: SortOrder
    razorpaySignature?: SortOrder
    receiptNumber?: SortOrder
    receiptSent?: SortOrder
    receiptSentAt?: SortOrder
    failureReason?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StudentPaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumRegistrationPricingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationPricingType | EnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationPricingTypeWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationPricingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationPricingTypeFilter<$PrismaModel>
    _max?: NestedEnumRegistrationPricingTypeFilter<$PrismaModel>
  }

  export type EnumStudentPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentPaymentStatus | EnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentPaymentStatusFilter<$PrismaModel>
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

  export type SchoolPricingCreateNestedManyWithoutPricingConfigInput = {
    create?: XOR<SchoolPricingCreateWithoutPricingConfigInput, SchoolPricingUncheckedCreateWithoutPricingConfigInput> | SchoolPricingCreateWithoutPricingConfigInput[] | SchoolPricingUncheckedCreateWithoutPricingConfigInput[]
    connectOrCreate?: SchoolPricingCreateOrConnectWithoutPricingConfigInput | SchoolPricingCreateOrConnectWithoutPricingConfigInput[]
    createMany?: SchoolPricingCreateManyPricingConfigInputEnvelope
    connect?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
  }

  export type SchoolPricingUncheckedCreateNestedManyWithoutPricingConfigInput = {
    create?: XOR<SchoolPricingCreateWithoutPricingConfigInput, SchoolPricingUncheckedCreateWithoutPricingConfigInput> | SchoolPricingCreateWithoutPricingConfigInput[] | SchoolPricingUncheckedCreateWithoutPricingConfigInput[]
    connectOrCreate?: SchoolPricingCreateOrConnectWithoutPricingConfigInput | SchoolPricingCreateOrConnectWithoutPricingConfigInput[]
    createMany?: SchoolPricingCreateManyPricingConfigInputEnvelope
    connect?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SchoolPricingUpdateManyWithoutPricingConfigNestedInput = {
    create?: XOR<SchoolPricingCreateWithoutPricingConfigInput, SchoolPricingUncheckedCreateWithoutPricingConfigInput> | SchoolPricingCreateWithoutPricingConfigInput[] | SchoolPricingUncheckedCreateWithoutPricingConfigInput[]
    connectOrCreate?: SchoolPricingCreateOrConnectWithoutPricingConfigInput | SchoolPricingCreateOrConnectWithoutPricingConfigInput[]
    upsert?: SchoolPricingUpsertWithWhereUniqueWithoutPricingConfigInput | SchoolPricingUpsertWithWhereUniqueWithoutPricingConfigInput[]
    createMany?: SchoolPricingCreateManyPricingConfigInputEnvelope
    set?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    disconnect?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    delete?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    connect?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    update?: SchoolPricingUpdateWithWhereUniqueWithoutPricingConfigInput | SchoolPricingUpdateWithWhereUniqueWithoutPricingConfigInput[]
    updateMany?: SchoolPricingUpdateManyWithWhereWithoutPricingConfigInput | SchoolPricingUpdateManyWithWhereWithoutPricingConfigInput[]
    deleteMany?: SchoolPricingScalarWhereInput | SchoolPricingScalarWhereInput[]
  }

  export type SchoolPricingUncheckedUpdateManyWithoutPricingConfigNestedInput = {
    create?: XOR<SchoolPricingCreateWithoutPricingConfigInput, SchoolPricingUncheckedCreateWithoutPricingConfigInput> | SchoolPricingCreateWithoutPricingConfigInput[] | SchoolPricingUncheckedCreateWithoutPricingConfigInput[]
    connectOrCreate?: SchoolPricingCreateOrConnectWithoutPricingConfigInput | SchoolPricingCreateOrConnectWithoutPricingConfigInput[]
    upsert?: SchoolPricingUpsertWithWhereUniqueWithoutPricingConfigInput | SchoolPricingUpsertWithWhereUniqueWithoutPricingConfigInput[]
    createMany?: SchoolPricingCreateManyPricingConfigInputEnvelope
    set?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    disconnect?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    delete?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    connect?: SchoolPricingWhereUniqueInput | SchoolPricingWhereUniqueInput[]
    update?: SchoolPricingUpdateWithWhereUniqueWithoutPricingConfigInput | SchoolPricingUpdateWithWhereUniqueWithoutPricingConfigInput[]
    updateMany?: SchoolPricingUpdateManyWithWhereWithoutPricingConfigInput | SchoolPricingUpdateManyWithWhereWithoutPricingConfigInput[]
    deleteMany?: SchoolPricingScalarWhereInput | SchoolPricingScalarWhereInput[]
  }

  export type CounsellorPricingConfigCreateNestedOneWithoutSchoolPricesInput = {
    create?: XOR<CounsellorPricingConfigCreateWithoutSchoolPricesInput, CounsellorPricingConfigUncheckedCreateWithoutSchoolPricesInput>
    connectOrCreate?: CounsellorPricingConfigCreateOrConnectWithoutSchoolPricesInput
    connect?: CounsellorPricingConfigWhereUniqueInput
  }

  export type CounsellorPricingConfigUpdateOneRequiredWithoutSchoolPricesNestedInput = {
    create?: XOR<CounsellorPricingConfigCreateWithoutSchoolPricesInput, CounsellorPricingConfigUncheckedCreateWithoutSchoolPricesInput>
    connectOrCreate?: CounsellorPricingConfigCreateOrConnectWithoutSchoolPricesInput
    upsert?: CounsellorPricingConfigUpsertWithoutSchoolPricesInput
    connect?: CounsellorPricingConfigWhereUniqueInput
    update?: XOR<XOR<CounsellorPricingConfigUpdateToOneWithWhereWithoutSchoolPricesInput, CounsellorPricingConfigUpdateWithoutSchoolPricesInput>, CounsellorPricingConfigUncheckedUpdateWithoutSchoolPricesInput>
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRegistrationPricingTypeFieldUpdateOperationsInput = {
    set?: $Enums.RegistrationPricingType
  }

  export type EnumStudentPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.StudentPaymentStatus
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRegistrationPricingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationPricingType | EnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationPricingTypeFilter<$PrismaModel> | $Enums.RegistrationPricingType
  }

  export type NestedEnumStudentPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentPaymentStatus | EnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentPaymentStatusFilter<$PrismaModel> | $Enums.StudentPaymentStatus
  }

  export type NestedEnumRegistrationPricingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RegistrationPricingType | EnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RegistrationPricingType[] | ListEnumRegistrationPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRegistrationPricingTypeWithAggregatesFilter<$PrismaModel> | $Enums.RegistrationPricingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRegistrationPricingTypeFilter<$PrismaModel>
    _max?: NestedEnumRegistrationPricingTypeFilter<$PrismaModel>
  }

  export type NestedEnumStudentPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.StudentPaymentStatus | EnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.StudentPaymentStatus[] | ListEnumStudentPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumStudentPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.StudentPaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStudentPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumStudentPaymentStatusFilter<$PrismaModel>
  }

  export type SchoolPricingCreateWithoutPricingConfigInput = {
    id?: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolPricingUncheckedCreateWithoutPricingConfigInput = {
    id?: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolPricingCreateOrConnectWithoutPricingConfigInput = {
    where: SchoolPricingWhereUniqueInput
    create: XOR<SchoolPricingCreateWithoutPricingConfigInput, SchoolPricingUncheckedCreateWithoutPricingConfigInput>
  }

  export type SchoolPricingCreateManyPricingConfigInputEnvelope = {
    data: SchoolPricingCreateManyPricingConfigInput | SchoolPricingCreateManyPricingConfigInput[]
    skipDuplicates?: boolean
  }

  export type SchoolPricingUpsertWithWhereUniqueWithoutPricingConfigInput = {
    where: SchoolPricingWhereUniqueInput
    update: XOR<SchoolPricingUpdateWithoutPricingConfigInput, SchoolPricingUncheckedUpdateWithoutPricingConfigInput>
    create: XOR<SchoolPricingCreateWithoutPricingConfigInput, SchoolPricingUncheckedCreateWithoutPricingConfigInput>
  }

  export type SchoolPricingUpdateWithWhereUniqueWithoutPricingConfigInput = {
    where: SchoolPricingWhereUniqueInput
    data: XOR<SchoolPricingUpdateWithoutPricingConfigInput, SchoolPricingUncheckedUpdateWithoutPricingConfigInput>
  }

  export type SchoolPricingUpdateManyWithWhereWithoutPricingConfigInput = {
    where: SchoolPricingScalarWhereInput
    data: XOR<SchoolPricingUpdateManyMutationInput, SchoolPricingUncheckedUpdateManyWithoutPricingConfigInput>
  }

  export type SchoolPricingScalarWhereInput = {
    AND?: SchoolPricingScalarWhereInput | SchoolPricingScalarWhereInput[]
    OR?: SchoolPricingScalarWhereInput[]
    NOT?: SchoolPricingScalarWhereInput | SchoolPricingScalarWhereInput[]
    id?: StringFilter<"SchoolPricing"> | string
    pricingConfigId?: StringFilter<"SchoolPricing"> | string
    counsellorId?: StringFilter<"SchoolPricing"> | string
    schoolId?: StringFilter<"SchoolPricing"> | string
    schoolName?: StringFilter<"SchoolPricing"> | string
    amount?: IntFilter<"SchoolPricing"> | number
    isActive?: BoolFilter<"SchoolPricing"> | boolean
    createdAt?: DateTimeFilter<"SchoolPricing"> | Date | string
    updatedAt?: DateTimeFilter<"SchoolPricing"> | Date | string
  }

  export type CounsellorPricingConfigCreateWithoutSchoolPricesInput = {
    id?: string
    counsellorId: string
    paymentEnabled?: boolean
    individualPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounsellorPricingConfigUncheckedCreateWithoutSchoolPricesInput = {
    id?: string
    counsellorId: string
    paymentEnabled?: boolean
    individualPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CounsellorPricingConfigCreateOrConnectWithoutSchoolPricesInput = {
    where: CounsellorPricingConfigWhereUniqueInput
    create: XOR<CounsellorPricingConfigCreateWithoutSchoolPricesInput, CounsellorPricingConfigUncheckedCreateWithoutSchoolPricesInput>
  }

  export type CounsellorPricingConfigUpsertWithoutSchoolPricesInput = {
    update: XOR<CounsellorPricingConfigUpdateWithoutSchoolPricesInput, CounsellorPricingConfigUncheckedUpdateWithoutSchoolPricesInput>
    create: XOR<CounsellorPricingConfigCreateWithoutSchoolPricesInput, CounsellorPricingConfigUncheckedCreateWithoutSchoolPricesInput>
    where?: CounsellorPricingConfigWhereInput
  }

  export type CounsellorPricingConfigUpdateToOneWithWhereWithoutSchoolPricesInput = {
    where?: CounsellorPricingConfigWhereInput
    data: XOR<CounsellorPricingConfigUpdateWithoutSchoolPricesInput, CounsellorPricingConfigUncheckedUpdateWithoutSchoolPricesInput>
  }

  export type CounsellorPricingConfigUpdateWithoutSchoolPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    paymentEnabled?: BoolFieldUpdateOperationsInput | boolean
    individualPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CounsellorPricingConfigUncheckedUpdateWithoutSchoolPricesInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    paymentEnabled?: BoolFieldUpdateOperationsInput | boolean
    individualPrice?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolPricingCreateManyPricingConfigInput = {
    id?: string
    counsellorId: string
    schoolId: string
    schoolName: string
    amount: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SchoolPricingUpdateWithoutPricingConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolPricingUncheckedUpdateWithoutPricingConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SchoolPricingUncheckedUpdateManyWithoutPricingConfigInput = {
    id?: StringFieldUpdateOperationsInput | string
    counsellorId?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    schoolName?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use CounsellorPricingConfigCountOutputTypeDefaultArgs instead
     */
    export type CounsellorPricingConfigCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CounsellorPricingConfigCountOutputTypeDefaultArgs<ExtArgs>
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
     * @deprecated Use CounsellorPricingConfigDefaultArgs instead
     */
    export type CounsellorPricingConfigArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CounsellorPricingConfigDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SchoolPricingDefaultArgs instead
     */
    export type SchoolPricingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = SchoolPricingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReferenceTokenPriceDefaultArgs instead
     */
    export type ReferenceTokenPriceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReferenceTokenPriceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use StudentPaymentDefaultArgs instead
     */
    export type StudentPaymentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = StudentPaymentDefaultArgs<ExtArgs>

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