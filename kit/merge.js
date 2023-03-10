// Use Deep
import deep from './deep';

// Use Flat
import flat from './flat';

// Export
export default (origin = {}, target) => deep(origin, flat(target));
