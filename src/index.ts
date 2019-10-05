/**
 * @author Piotr Witek <piotrek.witek@gmail.com> (http://piotrwitek.github.io)
 * @copyright Copyright (c) 2016 Piotr Witek
 * @license MIT
 */

export {
  $Call,
  $Diff,
  $ElementType,
  $Keys,
  $NonMaybeType,
  $PropertyType,
  $ReadOnly,
  $Shape,
  $Values,
  Class
} from "./utility-types";

export {
  Assign,
  Brand,
  DeepNonNullable,
  DeepPartial,
  DeepReadonly,
  DeepRequired,
  Diff,
  ElementsOrKeys,
  FunctionKeys,
  KeysByValueExact,
  Intersection,
  NonFunctionKeys,
  NonUndefined,
  Omit,
  OmitByValue,
  OmitByValueExact,
  OptionalKeys,
  Overwrite,
  Optional,
  PickByValue,
  PickByValueExact,
  PromiseType,
  ReadonlyKeys,
  AugmentedRequired as Required,
  RequiredKeys,
  SameType,
  SetComplement,
  SetDifference,
  SetIntersection,
  Subtract,
  SymmetricDifference,
  Unionize,
  Values,
  WritableKeys
} from "./mapped-types";

export {
  Falsy,
  Falsy as Falsey, // deprecated in v3, backward compatibility until v4
  isFalsy,
  Primitive,
  isPrimitive
} from "./aliases-and-guards";

// deprecated
export { getReturnOfExpression } from "./functional-helpers";
