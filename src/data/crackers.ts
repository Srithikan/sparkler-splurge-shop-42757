export interface Cracker {
  id: number;
  name: string;
  unit: string;
  originalPrice: number;
  discountedPrice: number;
  category: string;
}

export const crackers: Cracker[] = [
  // Electric Crackers
  { id: 1, name: "7 CM MIXED COLOURS", unit: "1 BOX", originalPrice: 100, discountedPrice: 10, category: "Electric Crackers" },
  { id: 2, name: "10 CM ELECTRIC", unit: "1 BOX", originalPrice: 150, discountedPrice: 15, category: "Electric Crackers" },
  { id: 3, name: "10 CM COLOUR", unit: "1 BOX", originalPrice: 170, discountedPrice: 17, category: "Electric Crackers" },
  { id: 4, name: "10 CM GREEN", unit: "1 BOX", originalPrice: 180, discountedPrice: 18, category: "Electric Crackers" },
  { id: 5, name: "10 CM RED", unit: "1 BOX", originalPrice: 200, discountedPrice: 20, category: "Electric Crackers" },
  { id: 6, name: "12 CM ELECTRIC", unit: "1 BOX", originalPrice: 220, discountedPrice: 22, category: "Electric Crackers" },
  { id: 7, name: "12 CM COLOUR", unit: "1 BOX", originalPrice: 240, discountedPrice: 24, category: "Electric Crackers" },
  { id: 8, name: "12 CM GREEN", unit: "1 BOX", originalPrice: 260, discountedPrice: 26, category: "Electric Crackers" },
  { id: 9, name: "12 CM RED", unit: "1 BOX", originalPrice: 280, discountedPrice: 28, category: "Electric Crackers" },
  { id: 10, name: "15 CM ELECTRIC", unit: "1 BOX", originalPrice: 380, discountedPrice: 38, category: "Electric Crackers" },
  { id: 11, name: "15 CM COLOUR", unit: "1 BOX", originalPrice: 400, discountedPrice: 40, category: "Electric Crackers" },
  { id: 12, name: "15 CM GREEN", unit: "1 BOX", originalPrice: 420, discountedPrice: 42, category: "Electric Crackers" },
  { id: 13, name: "15 CM RED", unit: "1 BOX", originalPrice: 450, discountedPrice: 45, category: "Electric Crackers" },
  { id: 14, name: "30 CM ELECTRIC", unit: "1 BOX", originalPrice: 400, discountedPrice: 40, category: "Electric Crackers" },
  { id: 15, name: "30 CM COLOUR", unit: "1 BOX", originalPrice: 420, discountedPrice: 42, category: "Electric Crackers" },
  { id: 16, name: "30 CM GREEN", unit: "1 BOX", originalPrice: 450, discountedPrice: 45, category: "Electric Crackers" },
  { id: 17, name: "30 CM RED", unit: "1 BOX", originalPrice: 460, discountedPrice: 46, category: "Electric Crackers" },
  { id: 18, name: "50 CM ELECTRIC", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Electric Crackers" },
  { id: 19, name: "50 CM CRACKLING", unit: "1 BOX", originalPrice: 1600, discountedPrice: 160, category: "Electric Crackers" },

  // Flower Pots
  { id: 20, name: "FLOWER POTS SMALL", unit: "1 BOX", originalPrice: 450, discountedPrice: 45, category: "Flower Pots" },
  { id: 21, name: "FLOWER POTS BIG", unit: "1 BOX", originalPrice: 700, discountedPrice: 70, category: "Flower Pots" },
  { id: 22, name: "FLOWER POTS SPECIAL", unit: "1 BOX", originalPrice: 900, discountedPrice: 90, category: "Flower Pots" },
  { id: 23, name: "FLOWER POTS ASOKA", unit: "1 BOX", originalPrice: 1200, discountedPrice: 120, category: "Flower Pots" },
  { id: 24, name: "LUCKY POTS", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Flower Pots" },
  { id: 25, name: "COLOUR KOTI", unit: "1 BOX", originalPrice: 1900, discountedPrice: 190, category: "Flower Pots" },

  // Ground Chakra
  { id: 26, name: "GROUND CHAKKAR SMALL", unit: "1 BOX", originalPrice: 450, discountedPrice: 45, category: "Ground Chakra" },
  { id: 27, name: "GROUND CHAKKAR BIG", unit: "1 BOX", originalPrice: 800, discountedPrice: 80, category: "Ground Chakra" },
  { id: 28, name: "GROUND CHAKKAR ASHOKA", unit: "1 BOX", originalPrice: 650, discountedPrice: 65, category: "Ground Chakra" },
  { id: 29, name: "GROUND CHAKKAR DELUXE", unit: "1 BOX", originalPrice: 1200, discountedPrice: 120, category: "Ground Chakra" },

  // Single Sound
  { id: 30, name: "2.75 KURUVI", unit: "1 PKT", originalPrice: 70, discountedPrice: 7, category: "Single Sound" },
  { id: 31, name: "3.5 LAKCHMI", unit: "1 PKT", originalPrice: 140, discountedPrice: 14, category: "Single Sound" },
  { id: 32, name: "4 LAKCHMI", unit: "1 PKT", originalPrice: 200, discountedPrice: 20, category: "Single Sound" },
  { id: 33, name: "4 GOLD LAKSHMI", unit: "1 PKT", originalPrice: 350, discountedPrice: 35, category: "Single Sound" },
  { id: 34, name: "4 HULK", unit: "1 PKT", originalPrice: 350, discountedPrice: 35, category: "Single Sound" },
  { id: 35, name: "5 JALLIKATTU", unit: "1 PKT", originalPrice: 450, discountedPrice: 45, category: "Single Sound" },
  { id: 36, name: "6 LION", unit: "1 PKT", originalPrice: 600, discountedPrice: 60, category: "Single Sound" },
  { id: 37, name: "BIJILI", unit: "1 PKT", originalPrice: 300, discountedPrice: 30, category: "Single Sound" },
  { id: 38, name: "2 SOUND", unit: "1 PKT", originalPrice: 300, discountedPrice: 30, category: "Single Sound" },

  // Atom Bombs
  { id: 39, name: "HYTRO BOMB", unit: "1 BOX", originalPrice: 600, discountedPrice: 60, category: "Atom Bombs" },
  { id: 40, name: "KING OF KING BOMB", unit: "1 BOX", originalPrice: 900, discountedPrice: 90, category: "Atom Bombs" },
  { id: 41, name: "CLASSIC BOMB", unit: "1 BOX", originalPrice: 1100, discountedPrice: 110, category: "Atom Bombs" },
  { id: 42, name: "DELUXE BULLET", unit: "1 BOX", originalPrice: 450, discountedPrice: 45, category: "Atom Bombs" },
  { id: 43, name: "555 BOMB", unit: "1 BOX", originalPrice: 850, discountedPrice: 85, category: "Atom Bombs" },
  { id: 44, name: "DINOSAUR BOMB", unit: "1 BOX", originalPrice: 2000, discountedPrice: 200, category: "Atom Bombs" },

  // Rockets
  { id: 45, name: "ROCKET BOMB", unit: "1 BOX", originalPrice: 700, discountedPrice: 70, category: "Rockets" },
  { id: 46, name: "LUNIK ROCKET", unit: "1 BOX", originalPrice: 1400, discountedPrice: 140, category: "Rockets" },
  { id: 47, name: "WHIZILING ROCKET", unit: "1 BOX", originalPrice: 1600, discountedPrice: 160, category: "Rockets" },

  // Twinkling Star
  { id: 48, name: "1.5\" TWINKLING STAR", unit: "1 BOX", originalPrice: 300, discountedPrice: 30, category: "Twinkling Star" },
  { id: 49, name: "4\" TWINKLING STAR", unit: "1 BOX", originalPrice: 700, discountedPrice: 70, category: "Twinkling Star" },

  // Peacock Fancy
  { id: 50, name: "PEACOCK FEATHERS", unit: "1 BOX", originalPrice: 1100, discountedPrice: 110, category: "Peacock Fancy" },
  { id: 51, name: "PEACOCK SPECIAL", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Peacock Fancy" },
  { id: 52, name: "BADA PEACOCK", unit: "1 BOX", originalPrice: 3800, discountedPrice: 380, category: "Peacock Fancy" },

  // Fancy Items
  { id: 53, name: "PHOTO FLASH", unit: "1 BOX", originalPrice: 650, discountedPrice: 65, category: "Fancy Items" },
  { id: 54, name: "DISCO WHEEL", unit: "1 BOX", originalPrice: 750, discountedPrice: 75, category: "Fancy Items" },
  { id: 55, name: "TIN BEER SHOWER", unit: "1 BOX", originalPrice: 800, discountedPrice: 80, category: "Fancy Items" },
  { id: 56, name: "FLYING DANCER", unit: "1 BOX", originalPrice: 800, discountedPrice: 80, category: "Fancy Items" },
  { id: 57, name: "HELLICOPTER", unit: "1 BOX", originalPrice: 1000, discountedPrice: 100, category: "Fancy Items" },
  { id: 58, name: "TOP GUN", unit: "1 BOX", originalPrice: 1000, discountedPrice: 100, category: "Fancy Items" },
  { id: 59, name: "PAMBAREM", unit: "1 BOX", originalPrice: 800, discountedPrice: 80, category: "Fancy Items" },
  { id: 60, name: "ROBO KIDS", unit: "1 BOX", originalPrice: 1350, discountedPrice: 135, category: "Fancy Items" },
  { id: 61, name: "PANDA", unit: "1 BOX", originalPrice: 2400, discountedPrice: 240, category: "Fancy Items" },
  { id: 62, name: "TRI COLOR", unit: "1 BOX", originalPrice: 1800, discountedPrice: 180, category: "Fancy Items" },
  { id: 63, name: "TANGO SHOWER", unit: "1 BOX", originalPrice: 900, discountedPrice: 90, category: "Fancy Items" },
  { id: 64, name: "MONEY BANK", unit: "1 BOX", originalPrice: 1700, discountedPrice: 170, category: "Fancy Items" },

  // Fountains
  { id: 65, name: "LOLLIPOPS FOUNTAIN", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 66, name: "COCK FIGHT FOUNTAIN", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 67, name: "ULTRA VOLTAGE FOUNTAIN", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 68, name: "PRIDE POPCORN FOUNTAIN", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 69, name: "PEACOCK FOUNTAIN", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 70, name: "MOJITO FOUNTAIN", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 71, name: "STAR LIGHT / MOON LIGHT", unit: "1 BOX", originalPrice: 1200, discountedPrice: 120, category: "Fountains" },
  { id: 72, name: "WIRE CHAKKAR", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },
  { id: 73, name: "DANCING UMBERLA", unit: "1 BOX", originalPrice: 1800, discountedPrice: 180, category: "Fountains" },
  { id: 74, name: "DANCING SHOOTER", unit: "1 BOX", originalPrice: 2400, discountedPrice: 240, category: "Fountains" },
  { id: 75, name: "SWING DANCE SHOOTER", unit: "1 BOX", originalPrice: 2400, discountedPrice: 240, category: "Fountains" },
  { id: 76, name: "SIREN", unit: "1 BOX", originalPrice: 1600, discountedPrice: 160, category: "Fountains" },
  { id: 77, name: "MINI SIREN", unit: "1 BOX", originalPrice: 1000, discountedPrice: 100, category: "Fountains" },
  { id: 78, name: "SMOKE", unit: "1 BOX", originalPrice: 1100, discountedPrice: 110, category: "Fountains" },
  { id: 79, name: "SELFI STICK", unit: "1 BOX", originalPrice: 1200, discountedPrice: 120, category: "Fountains" },
  { id: 80, name: "IPL TIN", unit: "1 BOX", originalPrice: 1300, discountedPrice: 130, category: "Fountains" },
  { id: 81, name: "WATER FALLS", unit: "1 BOX", originalPrice: 1600, discountedPrice: 160, category: "Fountains" },
  { id: 82, name: "POWER FULL TORCH", unit: "1 BOX", originalPrice: 1400, discountedPrice: 140, category: "Fountains" },
  { id: 83, name: "4*4 WHEEL", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Fountains" },

  // Kids Favorites
  { id: 84, name: "SNAKE TABLET", unit: "1 BOX", originalPrice: 500, discountedPrice: 50, category: "Kids Favorites" },
  { id: 85, name: "KITKAT", unit: "1 BOX", originalPrice: 350, discountedPrice: 35, category: "Kids Favorites" },
  { id: 86, name: "MAGIC STONE", unit: "1 BOX", originalPrice: 350, discountedPrice: 35, category: "Kids Favorites" },
  { id: 87, name: "CARTOON", unit: "1 BOX", originalPrice: 400, discountedPrice: 40, category: "Kids Favorites" },
  { id: 88, name: "SNAKE CARTOON", unit: "1 BOX", originalPrice: 500, discountedPrice: 50, category: "Kids Favorites" },
  { id: 89, name: "ROLL CAP", unit: "1 BOX", originalPrice: 500, discountedPrice: 50, category: "Kids Favorites" },
  { id: 90, name: "GUN", unit: "1 PCS", originalPrice: 500, discountedPrice: 50, category: "Kids Favorites" },
  { id: 91, name: "BULLET (GUN)", unit: "1 PKT", originalPrice: 100, discountedPrice: 10, category: "Kids Favorites" },
  { id: 92, name: "5 MAN ARMY", unit: "1 BOX", originalPrice: 600, discountedPrice: 60, category: "Kids Favorites" },

  // Mega Bomb
  { id: 93, name: "250G BOMB", unit: "1 BOX", originalPrice: 450, discountedPrice: 45, category: "Mega Bomb" },
  { id: 94, name: "500G BOMB", unit: "1 BOX", originalPrice: 900, discountedPrice: 90, category: "Mega Bomb" },
  { id: 95, name: "1KG BOMB", unit: "1 BOX", originalPrice: 1700, discountedPrice: 170, category: "Mega Bomb" },
  { id: 96, name: "6 PAPER ROLE", unit: "1 BOX", originalPrice: 900, discountedPrice: 90, category: "Mega Bomb" },

  // Multi Sound Crackers
  { id: 97, name: "GOLD WAR", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Multi Sound" },
  { id: 98, name: "56 GAINT", unit: "1 BOX", originalPrice: 480, discountedPrice: 48, category: "Multi Sound" },
  { id: 99, name: "50 DELUXE", unit: "1 BOX", originalPrice: 800, discountedPrice: 80, category: "Multi Sound" },
  { id: 100, name: "100 SOUND CRACKERS", unit: "1 BOX", originalPrice: 400, discountedPrice: 40, category: "Multi Sound" },
  { id: 101, name: "600 SOUND CRACKERS", unit: "1 BOX", originalPrice: 2000, discountedPrice: 200, category: "Multi Sound" },
  { id: 102, name: "1000 SOUND CRACKERS", unit: "1 BOX", originalPrice: 3200, discountedPrice: 320, category: "Multi Sound" },
  { id: 103, name: "2000 SOUND CRACKERS", unit: "1 BOX", originalPrice: 6000, discountedPrice: 600, category: "Multi Sound" },
  { id: 104, name: "5000 SOUND CRACKERS", unit: "1 BOX", originalPrice: 15000, discountedPrice: 1500, category: "Multi Sound" },
  { id: 105, name: "10,000 SOUND CRACKERS", unit: "1 BOX", originalPrice: 30000, discountedPrice: 3000, category: "Multi Sound" },

  // Sky Shots
  { id: 106, name: "2\" PIPE (SINGLE)", unit: "1 BOX", originalPrice: 1200, discountedPrice: 120, category: "Sky Shots" },
  { id: 107, name: "2\" PIPE (2 PCS)", unit: "1 BOX", originalPrice: 2200, discountedPrice: 220, category: "Sky Shots" },
  { id: 108, name: "2\" PIPE (3 PCS)", unit: "1 BOX", originalPrice: 2500, discountedPrice: 250, category: "Sky Shots" },
  { id: 109, name: "2.5\" PIPE (2 PCS)", unit: "1 BOX", originalPrice: 2500, discountedPrice: 250, category: "Sky Shots" },
  { id: 110, name: "3\" PIPE (SINGLE)", unit: "1 BOX", originalPrice: 2300, discountedPrice: 230, category: "Sky Shots" },
  { id: 111, name: "3\" PIPE (2 PCS)", unit: "1 BOX", originalPrice: 4500, discountedPrice: 450, category: "Sky Shots" },
  { id: 112, name: "3.5\" PIPE (SINGLE)", unit: "1 BOX", originalPrice: 2900, discountedPrice: 290, category: "Sky Shots" },
  { id: 113, name: "4\" PIPE", unit: "1 BOX", originalPrice: 3500, discountedPrice: 350, category: "Sky Shots" },
  { id: 114, name: "4\" DOUBLE BALL (SINGLE)", unit: "1 BOX", originalPrice: 3800, discountedPrice: 380, category: "Sky Shots" },
  { id: 115, name: "3 LINK", unit: "1 BOX", originalPrice: 1700, discountedPrice: 170, category: "Sky Shots" },
  { id: 116, name: "FANTACY SKY SHOT", unit: "1 BOX", originalPrice: 1500, discountedPrice: 150, category: "Sky Shots" },
  { id: 117, name: "FANTACY SCOOP", unit: "1 BOX", originalPrice: 1000, discountedPrice: 100, category: "Sky Shots" },
  { id: 118, name: "7UP MAGIC STAR", unit: "1 BOX", originalPrice: 2400, discountedPrice: 240, category: "Sky Shots" },
  { id: 119, name: "12 COLOUR RIDER", unit: "1 BOX", originalPrice: 1400, discountedPrice: 140, category: "Sky Shots" },
  { id: 120, name: "12 CRACKLING RIDER", unit: "1 BOX", originalPrice: 1600, discountedPrice: 160, category: "Sky Shots" },
  { id: 121, name: "25 RIDER", unit: "1 BOX", originalPrice: 2000, discountedPrice: 200, category: "Sky Shots" },
  { id: 122, name: "15 SHOT DESIRE", unit: "1 BOX", originalPrice: 2500, discountedPrice: 250, category: "Sky Shots" },
  { id: 123, name: "16 SHOT EXPRESS", unit: "1 BOX", originalPrice: 2600, discountedPrice: 260, category: "Sky Shots" },
  { id: 124, name: "30 SHOT DIGITAL", unit: "1 BOX", originalPrice: 4200, discountedPrice: 420, category: "Sky Shots" },
  { id: 125, name: "30 SHOT SPACE X", unit: "1 BOX", originalPrice: 4400, discountedPrice: 440, category: "Sky Shots" },
  { id: 126, name: "50 SHOT BATTLE", unit: "1 BOX", originalPrice: 7500, discountedPrice: 750, category: "Sky Shots" },
  { id: 127, name: "60 SHOT MASTIC SPECIAL", unit: "1 BOX", originalPrice: 9000, discountedPrice: 900, category: "Sky Shots" },
  { id: 128, name: "80 SHOT MAJA SPECIAL", unit: "1 BOX", originalPrice: 12000, discountedPrice: 1200, category: "Sky Shots" },
  { id: 129, name: "100 SHOT SHAADI KA GIFT SPECIAL", unit: "1 BOX", originalPrice: 14000, discountedPrice: 1400, category: "Sky Shots" },
  { id: 130, name: "200 SHOT ACTION SPECIAL", unit: "1 BOX", originalPrice: 29000, discountedPrice: 2900, category: "Sky Shots" },
];

export const categories = Array.from(new Set(crackers.map(c => c.category)));
