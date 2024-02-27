import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";

// const FormRow = styled.div`
//   display: grid;
//   align-items: center;
//   grid-template-columns: 24rem 1fr 1.2fr;
//   gap: 2.4rem;

//   padding: 1.2rem 0;

//   &:first-child {
//     padding-top: 0;
//   }

//   &:last-child {
//     padding-bottom: 0;
//   }

//   &:not(:last-child) {
//     border-bottom: 1px solid var(--color-grey-100);
//   }

//   &:has(button) {
//     display: flex;
//     justify-content: flex-end;
//     gap: 1.2rem;
//   }
// `;

// const Label = styled.label`
//   font-weight: 500;
// `;

// const Error = styled.span`
//   font-size: 1.4rem;
//   color: var(--color-red-700);
// `;

function CreateCabinForm() {
  return (
    // <Form>
    //   <FormRow>
    //     <Label htmlFor="name">Cabin name</Label>
    //     <Input type="text" id="name" />
    //   </FormRow>

    //   <FormRow>
    //     <Label htmlFor="maxCapacity">Maximum capacity</Label>
    //     <Input type="number" id="maxCapacity" />
    //   </FormRow>

    //   <FormRow>
    //     <Label htmlFor="regularPrice">Regular price</Label>
    //     <Input type="number" id="regularPrice" />
    //   </FormRow>

    //   <FormRow>
    //     <Label htmlFor="discount">Discount</Label>
    //     <Input type="number" id="discount" defaultValue={0} />
    //   </FormRow>

    //   <FormRow>
    //     <Label htmlFor="description">Description for website</Label>
    //     <Textarea type="number" id="description" defaultValue="" />
    //   </FormRow>

    //   <FormRow>
    //     <Label htmlFor="image">Cabin photo</Label>
    //     <FileInput id="image" accept="image/*" />
    //   </FormRow>

    //   <FormRow>
    //     {/* type is an HTML attribute! */}
    //     <Button variation="secondary" type="reset">
    //       Cancel
    //     </Button>
    //     <Button>Edit cabin</Button>
    //   </FormRow>
    // </Form>
    <form className="bg-white shadow-md flex items-center justify-center flex-col py-20 gap-10 ">
      <FormRow>
        <Input type="text" />
        <Label>Cabin Name</Label>
      </FormRow>

      <FormRow>
        <Input type="number" />
        <Label>Maximum Capacity</Label>
      </FormRow>

      <FormRow>
        <Input type="number" />
        <Label>Regular Price</Label>
      </FormRow>

      <FormRow>
        <Input type="number" defaultValue={0} />
        <Label>Discount</Label>
      </FormRow>

      <FormRow>
        <Textarea />
        <Label>Description for website</Label>
      </FormRow>

      <FormRow>
        <FileInput />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <span className="flex justify-start items-center gap-32 mt-10">
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button variation="primary">Edit cabin</Button>
        </span>
      </FormRow>
    </form>
  );
}

export default CreateCabinForm;
