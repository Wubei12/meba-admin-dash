import { useRegisterMutation } from "@/redux/features/auth/authApiSlice";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";

export default function useRegister() {
  const router = useRouter();

  const [register, { isLoading }] = useRegisterMutation();

  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone_number: "",
    password1: "",
    password2: "",
  });

  const { full_name, email, phone_number, password1, password2 } = formData;

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    register({ full_name, email, phone_number, password1, password2 })
      .unwrap()
      .then(() => {
        toast.success("You've been Registered");
        router.push("/dashboard");
      })
      .catch(() => {
        toast.error("Failed to register account");
      });
  };

  return {
    full_name,
    email,
    phone_number,
    password1,
    password2,
    isLoading,
    onChange,
    onSubmit,
  };
}
