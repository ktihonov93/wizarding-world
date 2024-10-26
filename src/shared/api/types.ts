export type Character = {
  name: string;
  image: string;
  id: string;
  storedCharacter?: boolean;
  addCharacterToFavorites?: Function;
};

export type Characters = Character[];
