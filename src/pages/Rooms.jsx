import Heading from "../ui/Heading";
import Row from "../ui/Row";
import RoomTable from "../features/rooms/RoomTable";
import { useState } from "react";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

function Rooms() {
  const [showForm, setShowForm] = useState(false);

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
        <button onClick={() => setShowForm((cur) => !cur)}>Add new room</button>
        {showForm && <CreateRoomForm />}
      </Row>
    </>
  );
}

export default Rooms;
