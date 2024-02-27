import Input from "../../ui/Input";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";
import Label from "../../ui/Label";

function CreateRoomForm() {
  return (
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

export default CreateRoomForm;
