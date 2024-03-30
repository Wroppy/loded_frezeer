import { User, Flat } from "@/app/lib/models";
import { flatModel } from "@/app/lib/modelBlueprints";

export const createFlat = async (userId) => {
  try {
    const newFlat = new Flat(flatModel(userId));
    const flat = await Flat.create(newFlat);
    return { success: true, flat };
  } catch (error) {
    return { success: false, error };
  }
};
