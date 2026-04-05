
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
 * Model AssessmentTrait
 * 
 */
export type AssessmentTrait = $Result.DefaultSelection<Prisma.$AssessmentTraitPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model QuestionTranslation
 * 
 */
export type QuestionTranslation = $Result.DefaultSelection<Prisma.$QuestionTranslationPayload>
/**
 * Model QuestionOption
 * 
 */
export type QuestionOption = $Result.DefaultSelection<Prisma.$QuestionOptionPayload>
/**
 * Model OptionTranslation
 * 
 */
export type OptionTranslation = $Result.DefaultSelection<Prisma.$OptionTranslationPayload>
/**
 * Model AssessmentScore
 * 
 */
export type AssessmentScore = $Result.DefaultSelection<Prisma.$AssessmentScorePayload>
/**
 * Model UserAssessmentProgress
 * 
 */
export type UserAssessmentProgress = $Result.DefaultSelection<Prisma.$UserAssessmentProgressPayload>
/**
 * Model UserAssessmentPreference
 * 
 */
export type UserAssessmentPreference = $Result.DefaultSelection<Prisma.$UserAssessmentPreferencePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const AssessmentType: {
  OCEAN: 'OCEAN',
  RIASEC: 'RIASEC',
  APTITUDE: 'APTITUDE'
};

export type AssessmentType = (typeof AssessmentType)[keyof typeof AssessmentType]

}

export type AssessmentType = $Enums.AssessmentType

