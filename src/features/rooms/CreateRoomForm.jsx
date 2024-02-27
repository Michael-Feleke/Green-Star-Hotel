import React from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import { useForm } from "react-hook-form";

function CreateRoomForm() {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    console.log(data);
  }

  return (
    <form
      className="bg-white shadow-md flex items-center justify-center flex-col py-20 gap-10 "
      onSubmit={handleSubmit(onSubmit)} // Move handleSubmit here
    >
      <FormRow>
        <Input type="text" register={register} name="name" />
        <Label>Cabin Name</Label>
      </FormRow>

      <FormRow>
        <Input type="number" register={register} name="maxCapacity" />
        <Label>Maximum Capacity</Label>
      </FormRow>

      <FormRow>
        <Input type="number" register={register} name="regularPrice" />
        <Label>Regular Price</Label>
      </FormRow>

      <FormRow>
        <Input
          type="number"
          defaultValue={0}
          register={register}
          name="discount"
        />
        <Label>Discount</Label>
      </FormRow>

      <FormRow>
        <Textarea register={register} name="description" />
        <Label>Description for website</Label>
      </FormRow>

      <FormRow>
        <FileInput />
      </FormRow>

      <FormRow>
        <span className="flex justify-start items-center gap-32 mt-10">
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button variation="primary" type="submit">
            Add room
          </Button>
        </span>
      </FormRow>
    </form>
  );
}

export default CreateRoomForm;
