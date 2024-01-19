export type Hair = {
  colour: HairColour;
  strength: HairStrength;
  style: Hairstyle;
};

export type FacialHair = {
  style: BeardStyle;
  colour: BeardColor;
  length: HairStrength;
};

enum HairColour {
  BLONDE = "Blonde",
  BLACK = "Black",
  BROWN = "Brown",
  RED = "Red",
  AUBURN = "Auburn",
  GREY = "Grey",
  WHITE = "White",
}

enum Hairstyle {
  BALD = "Bald",
  SHORT_CROPPED = "Short Cropped",
  BOWL_CUT = "Bowl Cut",
  SHOULDER_LENGTH = "Shoulder Length",
  PAGE_BOY = "Page Boy",
  PIXIE_CUT = "Pixie Cut",
  SHAVED_SIDES = "Shaved Sides",
  MAN_BUN = "Man Bun",
  TOPKNOT = "Topknot",
  FLOWING_LOCKS = "Flowing Locks",
  TONSURE = "Tonsure",
}

enum HairStrength {
  RECEDING = "Receding",
  WHISPY = "Whispy",
  ROBUST = "Robust",
  HEALTHY = "Healthy",
}

enum BeardStyle {
  CLEAN_SHAVEN = "Clean-Shaven",
  GOATEE = "Goatee",
  FULL_BEARD = "Full Beard",
  VAN_DYKE = "Van Dyke",
  ANCHOR = "Anchor Beard",
  STUBBLE = "Stubble",
  MUTTON_CHOPS = "Mutton Chops",
  SOUL_PATCH = "Soul Patch",
  DUCKTAIL = "Ducktail",
  HANDLEBAR = "Handlebar Mustache",
}

enum BeardColor {
  BLACK = "Black",
  BROWN = "Brown",
  BLONDE = "Blonde",
  RED = "Red",
  GREY = "Grey",
  WHITE = "White",
}
