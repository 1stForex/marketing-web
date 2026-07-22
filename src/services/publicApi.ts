const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") ||
  "https://api.staging-1stforex.foliumaitech.com";

type PublicPayload = Record<string, string>;

function getApiErrorMessage(data: unknown) {
  const fallback = "Something went wrong. Please try again.";

  if (!data || typeof data !== "object") {
    return fallback;
  }

  const responseData = data as Record<string, unknown>;
  for (const key of ["detail", "error", "message"]) {
    const value = responseData[key];
    if (typeof value === "string" && value.trim()) {
      return value;
    }
    if (Array.isArray(value) && typeof value[0] === "string") {
      return value[0];
    }
  }

  for (const value of Object.values(responseData)) {
    if (typeof value === "string" && value.trim()) {
      return value;
    }
    if (Array.isArray(value) && typeof value[0] === "string") {
      return value[0];
    }
  }

  return fallback;
}

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
    throw new Error(getApiErrorMessage(data));
  }

  return data as { detail?: string };
}
