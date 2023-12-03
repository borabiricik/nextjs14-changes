"use client"
import { loginAction } from "@/actions/login.action"
import { useEffect } from "react"
import { useFormState } from "react-dom"
import { toast } from "react-toastify"

const initialState: { message: string | null; success: boolean | null } = {
  message: null,
  success: null,
}

export default function Home() {
  const [state, serverAction] = useFormState(loginAction, initialState)
  useEffect(() => {
    if (state.message)
      toast(state.message, { type: !!state.success ? "success" : "error" })
  }, [state.message, state.success])

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white rounded-lg shadow-2xl p-10 min-w-[40%]">
        <div className="flex justify-center items-center">
          <h1 className="text-2xl font-bold ml-2">Login</h1>
        </div>
        <form
          action={serverAction}
          autoComplete="new-password"
          className="mt-10"
        >
          <div className="flex flex-col">
            <label className="mb-2 font-bold text-lg">Username</label>
            <input
              autoComplete="new-password"
              className="border py-2 px-3 text-grey-darkest"
              type="text"
              name="username"
              id="username"
            />
          </div>
          <div className="flex flex-col mt-5">
            <label className="mb-2 font-bold text-lg">Password</label>
            <input
              autoComplete="new-password"
              className="border py-2 px-3 text-grey-darkest"
              type="password"
              name="password"
              id="password"
            />
          </div>
          <div className="flex justify-center items-center mt-10">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
