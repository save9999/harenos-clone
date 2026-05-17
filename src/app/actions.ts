"use server";

export type ContactState = {
  ok: boolean;
  message: string;
};

export async function submitContact(
  _prev: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const projectType = String(formData.get("projectType") ?? "").trim();
  const city = String(formData.get("city") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "Merci de renseigner au moins votre nom, votre email et un descriptif.",
    };
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailOk) {
    return { ok: false, message: "L'adresse email semble invalide." };
  }

  console.log("[contact]", { name, email, phone, projectType, city, message });

  return {
    ok: true,
    message:
      "Merci ! Votre demande est bien reçue. Un chef de projet vous rappelle sous 24h.",
  };
}
