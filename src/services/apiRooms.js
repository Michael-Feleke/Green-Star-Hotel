import supabase from "./supabase";

export async function getRooms() {
  const { data, error } = await supabase.from("Rooms").select("*");

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be loaded.");
  }

  return data;
}

export async function createRoom(newRoom) {
  const imageName = `${Math.random()}-${newRoom.image.name}`.replaceAll(
    "/",
    ""
  );

  const imagePath=

  //https://jxdyxaoiqjnzjphbqtfu.supabase.co/storage/v1/object/public/room-images/room-001.jpg

  const { data, error } = await supabase
    .from("Rooms")
    .insert([newRoom])
    .select();

  if (error) {
    console.error(error);
    throw new Error("Rooms could not be created.");
  }

  return data;
}

export async function deleteRoom(id) {
  const { error } = await supabase.from("Rooms").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Room could not be deleted.");
  }
}
