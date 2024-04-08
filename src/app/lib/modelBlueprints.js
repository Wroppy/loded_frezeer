import { get8CharString } from "@/app/lib/utils";

export const getFlatModel = (userId, name) => {
  const joinId = get8CharString();
  return {
    name,
    tenants: [userId],
    joinId,
    chores: [],
    shoppingList: [],
  };
}