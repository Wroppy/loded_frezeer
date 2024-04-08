import { User, Flat } from "@/app/lib/models";
import { getFlatModel } from "@/app/lib/modelBlueprints";
import { jwtVerify } from "@/app/lib/utils";

export const createFlat = async (userId, name) => {
  try {
    const flatModel = getFlatModel(userId, name);
    const newFlat = new Flat(flatModel);
    const flat = await Flat.create(newFlat);
    
    return { success: true, flat };
  } catch (error) {
    return { success: false, error: "You are already in a flat" };
  }
};   

// Used to find if a user is in a flat
export const isUserInFlat = async (encryptedId) => {
  try {
    const userId = jwtVerify(encryptedId);

    // Finds all flats that the user is in 
    let flats = await Flat.find();
    flats = flats.filter((flat) => flat.tenants.includes(userId));

    if (flats.length > 0) {
      return { success: true, isInFlat: true };
    } else {
      return { success: true, isInFlat: false };
    }
  } catch (error) {
    return { success: false, isInFlat: false };
  }
};
