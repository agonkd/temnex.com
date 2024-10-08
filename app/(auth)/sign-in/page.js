import Section from "@/app/_components/utils/Section";
import Link from "next/link";
import constants from "@/app/_components/constants";
import Button from "@/app/_components/utils/Button";
import { GoArrowUpRight } from "react-icons/go";
import { FaFacebookF, FaGoogle, FaApple } from "react-icons/fa";

const Singup = () => {
  return (
    <>
      <div className="text-center leading-none">
        <h1 className="h1 nasalization text-dark">SIGN IN</h1>
        <p>
          Give your visitor a smooth online experience with a solid UX design
        </p>
      </div>
      <div className="flex justify-center">
        <form
          action=""
          method=""
          className="bg-white sm:w-fit w-full p-8 rounded-lg shadow-2xl space-y-4"
        >
          <h2 className="text-lg font-semibold">Welcome back!</h2>
          <p className="text-sm">
            Don't have an account?{" "}
            <Link href="/sign-up" className="text-dark font-semibold">
              Sign up
            </Link>
          </p>
          {constants.loginInputs.map((input, index) => (
            <div key={index}>
              <label htmlFor={input.label} className="font-medium text-sm">
                {input.label}
              </label>
              <input
                type={input.type}
                id={input.label}
                placeholder={input.placeholder}
                className="w-full border px-3 py-2 rounded-md mt-2 outline-none placeholder:text-sm"
              />
            </div>
          ))}
          <Button type="submit" size="full">
            Sign in
            <GoArrowUpRight className="text-2xl" />
          </Button>
          <p className="text-center">OR</p>
          <ul className="flex lg:flex-row flex-col gap-4">
            <li className="flex justify-center items-center gap-2 border border-blue-500 text-blue-500 text-sm p-3 rounded">
              <FaFacebookF />
              Continue with Facebook
            </li>
            <li className="flex justify-center items-center gap-2 border border-red-500 text-red-500 text-sm p-3 rounded">
              <FaGoogle />
              Continue with Google
            </li>
            <li className="flex justify-center items-center gap-2 border border-black text-black text-sm p-3 rounded">
              <FaApple />
              Continue with Apple
            </li>
          </ul>
        </form>
      </div>
    </>
  );
};
export default Singup;
