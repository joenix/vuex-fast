/**
 * @property target { Any }
 * @property type { Object, Array, Number, String, Function, Promise, Symbol }
 * ========== ========== ==========
 */
export default (target, type) => {
  if (target) {
    return target.constructor === type;
  }
};