export const AssessmentType: typeof $Enums.AssessmentType

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more AssessmentTraits
 * const assessmentTraits = await prisma.assessmentTrait.findMany()
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
   * // Fetch zero or more AssessmentTraits
   * const assessmentTraits = await prisma.assessmentTrait.findMany()
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
   * `prisma.assessmentTrait`: Exposes CRUD operations for the **AssessmentTrait** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentTraits
    * const assessmentTraits = await prisma.assessmentTrait.findMany()
    * ```
    */
  get assessmentTrait(): Prisma.AssessmentTraitDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.questionTranslation`: Exposes CRUD operations for the **QuestionTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionTranslations
    * const questionTranslations = await prisma.questionTranslation.findMany()
    * ```
    */
  get questionTranslation(): Prisma.QuestionTranslationDelegate<ExtArgs>;

  /**
   * `prisma.questionOption`: Exposes CRUD operations for the **QuestionOption** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more QuestionOptions
    * const questionOptions = await prisma.questionOption.findMany()
    * ```
    */
  get questionOption(): Prisma.QuestionOptionDelegate<ExtArgs>;

  /**
   * `prisma.optionTranslation`: Exposes CRUD operations for the **OptionTranslation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OptionTranslations
    * const optionTranslations = await prisma.optionTranslation.findMany()
    * ```
    */
  get optionTranslation(): Prisma.OptionTranslationDelegate<ExtArgs>;

  /**
   * `prisma.assessmentScore`: Exposes CRUD operations for the **AssessmentScore** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AssessmentScores
    * const assessmentScores = await prisma.assessmentScore.findMany()
    * ```
    */
  get assessmentScore(): Prisma.AssessmentScoreDelegate<ExtArgs>;

  /**
   * `prisma.userAssessmentProgress`: Exposes CRUD operations for the **UserAssessmentProgress** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAssessmentProgresses
    * const userAssessmentProgresses = await prisma.userAssessmentProgress.findMany()
    * ```
    */
  get userAssessmentProgress(): Prisma.UserAssessmentProgressDelegate<ExtArgs>;

  /**
   * `prisma.userAssessmentPreference`: Exposes CRUD operations for the **UserAssessmentPreference** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserAssessmentPreferences
    * const userAssessmentPreferences = await prisma.userAssessmentPreference.findMany()
    * ```
    */
  get userAssessmentPreference(): Prisma.UserAssessmentPreferenceDelegate<ExtArgs>;
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
    AssessmentTrait: 'AssessmentTrait',
    Question: 'Question',
    QuestionTranslation: 'QuestionTranslation',
    QuestionOption: 'QuestionOption',
    OptionTranslation: 'OptionTranslation',
    AssessmentScore: 'AssessmentScore',
    UserAssessmentProgress: 'UserAssessmentProgress',
    UserAssessmentPreference: 'UserAssessmentPreference'
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
      modelProps: "assessmentTrait" | "question" | "questionTranslation" | "questionOption" | "optionTranslation" | "assessmentScore" | "userAssessmentProgress" | "userAssessmentPreference"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      AssessmentTrait: {
        payload: Prisma.$AssessmentTraitPayload<ExtArgs>
        fields: Prisma.AssessmentTraitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentTraitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentTraitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>
          }
          findFirst: {
            args: Prisma.AssessmentTraitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentTraitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>
          }
          findMany: {
            args: Prisma.AssessmentTraitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>[]
          }
          create: {
            args: Prisma.AssessmentTraitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>
          }
          createMany: {
            args: Prisma.AssessmentTraitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentTraitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>[]
          }
          delete: {
            args: Prisma.AssessmentTraitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>
          }
          update: {
            args: Prisma.AssessmentTraitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>
          }
          deleteMany: {
            args: Prisma.AssessmentTraitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentTraitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentTraitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentTraitPayload>
          }
          aggregate: {
            args: Prisma.AssessmentTraitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentTrait>
          }
          groupBy: {
            args: Prisma.AssessmentTraitGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentTraitGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentTraitCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentTraitCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      QuestionTranslation: {
        payload: Prisma.$QuestionTranslationPayload<ExtArgs>
        fields: Prisma.QuestionTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          findFirst: {
            args: Prisma.QuestionTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          findMany: {
            args: Prisma.QuestionTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>[]
          }
          create: {
            args: Prisma.QuestionTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          createMany: {
            args: Prisma.QuestionTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>[]
          }
          delete: {
            args: Prisma.QuestionTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          update: {
            args: Prisma.QuestionTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          deleteMany: {
            args: Prisma.QuestionTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionTranslationPayload>
          }
          aggregate: {
            args: Prisma.QuestionTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionTranslation>
          }
          groupBy: {
            args: Prisma.QuestionTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionTranslationCountAggregateOutputType> | number
          }
        }
      }
      QuestionOption: {
        payload: Prisma.$QuestionOptionPayload<ExtArgs>
        fields: Prisma.QuestionOptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionOptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionOptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          findFirst: {
            args: Prisma.QuestionOptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionOptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          findMany: {
            args: Prisma.QuestionOptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[]
          }
          create: {
            args: Prisma.QuestionOptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          createMany: {
            args: Prisma.QuestionOptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionOptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>[]
          }
          delete: {
            args: Prisma.QuestionOptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          update: {
            args: Prisma.QuestionOptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionOptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionOptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionOptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionOptionPayload>
          }
          aggregate: {
            args: Prisma.QuestionOptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestionOption>
          }
          groupBy: {
            args: Prisma.QuestionOptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionOptionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionOptionCountAggregateOutputType> | number
          }
        }
      }
      OptionTranslation: {
        payload: Prisma.$OptionTranslationPayload<ExtArgs>
        fields: Prisma.OptionTranslationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OptionTranslationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OptionTranslationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>
          }
          findFirst: {
            args: Prisma.OptionTranslationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OptionTranslationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>
          }
          findMany: {
            args: Prisma.OptionTranslationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>[]
          }
          create: {
            args: Prisma.OptionTranslationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>
          }
          createMany: {
            args: Prisma.OptionTranslationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OptionTranslationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>[]
          }
          delete: {
            args: Prisma.OptionTranslationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>
          }
          update: {
            args: Prisma.OptionTranslationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>
          }
          deleteMany: {
            args: Prisma.OptionTranslationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OptionTranslationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OptionTranslationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OptionTranslationPayload>
          }
          aggregate: {
            args: Prisma.OptionTranslationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOptionTranslation>
          }
          groupBy: {
            args: Prisma.OptionTranslationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OptionTranslationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OptionTranslationCountArgs<ExtArgs>
            result: $Utils.Optional<OptionTranslationCountAggregateOutputType> | number
          }
        }
      }
      AssessmentScore: {
        payload: Prisma.$AssessmentScorePayload<ExtArgs>
        fields: Prisma.AssessmentScoreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssessmentScoreFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssessmentScoreFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>
          }
          findFirst: {
            args: Prisma.AssessmentScoreFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssessmentScoreFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>
          }
          findMany: {
            args: Prisma.AssessmentScoreFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>[]
          }
          create: {
            args: Prisma.AssessmentScoreCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>
          }
          createMany: {
            args: Prisma.AssessmentScoreCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssessmentScoreCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>[]
          }
          delete: {
            args: Prisma.AssessmentScoreDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>
          }
          update: {
            args: Prisma.AssessmentScoreUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>
          }
          deleteMany: {
            args: Prisma.AssessmentScoreDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssessmentScoreUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AssessmentScoreUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssessmentScorePayload>
          }
          aggregate: {
            args: Prisma.AssessmentScoreAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssessmentScore>
          }
          groupBy: {
            args: Prisma.AssessmentScoreGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssessmentScoreGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssessmentScoreCountArgs<ExtArgs>
            result: $Utils.Optional<AssessmentScoreCountAggregateOutputType> | number
          }
        }
      }
      UserAssessmentProgress: {
        payload: Prisma.$UserAssessmentProgressPayload<ExtArgs>
        fields: Prisma.UserAssessmentProgressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAssessmentProgressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAssessmentProgressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>
          }
          findFirst: {
            args: Prisma.UserAssessmentProgressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAssessmentProgressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>
          }
          findMany: {
            args: Prisma.UserAssessmentProgressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>[]
          }
          create: {
            args: Prisma.UserAssessmentProgressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>
          }
          createMany: {
            args: Prisma.UserAssessmentProgressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAssessmentProgressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>[]
          }
          delete: {
            args: Prisma.UserAssessmentProgressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>
          }
          update: {
            args: Prisma.UserAssessmentProgressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>
          }
          deleteMany: {
            args: Prisma.UserAssessmentProgressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAssessmentProgressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAssessmentProgressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentProgressPayload>
          }
          aggregate: {
            args: Prisma.UserAssessmentProgressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAssessmentProgress>
          }
          groupBy: {
            args: Prisma.UserAssessmentProgressGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAssessmentProgressGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAssessmentProgressCountArgs<ExtArgs>
            result: $Utils.Optional<UserAssessmentProgressCountAggregateOutputType> | number
          }
        }
      }
      UserAssessmentPreference: {
        payload: Prisma.$UserAssessmentPreferencePayload<ExtArgs>
        fields: Prisma.UserAssessmentPreferenceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserAssessmentPreferenceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserAssessmentPreferenceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>
          }
          findFirst: {
            args: Prisma.UserAssessmentPreferenceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserAssessmentPreferenceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>
          }
          findMany: {
            args: Prisma.UserAssessmentPreferenceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>[]
          }
          create: {
            args: Prisma.UserAssessmentPreferenceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>
          }
          createMany: {
            args: Prisma.UserAssessmentPreferenceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserAssessmentPreferenceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>[]
          }
          delete: {
            args: Prisma.UserAssessmentPreferenceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>
          }
          update: {
            args: Prisma.UserAssessmentPreferenceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>
          }
          deleteMany: {
            args: Prisma.UserAssessmentPreferenceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserAssessmentPreferenceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserAssessmentPreferenceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserAssessmentPreferencePayload>
          }
          aggregate: {
            args: Prisma.UserAssessmentPreferenceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserAssessmentPreference>
          }
          groupBy: {
            args: Prisma.UserAssessmentPreferenceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserAssessmentPreferenceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserAssessmentPreferenceCountArgs<ExtArgs>
            result: $Utils.Optional<UserAssessmentPreferenceCountAggregateOutputType> | number
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
   * Count Type AssessmentTraitCountOutputType
   */

  export type AssessmentTraitCountOutputType = {
    questions: number
  }

  export type AssessmentTraitCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | AssessmentTraitCountOutputTypeCountQuestionsArgs
  }

  // Custom InputTypes
  /**
   * AssessmentTraitCountOutputType without action
   */
  export type AssessmentTraitCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTraitCountOutputType
     */
    select?: AssessmentTraitCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssessmentTraitCountOutputType without action
   */
  export type AssessmentTraitCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    translations: number
    options: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | QuestionCountOutputTypeCountTranslationsArgs
    options?: boolean | QuestionCountOutputTypeCountOptionsArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTranslationWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountOptionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionOptionWhereInput
  }


  /**
   * Count Type QuestionOptionCountOutputType
   */

  export type QuestionOptionCountOutputType = {
    translations: number
  }

  export type QuestionOptionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    translations?: boolean | QuestionOptionCountOutputTypeCountTranslationsArgs
  }

  // Custom InputTypes
  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOptionCountOutputType
     */
    select?: QuestionOptionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionOptionCountOutputType without action
   */
  export type QuestionOptionCountOutputTypeCountTranslationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionTranslationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model AssessmentTrait
   */

  export type AggregateAssessmentTrait = {
    _count: AssessmentTraitCountAggregateOutputType | null
    _min: AssessmentTraitMinAggregateOutputType | null
    _max: AssessmentTraitMaxAggregateOutputType | null
  }

  export type AssessmentTraitMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    assessmentType: $Enums.AssessmentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentTraitMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    assessmentType: $Enums.AssessmentType | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssessmentTraitCountAggregateOutputType = {
    id: number
    code: number
    name: number
    assessmentType: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssessmentTraitMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    assessmentType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentTraitMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    assessmentType?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssessmentTraitCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    assessmentType?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssessmentTraitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentTrait to aggregate.
     */
    where?: AssessmentTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentTraits to fetch.
     */
    orderBy?: AssessmentTraitOrderByWithRelationInput | AssessmentTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentTraits
    **/
    _count?: true | AssessmentTraitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentTraitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentTraitMaxAggregateInputType
  }

  export type GetAssessmentTraitAggregateType<T extends AssessmentTraitAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentTrait]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentTrait[P]>
      : GetScalarType<T[P], AggregateAssessmentTrait[P]>
  }




  export type AssessmentTraitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentTraitWhereInput
    orderBy?: AssessmentTraitOrderByWithAggregationInput | AssessmentTraitOrderByWithAggregationInput[]
    by: AssessmentTraitScalarFieldEnum[] | AssessmentTraitScalarFieldEnum
    having?: AssessmentTraitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentTraitCountAggregateInputType | true
    _min?: AssessmentTraitMinAggregateInputType
    _max?: AssessmentTraitMaxAggregateInputType
  }

  export type AssessmentTraitGroupByOutputType = {
    id: string
    code: string
    name: string
    assessmentType: $Enums.AssessmentType
    createdAt: Date
    updatedAt: Date
    _count: AssessmentTraitCountAggregateOutputType | null
    _min: AssessmentTraitMinAggregateOutputType | null
    _max: AssessmentTraitMaxAggregateOutputType | null
  }

  type GetAssessmentTraitGroupByPayload<T extends AssessmentTraitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentTraitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentTraitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentTraitGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentTraitGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentTraitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    assessmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | AssessmentTrait$questionsArgs<ExtArgs>
    _count?: boolean | AssessmentTraitCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assessmentTrait"]>

  export type AssessmentTraitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    assessmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["assessmentTrait"]>

  export type AssessmentTraitSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    assessmentType?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssessmentTraitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | AssessmentTrait$questionsArgs<ExtArgs>
    _count?: boolean | AssessmentTraitCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssessmentTraitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AssessmentTraitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentTrait"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      assessmentType: $Enums.AssessmentType
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assessmentTrait"]>
    composites: {}
  }

  type AssessmentTraitGetPayload<S extends boolean | null | undefined | AssessmentTraitDefaultArgs> = $Result.GetResult<Prisma.$AssessmentTraitPayload, S>

  type AssessmentTraitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentTraitFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentTraitCountAggregateInputType | true
    }

  export interface AssessmentTraitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentTrait'], meta: { name: 'AssessmentTrait' } }
    /**
     * Find zero or one AssessmentTrait that matches the filter.
     * @param {AssessmentTraitFindUniqueArgs} args - Arguments to find a AssessmentTrait
     * @example
     * // Get one AssessmentTrait
     * const assessmentTrait = await prisma.assessmentTrait.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentTraitFindUniqueArgs>(args: SelectSubset<T, AssessmentTraitFindUniqueArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentTrait that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentTraitFindUniqueOrThrowArgs} args - Arguments to find a AssessmentTrait
     * @example
     * // Get one AssessmentTrait
     * const assessmentTrait = await prisma.assessmentTrait.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentTraitFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentTraitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentTrait that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitFindFirstArgs} args - Arguments to find a AssessmentTrait
     * @example
     * // Get one AssessmentTrait
     * const assessmentTrait = await prisma.assessmentTrait.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentTraitFindFirstArgs>(args?: SelectSubset<T, AssessmentTraitFindFirstArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentTrait that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitFindFirstOrThrowArgs} args - Arguments to find a AssessmentTrait
     * @example
     * // Get one AssessmentTrait
     * const assessmentTrait = await prisma.assessmentTrait.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentTraitFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentTraitFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentTraits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentTraits
     * const assessmentTraits = await prisma.assessmentTrait.findMany()
     * 
     * // Get first 10 AssessmentTraits
     * const assessmentTraits = await prisma.assessmentTrait.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentTraitWithIdOnly = await prisma.assessmentTrait.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentTraitFindManyArgs>(args?: SelectSubset<T, AssessmentTraitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentTrait.
     * @param {AssessmentTraitCreateArgs} args - Arguments to create a AssessmentTrait.
     * @example
     * // Create one AssessmentTrait
     * const AssessmentTrait = await prisma.assessmentTrait.create({
     *   data: {
     *     // ... data to create a AssessmentTrait
     *   }
     * })
     * 
     */
    create<T extends AssessmentTraitCreateArgs>(args: SelectSubset<T, AssessmentTraitCreateArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentTraits.
     * @param {AssessmentTraitCreateManyArgs} args - Arguments to create many AssessmentTraits.
     * @example
     * // Create many AssessmentTraits
     * const assessmentTrait = await prisma.assessmentTrait.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentTraitCreateManyArgs>(args?: SelectSubset<T, AssessmentTraitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentTraits and returns the data saved in the database.
     * @param {AssessmentTraitCreateManyAndReturnArgs} args - Arguments to create many AssessmentTraits.
     * @example
     * // Create many AssessmentTraits
     * const assessmentTrait = await prisma.assessmentTrait.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentTraits and only return the `id`
     * const assessmentTraitWithIdOnly = await prisma.assessmentTrait.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentTraitCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentTraitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssessmentTrait.
     * @param {AssessmentTraitDeleteArgs} args - Arguments to delete one AssessmentTrait.
     * @example
     * // Delete one AssessmentTrait
     * const AssessmentTrait = await prisma.assessmentTrait.delete({
     *   where: {
     *     // ... filter to delete one AssessmentTrait
     *   }
     * })
     * 
     */
    delete<T extends AssessmentTraitDeleteArgs>(args: SelectSubset<T, AssessmentTraitDeleteArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentTrait.
     * @param {AssessmentTraitUpdateArgs} args - Arguments to update one AssessmentTrait.
     * @example
     * // Update one AssessmentTrait
     * const assessmentTrait = await prisma.assessmentTrait.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentTraitUpdateArgs>(args: SelectSubset<T, AssessmentTraitUpdateArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentTraits.
     * @param {AssessmentTraitDeleteManyArgs} args - Arguments to filter AssessmentTraits to delete.
     * @example
     * // Delete a few AssessmentTraits
     * const { count } = await prisma.assessmentTrait.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentTraitDeleteManyArgs>(args?: SelectSubset<T, AssessmentTraitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentTraits
     * const assessmentTrait = await prisma.assessmentTrait.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentTraitUpdateManyArgs>(args: SelectSubset<T, AssessmentTraitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentTrait.
     * @param {AssessmentTraitUpsertArgs} args - Arguments to update or create a AssessmentTrait.
     * @example
     * // Update or create a AssessmentTrait
     * const assessmentTrait = await prisma.assessmentTrait.upsert({
     *   create: {
     *     // ... data to create a AssessmentTrait
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentTrait we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentTraitUpsertArgs>(args: SelectSubset<T, AssessmentTraitUpsertArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentTraits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitCountArgs} args - Arguments to filter AssessmentTraits to count.
     * @example
     * // Count the number of AssessmentTraits
     * const count = await prisma.assessmentTrait.count({
     *   where: {
     *     // ... the filter for the AssessmentTraits we want to count
     *   }
     * })
    **/
    count<T extends AssessmentTraitCountArgs>(
      args?: Subset<T, AssessmentTraitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentTraitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentTraitAggregateArgs>(args: Subset<T, AssessmentTraitAggregateArgs>): Prisma.PrismaPromise<GetAssessmentTraitAggregateType<T>>

    /**
     * Group by AssessmentTrait.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentTraitGroupByArgs} args - Group by arguments.
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
      T extends AssessmentTraitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentTraitGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentTraitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentTraitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentTraitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentTrait model
   */
  readonly fields: AssessmentTraitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentTrait.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentTraitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends AssessmentTrait$questionsArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentTrait$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the AssessmentTrait model
   */ 
  interface AssessmentTraitFieldRefs {
    readonly id: FieldRef<"AssessmentTrait", 'String'>
    readonly code: FieldRef<"AssessmentTrait", 'String'>
    readonly name: FieldRef<"AssessmentTrait", 'String'>
    readonly assessmentType: FieldRef<"AssessmentTrait", 'AssessmentType'>
    readonly createdAt: FieldRef<"AssessmentTrait", 'DateTime'>
    readonly updatedAt: FieldRef<"AssessmentTrait", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentTrait findUnique
   */
  export type AssessmentTraitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentTrait to fetch.
     */
    where: AssessmentTraitWhereUniqueInput
  }

  /**
   * AssessmentTrait findUniqueOrThrow
   */
  export type AssessmentTraitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentTrait to fetch.
     */
    where: AssessmentTraitWhereUniqueInput
  }

  /**
   * AssessmentTrait findFirst
   */
  export type AssessmentTraitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentTrait to fetch.
     */
    where?: AssessmentTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentTraits to fetch.
     */
    orderBy?: AssessmentTraitOrderByWithRelationInput | AssessmentTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentTraits.
     */
    cursor?: AssessmentTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentTraits.
     */
    distinct?: AssessmentTraitScalarFieldEnum | AssessmentTraitScalarFieldEnum[]
  }

  /**
   * AssessmentTrait findFirstOrThrow
   */
  export type AssessmentTraitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentTrait to fetch.
     */
    where?: AssessmentTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentTraits to fetch.
     */
    orderBy?: AssessmentTraitOrderByWithRelationInput | AssessmentTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentTraits.
     */
    cursor?: AssessmentTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentTraits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentTraits.
     */
    distinct?: AssessmentTraitScalarFieldEnum | AssessmentTraitScalarFieldEnum[]
  }

  /**
   * AssessmentTrait findMany
   */
  export type AssessmentTraitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * Filter, which AssessmentTraits to fetch.
     */
    where?: AssessmentTraitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentTraits to fetch.
     */
    orderBy?: AssessmentTraitOrderByWithRelationInput | AssessmentTraitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentTraits.
     */
    cursor?: AssessmentTraitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentTraits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentTraits.
     */
    skip?: number
    distinct?: AssessmentTraitScalarFieldEnum | AssessmentTraitScalarFieldEnum[]
  }

  /**
   * AssessmentTrait create
   */
  export type AssessmentTraitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * The data needed to create a AssessmentTrait.
     */
    data: XOR<AssessmentTraitCreateInput, AssessmentTraitUncheckedCreateInput>
  }

  /**
   * AssessmentTrait createMany
   */
  export type AssessmentTraitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentTraits.
     */
    data: AssessmentTraitCreateManyInput | AssessmentTraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentTrait createManyAndReturn
   */
  export type AssessmentTraitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssessmentTraits.
     */
    data: AssessmentTraitCreateManyInput | AssessmentTraitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentTrait update
   */
  export type AssessmentTraitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * The data needed to update a AssessmentTrait.
     */
    data: XOR<AssessmentTraitUpdateInput, AssessmentTraitUncheckedUpdateInput>
    /**
     * Choose, which AssessmentTrait to update.
     */
    where: AssessmentTraitWhereUniqueInput
  }

  /**
   * AssessmentTrait updateMany
   */
  export type AssessmentTraitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentTraits.
     */
    data: XOR<AssessmentTraitUpdateManyMutationInput, AssessmentTraitUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentTraits to update
     */
    where?: AssessmentTraitWhereInput
  }

  /**
   * AssessmentTrait upsert
   */
  export type AssessmentTraitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * The filter to search for the AssessmentTrait to update in case it exists.
     */
    where: AssessmentTraitWhereUniqueInput
    /**
     * In case the AssessmentTrait found by the `where` argument doesn't exist, create a new AssessmentTrait with this data.
     */
    create: XOR<AssessmentTraitCreateInput, AssessmentTraitUncheckedCreateInput>
    /**
     * In case the AssessmentTrait was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentTraitUpdateInput, AssessmentTraitUncheckedUpdateInput>
  }

  /**
   * AssessmentTrait delete
   */
  export type AssessmentTraitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
    /**
     * Filter which AssessmentTrait to delete.
     */
    where: AssessmentTraitWhereUniqueInput
  }

  /**
   * AssessmentTrait deleteMany
   */
  export type AssessmentTraitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentTraits to delete
     */
    where?: AssessmentTraitWhereInput
  }

  /**
   * AssessmentTrait.questions
   */
  export type AssessmentTrait$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * AssessmentTrait without action
   */
  export type AssessmentTraitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentTrait
     */
    select?: AssessmentTraitSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssessmentTraitInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionAvgAggregateOutputType = {
    order: number | null
    timeLimitSeconds: number | null
  }

  export type QuestionSumAggregateOutputType = {
    order: number | null
    timeLimitSeconds: number | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    traitId: string | null
    order: number | null
    reverse: boolean | null
    timeLimitSeconds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    traitId: string | null
    order: number | null
    reverse: boolean | null
    timeLimitSeconds: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    traitId: number
    order: number
    reverse: number
    timeLimitSeconds: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionAvgAggregateInputType = {
    order?: true
    timeLimitSeconds?: true
  }

  export type QuestionSumAggregateInputType = {
    order?: true
    timeLimitSeconds?: true
  }

  export type QuestionMinAggregateInputType = {
    id?: true
    traitId?: true
    order?: true
    reverse?: true
    timeLimitSeconds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    traitId?: true
    order?: true
    reverse?: true
    timeLimitSeconds?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    traitId?: true
    order?: true
    reverse?: true
    timeLimitSeconds?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _avg?: QuestionAvgAggregateInputType
    _sum?: QuestionSumAggregateInputType
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    traitId: string
    order: number
    reverse: boolean
    timeLimitSeconds: number | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _avg: QuestionAvgAggregateOutputType | null
    _sum: QuestionSumAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    traitId?: boolean
    order?: boolean
    reverse?: boolean
    timeLimitSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trait?: boolean | AssessmentTraitDefaultArgs<ExtArgs>
    translations?: boolean | Question$translationsArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    traitId?: boolean
    order?: boolean
    reverse?: boolean
    timeLimitSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    trait?: boolean | AssessmentTraitDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    traitId?: boolean
    order?: boolean
    reverse?: boolean
    timeLimitSeconds?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trait?: boolean | AssessmentTraitDefaultArgs<ExtArgs>
    translations?: boolean | Question$translationsArgs<ExtArgs>
    options?: boolean | Question$optionsArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    trait?: boolean | AssessmentTraitDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      trait: Prisma.$AssessmentTraitPayload<ExtArgs>
      translations: Prisma.$QuestionTranslationPayload<ExtArgs>[]
      options: Prisma.$QuestionOptionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      traitId: string
      order: number
      reverse: boolean
      timeLimitSeconds: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
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
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    trait<T extends AssessmentTraitDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssessmentTraitDefaultArgs<ExtArgs>>): Prisma__AssessmentTraitClient<$Result.GetResult<Prisma.$AssessmentTraitPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    translations<T extends Question$translationsArgs<ExtArgs> = {}>(args?: Subset<T, Question$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findMany"> | Null>
    options<T extends Question$optionsArgs<ExtArgs> = {}>(args?: Subset<T, Question$optionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly traitId: FieldRef<"Question", 'String'>
    readonly order: FieldRef<"Question", 'Int'>
    readonly reverse: FieldRef<"Question", 'Boolean'>
    readonly timeLimitSeconds: FieldRef<"Question", 'Int'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.translations
   */
  export type Question$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    where?: QuestionTranslationWhereInput
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    cursor?: QuestionTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * Question.options
   */
  export type Question$optionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    where?: QuestionOptionWhereInput
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    cursor?: QuestionOptionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model QuestionTranslation
   */

  export type AggregateQuestionTranslation = {
    _count: QuestionTranslationCountAggregateOutputType | null
    _min: QuestionTranslationMinAggregateOutputType | null
    _max: QuestionTranslationMaxAggregateOutputType | null
  }

  export type QuestionTranslationMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    language: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionTranslationMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    language: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionTranslationCountAggregateOutputType = {
    id: number
    questionId: number
    language: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionTranslationMinAggregateInputType = {
    id?: true
    questionId?: true
    language?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionTranslationMaxAggregateInputType = {
    id?: true
    questionId?: true
    language?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionTranslationCountAggregateInputType = {
    id?: true
    questionId?: true
    language?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTranslation to aggregate.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionTranslations
    **/
    _count?: true | QuestionTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionTranslationMaxAggregateInputType
  }

  export type GetQuestionTranslationAggregateType<T extends QuestionTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionTranslation[P]>
      : GetScalarType<T[P], AggregateQuestionTranslation[P]>
  }




  export type QuestionTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionTranslationWhereInput
    orderBy?: QuestionTranslationOrderByWithAggregationInput | QuestionTranslationOrderByWithAggregationInput[]
    by: QuestionTranslationScalarFieldEnum[] | QuestionTranslationScalarFieldEnum
    having?: QuestionTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionTranslationCountAggregateInputType | true
    _min?: QuestionTranslationMinAggregateInputType
    _max?: QuestionTranslationMaxAggregateInputType
  }

  export type QuestionTranslationGroupByOutputType = {
    id: string
    questionId: string
    language: string
    text: string
    createdAt: Date
    updatedAt: Date
    _count: QuestionTranslationCountAggregateOutputType | null
    _min: QuestionTranslationMinAggregateOutputType | null
    _max: QuestionTranslationMaxAggregateOutputType | null
  }

  type GetQuestionTranslationGroupByPayload<T extends QuestionTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionTranslationGroupByOutputType[P]>
        }
      >
    >


  export type QuestionTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    language?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTranslation"]>

  export type QuestionTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    language?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionTranslation"]>

  export type QuestionTranslationSelectScalar = {
    id?: boolean
    questionId?: boolean
    language?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }
  export type QuestionTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionTranslation"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      language: string
      text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionTranslation"]>
    composites: {}
  }

  type QuestionTranslationGetPayload<S extends boolean | null | undefined | QuestionTranslationDefaultArgs> = $Result.GetResult<Prisma.$QuestionTranslationPayload, S>

  type QuestionTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionTranslationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionTranslationCountAggregateInputType | true
    }

  export interface QuestionTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionTranslation'], meta: { name: 'QuestionTranslation' } }
    /**
     * Find zero or one QuestionTranslation that matches the filter.
     * @param {QuestionTranslationFindUniqueArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionTranslationFindUniqueArgs>(args: SelectSubset<T, QuestionTranslationFindUniqueArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuestionTranslation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionTranslationFindUniqueOrThrowArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuestionTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationFindFirstArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionTranslationFindFirstArgs>(args?: SelectSubset<T, QuestionTranslationFindFirstArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuestionTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationFindFirstOrThrowArgs} args - Arguments to find a QuestionTranslation
     * @example
     * // Get one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuestionTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionTranslations
     * const questionTranslations = await prisma.questionTranslation.findMany()
     * 
     * // Get first 10 QuestionTranslations
     * const questionTranslations = await prisma.questionTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionTranslationWithIdOnly = await prisma.questionTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionTranslationFindManyArgs>(args?: SelectSubset<T, QuestionTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuestionTranslation.
     * @param {QuestionTranslationCreateArgs} args - Arguments to create a QuestionTranslation.
     * @example
     * // Create one QuestionTranslation
     * const QuestionTranslation = await prisma.questionTranslation.create({
     *   data: {
     *     // ... data to create a QuestionTranslation
     *   }
     * })
     * 
     */
    create<T extends QuestionTranslationCreateArgs>(args: SelectSubset<T, QuestionTranslationCreateArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuestionTranslations.
     * @param {QuestionTranslationCreateManyArgs} args - Arguments to create many QuestionTranslations.
     * @example
     * // Create many QuestionTranslations
     * const questionTranslation = await prisma.questionTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionTranslationCreateManyArgs>(args?: SelectSubset<T, QuestionTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionTranslations and returns the data saved in the database.
     * @param {QuestionTranslationCreateManyAndReturnArgs} args - Arguments to create many QuestionTranslations.
     * @example
     * // Create many QuestionTranslations
     * const questionTranslation = await prisma.questionTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionTranslations and only return the `id`
     * const questionTranslationWithIdOnly = await prisma.questionTranslation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuestionTranslation.
     * @param {QuestionTranslationDeleteArgs} args - Arguments to delete one QuestionTranslation.
     * @example
     * // Delete one QuestionTranslation
     * const QuestionTranslation = await prisma.questionTranslation.delete({
     *   where: {
     *     // ... filter to delete one QuestionTranslation
     *   }
     * })
     * 
     */
    delete<T extends QuestionTranslationDeleteArgs>(args: SelectSubset<T, QuestionTranslationDeleteArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuestionTranslation.
     * @param {QuestionTranslationUpdateArgs} args - Arguments to update one QuestionTranslation.
     * @example
     * // Update one QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionTranslationUpdateArgs>(args: SelectSubset<T, QuestionTranslationUpdateArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuestionTranslations.
     * @param {QuestionTranslationDeleteManyArgs} args - Arguments to filter QuestionTranslations to delete.
     * @example
     * // Delete a few QuestionTranslations
     * const { count } = await prisma.questionTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionTranslationDeleteManyArgs>(args?: SelectSubset<T, QuestionTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionTranslations
     * const questionTranslation = await prisma.questionTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionTranslationUpdateManyArgs>(args: SelectSubset<T, QuestionTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionTranslation.
     * @param {QuestionTranslationUpsertArgs} args - Arguments to update or create a QuestionTranslation.
     * @example
     * // Update or create a QuestionTranslation
     * const questionTranslation = await prisma.questionTranslation.upsert({
     *   create: {
     *     // ... data to create a QuestionTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionTranslation we want to update
     *   }
     * })
     */
    upsert<T extends QuestionTranslationUpsertArgs>(args: SelectSubset<T, QuestionTranslationUpsertArgs<ExtArgs>>): Prisma__QuestionTranslationClient<$Result.GetResult<Prisma.$QuestionTranslationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuestionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationCountArgs} args - Arguments to filter QuestionTranslations to count.
     * @example
     * // Count the number of QuestionTranslations
     * const count = await prisma.questionTranslation.count({
     *   where: {
     *     // ... the filter for the QuestionTranslations we want to count
     *   }
     * })
    **/
    count<T extends QuestionTranslationCountArgs>(
      args?: Subset<T, QuestionTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionTranslationAggregateArgs>(args: Subset<T, QuestionTranslationAggregateArgs>): Prisma.PrismaPromise<GetQuestionTranslationAggregateType<T>>

    /**
     * Group by QuestionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionTranslationGroupByArgs} args - Group by arguments.
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
      T extends QuestionTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionTranslationGroupByArgs['orderBy'] }
        : { orderBy?: QuestionTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionTranslation model
   */
  readonly fields: QuestionTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the QuestionTranslation model
   */ 
  interface QuestionTranslationFieldRefs {
    readonly id: FieldRef<"QuestionTranslation", 'String'>
    readonly questionId: FieldRef<"QuestionTranslation", 'String'>
    readonly language: FieldRef<"QuestionTranslation", 'String'>
    readonly text: FieldRef<"QuestionTranslation", 'String'>
    readonly createdAt: FieldRef<"QuestionTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionTranslation findUnique
   */
  export type QuestionTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation findUniqueOrThrow
   */
  export type QuestionTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation findFirst
   */
  export type QuestionTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTranslations.
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTranslations.
     */
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionTranslation findFirstOrThrow
   */
  export type QuestionTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslation to fetch.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionTranslations.
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionTranslations.
     */
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionTranslation findMany
   */
  export type QuestionTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which QuestionTranslations to fetch.
     */
    where?: QuestionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionTranslations to fetch.
     */
    orderBy?: QuestionTranslationOrderByWithRelationInput | QuestionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionTranslations.
     */
    cursor?: QuestionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionTranslations.
     */
    skip?: number
    distinct?: QuestionTranslationScalarFieldEnum | QuestionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionTranslation create
   */
  export type QuestionTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionTranslation.
     */
    data: XOR<QuestionTranslationCreateInput, QuestionTranslationUncheckedCreateInput>
  }

  /**
   * QuestionTranslation createMany
   */
  export type QuestionTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionTranslations.
     */
    data: QuestionTranslationCreateManyInput | QuestionTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionTranslation createManyAndReturn
   */
  export type QuestionTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuestionTranslations.
     */
    data: QuestionTranslationCreateManyInput | QuestionTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionTranslation update
   */
  export type QuestionTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionTranslation.
     */
    data: XOR<QuestionTranslationUpdateInput, QuestionTranslationUncheckedUpdateInput>
    /**
     * Choose, which QuestionTranslation to update.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation updateMany
   */
  export type QuestionTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionTranslations.
     */
    data: XOR<QuestionTranslationUpdateManyMutationInput, QuestionTranslationUncheckedUpdateManyInput>
    /**
     * Filter which QuestionTranslations to update
     */
    where?: QuestionTranslationWhereInput
  }

  /**
   * QuestionTranslation upsert
   */
  export type QuestionTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionTranslation to update in case it exists.
     */
    where: QuestionTranslationWhereUniqueInput
    /**
     * In case the QuestionTranslation found by the `where` argument doesn't exist, create a new QuestionTranslation with this data.
     */
    create: XOR<QuestionTranslationCreateInput, QuestionTranslationUncheckedCreateInput>
    /**
     * In case the QuestionTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionTranslationUpdateInput, QuestionTranslationUncheckedUpdateInput>
  }

  /**
   * QuestionTranslation delete
   */
  export type QuestionTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
    /**
     * Filter which QuestionTranslation to delete.
     */
    where: QuestionTranslationWhereUniqueInput
  }

  /**
   * QuestionTranslation deleteMany
   */
  export type QuestionTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionTranslations to delete
     */
    where?: QuestionTranslationWhereInput
  }

  /**
   * QuestionTranslation without action
   */
  export type QuestionTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionTranslation
     */
    select?: QuestionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionTranslationInclude<ExtArgs> | null
  }


  /**
   * Model QuestionOption
   */

  export type AggregateQuestionOption = {
    _count: QuestionOptionCountAggregateOutputType | null
    _avg: QuestionOptionAvgAggregateOutputType | null
    _sum: QuestionOptionSumAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  export type QuestionOptionAvgAggregateOutputType = {
    order: number | null
  }

  export type QuestionOptionSumAggregateOutputType = {
    order: number | null
  }

  export type QuestionOptionMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    order: number | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionOptionMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    order: number | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionOptionCountAggregateOutputType = {
    id: number
    questionId: number
    order: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionOptionAvgAggregateInputType = {
    order?: true
  }

  export type QuestionOptionSumAggregateInputType = {
    order?: true
  }

  export type QuestionOptionMinAggregateInputType = {
    id?: true
    questionId?: true
    order?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionOptionMaxAggregateInputType = {
    id?: true
    questionId?: true
    order?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionOptionCountAggregateInputType = {
    id?: true
    questionId?: true
    order?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionOptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionOption to aggregate.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned QuestionOptions
    **/
    _count?: true | QuestionOptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: QuestionOptionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: QuestionOptionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionOptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type GetQuestionOptionAggregateType<T extends QuestionOptionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestionOption]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestionOption[P]>
      : GetScalarType<T[P], AggregateQuestionOption[P]>
  }




  export type QuestionOptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionOptionWhereInput
    orderBy?: QuestionOptionOrderByWithAggregationInput | QuestionOptionOrderByWithAggregationInput[]
    by: QuestionOptionScalarFieldEnum[] | QuestionOptionScalarFieldEnum
    having?: QuestionOptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionOptionCountAggregateInputType | true
    _avg?: QuestionOptionAvgAggregateInputType
    _sum?: QuestionOptionSumAggregateInputType
    _min?: QuestionOptionMinAggregateInputType
    _max?: QuestionOptionMaxAggregateInputType
  }

  export type QuestionOptionGroupByOutputType = {
    id: string
    questionId: string
    order: number
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    _count: QuestionOptionCountAggregateOutputType | null
    _avg: QuestionOptionAvgAggregateOutputType | null
    _sum: QuestionOptionSumAggregateOutputType | null
    _min: QuestionOptionMinAggregateOutputType | null
    _max: QuestionOptionMaxAggregateOutputType | null
  }

  type GetQuestionOptionGroupByPayload<T extends QuestionOptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionOptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionOptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionOptionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionOptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    order?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    translations?: boolean | QuestionOption$translationsArgs<ExtArgs>
    _count?: boolean | QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type QuestionOptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    order?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["questionOption"]>

  export type QuestionOptionSelectScalar = {
    id?: boolean
    questionId?: boolean
    order?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionOptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    translations?: boolean | QuestionOption$translationsArgs<ExtArgs>
    _count?: boolean | QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionOptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $QuestionOptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "QuestionOption"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      translations: Prisma.$OptionTranslationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      order: number
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["questionOption"]>
    composites: {}
  }

  type QuestionOptionGetPayload<S extends boolean | null | undefined | QuestionOptionDefaultArgs> = $Result.GetResult<Prisma.$QuestionOptionPayload, S>

  type QuestionOptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionOptionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionOptionCountAggregateInputType | true
    }

  export interface QuestionOptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['QuestionOption'], meta: { name: 'QuestionOption' } }
    /**
     * Find zero or one QuestionOption that matches the filter.
     * @param {QuestionOptionFindUniqueArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionOptionFindUniqueArgs>(args: SelectSubset<T, QuestionOptionFindUniqueArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one QuestionOption that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionOptionFindUniqueOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionOptionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionOptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first QuestionOption that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindFirstArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionOptionFindFirstArgs>(args?: SelectSubset<T, QuestionOptionFindFirstArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first QuestionOption that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindFirstOrThrowArgs} args - Arguments to find a QuestionOption
     * @example
     * // Get one QuestionOption
     * const questionOption = await prisma.questionOption.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionOptionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionOptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more QuestionOptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany()
     * 
     * // Get first 10 QuestionOptions
     * const questionOptions = await prisma.questionOption.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionOptionWithIdOnly = await prisma.questionOption.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionOptionFindManyArgs>(args?: SelectSubset<T, QuestionOptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a QuestionOption.
     * @param {QuestionOptionCreateArgs} args - Arguments to create a QuestionOption.
     * @example
     * // Create one QuestionOption
     * const QuestionOption = await prisma.questionOption.create({
     *   data: {
     *     // ... data to create a QuestionOption
     *   }
     * })
     * 
     */
    create<T extends QuestionOptionCreateArgs>(args: SelectSubset<T, QuestionOptionCreateArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many QuestionOptions.
     * @param {QuestionOptionCreateManyArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionOptionCreateManyArgs>(args?: SelectSubset<T, QuestionOptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many QuestionOptions and returns the data saved in the database.
     * @param {QuestionOptionCreateManyAndReturnArgs} args - Arguments to create many QuestionOptions.
     * @example
     * // Create many QuestionOptions
     * const questionOption = await prisma.questionOption.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many QuestionOptions and only return the `id`
     * const questionOptionWithIdOnly = await prisma.questionOption.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionOptionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionOptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a QuestionOption.
     * @param {QuestionOptionDeleteArgs} args - Arguments to delete one QuestionOption.
     * @example
     * // Delete one QuestionOption
     * const QuestionOption = await prisma.questionOption.delete({
     *   where: {
     *     // ... filter to delete one QuestionOption
     *   }
     * })
     * 
     */
    delete<T extends QuestionOptionDeleteArgs>(args: SelectSubset<T, QuestionOptionDeleteArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one QuestionOption.
     * @param {QuestionOptionUpdateArgs} args - Arguments to update one QuestionOption.
     * @example
     * // Update one QuestionOption
     * const questionOption = await prisma.questionOption.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionOptionUpdateArgs>(args: SelectSubset<T, QuestionOptionUpdateArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more QuestionOptions.
     * @param {QuestionOptionDeleteManyArgs} args - Arguments to filter QuestionOptions to delete.
     * @example
     * // Delete a few QuestionOptions
     * const { count } = await prisma.questionOption.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionOptionDeleteManyArgs>(args?: SelectSubset<T, QuestionOptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many QuestionOptions
     * const questionOption = await prisma.questionOption.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionOptionUpdateManyArgs>(args: SelectSubset<T, QuestionOptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one QuestionOption.
     * @param {QuestionOptionUpsertArgs} args - Arguments to update or create a QuestionOption.
     * @example
     * // Update or create a QuestionOption
     * const questionOption = await prisma.questionOption.upsert({
     *   create: {
     *     // ... data to create a QuestionOption
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the QuestionOption we want to update
     *   }
     * })
     */
    upsert<T extends QuestionOptionUpsertArgs>(args: SelectSubset<T, QuestionOptionUpsertArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of QuestionOptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionCountArgs} args - Arguments to filter QuestionOptions to count.
     * @example
     * // Count the number of QuestionOptions
     * const count = await prisma.questionOption.count({
     *   where: {
     *     // ... the filter for the QuestionOptions we want to count
     *   }
     * })
    **/
    count<T extends QuestionOptionCountArgs>(
      args?: Subset<T, QuestionOptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionOptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends QuestionOptionAggregateArgs>(args: Subset<T, QuestionOptionAggregateArgs>): Prisma.PrismaPromise<GetQuestionOptionAggregateType<T>>

    /**
     * Group by QuestionOption.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionOptionGroupByArgs} args - Group by arguments.
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
      T extends QuestionOptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionOptionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionOptionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, QuestionOptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionOptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the QuestionOption model
   */
  readonly fields: QuestionOptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for QuestionOption.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionOptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    translations<T extends QuestionOption$translationsArgs<ExtArgs> = {}>(args?: Subset<T, QuestionOption$translationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the QuestionOption model
   */ 
  interface QuestionOptionFieldRefs {
    readonly id: FieldRef<"QuestionOption", 'String'>
    readonly questionId: FieldRef<"QuestionOption", 'String'>
    readonly order: FieldRef<"QuestionOption", 'Int'>
    readonly isCorrect: FieldRef<"QuestionOption", 'Boolean'>
    readonly createdAt: FieldRef<"QuestionOption", 'DateTime'>
    readonly updatedAt: FieldRef<"QuestionOption", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * QuestionOption findUnique
   */
  export type QuestionOptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption findUniqueOrThrow
   */
  export type QuestionOptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption findFirst
   */
  export type QuestionOptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption findFirstOrThrow
   */
  export type QuestionOptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOption to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of QuestionOptions.
     */
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption findMany
   */
  export type QuestionOptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter, which QuestionOptions to fetch.
     */
    where?: QuestionOptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of QuestionOptions to fetch.
     */
    orderBy?: QuestionOptionOrderByWithRelationInput | QuestionOptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing QuestionOptions.
     */
    cursor?: QuestionOptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` QuestionOptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` QuestionOptions.
     */
    skip?: number
    distinct?: QuestionOptionScalarFieldEnum | QuestionOptionScalarFieldEnum[]
  }

  /**
   * QuestionOption create
   */
  export type QuestionOptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The data needed to create a QuestionOption.
     */
    data: XOR<QuestionOptionCreateInput, QuestionOptionUncheckedCreateInput>
  }

  /**
   * QuestionOption createMany
   */
  export type QuestionOptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many QuestionOptions.
     */
    data: QuestionOptionCreateManyInput | QuestionOptionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * QuestionOption createManyAndReturn
   */
  export type QuestionOptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many QuestionOptions.
     */
    data: QuestionOptionCreateManyInput | QuestionOptionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * QuestionOption update
   */
  export type QuestionOptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The data needed to update a QuestionOption.
     */
    data: XOR<QuestionOptionUpdateInput, QuestionOptionUncheckedUpdateInput>
    /**
     * Choose, which QuestionOption to update.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption updateMany
   */
  export type QuestionOptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update QuestionOptions.
     */
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyInput>
    /**
     * Filter which QuestionOptions to update
     */
    where?: QuestionOptionWhereInput
  }

  /**
   * QuestionOption upsert
   */
  export type QuestionOptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * The filter to search for the QuestionOption to update in case it exists.
     */
    where: QuestionOptionWhereUniqueInput
    /**
     * In case the QuestionOption found by the `where` argument doesn't exist, create a new QuestionOption with this data.
     */
    create: XOR<QuestionOptionCreateInput, QuestionOptionUncheckedCreateInput>
    /**
     * In case the QuestionOption was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionOptionUpdateInput, QuestionOptionUncheckedUpdateInput>
  }

  /**
   * QuestionOption delete
   */
  export type QuestionOptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
    /**
     * Filter which QuestionOption to delete.
     */
    where: QuestionOptionWhereUniqueInput
  }

  /**
   * QuestionOption deleteMany
   */
  export type QuestionOptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which QuestionOptions to delete
     */
    where?: QuestionOptionWhereInput
  }

  /**
   * QuestionOption.translations
   */
  export type QuestionOption$translationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    where?: OptionTranslationWhereInput
    orderBy?: OptionTranslationOrderByWithRelationInput | OptionTranslationOrderByWithRelationInput[]
    cursor?: OptionTranslationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OptionTranslationScalarFieldEnum | OptionTranslationScalarFieldEnum[]
  }

  /**
   * QuestionOption without action
   */
  export type QuestionOptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionOption
     */
    select?: QuestionOptionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionOptionInclude<ExtArgs> | null
  }


  /**
   * Model OptionTranslation
   */

  export type AggregateOptionTranslation = {
    _count: OptionTranslationCountAggregateOutputType | null
    _min: OptionTranslationMinAggregateOutputType | null
    _max: OptionTranslationMaxAggregateOutputType | null
  }

  export type OptionTranslationMinAggregateOutputType = {
    id: string | null
    optionId: string | null
    language: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OptionTranslationMaxAggregateOutputType = {
    id: string | null
    optionId: string | null
    language: string | null
    text: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OptionTranslationCountAggregateOutputType = {
    id: number
    optionId: number
    language: number
    text: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OptionTranslationMinAggregateInputType = {
    id?: true
    optionId?: true
    language?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OptionTranslationMaxAggregateInputType = {
    id?: true
    optionId?: true
    language?: true
    text?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OptionTranslationCountAggregateInputType = {
    id?: true
    optionId?: true
    language?: true
    text?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OptionTranslationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionTranslation to aggregate.
     */
    where?: OptionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionTranslations to fetch.
     */
    orderBy?: OptionTranslationOrderByWithRelationInput | OptionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OptionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OptionTranslations
    **/
    _count?: true | OptionTranslationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OptionTranslationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OptionTranslationMaxAggregateInputType
  }

  export type GetOptionTranslationAggregateType<T extends OptionTranslationAggregateArgs> = {
        [P in keyof T & keyof AggregateOptionTranslation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOptionTranslation[P]>
      : GetScalarType<T[P], AggregateOptionTranslation[P]>
  }




  export type OptionTranslationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OptionTranslationWhereInput
    orderBy?: OptionTranslationOrderByWithAggregationInput | OptionTranslationOrderByWithAggregationInput[]
    by: OptionTranslationScalarFieldEnum[] | OptionTranslationScalarFieldEnum
    having?: OptionTranslationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OptionTranslationCountAggregateInputType | true
    _min?: OptionTranslationMinAggregateInputType
    _max?: OptionTranslationMaxAggregateInputType
  }

  export type OptionTranslationGroupByOutputType = {
    id: string
    optionId: string
    language: string
    text: string
    createdAt: Date
    updatedAt: Date
    _count: OptionTranslationCountAggregateOutputType | null
    _min: OptionTranslationMinAggregateOutputType | null
    _max: OptionTranslationMaxAggregateOutputType | null
  }

  type GetOptionTranslationGroupByPayload<T extends OptionTranslationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OptionTranslationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OptionTranslationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OptionTranslationGroupByOutputType[P]>
            : GetScalarType<T[P], OptionTranslationGroupByOutputType[P]>
        }
      >
    >


  export type OptionTranslationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    language?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    option?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionTranslation"]>

  export type OptionTranslationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    optionId?: boolean
    language?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    option?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["optionTranslation"]>

  export type OptionTranslationSelectScalar = {
    id?: boolean
    optionId?: boolean
    language?: boolean
    text?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OptionTranslationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }
  export type OptionTranslationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    option?: boolean | QuestionOptionDefaultArgs<ExtArgs>
  }

  export type $OptionTranslationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OptionTranslation"
    objects: {
      option: Prisma.$QuestionOptionPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      optionId: string
      language: string
      text: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["optionTranslation"]>
    composites: {}
  }

  type OptionTranslationGetPayload<S extends boolean | null | undefined | OptionTranslationDefaultArgs> = $Result.GetResult<Prisma.$OptionTranslationPayload, S>

  type OptionTranslationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<OptionTranslationFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OptionTranslationCountAggregateInputType | true
    }

  export interface OptionTranslationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OptionTranslation'], meta: { name: 'OptionTranslation' } }
    /**
     * Find zero or one OptionTranslation that matches the filter.
     * @param {OptionTranslationFindUniqueArgs} args - Arguments to find a OptionTranslation
     * @example
     * // Get one OptionTranslation
     * const optionTranslation = await prisma.optionTranslation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OptionTranslationFindUniqueArgs>(args: SelectSubset<T, OptionTranslationFindUniqueArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one OptionTranslation that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {OptionTranslationFindUniqueOrThrowArgs} args - Arguments to find a OptionTranslation
     * @example
     * // Get one OptionTranslation
     * const optionTranslation = await prisma.optionTranslation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OptionTranslationFindUniqueOrThrowArgs>(args: SelectSubset<T, OptionTranslationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first OptionTranslation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationFindFirstArgs} args - Arguments to find a OptionTranslation
     * @example
     * // Get one OptionTranslation
     * const optionTranslation = await prisma.optionTranslation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OptionTranslationFindFirstArgs>(args?: SelectSubset<T, OptionTranslationFindFirstArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first OptionTranslation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationFindFirstOrThrowArgs} args - Arguments to find a OptionTranslation
     * @example
     * // Get one OptionTranslation
     * const optionTranslation = await prisma.optionTranslation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OptionTranslationFindFirstOrThrowArgs>(args?: SelectSubset<T, OptionTranslationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more OptionTranslations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OptionTranslations
     * const optionTranslations = await prisma.optionTranslation.findMany()
     * 
     * // Get first 10 OptionTranslations
     * const optionTranslations = await prisma.optionTranslation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const optionTranslationWithIdOnly = await prisma.optionTranslation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OptionTranslationFindManyArgs>(args?: SelectSubset<T, OptionTranslationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a OptionTranslation.
     * @param {OptionTranslationCreateArgs} args - Arguments to create a OptionTranslation.
     * @example
     * // Create one OptionTranslation
     * const OptionTranslation = await prisma.optionTranslation.create({
     *   data: {
     *     // ... data to create a OptionTranslation
     *   }
     * })
     * 
     */
    create<T extends OptionTranslationCreateArgs>(args: SelectSubset<T, OptionTranslationCreateArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many OptionTranslations.
     * @param {OptionTranslationCreateManyArgs} args - Arguments to create many OptionTranslations.
     * @example
     * // Create many OptionTranslations
     * const optionTranslation = await prisma.optionTranslation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OptionTranslationCreateManyArgs>(args?: SelectSubset<T, OptionTranslationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OptionTranslations and returns the data saved in the database.
     * @param {OptionTranslationCreateManyAndReturnArgs} args - Arguments to create many OptionTranslations.
     * @example
     * // Create many OptionTranslations
     * const optionTranslation = await prisma.optionTranslation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OptionTranslations and only return the `id`
     * const optionTranslationWithIdOnly = await prisma.optionTranslation.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OptionTranslationCreateManyAndReturnArgs>(args?: SelectSubset<T, OptionTranslationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a OptionTranslation.
     * @param {OptionTranslationDeleteArgs} args - Arguments to delete one OptionTranslation.
     * @example
     * // Delete one OptionTranslation
     * const OptionTranslation = await prisma.optionTranslation.delete({
     *   where: {
     *     // ... filter to delete one OptionTranslation
     *   }
     * })
     * 
     */
    delete<T extends OptionTranslationDeleteArgs>(args: SelectSubset<T, OptionTranslationDeleteArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one OptionTranslation.
     * @param {OptionTranslationUpdateArgs} args - Arguments to update one OptionTranslation.
     * @example
     * // Update one OptionTranslation
     * const optionTranslation = await prisma.optionTranslation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OptionTranslationUpdateArgs>(args: SelectSubset<T, OptionTranslationUpdateArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more OptionTranslations.
     * @param {OptionTranslationDeleteManyArgs} args - Arguments to filter OptionTranslations to delete.
     * @example
     * // Delete a few OptionTranslations
     * const { count } = await prisma.optionTranslation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OptionTranslationDeleteManyArgs>(args?: SelectSubset<T, OptionTranslationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OptionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OptionTranslations
     * const optionTranslation = await prisma.optionTranslation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OptionTranslationUpdateManyArgs>(args: SelectSubset<T, OptionTranslationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OptionTranslation.
     * @param {OptionTranslationUpsertArgs} args - Arguments to update or create a OptionTranslation.
     * @example
     * // Update or create a OptionTranslation
     * const optionTranslation = await prisma.optionTranslation.upsert({
     *   create: {
     *     // ... data to create a OptionTranslation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OptionTranslation we want to update
     *   }
     * })
     */
    upsert<T extends OptionTranslationUpsertArgs>(args: SelectSubset<T, OptionTranslationUpsertArgs<ExtArgs>>): Prisma__OptionTranslationClient<$Result.GetResult<Prisma.$OptionTranslationPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of OptionTranslations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationCountArgs} args - Arguments to filter OptionTranslations to count.
     * @example
     * // Count the number of OptionTranslations
     * const count = await prisma.optionTranslation.count({
     *   where: {
     *     // ... the filter for the OptionTranslations we want to count
     *   }
     * })
    **/
    count<T extends OptionTranslationCountArgs>(
      args?: Subset<T, OptionTranslationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OptionTranslationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OptionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OptionTranslationAggregateArgs>(args: Subset<T, OptionTranslationAggregateArgs>): Prisma.PrismaPromise<GetOptionTranslationAggregateType<T>>

    /**
     * Group by OptionTranslation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OptionTranslationGroupByArgs} args - Group by arguments.
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
      T extends OptionTranslationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OptionTranslationGroupByArgs['orderBy'] }
        : { orderBy?: OptionTranslationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OptionTranslationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOptionTranslationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OptionTranslation model
   */
  readonly fields: OptionTranslationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OptionTranslation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OptionTranslationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    option<T extends QuestionOptionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionOptionDefaultArgs<ExtArgs>>): Prisma__QuestionOptionClient<$Result.GetResult<Prisma.$QuestionOptionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the OptionTranslation model
   */ 
  interface OptionTranslationFieldRefs {
    readonly id: FieldRef<"OptionTranslation", 'String'>
    readonly optionId: FieldRef<"OptionTranslation", 'String'>
    readonly language: FieldRef<"OptionTranslation", 'String'>
    readonly text: FieldRef<"OptionTranslation", 'String'>
    readonly createdAt: FieldRef<"OptionTranslation", 'DateTime'>
    readonly updatedAt: FieldRef<"OptionTranslation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OptionTranslation findUnique
   */
  export type OptionTranslationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which OptionTranslation to fetch.
     */
    where: OptionTranslationWhereUniqueInput
  }

  /**
   * OptionTranslation findUniqueOrThrow
   */
  export type OptionTranslationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which OptionTranslation to fetch.
     */
    where: OptionTranslationWhereUniqueInput
  }

  /**
   * OptionTranslation findFirst
   */
  export type OptionTranslationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which OptionTranslation to fetch.
     */
    where?: OptionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionTranslations to fetch.
     */
    orderBy?: OptionTranslationOrderByWithRelationInput | OptionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionTranslations.
     */
    cursor?: OptionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionTranslations.
     */
    distinct?: OptionTranslationScalarFieldEnum | OptionTranslationScalarFieldEnum[]
  }

  /**
   * OptionTranslation findFirstOrThrow
   */
  export type OptionTranslationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which OptionTranslation to fetch.
     */
    where?: OptionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionTranslations to fetch.
     */
    orderBy?: OptionTranslationOrderByWithRelationInput | OptionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OptionTranslations.
     */
    cursor?: OptionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionTranslations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OptionTranslations.
     */
    distinct?: OptionTranslationScalarFieldEnum | OptionTranslationScalarFieldEnum[]
  }

  /**
   * OptionTranslation findMany
   */
  export type OptionTranslationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * Filter, which OptionTranslations to fetch.
     */
    where?: OptionTranslationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OptionTranslations to fetch.
     */
    orderBy?: OptionTranslationOrderByWithRelationInput | OptionTranslationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OptionTranslations.
     */
    cursor?: OptionTranslationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OptionTranslations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OptionTranslations.
     */
    skip?: number
    distinct?: OptionTranslationScalarFieldEnum | OptionTranslationScalarFieldEnum[]
  }

  /**
   * OptionTranslation create
   */
  export type OptionTranslationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to create a OptionTranslation.
     */
    data: XOR<OptionTranslationCreateInput, OptionTranslationUncheckedCreateInput>
  }

  /**
   * OptionTranslation createMany
   */
  export type OptionTranslationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OptionTranslations.
     */
    data: OptionTranslationCreateManyInput | OptionTranslationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OptionTranslation createManyAndReturn
   */
  export type OptionTranslationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many OptionTranslations.
     */
    data: OptionTranslationCreateManyInput | OptionTranslationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OptionTranslation update
   */
  export type OptionTranslationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * The data needed to update a OptionTranslation.
     */
    data: XOR<OptionTranslationUpdateInput, OptionTranslationUncheckedUpdateInput>
    /**
     * Choose, which OptionTranslation to update.
     */
    where: OptionTranslationWhereUniqueInput
  }

  /**
   * OptionTranslation updateMany
   */
  export type OptionTranslationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OptionTranslations.
     */
    data: XOR<OptionTranslationUpdateManyMutationInput, OptionTranslationUncheckedUpdateManyInput>
    /**
     * Filter which OptionTranslations to update
     */
    where?: OptionTranslationWhereInput
  }

  /**
   * OptionTranslation upsert
   */
  export type OptionTranslationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * The filter to search for the OptionTranslation to update in case it exists.
     */
    where: OptionTranslationWhereUniqueInput
    /**
     * In case the OptionTranslation found by the `where` argument doesn't exist, create a new OptionTranslation with this data.
     */
    create: XOR<OptionTranslationCreateInput, OptionTranslationUncheckedCreateInput>
    /**
     * In case the OptionTranslation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OptionTranslationUpdateInput, OptionTranslationUncheckedUpdateInput>
  }

  /**
   * OptionTranslation delete
   */
  export type OptionTranslationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
    /**
     * Filter which OptionTranslation to delete.
     */
    where: OptionTranslationWhereUniqueInput
  }

  /**
   * OptionTranslation deleteMany
   */
  export type OptionTranslationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OptionTranslations to delete
     */
    where?: OptionTranslationWhereInput
  }

  /**
   * OptionTranslation without action
   */
  export type OptionTranslationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OptionTranslation
     */
    select?: OptionTranslationSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OptionTranslationInclude<ExtArgs> | null
  }


  /**
   * Model AssessmentScore
   */

  export type AggregateAssessmentScore = {
    _count: AssessmentScoreCountAggregateOutputType | null
    _avg: AssessmentScoreAvgAggregateOutputType | null
    _sum: AssessmentScoreSumAggregateOutputType | null
    _min: AssessmentScoreMinAggregateOutputType | null
    _max: AssessmentScoreMaxAggregateOutputType | null
  }

  export type AssessmentScoreAvgAggregateOutputType = {
    score: number | null
  }

  export type AssessmentScoreSumAggregateOutputType = {
    score: number | null
  }

  export type AssessmentScoreMinAggregateOutputType = {
    id: string | null
    userId: string | null
    assessmentType: $Enums.AssessmentType | null
    traitOrCategoryCode: string | null
    score: number | null
    createdAt: Date | null
  }

  export type AssessmentScoreMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    assessmentType: $Enums.AssessmentType | null
    traitOrCategoryCode: string | null
    score: number | null
    createdAt: Date | null
  }

  export type AssessmentScoreCountAggregateOutputType = {
    id: number
    userId: number
    assessmentType: number
    traitOrCategoryCode: number
    score: number
    createdAt: number
    _all: number
  }


  export type AssessmentScoreAvgAggregateInputType = {
    score?: true
  }

  export type AssessmentScoreSumAggregateInputType = {
    score?: true
  }

  export type AssessmentScoreMinAggregateInputType = {
    id?: true
    userId?: true
    assessmentType?: true
    traitOrCategoryCode?: true
    score?: true
    createdAt?: true
  }

  export type AssessmentScoreMaxAggregateInputType = {
    id?: true
    userId?: true
    assessmentType?: true
    traitOrCategoryCode?: true
    score?: true
    createdAt?: true
  }

  export type AssessmentScoreCountAggregateInputType = {
    id?: true
    userId?: true
    assessmentType?: true
    traitOrCategoryCode?: true
    score?: true
    createdAt?: true
    _all?: true
  }

  export type AssessmentScoreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentScore to aggregate.
     */
    where?: AssessmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentScores to fetch.
     */
    orderBy?: AssessmentScoreOrderByWithRelationInput | AssessmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssessmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AssessmentScores
    **/
    _count?: true | AssessmentScoreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssessmentScoreAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssessmentScoreSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssessmentScoreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssessmentScoreMaxAggregateInputType
  }

  export type GetAssessmentScoreAggregateType<T extends AssessmentScoreAggregateArgs> = {
        [P in keyof T & keyof AggregateAssessmentScore]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssessmentScore[P]>
      : GetScalarType<T[P], AggregateAssessmentScore[P]>
  }




  export type AssessmentScoreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssessmentScoreWhereInput
    orderBy?: AssessmentScoreOrderByWithAggregationInput | AssessmentScoreOrderByWithAggregationInput[]
    by: AssessmentScoreScalarFieldEnum[] | AssessmentScoreScalarFieldEnum
    having?: AssessmentScoreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssessmentScoreCountAggregateInputType | true
    _avg?: AssessmentScoreAvgAggregateInputType
    _sum?: AssessmentScoreSumAggregateInputType
    _min?: AssessmentScoreMinAggregateInputType
    _max?: AssessmentScoreMaxAggregateInputType
  }

  export type AssessmentScoreGroupByOutputType = {
    id: string
    userId: string
    assessmentType: $Enums.AssessmentType
    traitOrCategoryCode: string
    score: number
    createdAt: Date
    _count: AssessmentScoreCountAggregateOutputType | null
    _avg: AssessmentScoreAvgAggregateOutputType | null
    _sum: AssessmentScoreSumAggregateOutputType | null
    _min: AssessmentScoreMinAggregateOutputType | null
    _max: AssessmentScoreMaxAggregateOutputType | null
  }

  type GetAssessmentScoreGroupByPayload<T extends AssessmentScoreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssessmentScoreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssessmentScoreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssessmentScoreGroupByOutputType[P]>
            : GetScalarType<T[P], AssessmentScoreGroupByOutputType[P]>
        }
      >
    >


  export type AssessmentScoreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assessmentType?: boolean
    traitOrCategoryCode?: boolean
    score?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assessmentScore"]>

  export type AssessmentScoreSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    assessmentType?: boolean
    traitOrCategoryCode?: boolean
    score?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["assessmentScore"]>

  export type AssessmentScoreSelectScalar = {
    id?: boolean
    userId?: boolean
    assessmentType?: boolean
    traitOrCategoryCode?: boolean
    score?: boolean
    createdAt?: boolean
  }


  export type $AssessmentScorePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AssessmentScore"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      assessmentType: $Enums.AssessmentType
      traitOrCategoryCode: string
      score: number
      createdAt: Date
    }, ExtArgs["result"]["assessmentScore"]>
    composites: {}
  }

  type AssessmentScoreGetPayload<S extends boolean | null | undefined | AssessmentScoreDefaultArgs> = $Result.GetResult<Prisma.$AssessmentScorePayload, S>

  type AssessmentScoreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AssessmentScoreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AssessmentScoreCountAggregateInputType | true
    }

  export interface AssessmentScoreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AssessmentScore'], meta: { name: 'AssessmentScore' } }
    /**
     * Find zero or one AssessmentScore that matches the filter.
     * @param {AssessmentScoreFindUniqueArgs} args - Arguments to find a AssessmentScore
     * @example
     * // Get one AssessmentScore
     * const assessmentScore = await prisma.assessmentScore.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssessmentScoreFindUniqueArgs>(args: SelectSubset<T, AssessmentScoreFindUniqueArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AssessmentScore that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AssessmentScoreFindUniqueOrThrowArgs} args - Arguments to find a AssessmentScore
     * @example
     * // Get one AssessmentScore
     * const assessmentScore = await prisma.assessmentScore.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssessmentScoreFindUniqueOrThrowArgs>(args: SelectSubset<T, AssessmentScoreFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AssessmentScore that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreFindFirstArgs} args - Arguments to find a AssessmentScore
     * @example
     * // Get one AssessmentScore
     * const assessmentScore = await prisma.assessmentScore.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssessmentScoreFindFirstArgs>(args?: SelectSubset<T, AssessmentScoreFindFirstArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AssessmentScore that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreFindFirstOrThrowArgs} args - Arguments to find a AssessmentScore
     * @example
     * // Get one AssessmentScore
     * const assessmentScore = await prisma.assessmentScore.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssessmentScoreFindFirstOrThrowArgs>(args?: SelectSubset<T, AssessmentScoreFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AssessmentScores that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AssessmentScores
     * const assessmentScores = await prisma.assessmentScore.findMany()
     * 
     * // Get first 10 AssessmentScores
     * const assessmentScores = await prisma.assessmentScore.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assessmentScoreWithIdOnly = await prisma.assessmentScore.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssessmentScoreFindManyArgs>(args?: SelectSubset<T, AssessmentScoreFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AssessmentScore.
     * @param {AssessmentScoreCreateArgs} args - Arguments to create a AssessmentScore.
     * @example
     * // Create one AssessmentScore
     * const AssessmentScore = await prisma.assessmentScore.create({
     *   data: {
     *     // ... data to create a AssessmentScore
     *   }
     * })
     * 
     */
    create<T extends AssessmentScoreCreateArgs>(args: SelectSubset<T, AssessmentScoreCreateArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AssessmentScores.
     * @param {AssessmentScoreCreateManyArgs} args - Arguments to create many AssessmentScores.
     * @example
     * // Create many AssessmentScores
     * const assessmentScore = await prisma.assessmentScore.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssessmentScoreCreateManyArgs>(args?: SelectSubset<T, AssessmentScoreCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AssessmentScores and returns the data saved in the database.
     * @param {AssessmentScoreCreateManyAndReturnArgs} args - Arguments to create many AssessmentScores.
     * @example
     * // Create many AssessmentScores
     * const assessmentScore = await prisma.assessmentScore.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AssessmentScores and only return the `id`
     * const assessmentScoreWithIdOnly = await prisma.assessmentScore.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssessmentScoreCreateManyAndReturnArgs>(args?: SelectSubset<T, AssessmentScoreCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AssessmentScore.
     * @param {AssessmentScoreDeleteArgs} args - Arguments to delete one AssessmentScore.
     * @example
     * // Delete one AssessmentScore
     * const AssessmentScore = await prisma.assessmentScore.delete({
     *   where: {
     *     // ... filter to delete one AssessmentScore
     *   }
     * })
     * 
     */
    delete<T extends AssessmentScoreDeleteArgs>(args: SelectSubset<T, AssessmentScoreDeleteArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AssessmentScore.
     * @param {AssessmentScoreUpdateArgs} args - Arguments to update one AssessmentScore.
     * @example
     * // Update one AssessmentScore
     * const assessmentScore = await prisma.assessmentScore.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssessmentScoreUpdateArgs>(args: SelectSubset<T, AssessmentScoreUpdateArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AssessmentScores.
     * @param {AssessmentScoreDeleteManyArgs} args - Arguments to filter AssessmentScores to delete.
     * @example
     * // Delete a few AssessmentScores
     * const { count } = await prisma.assessmentScore.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssessmentScoreDeleteManyArgs>(args?: SelectSubset<T, AssessmentScoreDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AssessmentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AssessmentScores
     * const assessmentScore = await prisma.assessmentScore.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssessmentScoreUpdateManyArgs>(args: SelectSubset<T, AssessmentScoreUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AssessmentScore.
     * @param {AssessmentScoreUpsertArgs} args - Arguments to update or create a AssessmentScore.
     * @example
     * // Update or create a AssessmentScore
     * const assessmentScore = await prisma.assessmentScore.upsert({
     *   create: {
     *     // ... data to create a AssessmentScore
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AssessmentScore we want to update
     *   }
     * })
     */
    upsert<T extends AssessmentScoreUpsertArgs>(args: SelectSubset<T, AssessmentScoreUpsertArgs<ExtArgs>>): Prisma__AssessmentScoreClient<$Result.GetResult<Prisma.$AssessmentScorePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AssessmentScores.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreCountArgs} args - Arguments to filter AssessmentScores to count.
     * @example
     * // Count the number of AssessmentScores
     * const count = await prisma.assessmentScore.count({
     *   where: {
     *     // ... the filter for the AssessmentScores we want to count
     *   }
     * })
    **/
    count<T extends AssessmentScoreCountArgs>(
      args?: Subset<T, AssessmentScoreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssessmentScoreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AssessmentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AssessmentScoreAggregateArgs>(args: Subset<T, AssessmentScoreAggregateArgs>): Prisma.PrismaPromise<GetAssessmentScoreAggregateType<T>>

    /**
     * Group by AssessmentScore.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssessmentScoreGroupByArgs} args - Group by arguments.
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
      T extends AssessmentScoreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssessmentScoreGroupByArgs['orderBy'] }
        : { orderBy?: AssessmentScoreGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AssessmentScoreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssessmentScoreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AssessmentScore model
   */
  readonly fields: AssessmentScoreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AssessmentScore.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssessmentScoreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the AssessmentScore model
   */ 
  interface AssessmentScoreFieldRefs {
    readonly id: FieldRef<"AssessmentScore", 'String'>
    readonly userId: FieldRef<"AssessmentScore", 'String'>
    readonly assessmentType: FieldRef<"AssessmentScore", 'AssessmentType'>
    readonly traitOrCategoryCode: FieldRef<"AssessmentScore", 'String'>
    readonly score: FieldRef<"AssessmentScore", 'Int'>
    readonly createdAt: FieldRef<"AssessmentScore", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AssessmentScore findUnique
   */
  export type AssessmentScoreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * Filter, which AssessmentScore to fetch.
     */
    where: AssessmentScoreWhereUniqueInput
  }

  /**
   * AssessmentScore findUniqueOrThrow
   */
  export type AssessmentScoreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * Filter, which AssessmentScore to fetch.
     */
    where: AssessmentScoreWhereUniqueInput
  }

  /**
   * AssessmentScore findFirst
   */
  export type AssessmentScoreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * Filter, which AssessmentScore to fetch.
     */
    where?: AssessmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentScores to fetch.
     */
    orderBy?: AssessmentScoreOrderByWithRelationInput | AssessmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentScores.
     */
    cursor?: AssessmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentScores.
     */
    distinct?: AssessmentScoreScalarFieldEnum | AssessmentScoreScalarFieldEnum[]
  }

  /**
   * AssessmentScore findFirstOrThrow
   */
  export type AssessmentScoreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * Filter, which AssessmentScore to fetch.
     */
    where?: AssessmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentScores to fetch.
     */
    orderBy?: AssessmentScoreOrderByWithRelationInput | AssessmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AssessmentScores.
     */
    cursor?: AssessmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentScores.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AssessmentScores.
     */
    distinct?: AssessmentScoreScalarFieldEnum | AssessmentScoreScalarFieldEnum[]
  }

  /**
   * AssessmentScore findMany
   */
  export type AssessmentScoreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * Filter, which AssessmentScores to fetch.
     */
    where?: AssessmentScoreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AssessmentScores to fetch.
     */
    orderBy?: AssessmentScoreOrderByWithRelationInput | AssessmentScoreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AssessmentScores.
     */
    cursor?: AssessmentScoreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AssessmentScores from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AssessmentScores.
     */
    skip?: number
    distinct?: AssessmentScoreScalarFieldEnum | AssessmentScoreScalarFieldEnum[]
  }

  /**
   * AssessmentScore create
   */
  export type AssessmentScoreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * The data needed to create a AssessmentScore.
     */
    data: XOR<AssessmentScoreCreateInput, AssessmentScoreUncheckedCreateInput>
  }

  /**
   * AssessmentScore createMany
   */
  export type AssessmentScoreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AssessmentScores.
     */
    data: AssessmentScoreCreateManyInput | AssessmentScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentScore createManyAndReturn
   */
  export type AssessmentScoreCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AssessmentScores.
     */
    data: AssessmentScoreCreateManyInput | AssessmentScoreCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AssessmentScore update
   */
  export type AssessmentScoreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * The data needed to update a AssessmentScore.
     */
    data: XOR<AssessmentScoreUpdateInput, AssessmentScoreUncheckedUpdateInput>
    /**
     * Choose, which AssessmentScore to update.
     */
    where: AssessmentScoreWhereUniqueInput
  }

  /**
   * AssessmentScore updateMany
   */
  export type AssessmentScoreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AssessmentScores.
     */
    data: XOR<AssessmentScoreUpdateManyMutationInput, AssessmentScoreUncheckedUpdateManyInput>
    /**
     * Filter which AssessmentScores to update
     */
    where?: AssessmentScoreWhereInput
  }

  /**
   * AssessmentScore upsert
   */
  export type AssessmentScoreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * The filter to search for the AssessmentScore to update in case it exists.
     */
    where: AssessmentScoreWhereUniqueInput
    /**
     * In case the AssessmentScore found by the `where` argument doesn't exist, create a new AssessmentScore with this data.
     */
    create: XOR<AssessmentScoreCreateInput, AssessmentScoreUncheckedCreateInput>
    /**
     * In case the AssessmentScore was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssessmentScoreUpdateInput, AssessmentScoreUncheckedUpdateInput>
  }

  /**
   * AssessmentScore delete
   */
  export type AssessmentScoreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
    /**
     * Filter which AssessmentScore to delete.
     */
    where: AssessmentScoreWhereUniqueInput
  }

  /**
   * AssessmentScore deleteMany
   */
  export type AssessmentScoreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AssessmentScores to delete
     */
    where?: AssessmentScoreWhereInput
  }

  /**
   * AssessmentScore without action
   */
  export type AssessmentScoreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssessmentScore
     */
    select?: AssessmentScoreSelect<ExtArgs> | null
  }


  /**
   * Model UserAssessmentProgress
   */

  export type AggregateUserAssessmentProgress = {
    _count: UserAssessmentProgressCountAggregateOutputType | null
    _min: UserAssessmentProgressMinAggregateOutputType | null
    _max: UserAssessmentProgressMaxAggregateOutputType | null
  }

  export type UserAssessmentProgressMinAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStage: $Enums.AssessmentType | null
    startedAt: Date | null
    updatedAt: Date | null
  }

  export type UserAssessmentProgressMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    currentStage: $Enums.AssessmentType | null
    startedAt: Date | null
    updatedAt: Date | null
  }

  export type UserAssessmentProgressCountAggregateOutputType = {
    id: number
    userId: number
    currentStage: number
    startedAt: number
    updatedAt: number
    _all: number
  }


  export type UserAssessmentProgressMinAggregateInputType = {
    id?: true
    userId?: true
    currentStage?: true
    startedAt?: true
    updatedAt?: true
  }

  export type UserAssessmentProgressMaxAggregateInputType = {
    id?: true
    userId?: true
    currentStage?: true
    startedAt?: true
    updatedAt?: true
  }

  export type UserAssessmentProgressCountAggregateInputType = {
    id?: true
    userId?: true
    currentStage?: true
    startedAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAssessmentProgressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAssessmentProgress to aggregate.
     */
    where?: UserAssessmentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentProgresses to fetch.
     */
    orderBy?: UserAssessmentProgressOrderByWithRelationInput | UserAssessmentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAssessmentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAssessmentProgresses
    **/
    _count?: true | UserAssessmentProgressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAssessmentProgressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAssessmentProgressMaxAggregateInputType
  }

  export type GetUserAssessmentProgressAggregateType<T extends UserAssessmentProgressAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAssessmentProgress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAssessmentProgress[P]>
      : GetScalarType<T[P], AggregateUserAssessmentProgress[P]>
  }




  export type UserAssessmentProgressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAssessmentProgressWhereInput
    orderBy?: UserAssessmentProgressOrderByWithAggregationInput | UserAssessmentProgressOrderByWithAggregationInput[]
    by: UserAssessmentProgressScalarFieldEnum[] | UserAssessmentProgressScalarFieldEnum
    having?: UserAssessmentProgressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAssessmentProgressCountAggregateInputType | true
    _min?: UserAssessmentProgressMinAggregateInputType
    _max?: UserAssessmentProgressMaxAggregateInputType
  }

  export type UserAssessmentProgressGroupByOutputType = {
    id: string
    userId: string
    currentStage: $Enums.AssessmentType | null
    startedAt: Date
    updatedAt: Date
    _count: UserAssessmentProgressCountAggregateOutputType | null
    _min: UserAssessmentProgressMinAggregateOutputType | null
    _max: UserAssessmentProgressMaxAggregateOutputType | null
  }

  type GetUserAssessmentProgressGroupByPayload<T extends UserAssessmentProgressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAssessmentProgressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAssessmentProgressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAssessmentProgressGroupByOutputType[P]>
            : GetScalarType<T[P], UserAssessmentProgressGroupByOutputType[P]>
        }
      >
    >


  export type UserAssessmentProgressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStage?: boolean
    startedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAssessmentProgress"]>

  export type UserAssessmentProgressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    currentStage?: boolean
    startedAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAssessmentProgress"]>

  export type UserAssessmentProgressSelectScalar = {
    id?: boolean
    userId?: boolean
    currentStage?: boolean
    startedAt?: boolean
    updatedAt?: boolean
  }


  export type $UserAssessmentProgressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAssessmentProgress"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      currentStage: $Enums.AssessmentType | null
      startedAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAssessmentProgress"]>
    composites: {}
  }

  type UserAssessmentProgressGetPayload<S extends boolean | null | undefined | UserAssessmentProgressDefaultArgs> = $Result.GetResult<Prisma.$UserAssessmentProgressPayload, S>

  type UserAssessmentProgressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAssessmentProgressFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAssessmentProgressCountAggregateInputType | true
    }

  export interface UserAssessmentProgressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAssessmentProgress'], meta: { name: 'UserAssessmentProgress' } }
    /**
     * Find zero or one UserAssessmentProgress that matches the filter.
     * @param {UserAssessmentProgressFindUniqueArgs} args - Arguments to find a UserAssessmentProgress
     * @example
     * // Get one UserAssessmentProgress
     * const userAssessmentProgress = await prisma.userAssessmentProgress.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAssessmentProgressFindUniqueArgs>(args: SelectSubset<T, UserAssessmentProgressFindUniqueArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAssessmentProgress that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAssessmentProgressFindUniqueOrThrowArgs} args - Arguments to find a UserAssessmentProgress
     * @example
     * // Get one UserAssessmentProgress
     * const userAssessmentProgress = await prisma.userAssessmentProgress.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAssessmentProgressFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAssessmentProgressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAssessmentProgress that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressFindFirstArgs} args - Arguments to find a UserAssessmentProgress
     * @example
     * // Get one UserAssessmentProgress
     * const userAssessmentProgress = await prisma.userAssessmentProgress.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAssessmentProgressFindFirstArgs>(args?: SelectSubset<T, UserAssessmentProgressFindFirstArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAssessmentProgress that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressFindFirstOrThrowArgs} args - Arguments to find a UserAssessmentProgress
     * @example
     * // Get one UserAssessmentProgress
     * const userAssessmentProgress = await prisma.userAssessmentProgress.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAssessmentProgressFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAssessmentProgressFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAssessmentProgresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAssessmentProgresses
     * const userAssessmentProgresses = await prisma.userAssessmentProgress.findMany()
     * 
     * // Get first 10 UserAssessmentProgresses
     * const userAssessmentProgresses = await prisma.userAssessmentProgress.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAssessmentProgressWithIdOnly = await prisma.userAssessmentProgress.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAssessmentProgressFindManyArgs>(args?: SelectSubset<T, UserAssessmentProgressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAssessmentProgress.
     * @param {UserAssessmentProgressCreateArgs} args - Arguments to create a UserAssessmentProgress.
     * @example
     * // Create one UserAssessmentProgress
     * const UserAssessmentProgress = await prisma.userAssessmentProgress.create({
     *   data: {
     *     // ... data to create a UserAssessmentProgress
     *   }
     * })
     * 
     */
    create<T extends UserAssessmentProgressCreateArgs>(args: SelectSubset<T, UserAssessmentProgressCreateArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAssessmentProgresses.
     * @param {UserAssessmentProgressCreateManyArgs} args - Arguments to create many UserAssessmentProgresses.
     * @example
     * // Create many UserAssessmentProgresses
     * const userAssessmentProgress = await prisma.userAssessmentProgress.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAssessmentProgressCreateManyArgs>(args?: SelectSubset<T, UserAssessmentProgressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAssessmentProgresses and returns the data saved in the database.
     * @param {UserAssessmentProgressCreateManyAndReturnArgs} args - Arguments to create many UserAssessmentProgresses.
     * @example
     * // Create many UserAssessmentProgresses
     * const userAssessmentProgress = await prisma.userAssessmentProgress.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAssessmentProgresses and only return the `id`
     * const userAssessmentProgressWithIdOnly = await prisma.userAssessmentProgress.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAssessmentProgressCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAssessmentProgressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAssessmentProgress.
     * @param {UserAssessmentProgressDeleteArgs} args - Arguments to delete one UserAssessmentProgress.
     * @example
     * // Delete one UserAssessmentProgress
     * const UserAssessmentProgress = await prisma.userAssessmentProgress.delete({
     *   where: {
     *     // ... filter to delete one UserAssessmentProgress
     *   }
     * })
     * 
     */
    delete<T extends UserAssessmentProgressDeleteArgs>(args: SelectSubset<T, UserAssessmentProgressDeleteArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAssessmentProgress.
     * @param {UserAssessmentProgressUpdateArgs} args - Arguments to update one UserAssessmentProgress.
     * @example
     * // Update one UserAssessmentProgress
     * const userAssessmentProgress = await prisma.userAssessmentProgress.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAssessmentProgressUpdateArgs>(args: SelectSubset<T, UserAssessmentProgressUpdateArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAssessmentProgresses.
     * @param {UserAssessmentProgressDeleteManyArgs} args - Arguments to filter UserAssessmentProgresses to delete.
     * @example
     * // Delete a few UserAssessmentProgresses
     * const { count } = await prisma.userAssessmentProgress.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAssessmentProgressDeleteManyArgs>(args?: SelectSubset<T, UserAssessmentProgressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAssessmentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAssessmentProgresses
     * const userAssessmentProgress = await prisma.userAssessmentProgress.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAssessmentProgressUpdateManyArgs>(args: SelectSubset<T, UserAssessmentProgressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAssessmentProgress.
     * @param {UserAssessmentProgressUpsertArgs} args - Arguments to update or create a UserAssessmentProgress.
     * @example
     * // Update or create a UserAssessmentProgress
     * const userAssessmentProgress = await prisma.userAssessmentProgress.upsert({
     *   create: {
     *     // ... data to create a UserAssessmentProgress
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAssessmentProgress we want to update
     *   }
     * })
     */
    upsert<T extends UserAssessmentProgressUpsertArgs>(args: SelectSubset<T, UserAssessmentProgressUpsertArgs<ExtArgs>>): Prisma__UserAssessmentProgressClient<$Result.GetResult<Prisma.$UserAssessmentProgressPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAssessmentProgresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressCountArgs} args - Arguments to filter UserAssessmentProgresses to count.
     * @example
     * // Count the number of UserAssessmentProgresses
     * const count = await prisma.userAssessmentProgress.count({
     *   where: {
     *     // ... the filter for the UserAssessmentProgresses we want to count
     *   }
     * })
    **/
    count<T extends UserAssessmentProgressCountArgs>(
      args?: Subset<T, UserAssessmentProgressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAssessmentProgressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAssessmentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAssessmentProgressAggregateArgs>(args: Subset<T, UserAssessmentProgressAggregateArgs>): Prisma.PrismaPromise<GetUserAssessmentProgressAggregateType<T>>

    /**
     * Group by UserAssessmentProgress.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentProgressGroupByArgs} args - Group by arguments.
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
      T extends UserAssessmentProgressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAssessmentProgressGroupByArgs['orderBy'] }
        : { orderBy?: UserAssessmentProgressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAssessmentProgressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAssessmentProgressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAssessmentProgress model
   */
  readonly fields: UserAssessmentProgressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAssessmentProgress.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAssessmentProgressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserAssessmentProgress model
   */ 
  interface UserAssessmentProgressFieldRefs {
    readonly id: FieldRef<"UserAssessmentProgress", 'String'>
    readonly userId: FieldRef<"UserAssessmentProgress", 'String'>
    readonly currentStage: FieldRef<"UserAssessmentProgress", 'AssessmentType'>
    readonly startedAt: FieldRef<"UserAssessmentProgress", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAssessmentProgress", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAssessmentProgress findUnique
   */
  export type UserAssessmentProgressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentProgress to fetch.
     */
    where: UserAssessmentProgressWhereUniqueInput
  }

  /**
   * UserAssessmentProgress findUniqueOrThrow
   */
  export type UserAssessmentProgressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentProgress to fetch.
     */
    where: UserAssessmentProgressWhereUniqueInput
  }

  /**
   * UserAssessmentProgress findFirst
   */
  export type UserAssessmentProgressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentProgress to fetch.
     */
    where?: UserAssessmentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentProgresses to fetch.
     */
    orderBy?: UserAssessmentProgressOrderByWithRelationInput | UserAssessmentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssessmentProgresses.
     */
    cursor?: UserAssessmentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssessmentProgresses.
     */
    distinct?: UserAssessmentProgressScalarFieldEnum | UserAssessmentProgressScalarFieldEnum[]
  }

  /**
   * UserAssessmentProgress findFirstOrThrow
   */
  export type UserAssessmentProgressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentProgress to fetch.
     */
    where?: UserAssessmentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentProgresses to fetch.
     */
    orderBy?: UserAssessmentProgressOrderByWithRelationInput | UserAssessmentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssessmentProgresses.
     */
    cursor?: UserAssessmentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentProgresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssessmentProgresses.
     */
    distinct?: UserAssessmentProgressScalarFieldEnum | UserAssessmentProgressScalarFieldEnum[]
  }

  /**
   * UserAssessmentProgress findMany
   */
  export type UserAssessmentProgressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentProgresses to fetch.
     */
    where?: UserAssessmentProgressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentProgresses to fetch.
     */
    orderBy?: UserAssessmentProgressOrderByWithRelationInput | UserAssessmentProgressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAssessmentProgresses.
     */
    cursor?: UserAssessmentProgressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentProgresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentProgresses.
     */
    skip?: number
    distinct?: UserAssessmentProgressScalarFieldEnum | UserAssessmentProgressScalarFieldEnum[]
  }

  /**
   * UserAssessmentProgress create
   */
  export type UserAssessmentProgressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * The data needed to create a UserAssessmentProgress.
     */
    data: XOR<UserAssessmentProgressCreateInput, UserAssessmentProgressUncheckedCreateInput>
  }

  /**
   * UserAssessmentProgress createMany
   */
  export type UserAssessmentProgressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAssessmentProgresses.
     */
    data: UserAssessmentProgressCreateManyInput | UserAssessmentProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAssessmentProgress createManyAndReturn
   */
  export type UserAssessmentProgressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAssessmentProgresses.
     */
    data: UserAssessmentProgressCreateManyInput | UserAssessmentProgressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAssessmentProgress update
   */
  export type UserAssessmentProgressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * The data needed to update a UserAssessmentProgress.
     */
    data: XOR<UserAssessmentProgressUpdateInput, UserAssessmentProgressUncheckedUpdateInput>
    /**
     * Choose, which UserAssessmentProgress to update.
     */
    where: UserAssessmentProgressWhereUniqueInput
  }

  /**
   * UserAssessmentProgress updateMany
   */
  export type UserAssessmentProgressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAssessmentProgresses.
     */
    data: XOR<UserAssessmentProgressUpdateManyMutationInput, UserAssessmentProgressUncheckedUpdateManyInput>
    /**
     * Filter which UserAssessmentProgresses to update
     */
    where?: UserAssessmentProgressWhereInput
  }

  /**
   * UserAssessmentProgress upsert
   */
  export type UserAssessmentProgressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * The filter to search for the UserAssessmentProgress to update in case it exists.
     */
    where: UserAssessmentProgressWhereUniqueInput
    /**
     * In case the UserAssessmentProgress found by the `where` argument doesn't exist, create a new UserAssessmentProgress with this data.
     */
    create: XOR<UserAssessmentProgressCreateInput, UserAssessmentProgressUncheckedCreateInput>
    /**
     * In case the UserAssessmentProgress was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAssessmentProgressUpdateInput, UserAssessmentProgressUncheckedUpdateInput>
  }

  /**
   * UserAssessmentProgress delete
   */
  export type UserAssessmentProgressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
    /**
     * Filter which UserAssessmentProgress to delete.
     */
    where: UserAssessmentProgressWhereUniqueInput
  }

  /**
   * UserAssessmentProgress deleteMany
   */
  export type UserAssessmentProgressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAssessmentProgresses to delete
     */
    where?: UserAssessmentProgressWhereInput
  }

  /**
   * UserAssessmentProgress without action
   */
  export type UserAssessmentProgressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentProgress
     */
    select?: UserAssessmentProgressSelect<ExtArgs> | null
  }


  /**
   * Model UserAssessmentPreference
   */

  export type AggregateUserAssessmentPreference = {
    _count: UserAssessmentPreferenceCountAggregateOutputType | null
    _min: UserAssessmentPreferenceMinAggregateOutputType | null
    _max: UserAssessmentPreferenceMaxAggregateOutputType | null
  }

  export type UserAssessmentPreferenceMinAggregateOutputType = {
    id: string | null
    userId: string | null
    preferredLanguage: string | null
    economicStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAssessmentPreferenceMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    preferredLanguage: string | null
    economicStatus: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserAssessmentPreferenceCountAggregateOutputType = {
    id: number
    userId: number
    preferredLanguage: number
    economicStatus: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAssessmentPreferenceMinAggregateInputType = {
    id?: true
    userId?: true
    preferredLanguage?: true
    economicStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAssessmentPreferenceMaxAggregateInputType = {
    id?: true
    userId?: true
    preferredLanguage?: true
    economicStatus?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserAssessmentPreferenceCountAggregateInputType = {
    id?: true
    userId?: true
    preferredLanguage?: true
    economicStatus?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAssessmentPreferenceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAssessmentPreference to aggregate.
     */
    where?: UserAssessmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentPreferences to fetch.
     */
    orderBy?: UserAssessmentPreferenceOrderByWithRelationInput | UserAssessmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserAssessmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserAssessmentPreferences
    **/
    _count?: true | UserAssessmentPreferenceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserAssessmentPreferenceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserAssessmentPreferenceMaxAggregateInputType
  }

  export type GetUserAssessmentPreferenceAggregateType<T extends UserAssessmentPreferenceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserAssessmentPreference]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserAssessmentPreference[P]>
      : GetScalarType<T[P], AggregateUserAssessmentPreference[P]>
  }




  export type UserAssessmentPreferenceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserAssessmentPreferenceWhereInput
    orderBy?: UserAssessmentPreferenceOrderByWithAggregationInput | UserAssessmentPreferenceOrderByWithAggregationInput[]
    by: UserAssessmentPreferenceScalarFieldEnum[] | UserAssessmentPreferenceScalarFieldEnum
    having?: UserAssessmentPreferenceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserAssessmentPreferenceCountAggregateInputType | true
    _min?: UserAssessmentPreferenceMinAggregateInputType
    _max?: UserAssessmentPreferenceMaxAggregateInputType
  }

  export type UserAssessmentPreferenceGroupByOutputType = {
    id: string
    userId: string
    preferredLanguage: string
    economicStatus: string
    createdAt: Date
    updatedAt: Date
    _count: UserAssessmentPreferenceCountAggregateOutputType | null
    _min: UserAssessmentPreferenceMinAggregateOutputType | null
    _max: UserAssessmentPreferenceMaxAggregateOutputType | null
  }

  type GetUserAssessmentPreferenceGroupByPayload<T extends UserAssessmentPreferenceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserAssessmentPreferenceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserAssessmentPreferenceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserAssessmentPreferenceGroupByOutputType[P]>
            : GetScalarType<T[P], UserAssessmentPreferenceGroupByOutputType[P]>
        }
      >
    >


  export type UserAssessmentPreferenceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    preferredLanguage?: boolean
    economicStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAssessmentPreference"]>

  export type UserAssessmentPreferenceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    preferredLanguage?: boolean
    economicStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["userAssessmentPreference"]>

  export type UserAssessmentPreferenceSelectScalar = {
    id?: boolean
    userId?: boolean
    preferredLanguage?: boolean
    economicStatus?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $UserAssessmentPreferencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserAssessmentPreference"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      preferredLanguage: string
      economicStatus: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["userAssessmentPreference"]>
    composites: {}
  }

  type UserAssessmentPreferenceGetPayload<S extends boolean | null | undefined | UserAssessmentPreferenceDefaultArgs> = $Result.GetResult<Prisma.$UserAssessmentPreferencePayload, S>

  type UserAssessmentPreferenceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserAssessmentPreferenceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserAssessmentPreferenceCountAggregateInputType | true
    }

  export interface UserAssessmentPreferenceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserAssessmentPreference'], meta: { name: 'UserAssessmentPreference' } }
    /**
     * Find zero or one UserAssessmentPreference that matches the filter.
     * @param {UserAssessmentPreferenceFindUniqueArgs} args - Arguments to find a UserAssessmentPreference
     * @example
     * // Get one UserAssessmentPreference
     * const userAssessmentPreference = await prisma.userAssessmentPreference.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserAssessmentPreferenceFindUniqueArgs>(args: SelectSubset<T, UserAssessmentPreferenceFindUniqueArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserAssessmentPreference that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserAssessmentPreferenceFindUniqueOrThrowArgs} args - Arguments to find a UserAssessmentPreference
     * @example
     * // Get one UserAssessmentPreference
     * const userAssessmentPreference = await prisma.userAssessmentPreference.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserAssessmentPreferenceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserAssessmentPreferenceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserAssessmentPreference that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceFindFirstArgs} args - Arguments to find a UserAssessmentPreference
     * @example
     * // Get one UserAssessmentPreference
     * const userAssessmentPreference = await prisma.userAssessmentPreference.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserAssessmentPreferenceFindFirstArgs>(args?: SelectSubset<T, UserAssessmentPreferenceFindFirstArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserAssessmentPreference that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceFindFirstOrThrowArgs} args - Arguments to find a UserAssessmentPreference
     * @example
     * // Get one UserAssessmentPreference
     * const userAssessmentPreference = await prisma.userAssessmentPreference.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserAssessmentPreferenceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserAssessmentPreferenceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserAssessmentPreferences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserAssessmentPreferences
     * const userAssessmentPreferences = await prisma.userAssessmentPreference.findMany()
     * 
     * // Get first 10 UserAssessmentPreferences
     * const userAssessmentPreferences = await prisma.userAssessmentPreference.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userAssessmentPreferenceWithIdOnly = await prisma.userAssessmentPreference.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserAssessmentPreferenceFindManyArgs>(args?: SelectSubset<T, UserAssessmentPreferenceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserAssessmentPreference.
     * @param {UserAssessmentPreferenceCreateArgs} args - Arguments to create a UserAssessmentPreference.
     * @example
     * // Create one UserAssessmentPreference
     * const UserAssessmentPreference = await prisma.userAssessmentPreference.create({
     *   data: {
     *     // ... data to create a UserAssessmentPreference
     *   }
     * })
     * 
     */
    create<T extends UserAssessmentPreferenceCreateArgs>(args: SelectSubset<T, UserAssessmentPreferenceCreateArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserAssessmentPreferences.
     * @param {UserAssessmentPreferenceCreateManyArgs} args - Arguments to create many UserAssessmentPreferences.
     * @example
     * // Create many UserAssessmentPreferences
     * const userAssessmentPreference = await prisma.userAssessmentPreference.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserAssessmentPreferenceCreateManyArgs>(args?: SelectSubset<T, UserAssessmentPreferenceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserAssessmentPreferences and returns the data saved in the database.
     * @param {UserAssessmentPreferenceCreateManyAndReturnArgs} args - Arguments to create many UserAssessmentPreferences.
     * @example
     * // Create many UserAssessmentPreferences
     * const userAssessmentPreference = await prisma.userAssessmentPreference.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserAssessmentPreferences and only return the `id`
     * const userAssessmentPreferenceWithIdOnly = await prisma.userAssessmentPreference.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserAssessmentPreferenceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserAssessmentPreferenceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserAssessmentPreference.
     * @param {UserAssessmentPreferenceDeleteArgs} args - Arguments to delete one UserAssessmentPreference.
     * @example
     * // Delete one UserAssessmentPreference
     * const UserAssessmentPreference = await prisma.userAssessmentPreference.delete({
     *   where: {
     *     // ... filter to delete one UserAssessmentPreference
     *   }
     * })
     * 
     */
    delete<T extends UserAssessmentPreferenceDeleteArgs>(args: SelectSubset<T, UserAssessmentPreferenceDeleteArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserAssessmentPreference.
     * @param {UserAssessmentPreferenceUpdateArgs} args - Arguments to update one UserAssessmentPreference.
     * @example
     * // Update one UserAssessmentPreference
     * const userAssessmentPreference = await prisma.userAssessmentPreference.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserAssessmentPreferenceUpdateArgs>(args: SelectSubset<T, UserAssessmentPreferenceUpdateArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserAssessmentPreferences.
     * @param {UserAssessmentPreferenceDeleteManyArgs} args - Arguments to filter UserAssessmentPreferences to delete.
     * @example
     * // Delete a few UserAssessmentPreferences
     * const { count } = await prisma.userAssessmentPreference.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserAssessmentPreferenceDeleteManyArgs>(args?: SelectSubset<T, UserAssessmentPreferenceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserAssessmentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserAssessmentPreferences
     * const userAssessmentPreference = await prisma.userAssessmentPreference.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserAssessmentPreferenceUpdateManyArgs>(args: SelectSubset<T, UserAssessmentPreferenceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserAssessmentPreference.
     * @param {UserAssessmentPreferenceUpsertArgs} args - Arguments to update or create a UserAssessmentPreference.
     * @example
     * // Update or create a UserAssessmentPreference
     * const userAssessmentPreference = await prisma.userAssessmentPreference.upsert({
     *   create: {
     *     // ... data to create a UserAssessmentPreference
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserAssessmentPreference we want to update
     *   }
     * })
     */
    upsert<T extends UserAssessmentPreferenceUpsertArgs>(args: SelectSubset<T, UserAssessmentPreferenceUpsertArgs<ExtArgs>>): Prisma__UserAssessmentPreferenceClient<$Result.GetResult<Prisma.$UserAssessmentPreferencePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserAssessmentPreferences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceCountArgs} args - Arguments to filter UserAssessmentPreferences to count.
     * @example
     * // Count the number of UserAssessmentPreferences
     * const count = await prisma.userAssessmentPreference.count({
     *   where: {
     *     // ... the filter for the UserAssessmentPreferences we want to count
     *   }
     * })
    **/
    count<T extends UserAssessmentPreferenceCountArgs>(
      args?: Subset<T, UserAssessmentPreferenceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserAssessmentPreferenceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserAssessmentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAssessmentPreferenceAggregateArgs>(args: Subset<T, UserAssessmentPreferenceAggregateArgs>): Prisma.PrismaPromise<GetUserAssessmentPreferenceAggregateType<T>>

    /**
     * Group by UserAssessmentPreference.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAssessmentPreferenceGroupByArgs} args - Group by arguments.
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
      T extends UserAssessmentPreferenceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserAssessmentPreferenceGroupByArgs['orderBy'] }
        : { orderBy?: UserAssessmentPreferenceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserAssessmentPreferenceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserAssessmentPreferenceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserAssessmentPreference model
   */
  readonly fields: UserAssessmentPreferenceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserAssessmentPreference.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserAssessmentPreferenceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
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
   * Fields of the UserAssessmentPreference model
   */ 
  interface UserAssessmentPreferenceFieldRefs {
    readonly id: FieldRef<"UserAssessmentPreference", 'String'>
    readonly userId: FieldRef<"UserAssessmentPreference", 'String'>
    readonly preferredLanguage: FieldRef<"UserAssessmentPreference", 'String'>
    readonly economicStatus: FieldRef<"UserAssessmentPreference", 'String'>
    readonly createdAt: FieldRef<"UserAssessmentPreference", 'DateTime'>
    readonly updatedAt: FieldRef<"UserAssessmentPreference", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserAssessmentPreference findUnique
   */
  export type UserAssessmentPreferenceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentPreference to fetch.
     */
    where: UserAssessmentPreferenceWhereUniqueInput
  }

  /**
   * UserAssessmentPreference findUniqueOrThrow
   */
  export type UserAssessmentPreferenceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentPreference to fetch.
     */
    where: UserAssessmentPreferenceWhereUniqueInput
  }

  /**
   * UserAssessmentPreference findFirst
   */
  export type UserAssessmentPreferenceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentPreference to fetch.
     */
    where?: UserAssessmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentPreferences to fetch.
     */
    orderBy?: UserAssessmentPreferenceOrderByWithRelationInput | UserAssessmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssessmentPreferences.
     */
    cursor?: UserAssessmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssessmentPreferences.
     */
    distinct?: UserAssessmentPreferenceScalarFieldEnum | UserAssessmentPreferenceScalarFieldEnum[]
  }

  /**
   * UserAssessmentPreference findFirstOrThrow
   */
  export type UserAssessmentPreferenceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentPreference to fetch.
     */
    where?: UserAssessmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentPreferences to fetch.
     */
    orderBy?: UserAssessmentPreferenceOrderByWithRelationInput | UserAssessmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserAssessmentPreferences.
     */
    cursor?: UserAssessmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentPreferences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserAssessmentPreferences.
     */
    distinct?: UserAssessmentPreferenceScalarFieldEnum | UserAssessmentPreferenceScalarFieldEnum[]
  }

  /**
   * UserAssessmentPreference findMany
   */
  export type UserAssessmentPreferenceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * Filter, which UserAssessmentPreferences to fetch.
     */
    where?: UserAssessmentPreferenceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserAssessmentPreferences to fetch.
     */
    orderBy?: UserAssessmentPreferenceOrderByWithRelationInput | UserAssessmentPreferenceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserAssessmentPreferences.
     */
    cursor?: UserAssessmentPreferenceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserAssessmentPreferences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserAssessmentPreferences.
     */
    skip?: number
    distinct?: UserAssessmentPreferenceScalarFieldEnum | UserAssessmentPreferenceScalarFieldEnum[]
  }

  /**
   * UserAssessmentPreference create
   */
  export type UserAssessmentPreferenceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * The data needed to create a UserAssessmentPreference.
     */
    data: XOR<UserAssessmentPreferenceCreateInput, UserAssessmentPreferenceUncheckedCreateInput>
  }

  /**
   * UserAssessmentPreference createMany
   */
  export type UserAssessmentPreferenceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserAssessmentPreferences.
     */
    data: UserAssessmentPreferenceCreateManyInput | UserAssessmentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAssessmentPreference createManyAndReturn
   */
  export type UserAssessmentPreferenceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserAssessmentPreferences.
     */
    data: UserAssessmentPreferenceCreateManyInput | UserAssessmentPreferenceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserAssessmentPreference update
   */
  export type UserAssessmentPreferenceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * The data needed to update a UserAssessmentPreference.
     */
    data: XOR<UserAssessmentPreferenceUpdateInput, UserAssessmentPreferenceUncheckedUpdateInput>
    /**
     * Choose, which UserAssessmentPreference to update.
     */
    where: UserAssessmentPreferenceWhereUniqueInput
  }

  /**
   * UserAssessmentPreference updateMany
   */
  export type UserAssessmentPreferenceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserAssessmentPreferences.
     */
    data: XOR<UserAssessmentPreferenceUpdateManyMutationInput, UserAssessmentPreferenceUncheckedUpdateManyInput>
    /**
     * Filter which UserAssessmentPreferences to update
     */
    where?: UserAssessmentPreferenceWhereInput
  }

  /**
   * UserAssessmentPreference upsert
   */
  export type UserAssessmentPreferenceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * The filter to search for the UserAssessmentPreference to update in case it exists.
     */
    where: UserAssessmentPreferenceWhereUniqueInput
    /**
     * In case the UserAssessmentPreference found by the `where` argument doesn't exist, create a new UserAssessmentPreference with this data.
     */
    create: XOR<UserAssessmentPreferenceCreateInput, UserAssessmentPreferenceUncheckedCreateInput>
    /**
     * In case the UserAssessmentPreference was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserAssessmentPreferenceUpdateInput, UserAssessmentPreferenceUncheckedUpdateInput>
  }

  /**
   * UserAssessmentPreference delete
   */
  export type UserAssessmentPreferenceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
    /**
     * Filter which UserAssessmentPreference to delete.
     */
    where: UserAssessmentPreferenceWhereUniqueInput
  }

  /**
   * UserAssessmentPreference deleteMany
   */
  export type UserAssessmentPreferenceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserAssessmentPreferences to delete
     */
    where?: UserAssessmentPreferenceWhereInput
  }

  /**
   * UserAssessmentPreference without action
   */
  export type UserAssessmentPreferenceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserAssessmentPreference
     */
    select?: UserAssessmentPreferenceSelect<ExtArgs> | null
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


  export const AssessmentTraitScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    assessmentType: 'assessmentType',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssessmentTraitScalarFieldEnum = (typeof AssessmentTraitScalarFieldEnum)[keyof typeof AssessmentTraitScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    traitId: 'traitId',
    order: 'order',
    reverse: 'reverse',
    timeLimitSeconds: 'timeLimitSeconds',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const QuestionTranslationScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    language: 'language',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionTranslationScalarFieldEnum = (typeof QuestionTranslationScalarFieldEnum)[keyof typeof QuestionTranslationScalarFieldEnum]


  export const QuestionOptionScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    order: 'order',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionOptionScalarFieldEnum = (typeof QuestionOptionScalarFieldEnum)[keyof typeof QuestionOptionScalarFieldEnum]


  export const OptionTranslationScalarFieldEnum: {
    id: 'id',
    optionId: 'optionId',
    language: 'language',
    text: 'text',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OptionTranslationScalarFieldEnum = (typeof OptionTranslationScalarFieldEnum)[keyof typeof OptionTranslationScalarFieldEnum]


  export const AssessmentScoreScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    assessmentType: 'assessmentType',
    traitOrCategoryCode: 'traitOrCategoryCode',
    score: 'score',
    createdAt: 'createdAt'
  };

  export type AssessmentScoreScalarFieldEnum = (typeof AssessmentScoreScalarFieldEnum)[keyof typeof AssessmentScoreScalarFieldEnum]


  export const UserAssessmentProgressScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    currentStage: 'currentStage',
    startedAt: 'startedAt',
    updatedAt: 'updatedAt'
  };

  export type UserAssessmentProgressScalarFieldEnum = (typeof UserAssessmentProgressScalarFieldEnum)[keyof typeof UserAssessmentProgressScalarFieldEnum]


  export const UserAssessmentPreferenceScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    preferredLanguage: 'preferredLanguage',
    economicStatus: 'economicStatus',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserAssessmentPreferenceScalarFieldEnum = (typeof UserAssessmentPreferenceScalarFieldEnum)[keyof typeof UserAssessmentPreferenceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'AssessmentType'
   */
  export type EnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType'>
    


  /**
   * Reference to a field of type 'AssessmentType[]'
   */
  export type ListEnumAssessmentTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssessmentType[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type AssessmentTraitWhereInput = {
    AND?: AssessmentTraitWhereInput | AssessmentTraitWhereInput[]
    OR?: AssessmentTraitWhereInput[]
    NOT?: AssessmentTraitWhereInput | AssessmentTraitWhereInput[]
    id?: StringFilter<"AssessmentTrait"> | string
    code?: StringFilter<"AssessmentTrait"> | string
    name?: StringFilter<"AssessmentTrait"> | string
    assessmentType?: EnumAssessmentTypeFilter<"AssessmentTrait"> | $Enums.AssessmentType
    createdAt?: DateTimeFilter<"AssessmentTrait"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentTrait"> | Date | string
    questions?: QuestionListRelationFilter
  }

  export type AssessmentTraitOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    assessmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
  }

  export type AssessmentTraitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code_assessmentType?: AssessmentTraitCodeAssessmentTypeCompoundUniqueInput
    AND?: AssessmentTraitWhereInput | AssessmentTraitWhereInput[]
    OR?: AssessmentTraitWhereInput[]
    NOT?: AssessmentTraitWhereInput | AssessmentTraitWhereInput[]
    code?: StringFilter<"AssessmentTrait"> | string
    name?: StringFilter<"AssessmentTrait"> | string
    assessmentType?: EnumAssessmentTypeFilter<"AssessmentTrait"> | $Enums.AssessmentType
    createdAt?: DateTimeFilter<"AssessmentTrait"> | Date | string
    updatedAt?: DateTimeFilter<"AssessmentTrait"> | Date | string
    questions?: QuestionListRelationFilter
  }, "id" | "code_assessmentType">

  export type AssessmentTraitOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    assessmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssessmentTraitCountOrderByAggregateInput
    _max?: AssessmentTraitMaxOrderByAggregateInput
    _min?: AssessmentTraitMinOrderByAggregateInput
  }

  export type AssessmentTraitScalarWhereWithAggregatesInput = {
    AND?: AssessmentTraitScalarWhereWithAggregatesInput | AssessmentTraitScalarWhereWithAggregatesInput[]
    OR?: AssessmentTraitScalarWhereWithAggregatesInput[]
    NOT?: AssessmentTraitScalarWhereWithAggregatesInput | AssessmentTraitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentTrait"> | string
    code?: StringWithAggregatesFilter<"AssessmentTrait"> | string
    name?: StringWithAggregatesFilter<"AssessmentTrait"> | string
    assessmentType?: EnumAssessmentTypeWithAggregatesFilter<"AssessmentTrait"> | $Enums.AssessmentType
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentTrait"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AssessmentTrait"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    traitId?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    reverse?: BoolFilter<"Question"> | boolean
    timeLimitSeconds?: IntNullableFilter<"Question"> | number | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    trait?: XOR<AssessmentTraitRelationFilter, AssessmentTraitWhereInput>
    translations?: QuestionTranslationListRelationFilter
    options?: QuestionOptionListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    traitId?: SortOrder
    order?: SortOrder
    reverse?: SortOrder
    timeLimitSeconds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    trait?: AssessmentTraitOrderByWithRelationInput
    translations?: QuestionTranslationOrderByRelationAggregateInput
    options?: QuestionOptionOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    traitId?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    reverse?: BoolFilter<"Question"> | boolean
    timeLimitSeconds?: IntNullableFilter<"Question"> | number | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    trait?: XOR<AssessmentTraitRelationFilter, AssessmentTraitWhereInput>
    translations?: QuestionTranslationListRelationFilter
    options?: QuestionOptionListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    traitId?: SortOrder
    order?: SortOrder
    reverse?: SortOrder
    timeLimitSeconds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _avg?: QuestionAvgOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
    _sum?: QuestionSumOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    traitId?: StringWithAggregatesFilter<"Question"> | string
    order?: IntWithAggregatesFilter<"Question"> | number
    reverse?: BoolWithAggregatesFilter<"Question"> | boolean
    timeLimitSeconds?: IntNullableWithAggregatesFilter<"Question"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type QuestionTranslationWhereInput = {
    AND?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    OR?: QuestionTranslationWhereInput[]
    NOT?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    id?: StringFilter<"QuestionTranslation"> | string
    questionId?: StringFilter<"QuestionTranslation"> | string
    language?: StringFilter<"QuestionTranslation"> | string
    text?: StringFilter<"QuestionTranslation"> | string
    createdAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }

  export type QuestionTranslationOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
  }

  export type QuestionTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    questionId_language?: QuestionTranslationQuestionIdLanguageCompoundUniqueInput
    AND?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    OR?: QuestionTranslationWhereInput[]
    NOT?: QuestionTranslationWhereInput | QuestionTranslationWhereInput[]
    questionId?: StringFilter<"QuestionTranslation"> | string
    language?: StringFilter<"QuestionTranslation"> | string
    text?: StringFilter<"QuestionTranslation"> | string
    createdAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
  }, "id" | "questionId_language">

  export type QuestionTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionTranslationCountOrderByAggregateInput
    _max?: QuestionTranslationMaxOrderByAggregateInput
    _min?: QuestionTranslationMinOrderByAggregateInput
  }

  export type QuestionTranslationScalarWhereWithAggregatesInput = {
    AND?: QuestionTranslationScalarWhereWithAggregatesInput | QuestionTranslationScalarWhereWithAggregatesInput[]
    OR?: QuestionTranslationScalarWhereWithAggregatesInput[]
    NOT?: QuestionTranslationScalarWhereWithAggregatesInput | QuestionTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionTranslation"> | string
    questionId?: StringWithAggregatesFilter<"QuestionTranslation"> | string
    language?: StringWithAggregatesFilter<"QuestionTranslation"> | string
    text?: StringWithAggregatesFilter<"QuestionTranslation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionTranslation"> | Date | string
  }

  export type QuestionOptionWhereInput = {
    AND?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    OR?: QuestionOptionWhereInput[]
    NOT?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    id?: StringFilter<"QuestionOption"> | string
    questionId?: StringFilter<"QuestionOption"> | string
    order?: IntFilter<"QuestionOption"> | number
    isCorrect?: BoolFilter<"QuestionOption"> | boolean
    createdAt?: DateTimeFilter<"QuestionOption"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionOption"> | Date | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    translations?: OptionTranslationListRelationFilter
  }

  export type QuestionOptionOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    translations?: OptionTranslationOrderByRelationAggregateInput
  }

  export type QuestionOptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    OR?: QuestionOptionWhereInput[]
    NOT?: QuestionOptionWhereInput | QuestionOptionWhereInput[]
    questionId?: StringFilter<"QuestionOption"> | string
    order?: IntFilter<"QuestionOption"> | number
    isCorrect?: BoolFilter<"QuestionOption"> | boolean
    createdAt?: DateTimeFilter<"QuestionOption"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionOption"> | Date | string
    question?: XOR<QuestionRelationFilter, QuestionWhereInput>
    translations?: OptionTranslationListRelationFilter
  }, "id">

  export type QuestionOptionOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionOptionCountOrderByAggregateInput
    _avg?: QuestionOptionAvgOrderByAggregateInput
    _max?: QuestionOptionMaxOrderByAggregateInput
    _min?: QuestionOptionMinOrderByAggregateInput
    _sum?: QuestionOptionSumOrderByAggregateInput
  }

  export type QuestionOptionScalarWhereWithAggregatesInput = {
    AND?: QuestionOptionScalarWhereWithAggregatesInput | QuestionOptionScalarWhereWithAggregatesInput[]
    OR?: QuestionOptionScalarWhereWithAggregatesInput[]
    NOT?: QuestionOptionScalarWhereWithAggregatesInput | QuestionOptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"QuestionOption"> | string
    questionId?: StringWithAggregatesFilter<"QuestionOption"> | string
    order?: IntWithAggregatesFilter<"QuestionOption"> | number
    isCorrect?: BoolWithAggregatesFilter<"QuestionOption"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"QuestionOption"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"QuestionOption"> | Date | string
  }

  export type OptionTranslationWhereInput = {
    AND?: OptionTranslationWhereInput | OptionTranslationWhereInput[]
    OR?: OptionTranslationWhereInput[]
    NOT?: OptionTranslationWhereInput | OptionTranslationWhereInput[]
    id?: StringFilter<"OptionTranslation"> | string
    optionId?: StringFilter<"OptionTranslation"> | string
    language?: StringFilter<"OptionTranslation"> | string
    text?: StringFilter<"OptionTranslation"> | string
    createdAt?: DateTimeFilter<"OptionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"OptionTranslation"> | Date | string
    option?: XOR<QuestionOptionRelationFilter, QuestionOptionWhereInput>
  }

  export type OptionTranslationOrderByWithRelationInput = {
    id?: SortOrder
    optionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    option?: QuestionOptionOrderByWithRelationInput
  }

  export type OptionTranslationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    optionId_language?: OptionTranslationOptionIdLanguageCompoundUniqueInput
    AND?: OptionTranslationWhereInput | OptionTranslationWhereInput[]
    OR?: OptionTranslationWhereInput[]
    NOT?: OptionTranslationWhereInput | OptionTranslationWhereInput[]
    optionId?: StringFilter<"OptionTranslation"> | string
    language?: StringFilter<"OptionTranslation"> | string
    text?: StringFilter<"OptionTranslation"> | string
    createdAt?: DateTimeFilter<"OptionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"OptionTranslation"> | Date | string
    option?: XOR<QuestionOptionRelationFilter, QuestionOptionWhereInput>
  }, "id" | "optionId_language">

  export type OptionTranslationOrderByWithAggregationInput = {
    id?: SortOrder
    optionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OptionTranslationCountOrderByAggregateInput
    _max?: OptionTranslationMaxOrderByAggregateInput
    _min?: OptionTranslationMinOrderByAggregateInput
  }

  export type OptionTranslationScalarWhereWithAggregatesInput = {
    AND?: OptionTranslationScalarWhereWithAggregatesInput | OptionTranslationScalarWhereWithAggregatesInput[]
    OR?: OptionTranslationScalarWhereWithAggregatesInput[]
    NOT?: OptionTranslationScalarWhereWithAggregatesInput | OptionTranslationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OptionTranslation"> | string
    optionId?: StringWithAggregatesFilter<"OptionTranslation"> | string
    language?: StringWithAggregatesFilter<"OptionTranslation"> | string
    text?: StringWithAggregatesFilter<"OptionTranslation"> | string
    createdAt?: DateTimeWithAggregatesFilter<"OptionTranslation"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OptionTranslation"> | Date | string
  }

  export type AssessmentScoreWhereInput = {
    AND?: AssessmentScoreWhereInput | AssessmentScoreWhereInput[]
    OR?: AssessmentScoreWhereInput[]
    NOT?: AssessmentScoreWhereInput | AssessmentScoreWhereInput[]
    id?: StringFilter<"AssessmentScore"> | string
    userId?: UuidFilter<"AssessmentScore"> | string
    assessmentType?: EnumAssessmentTypeFilter<"AssessmentScore"> | $Enums.AssessmentType
    traitOrCategoryCode?: StringFilter<"AssessmentScore"> | string
    score?: IntFilter<"AssessmentScore"> | number
    createdAt?: DateTimeFilter<"AssessmentScore"> | Date | string
  }

  export type AssessmentScoreOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentType?: SortOrder
    traitOrCategoryCode?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentScoreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AssessmentScoreWhereInput | AssessmentScoreWhereInput[]
    OR?: AssessmentScoreWhereInput[]
    NOT?: AssessmentScoreWhereInput | AssessmentScoreWhereInput[]
    userId?: UuidFilter<"AssessmentScore"> | string
    assessmentType?: EnumAssessmentTypeFilter<"AssessmentScore"> | $Enums.AssessmentType
    traitOrCategoryCode?: StringFilter<"AssessmentScore"> | string
    score?: IntFilter<"AssessmentScore"> | number
    createdAt?: DateTimeFilter<"AssessmentScore"> | Date | string
  }, "id">

  export type AssessmentScoreOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentType?: SortOrder
    traitOrCategoryCode?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
    _count?: AssessmentScoreCountOrderByAggregateInput
    _avg?: AssessmentScoreAvgOrderByAggregateInput
    _max?: AssessmentScoreMaxOrderByAggregateInput
    _min?: AssessmentScoreMinOrderByAggregateInput
    _sum?: AssessmentScoreSumOrderByAggregateInput
  }

  export type AssessmentScoreScalarWhereWithAggregatesInput = {
    AND?: AssessmentScoreScalarWhereWithAggregatesInput | AssessmentScoreScalarWhereWithAggregatesInput[]
    OR?: AssessmentScoreScalarWhereWithAggregatesInput[]
    NOT?: AssessmentScoreScalarWhereWithAggregatesInput | AssessmentScoreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AssessmentScore"> | string
    userId?: UuidWithAggregatesFilter<"AssessmentScore"> | string
    assessmentType?: EnumAssessmentTypeWithAggregatesFilter<"AssessmentScore"> | $Enums.AssessmentType
    traitOrCategoryCode?: StringWithAggregatesFilter<"AssessmentScore"> | string
    score?: IntWithAggregatesFilter<"AssessmentScore"> | number
    createdAt?: DateTimeWithAggregatesFilter<"AssessmentScore"> | Date | string
  }

  export type UserAssessmentProgressWhereInput = {
    AND?: UserAssessmentProgressWhereInput | UserAssessmentProgressWhereInput[]
    OR?: UserAssessmentProgressWhereInput[]
    NOT?: UserAssessmentProgressWhereInput | UserAssessmentProgressWhereInput[]
    id?: StringFilter<"UserAssessmentProgress"> | string
    userId?: UuidFilter<"UserAssessmentProgress"> | string
    currentStage?: EnumAssessmentTypeNullableFilter<"UserAssessmentProgress"> | $Enums.AssessmentType | null
    startedAt?: DateTimeFilter<"UserAssessmentProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAssessmentProgress"> | Date | string
  }

  export type UserAssessmentProgressOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAssessmentProgressWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserAssessmentProgressWhereInput | UserAssessmentProgressWhereInput[]
    OR?: UserAssessmentProgressWhereInput[]
    NOT?: UserAssessmentProgressWhereInput | UserAssessmentProgressWhereInput[]
    currentStage?: EnumAssessmentTypeNullableFilter<"UserAssessmentProgress"> | $Enums.AssessmentType | null
    startedAt?: DateTimeFilter<"UserAssessmentProgress"> | Date | string
    updatedAt?: DateTimeFilter<"UserAssessmentProgress"> | Date | string
  }, "id" | "userId">

  export type UserAssessmentProgressOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStage?: SortOrderInput | SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAssessmentProgressCountOrderByAggregateInput
    _max?: UserAssessmentProgressMaxOrderByAggregateInput
    _min?: UserAssessmentProgressMinOrderByAggregateInput
  }

  export type UserAssessmentProgressScalarWhereWithAggregatesInput = {
    AND?: UserAssessmentProgressScalarWhereWithAggregatesInput | UserAssessmentProgressScalarWhereWithAggregatesInput[]
    OR?: UserAssessmentProgressScalarWhereWithAggregatesInput[]
    NOT?: UserAssessmentProgressScalarWhereWithAggregatesInput | UserAssessmentProgressScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAssessmentProgress"> | string
    userId?: UuidWithAggregatesFilter<"UserAssessmentProgress"> | string
    currentStage?: EnumAssessmentTypeNullableWithAggregatesFilter<"UserAssessmentProgress"> | $Enums.AssessmentType | null
    startedAt?: DateTimeWithAggregatesFilter<"UserAssessmentProgress"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAssessmentProgress"> | Date | string
  }

  export type UserAssessmentPreferenceWhereInput = {
    AND?: UserAssessmentPreferenceWhereInput | UserAssessmentPreferenceWhereInput[]
    OR?: UserAssessmentPreferenceWhereInput[]
    NOT?: UserAssessmentPreferenceWhereInput | UserAssessmentPreferenceWhereInput[]
    id?: StringFilter<"UserAssessmentPreference"> | string
    userId?: UuidFilter<"UserAssessmentPreference"> | string
    preferredLanguage?: StringFilter<"UserAssessmentPreference"> | string
    economicStatus?: StringFilter<"UserAssessmentPreference"> | string
    createdAt?: DateTimeFilter<"UserAssessmentPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserAssessmentPreference"> | Date | string
  }

  export type UserAssessmentPreferenceOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    preferredLanguage?: SortOrder
    economicStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAssessmentPreferenceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: UserAssessmentPreferenceWhereInput | UserAssessmentPreferenceWhereInput[]
    OR?: UserAssessmentPreferenceWhereInput[]
    NOT?: UserAssessmentPreferenceWhereInput | UserAssessmentPreferenceWhereInput[]
    preferredLanguage?: StringFilter<"UserAssessmentPreference"> | string
    economicStatus?: StringFilter<"UserAssessmentPreference"> | string
    createdAt?: DateTimeFilter<"UserAssessmentPreference"> | Date | string
    updatedAt?: DateTimeFilter<"UserAssessmentPreference"> | Date | string
  }, "id" | "userId">

  export type UserAssessmentPreferenceOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    preferredLanguage?: SortOrder
    economicStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserAssessmentPreferenceCountOrderByAggregateInput
    _max?: UserAssessmentPreferenceMaxOrderByAggregateInput
    _min?: UserAssessmentPreferenceMinOrderByAggregateInput
  }

  export type UserAssessmentPreferenceScalarWhereWithAggregatesInput = {
    AND?: UserAssessmentPreferenceScalarWhereWithAggregatesInput | UserAssessmentPreferenceScalarWhereWithAggregatesInput[]
    OR?: UserAssessmentPreferenceScalarWhereWithAggregatesInput[]
    NOT?: UserAssessmentPreferenceScalarWhereWithAggregatesInput | UserAssessmentPreferenceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserAssessmentPreference"> | string
    userId?: UuidWithAggregatesFilter<"UserAssessmentPreference"> | string
    preferredLanguage?: StringWithAggregatesFilter<"UserAssessmentPreference"> | string
    economicStatus?: StringWithAggregatesFilter<"UserAssessmentPreference"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserAssessmentPreference"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserAssessmentPreference"> | Date | string
  }

  export type AssessmentTraitCreateInput = {
    id?: string
    code: string
    name: string
    assessmentType: $Enums.AssessmentType
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutTraitInput
  }

  export type AssessmentTraitUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    assessmentType: $Enums.AssessmentType
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutTraitInput
  }

  export type AssessmentTraitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutTraitNestedInput
  }

  export type AssessmentTraitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutTraitNestedInput
  }

  export type AssessmentTraitCreateManyInput = {
    id?: string
    code: string
    name: string
    assessmentType: $Enums.AssessmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentTraitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentTraitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id?: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trait: AssessmentTraitCreateNestedOneWithoutQuestionsInput
    translations?: QuestionTranslationCreateNestedManyWithoutQuestionInput
    options?: QuestionOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    traitId: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput
    options?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trait?: AssessmentTraitUpdateOneRequiredWithoutQuestionsNestedInput
    translations?: QuestionTranslationUpdateManyWithoutQuestionNestedInput
    options?: QuestionOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    traitId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput
    options?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id?: string
    traitId: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    traitId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationCreateInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutTranslationsInput
  }

  export type QuestionTranslationUncheckedCreateInput = {
    id?: string
    questionId: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type QuestionTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationCreateManyInput = {
    id?: string
    questionId: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionOptionCreateInput = {
    id?: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutOptionsInput
    translations?: OptionTranslationCreateNestedManyWithoutOptionInput
  }

  export type QuestionOptionUncheckedCreateInput = {
    id?: string
    questionId: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: OptionTranslationUncheckedCreateNestedManyWithoutOptionInput
  }

  export type QuestionOptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
    translations?: OptionTranslationUpdateManyWithoutOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: OptionTranslationUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type QuestionOptionCreateManyInput = {
    id?: string
    questionId: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionOptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionOptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionTranslationCreateInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
    option: QuestionOptionCreateNestedOneWithoutTranslationsInput
  }

  export type OptionTranslationUncheckedCreateInput = {
    id?: string
    optionId: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionTranslationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    option?: QuestionOptionUpdateOneRequiredWithoutTranslationsNestedInput
  }

  export type OptionTranslationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionTranslationCreateManyInput = {
    id?: string
    optionId: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionTranslationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionTranslationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    optionId?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentScoreCreateInput = {
    id?: string
    userId: string
    assessmentType: $Enums.AssessmentType
    traitOrCategoryCode: string
    score: number
    createdAt?: Date | string
  }

  export type AssessmentScoreUncheckedCreateInput = {
    id?: string
    userId: string
    assessmentType: $Enums.AssessmentType
    traitOrCategoryCode: string
    score: number
    createdAt?: Date | string
  }

  export type AssessmentScoreUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    traitOrCategoryCode?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentScoreUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    traitOrCategoryCode?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentScoreCreateManyInput = {
    id?: string
    userId: string
    assessmentType: $Enums.AssessmentType
    traitOrCategoryCode: string
    score: number
    createdAt?: Date | string
  }

  export type AssessmentScoreUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    traitOrCategoryCode?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentScoreUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    traitOrCategoryCode?: StringFieldUpdateOperationsInput | string
    score?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentProgressCreateInput = {
    id?: string
    userId: string
    currentStage?: $Enums.AssessmentType | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAssessmentProgressUncheckedCreateInput = {
    id?: string
    userId: string
    currentStage?: $Enums.AssessmentType | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAssessmentProgressUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStage?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentProgressUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStage?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentProgressCreateManyInput = {
    id?: string
    userId: string
    currentStage?: $Enums.AssessmentType | null
    startedAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAssessmentProgressUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStage?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentProgressUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    currentStage?: NullableEnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType | null
    startedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentPreferenceCreateInput = {
    id?: string
    userId: string
    preferredLanguage: string
    economicStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAssessmentPreferenceUncheckedCreateInput = {
    id?: string
    userId: string
    preferredLanguage: string
    economicStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAssessmentPreferenceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    economicStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentPreferenceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    economicStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentPreferenceCreateManyInput = {
    id?: string
    userId: string
    preferredLanguage: string
    economicStatus: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserAssessmentPreferenceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    economicStatus?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserAssessmentPreferenceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    preferredLanguage?: StringFieldUpdateOperationsInput | string
    economicStatus?: StringFieldUpdateOperationsInput | string
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

  export type EnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
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

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssessmentTraitCodeAssessmentTypeCompoundUniqueInput = {
    code: string
    assessmentType: $Enums.AssessmentType
  }

  export type AssessmentTraitCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    assessmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentTraitMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    assessmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssessmentTraitMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    assessmentType?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
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

  export type AssessmentTraitRelationFilter = {
    is?: AssessmentTraitWhereInput
    isNot?: AssessmentTraitWhereInput
  }

  export type QuestionTranslationListRelationFilter = {
    every?: QuestionTranslationWhereInput
    some?: QuestionTranslationWhereInput
    none?: QuestionTranslationWhereInput
  }

  export type QuestionOptionListRelationFilter = {
    every?: QuestionOptionWhereInput
    some?: QuestionOptionWhereInput
    none?: QuestionOptionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type QuestionTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOptionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    traitId?: SortOrder
    order?: SortOrder
    reverse?: SortOrder
    timeLimitSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionAvgOrderByAggregateInput = {
    order?: SortOrder
    timeLimitSeconds?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    traitId?: SortOrder
    order?: SortOrder
    reverse?: SortOrder
    timeLimitSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    traitId?: SortOrder
    order?: SortOrder
    reverse?: SortOrder
    timeLimitSeconds?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionSumOrderByAggregateInput = {
    order?: SortOrder
    timeLimitSeconds?: SortOrder
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

  export type QuestionRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type QuestionTranslationQuestionIdLanguageCompoundUniqueInput = {
    questionId: string
    language: string
  }

  export type QuestionTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptionTranslationListRelationFilter = {
    every?: OptionTranslationWhereInput
    some?: OptionTranslationWhereInput
    none?: OptionTranslationWhereInput
  }

  export type OptionTranslationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOptionCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionOptionAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionOptionMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionOptionMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    order?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionOptionSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type QuestionOptionRelationFilter = {
    is?: QuestionOptionWhereInput
    isNot?: QuestionOptionWhereInput
  }

  export type OptionTranslationOptionIdLanguageCompoundUniqueInput = {
    optionId: string
    language: string
  }

  export type OptionTranslationCountOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptionTranslationMaxOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OptionTranslationMinOrderByAggregateInput = {
    id?: SortOrder
    optionId?: SortOrder
    language?: SortOrder
    text?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type AssessmentScoreCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentType?: SortOrder
    traitOrCategoryCode?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentScoreAvgOrderByAggregateInput = {
    score?: SortOrder
  }

  export type AssessmentScoreMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentType?: SortOrder
    traitOrCategoryCode?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentScoreMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    assessmentType?: SortOrder
    traitOrCategoryCode?: SortOrder
    score?: SortOrder
    createdAt?: SortOrder
  }

  export type AssessmentScoreSumOrderByAggregateInput = {
    score?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumAssessmentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel> | $Enums.AssessmentType | null
  }

  export type UserAssessmentProgressCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStage?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAssessmentProgressMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStage?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAssessmentProgressMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    currentStage?: SortOrder
    startedAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
  }

  export type UserAssessmentPreferenceCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    preferredLanguage?: SortOrder
    economicStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAssessmentPreferenceMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    preferredLanguage?: SortOrder
    economicStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAssessmentPreferenceMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    preferredLanguage?: SortOrder
    economicStatus?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionCreateNestedManyWithoutTraitInput = {
    create?: XOR<QuestionCreateWithoutTraitInput, QuestionUncheckedCreateWithoutTraitInput> | QuestionCreateWithoutTraitInput[] | QuestionUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTraitInput | QuestionCreateOrConnectWithoutTraitInput[]
    createMany?: QuestionCreateManyTraitInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutTraitInput = {
    create?: XOR<QuestionCreateWithoutTraitInput, QuestionUncheckedCreateWithoutTraitInput> | QuestionCreateWithoutTraitInput[] | QuestionUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTraitInput | QuestionCreateOrConnectWithoutTraitInput[]
    createMany?: QuestionCreateManyTraitInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type QuestionUpdateManyWithoutTraitNestedInput = {
    create?: XOR<QuestionCreateWithoutTraitInput, QuestionUncheckedCreateWithoutTraitInput> | QuestionCreateWithoutTraitInput[] | QuestionUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTraitInput | QuestionCreateOrConnectWithoutTraitInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTraitInput | QuestionUpsertWithWhereUniqueWithoutTraitInput[]
    createMany?: QuestionCreateManyTraitInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTraitInput | QuestionUpdateWithWhereUniqueWithoutTraitInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTraitInput | QuestionUpdateManyWithWhereWithoutTraitInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutTraitNestedInput = {
    create?: XOR<QuestionCreateWithoutTraitInput, QuestionUncheckedCreateWithoutTraitInput> | QuestionCreateWithoutTraitInput[] | QuestionUncheckedCreateWithoutTraitInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutTraitInput | QuestionCreateOrConnectWithoutTraitInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutTraitInput | QuestionUpsertWithWhereUniqueWithoutTraitInput[]
    createMany?: QuestionCreateManyTraitInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutTraitInput | QuestionUpdateWithWhereUniqueWithoutTraitInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutTraitInput | QuestionUpdateManyWithWhereWithoutTraitInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type AssessmentTraitCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<AssessmentTraitCreateWithoutQuestionsInput, AssessmentTraitUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AssessmentTraitCreateOrConnectWithoutQuestionsInput
    connect?: AssessmentTraitWhereUniqueInput
  }

  export type QuestionTranslationCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
  }

  export type QuestionOptionCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
  }

  export type QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
  }

  export type QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
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

  export type AssessmentTraitUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<AssessmentTraitCreateWithoutQuestionsInput, AssessmentTraitUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: AssessmentTraitCreateOrConnectWithoutQuestionsInput
    upsert?: AssessmentTraitUpsertWithoutQuestionsInput
    connect?: AssessmentTraitWhereUniqueInput
    update?: XOR<XOR<AssessmentTraitUpdateToOneWithWhereWithoutQuestionsInput, AssessmentTraitUpdateWithoutQuestionsInput>, AssessmentTraitUncheckedUpdateWithoutQuestionsInput>
  }

  export type QuestionTranslationUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    set?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    disconnect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    delete?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    update?: QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTranslationUpdateManyWithWhereWithoutQuestionInput | QuestionTranslationUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
  }

  export type QuestionOptionUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    set?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    disconnect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    delete?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    update?: QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionOptionUpdateManyWithWhereWithoutQuestionInput | QuestionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
  }

  export type QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput> | QuestionTranslationCreateWithoutQuestionInput[] | QuestionTranslationUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionTranslationCreateOrConnectWithoutQuestionInput | QuestionTranslationCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionTranslationCreateManyQuestionInputEnvelope
    set?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    disconnect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    delete?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    connect?: QuestionTranslationWhereUniqueInput | QuestionTranslationWhereUniqueInput[]
    update?: QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput | QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionTranslationUpdateManyWithWhereWithoutQuestionInput | QuestionTranslationUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
  }

  export type QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput> | QuestionOptionCreateWithoutQuestionInput[] | QuestionOptionUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutQuestionInput | QuestionOptionCreateOrConnectWithoutQuestionInput[]
    upsert?: QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput | QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: QuestionOptionCreateManyQuestionInputEnvelope
    set?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    disconnect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    delete?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    connect?: QuestionOptionWhereUniqueInput | QuestionOptionWhereUniqueInput[]
    update?: QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput | QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: QuestionOptionUpdateManyWithWhereWithoutQuestionInput | QuestionOptionUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTranslationsInput
    connect?: QuestionWhereUniqueInput
  }

  export type QuestionUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutTranslationsInput
    upsert?: QuestionUpsertWithoutTranslationsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutTranslationsInput, QuestionUpdateWithoutTranslationsInput>, QuestionUncheckedUpdateWithoutTranslationsInput>
  }

  export type QuestionCreateNestedOneWithoutOptionsInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
  }

  export type OptionTranslationCreateNestedManyWithoutOptionInput = {
    create?: XOR<OptionTranslationCreateWithoutOptionInput, OptionTranslationUncheckedCreateWithoutOptionInput> | OptionTranslationCreateWithoutOptionInput[] | OptionTranslationUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionTranslationCreateOrConnectWithoutOptionInput | OptionTranslationCreateOrConnectWithoutOptionInput[]
    createMany?: OptionTranslationCreateManyOptionInputEnvelope
    connect?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
  }

  export type OptionTranslationUncheckedCreateNestedManyWithoutOptionInput = {
    create?: XOR<OptionTranslationCreateWithoutOptionInput, OptionTranslationUncheckedCreateWithoutOptionInput> | OptionTranslationCreateWithoutOptionInput[] | OptionTranslationUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionTranslationCreateOrConnectWithoutOptionInput | OptionTranslationCreateOrConnectWithoutOptionInput[]
    createMany?: OptionTranslationCreateManyOptionInputEnvelope
    connect?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutOptionsNestedInput = {
    create?: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutOptionsInput
    upsert?: QuestionUpsertWithoutOptionsInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutOptionsInput, QuestionUpdateWithoutOptionsInput>, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type OptionTranslationUpdateManyWithoutOptionNestedInput = {
    create?: XOR<OptionTranslationCreateWithoutOptionInput, OptionTranslationUncheckedCreateWithoutOptionInput> | OptionTranslationCreateWithoutOptionInput[] | OptionTranslationUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionTranslationCreateOrConnectWithoutOptionInput | OptionTranslationCreateOrConnectWithoutOptionInput[]
    upsert?: OptionTranslationUpsertWithWhereUniqueWithoutOptionInput | OptionTranslationUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: OptionTranslationCreateManyOptionInputEnvelope
    set?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    disconnect?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    delete?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    connect?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    update?: OptionTranslationUpdateWithWhereUniqueWithoutOptionInput | OptionTranslationUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: OptionTranslationUpdateManyWithWhereWithoutOptionInput | OptionTranslationUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: OptionTranslationScalarWhereInput | OptionTranslationScalarWhereInput[]
  }

  export type OptionTranslationUncheckedUpdateManyWithoutOptionNestedInput = {
    create?: XOR<OptionTranslationCreateWithoutOptionInput, OptionTranslationUncheckedCreateWithoutOptionInput> | OptionTranslationCreateWithoutOptionInput[] | OptionTranslationUncheckedCreateWithoutOptionInput[]
    connectOrCreate?: OptionTranslationCreateOrConnectWithoutOptionInput | OptionTranslationCreateOrConnectWithoutOptionInput[]
    upsert?: OptionTranslationUpsertWithWhereUniqueWithoutOptionInput | OptionTranslationUpsertWithWhereUniqueWithoutOptionInput[]
    createMany?: OptionTranslationCreateManyOptionInputEnvelope
    set?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    disconnect?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    delete?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    connect?: OptionTranslationWhereUniqueInput | OptionTranslationWhereUniqueInput[]
    update?: OptionTranslationUpdateWithWhereUniqueWithoutOptionInput | OptionTranslationUpdateWithWhereUniqueWithoutOptionInput[]
    updateMany?: OptionTranslationUpdateManyWithWhereWithoutOptionInput | OptionTranslationUpdateManyWithWhereWithoutOptionInput[]
    deleteMany?: OptionTranslationScalarWhereInput | OptionTranslationScalarWhereInput[]
  }

  export type QuestionOptionCreateNestedOneWithoutTranslationsInput = {
    create?: XOR<QuestionOptionCreateWithoutTranslationsInput, QuestionOptionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutTranslationsInput
    connect?: QuestionOptionWhereUniqueInput
  }

  export type QuestionOptionUpdateOneRequiredWithoutTranslationsNestedInput = {
    create?: XOR<QuestionOptionCreateWithoutTranslationsInput, QuestionOptionUncheckedCreateWithoutTranslationsInput>
    connectOrCreate?: QuestionOptionCreateOrConnectWithoutTranslationsInput
    upsert?: QuestionOptionUpsertWithoutTranslationsInput
    connect?: QuestionOptionWhereUniqueInput
    update?: XOR<XOR<QuestionOptionUpdateToOneWithWhereWithoutTranslationsInput, QuestionOptionUpdateWithoutTranslationsInput>, QuestionOptionUncheckedUpdateWithoutTranslationsInput>
  }

  export type NullableEnumAssessmentTypeFieldUpdateOperationsInput = {
    set?: $Enums.AssessmentType | null
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

  export type NestedEnumAssessmentTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeFilter<$PrismaModel> | $Enums.AssessmentType
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

  export type NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAssessmentTypeWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumAssessmentTypeNullableFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel> | $Enums.AssessmentType | null
  }

  export type NestedEnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssessmentType | EnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    in?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    notIn?: $Enums.AssessmentType[] | ListEnumAssessmentTypeFieldRefInput<$PrismaModel> | null
    not?: NestedEnumAssessmentTypeNullableWithAggregatesFilter<$PrismaModel> | $Enums.AssessmentType | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
    _max?: NestedEnumAssessmentTypeNullableFilter<$PrismaModel>
  }

  export type QuestionCreateWithoutTraitInput = {
    id?: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: QuestionTranslationCreateNestedManyWithoutQuestionInput
    options?: QuestionOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTraitInput = {
    id?: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput
    options?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTraitInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTraitInput, QuestionUncheckedCreateWithoutTraitInput>
  }

  export type QuestionCreateManyTraitInputEnvelope = {
    data: QuestionCreateManyTraitInput | QuestionCreateManyTraitInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithWhereUniqueWithoutTraitInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutTraitInput, QuestionUncheckedUpdateWithoutTraitInput>
    create: XOR<QuestionCreateWithoutTraitInput, QuestionUncheckedCreateWithoutTraitInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutTraitInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutTraitInput, QuestionUncheckedUpdateWithoutTraitInput>
  }

  export type QuestionUpdateManyWithWhereWithoutTraitInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutTraitInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    traitId?: StringFilter<"Question"> | string
    order?: IntFilter<"Question"> | number
    reverse?: BoolFilter<"Question"> | boolean
    timeLimitSeconds?: IntNullableFilter<"Question"> | number | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type AssessmentTraitCreateWithoutQuestionsInput = {
    id?: string
    code: string
    name: string
    assessmentType: $Enums.AssessmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentTraitUncheckedCreateWithoutQuestionsInput = {
    id?: string
    code: string
    name: string
    assessmentType: $Enums.AssessmentType
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssessmentTraitCreateOrConnectWithoutQuestionsInput = {
    where: AssessmentTraitWhereUniqueInput
    create: XOR<AssessmentTraitCreateWithoutQuestionsInput, AssessmentTraitUncheckedCreateWithoutQuestionsInput>
  }

  export type QuestionTranslationCreateWithoutQuestionInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUncheckedCreateWithoutQuestionInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationCreateOrConnectWithoutQuestionInput = {
    where: QuestionTranslationWhereUniqueInput
    create: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTranslationCreateManyQuestionInputEnvelope = {
    data: QuestionTranslationCreateManyQuestionInput | QuestionTranslationCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionOptionCreateWithoutQuestionInput = {
    id?: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: OptionTranslationCreateNestedManyWithoutOptionInput
  }

  export type QuestionOptionUncheckedCreateWithoutQuestionInput = {
    id?: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: OptionTranslationUncheckedCreateNestedManyWithoutOptionInput
  }

  export type QuestionOptionCreateOrConnectWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    create: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionOptionCreateManyQuestionInputEnvelope = {
    data: QuestionOptionCreateManyQuestionInput | QuestionOptionCreateManyQuestionInput[]
    skipDuplicates?: boolean
  }

  export type AssessmentTraitUpsertWithoutQuestionsInput = {
    update: XOR<AssessmentTraitUpdateWithoutQuestionsInput, AssessmentTraitUncheckedUpdateWithoutQuestionsInput>
    create: XOR<AssessmentTraitCreateWithoutQuestionsInput, AssessmentTraitUncheckedCreateWithoutQuestionsInput>
    where?: AssessmentTraitWhereInput
  }

  export type AssessmentTraitUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: AssessmentTraitWhereInput
    data: XOR<AssessmentTraitUpdateWithoutQuestionsInput, AssessmentTraitUncheckedUpdateWithoutQuestionsInput>
  }

  export type AssessmentTraitUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssessmentTraitUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    assessmentType?: EnumAssessmentTypeFieldUpdateOperationsInput | $Enums.AssessmentType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTranslationWhereUniqueInput
    update: XOR<QuestionTranslationUpdateWithoutQuestionInput, QuestionTranslationUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionTranslationCreateWithoutQuestionInput, QuestionTranslationUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionTranslationUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionTranslationWhereUniqueInput
    data: XOR<QuestionTranslationUpdateWithoutQuestionInput, QuestionTranslationUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionTranslationUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionTranslationScalarWhereInput
    data: XOR<QuestionTranslationUpdateManyMutationInput, QuestionTranslationUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionTranslationScalarWhereInput = {
    AND?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
    OR?: QuestionTranslationScalarWhereInput[]
    NOT?: QuestionTranslationScalarWhereInput | QuestionTranslationScalarWhereInput[]
    id?: StringFilter<"QuestionTranslation"> | string
    questionId?: StringFilter<"QuestionTranslation"> | string
    language?: StringFilter<"QuestionTranslation"> | string
    text?: StringFilter<"QuestionTranslation"> | string
    createdAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionTranslation"> | Date | string
  }

  export type QuestionOptionUpsertWithWhereUniqueWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    update: XOR<QuestionOptionUpdateWithoutQuestionInput, QuestionOptionUncheckedUpdateWithoutQuestionInput>
    create: XOR<QuestionOptionCreateWithoutQuestionInput, QuestionOptionUncheckedCreateWithoutQuestionInput>
  }

  export type QuestionOptionUpdateWithWhereUniqueWithoutQuestionInput = {
    where: QuestionOptionWhereUniqueInput
    data: XOR<QuestionOptionUpdateWithoutQuestionInput, QuestionOptionUncheckedUpdateWithoutQuestionInput>
  }

  export type QuestionOptionUpdateManyWithWhereWithoutQuestionInput = {
    where: QuestionOptionScalarWhereInput
    data: XOR<QuestionOptionUpdateManyMutationInput, QuestionOptionUncheckedUpdateManyWithoutQuestionInput>
  }

  export type QuestionOptionScalarWhereInput = {
    AND?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
    OR?: QuestionOptionScalarWhereInput[]
    NOT?: QuestionOptionScalarWhereInput | QuestionOptionScalarWhereInput[]
    id?: StringFilter<"QuestionOption"> | string
    questionId?: StringFilter<"QuestionOption"> | string
    order?: IntFilter<"QuestionOption"> | number
    isCorrect?: BoolFilter<"QuestionOption"> | boolean
    createdAt?: DateTimeFilter<"QuestionOption"> | Date | string
    updatedAt?: DateTimeFilter<"QuestionOption"> | Date | string
  }

  export type QuestionCreateWithoutTranslationsInput = {
    id?: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trait: AssessmentTraitCreateNestedOneWithoutQuestionsInput
    options?: QuestionOptionCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutTranslationsInput = {
    id?: string
    traitId: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    options?: QuestionOptionUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutTranslationsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
  }

  export type QuestionUpsertWithoutTranslationsInput = {
    update: XOR<QuestionUpdateWithoutTranslationsInput, QuestionUncheckedUpdateWithoutTranslationsInput>
    create: XOR<QuestionCreateWithoutTranslationsInput, QuestionUncheckedCreateWithoutTranslationsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutTranslationsInput, QuestionUncheckedUpdateWithoutTranslationsInput>
  }

  export type QuestionUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trait?: AssessmentTraitUpdateOneRequiredWithoutQuestionsNestedInput
    options?: QuestionOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    traitId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    options?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateWithoutOptionsInput = {
    id?: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    trait: AssessmentTraitCreateNestedOneWithoutQuestionsInput
    translations?: QuestionTranslationCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutOptionsInput = {
    id?: string
    traitId: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    translations?: QuestionTranslationUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutOptionsInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
  }

  export type OptionTranslationCreateWithoutOptionInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionTranslationUncheckedCreateWithoutOptionInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionTranslationCreateOrConnectWithoutOptionInput = {
    where: OptionTranslationWhereUniqueInput
    create: XOR<OptionTranslationCreateWithoutOptionInput, OptionTranslationUncheckedCreateWithoutOptionInput>
  }

  export type OptionTranslationCreateManyOptionInputEnvelope = {
    data: OptionTranslationCreateManyOptionInput | OptionTranslationCreateManyOptionInput[]
    skipDuplicates?: boolean
  }

  export type QuestionUpsertWithoutOptionsInput = {
    update: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
    create: XOR<QuestionCreateWithoutOptionsInput, QuestionUncheckedCreateWithoutOptionsInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutOptionsInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutOptionsInput, QuestionUncheckedUpdateWithoutOptionsInput>
  }

  export type QuestionUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    trait?: AssessmentTraitUpdateOneRequiredWithoutQuestionsNestedInput
    translations?: QuestionTranslationUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutOptionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    traitId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type OptionTranslationUpsertWithWhereUniqueWithoutOptionInput = {
    where: OptionTranslationWhereUniqueInput
    update: XOR<OptionTranslationUpdateWithoutOptionInput, OptionTranslationUncheckedUpdateWithoutOptionInput>
    create: XOR<OptionTranslationCreateWithoutOptionInput, OptionTranslationUncheckedCreateWithoutOptionInput>
  }

  export type OptionTranslationUpdateWithWhereUniqueWithoutOptionInput = {
    where: OptionTranslationWhereUniqueInput
    data: XOR<OptionTranslationUpdateWithoutOptionInput, OptionTranslationUncheckedUpdateWithoutOptionInput>
  }

  export type OptionTranslationUpdateManyWithWhereWithoutOptionInput = {
    where: OptionTranslationScalarWhereInput
    data: XOR<OptionTranslationUpdateManyMutationInput, OptionTranslationUncheckedUpdateManyWithoutOptionInput>
  }

  export type OptionTranslationScalarWhereInput = {
    AND?: OptionTranslationScalarWhereInput | OptionTranslationScalarWhereInput[]
    OR?: OptionTranslationScalarWhereInput[]
    NOT?: OptionTranslationScalarWhereInput | OptionTranslationScalarWhereInput[]
    id?: StringFilter<"OptionTranslation"> | string
    optionId?: StringFilter<"OptionTranslation"> | string
    language?: StringFilter<"OptionTranslation"> | string
    text?: StringFilter<"OptionTranslation"> | string
    createdAt?: DateTimeFilter<"OptionTranslation"> | Date | string
    updatedAt?: DateTimeFilter<"OptionTranslation"> | Date | string
  }

  export type QuestionOptionCreateWithoutTranslationsInput = {
    id?: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutOptionsInput
  }

  export type QuestionOptionUncheckedCreateWithoutTranslationsInput = {
    id?: string
    questionId: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionOptionCreateOrConnectWithoutTranslationsInput = {
    where: QuestionOptionWhereUniqueInput
    create: XOR<QuestionOptionCreateWithoutTranslationsInput, QuestionOptionUncheckedCreateWithoutTranslationsInput>
  }

  export type QuestionOptionUpsertWithoutTranslationsInput = {
    update: XOR<QuestionOptionUpdateWithoutTranslationsInput, QuestionOptionUncheckedUpdateWithoutTranslationsInput>
    create: XOR<QuestionOptionCreateWithoutTranslationsInput, QuestionOptionUncheckedCreateWithoutTranslationsInput>
    where?: QuestionOptionWhereInput
  }

  export type QuestionOptionUpdateToOneWithWhereWithoutTranslationsInput = {
    where?: QuestionOptionWhereInput
    data: XOR<QuestionOptionUpdateWithoutTranslationsInput, QuestionOptionUncheckedUpdateWithoutTranslationsInput>
  }

  export type QuestionOptionUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutOptionsNestedInput
  }

  export type QuestionOptionUncheckedUpdateWithoutTranslationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyTraitInput = {
    id?: string
    order: number
    reverse?: boolean
    timeLimitSeconds?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateWithoutTraitInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: QuestionTranslationUpdateManyWithoutQuestionNestedInput
    options?: QuestionOptionUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutTraitInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: QuestionTranslationUncheckedUpdateManyWithoutQuestionNestedInput
    options?: QuestionOptionUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutTraitInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    reverse?: BoolFieldUpdateOperationsInput | boolean
    timeLimitSeconds?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationCreateManyQuestionInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionOptionCreateManyQuestionInput = {
    id?: string
    order: number
    isCorrect?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionTranslationUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionTranslationUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionOptionUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: OptionTranslationUpdateManyWithoutOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    translations?: OptionTranslationUncheckedUpdateManyWithoutOptionNestedInput
  }

  export type QuestionOptionUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    order?: IntFieldUpdateOperationsInput | number
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionTranslationCreateManyOptionInput = {
    id?: string
    language: string
    text: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OptionTranslationUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionTranslationUncheckedUpdateWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OptionTranslationUncheckedUpdateManyWithoutOptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    language?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use AssessmentTraitCountOutputTypeDefaultArgs instead
     */
    export type AssessmentTraitCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentTraitCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionCountOutputTypeDefaultArgs instead
     */
    export type QuestionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionOptionCountOutputTypeDefaultArgs instead
     */
    export type QuestionOptionCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionOptionCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentTraitDefaultArgs instead
     */
    export type AssessmentTraitArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentTraitDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionDefaultArgs instead
     */
    export type QuestionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionTranslationDefaultArgs instead
     */
    export type QuestionTranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionTranslationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use QuestionOptionDefaultArgs instead
     */
    export type QuestionOptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = QuestionOptionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OptionTranslationDefaultArgs instead
     */
    export type OptionTranslationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = OptionTranslationDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AssessmentScoreDefaultArgs instead
     */
    export type AssessmentScoreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AssessmentScoreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAssessmentProgressDefaultArgs instead
     */
    export type UserAssessmentProgressArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAssessmentProgressDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserAssessmentPreferenceDefaultArgs instead
     */
    export type UserAssessmentPreferenceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserAssessmentPreferenceDefaultArgs<ExtArgs>

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