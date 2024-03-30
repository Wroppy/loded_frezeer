export const flatModel = (userId) => {
  // Gets a random string of 15 characters
  const joinId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  
  return {
    tenants: [userId],
    joinId,
    chores: [],
    shoppingList: [],
  };
}