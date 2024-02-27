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
    description,
  } = room;

  console.log(room);

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
    // <div className="grid grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] gap-[2.4rem] items-center px-[2.4rem] py-[1.4rem] shadow-md">
    //   <img
    //     className="block w-[6rem] h-[4rem] scale-[1.5] translate-x-[-7px]"
    //     src={image}
    //     alt="image"
    //   />
    //   <div className={`text-[1.6rem] font-[600] text-gray-600 font-["Sono"]`}>
    //     {name}
    //   </div>
    //   <div>Fits up to {maxCapacity} guests</div>
    //   <div className={`font-["Sono"] font-[600]`}>
    //     {formatCurrency(regularPrice)}
    //   </div>
    //   <div className={`font-["Sono"] font-[500] text-emerald-700`}>
    //     {formatCurrency(discount)}
    //     {discount}
    //   </div>
    //   <button onClick={() => mutate(roomdId)}>Delete</button>
    // </div>
    <li className="mx-auto">
      <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-[30rem]">
        <div className="relative mx-6 mt-6 mb-4 w-auto flex items-center justify-center text-gray-700 bg-white bg-clip-border rounded-xl">
          <img
            src={image}
            alt={name}
            className={`object-cover w-full rounded-xl h-full`}
          />
        </div>
        <div className="p-6 h-auto">
          <div className="flex items-center justify-between mb-6">
            <p
              className={`blocktext-base antialiased font-bold leading-relaxed text-blue-gray-900 font-["Sono"]`}
            >
              Room Number: {name}
            </p>
            <div>
              <p
                className={`block  text-xl antialiased font-xl leading-relaxed text-blue-gray-900 font-["Sono"] line-through text-red-500`}
              >
                <span>{formatCurrency(regularPrice)}</span>
              </p>
              <p
                className={`block  text-xl antialiased font-xl leading-relaxed text-blue-gray-900 font-["Sono"] text-emerald-500`}
              >
                <span>{formatCurrency(regularPrice - discount)}</span>
              </p>
            </div>
          </div>
          <p className="block italic text-gray-700 font-sans text-md antialiased font-normal leading-normal opacity-75 capitalize">
            Fits up to <span className="font-bold"> {`${maxCapacity} `}</span>
            persons. {description}
          </p>
        </div>

        <div className="p-6 pt-0 text-center">
          <button onClick={() => mutate(roomdId)}>Delete</button>
        </div>
      </div>
    </li>
  );
}

export default RoomRow;
