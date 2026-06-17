import {
  // useForm,
  useController,
  type UseControllerProps,
} from "react-hook-form";
import type { IFormInput } from "./ReactHookForm";

export function Input(props: UseControllerProps<IFormInput>) {
  const { field, fieldState } = useController(props);

  return (
    <div>
      <input
        className="w-full  px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...field}
        placeholder={props.name}
      />
      <p className="text-blue-500 text-sm mt-1">
        {fieldState.isTouched && "Touched"}
      </p>
      <p className="text-blue-500 text-sm mt-1">
        {fieldState.isDirty && "Dirty"}
      </p>
      <p className="text-blue-500 text-sm mt-1">
        {fieldState.invalid ? "invalid" : "valid"}
      </p>
    </div>
  );
}

// export default function App() {
//   const { handleSubmit, control } = useForm<FormValues>({
//     defaultValues: {
//       FirstName: "",
//     },
//     mode: "onChange",
//   })
//   const onSubmit = (data: FormValues) => console.log(data)

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <Input control={control} name="FirstName" rules={{ required: true }} />
//       <input type="submit" />
//     </form>
//   )
// }
