// fake async request
export async function wait(ms: number): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, ms))
  return "Got Data"
}
