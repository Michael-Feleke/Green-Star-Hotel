import React from "react";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createRoom } from "../../services/apiRooms";
import toast from "react-hot-toast";

function CreateRoomForm() {
  const { register, handleSubmit } = useForm();
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Room created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
    },

    onError: (err) => toast.error(err),
  });

  function onSubmit(data) {
    mutate(data);
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
