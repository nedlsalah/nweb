/** Prefix local files (/public) with the base path when deployed under /Web. */
export const asset = (p: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${p}`;
