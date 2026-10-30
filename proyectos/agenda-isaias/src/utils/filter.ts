import type { Contact } from "../components/contact";

export function filterContacts(list: readonly Contact[], text: string, onlyFavourites: boolean): Contact[] {
  const normalizar = text.toLowerCase().trim();

  return list.filter((c: Contact): boolean => {
    const sameText = c.name.toLowerCase() === normalizar || c.phone.toLowerCase() === normalizar;
    const sameFavourite = c.favorite === onlyFavourites;
    return sameText && sameFavourite;
  })
}
