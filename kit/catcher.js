export default async (handler, root, params) => {
  let result = {};

  try {
    result = await handler(root, params);
  } catch (error) {
    result = error;
  }

  return result;
};
