import { useForm, type SubmitHandler } from "react-hook-form";
import { ErrorMessages } from "./ErrorMessages";
import { Input } from "./InputUseController";

// Option 1: Preferred for this case (simple & clean)
type GenderEnum = "female" | "male" | "other";

// Option 2: If you need runtime values too
// const GenderEnum = {
//   female: "female",
//   male: "male",
//   other: "other",
// } as const;

export interface IFormInput {
  firstName: string;
  gender: GenderEnum;
  lastName: string;
}

export const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>First Name</label>
        <input
          {...register("firstName", {
            required: "please enter your first name",
            minLength: { message: "at least 3 characters", value: 3 },
          })}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="John Doe"
        />
        <div>
          <ErrorMessages errors={errors} field="firstName" />
        </div>
      </div>
      <div className="mt-2">
        <label>Gender Selection</label>
        <select
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          {...register("gender")}
        >
          <option value="female">female</option>
          <option value="male">male</option>
          <option value="other">other</option>
        </select>
      </div>
      <div className="mt-3">
        <label>Last Name</label>
        <Input
          control={control}
          name="lastName"
          defaultValue=""
          rules={{ required: true }}
        />
      </div>
      <div className="mt-3">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white px-3.5 py-2 rounded-lg font-semibold hover:bg-blue-700 transition disabled:opacity-70 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  );
};
