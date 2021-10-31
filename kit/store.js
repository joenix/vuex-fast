// Use Each
import foreach from "./foreach";

// Use Merge
import merge from "./merge";

// Use Reset
import reset from "./reset";

// Use Catcher
import catcher from "./catcher";

/**
 * States
 * ======== ======== ========
 */
export function states(settings = {}) {
  return {
    error: false,
    ...settings
  };
}

/**
 * Actions
 * ======== ======== ========
 */
export function actions(settings = {}) {
  // Set Json
  const json = {
    async STATE_UPDATE({ commit }, data) {
      return await commit("STATE_UPDATE", data);
    },
    async STATE_CLEAR({ commit, state }, namespace) {
      return await commit("STATE_UPDATE", reset(state[namespace]));
    }
  };

  // Loop Settings
  foreach(settings, (action, name) => {
    // Set Action into Json
    json[name] = async (root, params) => {
      // Get Await Result
      const result = await catcher(action, root, params);
      // Debugger
      if (result && result.errMsg) {
        console.log(result.errMsg);
      }
      // Update State when on Error
      root.commit("STATE_UPDATE", result);
      // Return for Logic
      return result;
    };
  });

  // Export Actions
  return json;
}

/**
 * Mutations
 * ======== ======== ========
 */
export function mutations(settings = {}) {
  // Set Json
  const json = {
    STATE_UPDATE(state, data) {
      return merge(state, data, true);
    }
  };

  // Loop Settings
  foreach(settings, (mutation, name) => {
    // Set Mutation into Json
    json[name] = (state, data) => mutation(state, data);
  });

  // Export Mutations
  return json;
}
