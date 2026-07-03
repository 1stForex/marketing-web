const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "https://api.staging-1stforex.foliumaitech.com";

type PublicPayload = Record<string, string>;

export async function postPublicForm(path: string, payload: PublicPayload) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const detail =
      typeof data.detail === "string"
        ? data.detail
        : "Something went wrong. Please try again.";
    throw new Error(detail);
  }

  return data as { detail?: string };
}
