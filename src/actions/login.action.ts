"use server"
import axios from "axios"

export const loginAction = async (prevState: any, formData: FormData) => {
  try {
    const { data } = await axios.post(
      "https://dummyjson.com/auth/login",
      formData
    )
    console.log({ data })
    return {
      message: "Login Success",
      success: true,
    }
  } catch (error: any) {
    console.log(error.response.data)
    return {
      message: "Login Failed",
      success: false,
    }
  }
}
