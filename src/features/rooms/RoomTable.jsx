import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import Spinner from "../../ui/Spinner";
import RoomRow from "./RoomRow";

// const Table = styled.div`
//   border: 1px solid var(--color-grey-200);

//   font-size: 1.4rem;
//   background-color: var(--color-grey-0);
//   border-radius: 7px;
//   overflow: hidden;
// `;

// const TableHeader = styled.header`
//   display: grid;
//   grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
//   column-gap: 2.4rem;
//   align-items: center;

//   background-color: var(--color-grey-50);
//   border-bottom: 1px solid var(--color-grey-100);
//   text-transform: uppercase;
//   letter-spacing: 0.4px;
//   font-weight: 600;
//   color: var(--color-grey-600);
//   padding: 1.6rem 2.4rem;
// `;

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
    <div className="text-[1.4rem] bg-gray-50 rounded-[7px]">
      <header className="grid grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] gap-[2.4rem] items-center bg-gray-50 border-b border-b-gray-100 uppercase tracking-[.4px] font-[600] text-gray-600 py-[1.6rem] px-[2.4rem]">
        <div></div>
        <div>Cabin</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {rooms.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </div>
  );
}

export default RoomTable;
