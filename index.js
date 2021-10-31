// Use Kit
import { foreach, store } from "./kit";

// Use Store
const { states, mutations, actions } = store;

// Export
export default modules => {
  // Modules Loop
  return foreach(modules, module => {
    // Use States
    module.state = states(module.state);
    // Use Mutations
    module.mutations = mutations(module.mutations);
    // Use Actions
    module.actions = actions(module.actions);

    // Namespace Default
    module.namespaced = true;

    // Return
    return module;
  });
};
