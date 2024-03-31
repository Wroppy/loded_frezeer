import { User, Flat } from "@/app/lib/models";
import { getFlatModel } from "@/app/lib/modelBlueprints";

export const createFlat = async (userId) => {
  try {
    const flatModel = getFlatModel(userId);
    const newFlat = new Flat(flatModel);
    const flat = await Flat.create(newFlat);
    
    return { success: true, flat };
  } catch (error) {
    return { success: false, error };
  }
};   
