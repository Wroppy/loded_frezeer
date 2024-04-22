import { User, Flat } from "@/app/lib/models";
import { getFlatModel } from "@/app/lib/modelBlueprints";
import { jwtVerify } from "@/app/lib/utils";
import connectToDb from "@/app/lib/connectToDb";

export const createFlat = async (userId, name) => {
  try {
    await connectToDb();

    const flatModel = getFlatModel(userId, name);
    const newFlat = new Flat(flatModel);
    const flat = await Flat.create(newFlat);

    return { success: true, flat };
  } catch (error) {
    console.log(error);
    return { success: false, error: "An error occurred while creating a flat" };
  }
};

// Used to find if a user is in a flat
export const isUserInFlat = async (encryptedId) => {
  try {
    await connectToDb();

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

export const joinFlat = async (userId, joinId) => {
  try {
    await connectToDb();

    const flat = await Flat.findOne({
      joinId,
    });

    if (!flat) {
      return { success: false, error: "Invalid join code" };
    }

    flat.tenants.push(userId);
    await flat.save();

    return { success: true };
  } catch (error) {
    return {
      success: false,
      error: "An error occurred while joining the flat",
    };
  }
};

// Returns data for the settings page
export const getFlatSettings = async (userId) => {
  try {
    await connectToDb();

    const flatData = await Flat.findOne({
      tenants: userId,
    });

    if (!flatData) {
      return { success: false };
    }

    let user;
    let tenants = [];
    for (let tenantId of flatData.tenants) {
      user = await User.findOne({ userId: tenantId });
      tenants.push(user.name);
    }

    const flat = {
      flatName: flatData.name,
      joinCode: flatData.joinId,
      tenants,
    };
    return { success: true, flat };
  } catch (error) {
    return {
      success: false,
      error: "An error occurred while getting flat settings",
    };
  }
};
