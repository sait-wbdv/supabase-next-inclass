import { login, signup } from "./actions";

export default function LoginPage() {
  return (
    <form className="my-12 mx-8 flex flex-col gap-4">
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="text-black"
        />
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="text-black"
        />
      </div>

      <button
        formAction={login}
        className="bg-blue-400 px-4 py-2 rounded-md m-4 w-fit"
      >
        Log in
      </button>
      <button
        formAction={signup}
        className="bg-green-400 px-4 py-2 rounded-md m-4 w-fit"
      >
        Sign up
      </button>
    </form>
  );
}
