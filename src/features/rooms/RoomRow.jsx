import { useMutation, useQueryClient } from "@tanstack/react-query";
import { formatCurrency } from "../../utils/helpers";
import { deleteRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";
import Button from "../../ui/Button";

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
        <div className="p-6 mb-6 h-auto">
          <div className="flex items-center justify-between mb-6">
            <p
              className={`blocktext-base antialiased font-bold leading-relaxed text-blue-gray-900 font-["Sono"]`}
            >
              Room Number: {name}
            </p>
            <div>
              {discount > 0 && (
                <p
                  className={`block  text-2xl antialiased font-bold font-xl leading-relaxed text-blue-gray-900 font-["Sono"] line-through text-slate-400`}
                >
                  <span>{formatCurrency(regularPrice)}</span>
                </p>
              )}
              <p
                className={`block  antialiased text-2xl font-bold leading-relaxed text-blue-gray-900 font-["Sono"] text-black`}
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

        <div className="p-6 pt-0 flex items-center justify-around">
          <Button variation="primary">Edit</Button>
          <Button variation="secondary">Duplicate</Button>
          <Button
            disabled={isDeleting}
            variation="delete"
            onClick={() => mutate(roomdId)}
          >
            {isDeleting ? (
              <span className="flex">
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="mr-2 animate-spin"
                  viewBox="0 0 1792 1792"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z"></path>
                </svg>
                Deleting
              </span>
            ) : (
              "Delete"
            )}
          </Button>
        </div>
      </div>
    </li>
  );
}

export default RoomRow;
