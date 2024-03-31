import { get8CharString } from "@/app/lib/utils";

export const getFlatModel = (userId) => {
  const joinId = get8CharString();
  return {
    tenants: [userId],
    joinId,
    chores: [],
    shoppingList: [],
  };
}