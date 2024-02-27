import supabase from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("Rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded");
  }

  return data;
}

export async function deleteRoom(id) {
  const { error } = await supabase.from("Rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted");
  }
}
