import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

function RoomRow({ room }) {
  const {
    id: roomdId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
  } = room;

  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate } = useMutation({
    mutationFn: deleteRoom,
    onSuccess: () => {
      toast.success("Room successfully deleted!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },

    onError: (err) => toast.error(err.message),
  });

  return (
    <div className="grid grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] gap-[2.4rem] items-center px-[2.4rem] py-[1.4rem] shadow-md">
      <img
        className="block w-[6rem] h-[4rem] scale-[1.5] translate-x-[-7px]"
        src={image}
        alt="image"
      />
      <div className={`text-[1.6rem] font-[600] text-gray-600 font-["Sono"]`}>
        {name}
      </div>
      <div>Fits up to {maxCapacity} guests</div>
      <div className={`font-["Sono"] font-[600]`}>
        {formatCurrency(regularPrice)}
      </div>
      <div className={`font-["Sono"] font-[500] text-emerald-700`}>
        {formatCurrency(discount)}
        {discount}
      </div>
      <button onClick={() => mutate(roomdId)}>Delete</button>
    </div>
  );
}

export default RoomRow;
