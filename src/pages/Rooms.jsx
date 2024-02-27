import Heading from "../ui/Heading";
import Row from "../ui/Row";
import RoomTable from "../features/rooms/RoomTable";

function Rooms() {
  return (
    <>
      <Row type="horizontal">
        <Heading className="mb-8" as="h1">
          All rooms
        </Heading>
        <p>TEST</p>
      </Row>
      <Row>
        <RoomTable />
      </Row>
    </>
  );
}

export default Rooms;
