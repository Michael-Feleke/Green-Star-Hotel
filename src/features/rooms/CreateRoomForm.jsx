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
import Error from "../../ui/Error";

function CreateRoomForm() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { errors } = formState;

  const queryClient = useQueryClient();

  const { mutate, isLoading: isAddingRoom } = useMutation({
    mutationFn: createRoom,
    onSuccess: () => {
      toast.success("Room created successfully!");
      queryClient.invalidateQueries({
        queryKey: ["rooms"],
      });
      reset();
    },

    onError: (err) => toast.error(err),
  });

  function onSubmit(data) {
    mutate(data);
  }

  function onError(errors) {
    // console.log(errors);
  }

  return (
    <form
      className="bg-white shadow-md flex items-center justify-center flex-col py-20 gap-10 "
      onSubmit={handleSubmit(onSubmit, onError)}
    >
      <FormRow>
        <Input
          type="text"
          register={register}
          registerObject={{ required: "This field is required" }}
          name="name"
          disabled={isAddingRoom}
        />
        <Label>Cabin Name</Label>
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Input
          type="number"
          disabled={isAddingRoom}
          register={register}
          registerObject={{
            required: "This field is required",
            min: {
              value: 1,
              message: "Capacity should be at least 1",
            },
          }}
          name="maxCapacity"
        />
        <Label>Maximum Capacity</Label>
        {errors?.maxCapacity?.message && (
          <Error>{errors.maxCapacity.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Input
          type="number"
          disabled={isAddingRoom}
          register={register}
          registerObject={{
            required: "This field is required",
            min: {
              value: 1,
              message: "Price should be greater than 0",
            },
          }}
          name="regularPrice"
        />
        <Label>Regular Price</Label>
        {errors?.regularPrice?.message && (
          <Error>{errors.regularPrice.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <Input
          type="number"
          disabled={isAddingRoom}
          defaultValue={0}
          register={register}
          registerObject={{
            required: "This field is required",
            validate: (value) =>
              value < getValues().regularPrice ||
              "Discount should be less than the regular price",
            min: {
              value: 0,
              message: "Discount should be greater than or equal 0",
            },
          }}
          name="discount"
        />
        <Label>Discount</Label>
        {errors?.discount?.message && <Error>{errors.discount.message}</Error>}
      </FormRow>

      <FormRow>
        <Textarea
          disabled={isAddingRoom}
          register={register}
          name="description"
          registerObject={{ required: "This field is required" }}
        />
        <Label>Description for the room</Label>
        {errors?.description?.message && (
          <Error>{errors.description.message}</Error>
        )}
      </FormRow>

      <FormRow>
        <FileInput />
      </FormRow>

      <FormRow>
        <span className="flex justify-start items-center gap-32 mt-10">
          <Button variation="secondary" type="reset">
            Cancel
          </Button>
          <Button variation="primary" type="submit" disabled={isAddingRoom}>
            {isAddingRoom ? (
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
                Adding the room
              </span>
            ) : (
              "Add room"
            )}
          </Button>
        </span>
      </FormRow>
    </form>
  );
}

export default CreateRoomForm;
