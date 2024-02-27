import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";

function RoomTable() {
  const {
    isLoading,
    data: rooms,
    error,
  } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  if (isLoading) return <Spinner />;

  return (
    // <div className="text-[1.4rem] bg-gray-50 rounded-[7px]">
    //   <header className="grid grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] gap-[2.4rem] items-center bg-gray-50 border-b border-b-gray-100 uppercase tracking-[.4px] font-[600] text-gray-600 py-[1.6rem] px-[2.4rem]">
    //     <div></div>
    //     <div>Cabin</div>
    //     <div>Capacity</div>
    //     <div>Price</div>
    //     <div>Discount</div>
    //     <div></div>
    //   </header>
    //   {rooms.map((room) => (
    //     <RoomRow room={room} key={room.id} />
    //   ))}
    // </div>
    <ul className="grid gap-12 max-h-full grid-cols-3">
      {rooms.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </ul>
  );
}

export default RoomTable;
