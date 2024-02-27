import styled from "styled-components";
import { formatCurrency } from "../../utils/helpers";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;
const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;
const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;
const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;
function RoomRow({ room }) {
  const { name, maxCapacity, regularPrice, discount, image } = room;

  return (
    <div className="grid grid-cols-[0.6fr,1.8fr,2.2fr,1fr,1fr,1fr] gap-[2.4rem] items-center px-[2.4rem] py-[1.4rem]">
      <img
        className="block w-[6.4rem] object-cover scale-[1.5] translate-x-[-7px]"
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
      <button>Delete</button>
    </div>
  );
}

export default RoomRow;
