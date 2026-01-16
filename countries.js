const COUNTRIES_DATA = [
    {
        name: "Afrique du Sud",
        emoji: "🇿🇦",
        ranks: { capitalPop: 55, smallArea: 180, fifa: 58, military: 33, rice: 115, distPH: 155 }
    },
    {
        name: "Algérie",
        emoji: "🇩🇿",
        ranks: { capitalPop: 30, smallArea: 191, fifa: 32, military: 26, rice: 145, distPH: 145 }
    },
    {
        name: "Allemagne",
        emoji: "🇩🇪",
        ranks: { capitalPop: 60, smallArea: 138, fifa: 16, military: 18, rice: 120, distPH: 135 }
    },
    {
        name: "Andorre",
        emoji: "🇦🇩",
        ranks: { capitalPop: 190, smallArea: 18, fifa: 164, military: 145, rice: 195, distPH: 145 }
    },
    {
        name: "Arabie Saoudite",
        emoji: "🇸🇦",
        ranks: { capitalPop: 16, smallArea: 188, fifa: 53, military: 22, rice: 140, distPH: 110 }
    },
    {
        name: "Argentine",
        emoji: "🇦🇷",
        ranks: { capitalPop: 15, smallArea: 185, fifa: 1, military: 28, rice: 55, distPH: 190 }
    },
    {
        name: "Australie",
        emoji: "🇦🇺",
        ranks: { capitalPop: 140, smallArea: 189, fifa: 25, military: 16, rice: 65, distPH: 30 }
    },
    {
        name: "Autriche",
        emoji: "🇦🇹",
        ranks: { capitalPop: 65, smallArea: 102, fifa: 21, military: 78, rice: 165, distPH: 138 }
    },
    {
        name: "Bangladesh",
        emoji: "🇧🇩",
        ranks: { capitalPop: 4, smallArea: 95, fifa: 185, military: 37, rice: 4, distPH: 28 }
    },
    {
        name: "Belgique",
        emoji: "🇧🇪",
        ranks: { capitalPop: 80, smallArea: 75, fifa: 6, military: 68, rice: 150, distPH: 138 }
    },
    {
        name: "Brésil",
        emoji: "🇧🇷",
        ranks: { capitalPop: 42, smallArea: 190, fifa: 5, military: 12, rice: 9, distPH: 188 }
    },
    {
        name: "Brunei",
        emoji: "🇧🇳",
        ranks: { capitalPop: 160, smallArea: 30, fifa: 190, military: 120, rice: 140, distPH: 5 }
    },
    {
        name: "Cambodge",
        emoji: "🇰🇭",
        ranks: { capitalPop: 52, smallArea: 88, fifa: 178, military: 105, rice: 11, distPH: 14 }
    },
    {
        name: "Cameroun",
        emoji: "🇨🇲",
        ranks: { capitalPop: 55, smallArea: 152, fifa: 51, military: 92, rice: 75, distPH: 158 }
    },
    {
        name: "Canada",
        emoji: "🇨🇦",
        ranks: { capitalPop: 105, smallArea: 193, fifa: 48, military: 27, rice: 140, distPH: 145 }
    },
    {
        name: "Chili",
        emoji: "🇨🇱",
        ranks: { capitalPop: 22, smallArea: 175, fifa: 45, military: 43, rice: 88, distPH: 185 }
    },
    {
        name: "Chine",
        emoji: "🇨🇳",
        ranks: { capitalPop: 3, smallArea: 191, fifa: 90, military: 3, rice: 1, distPH: 25 }
    },
    {
        name: "Colombie",
        emoji: "🇨🇴",
        ranks: { capitalPop: 14, smallArea: 172, fifa: 14, military: 45, rice: 22, distPH: 182 }
    },
    {
        name: "Corée du Sud",
        emoji: "🇰🇷",
        ranks: { capitalPop: 5, smallArea: 108, fifa: 23, military: 5, rice: 15, distPH: 20 }
    },
    {
        name: "Costa Rica",
        emoji: "🇨🇷",
        ranks: { capitalPop: 165, smallArea: 80, fifa: 54, military: 145, rice: 95, distPH: 175 }
    },
    {
        name: "Côte d'Ivoire",
        emoji: "🇨🇮",
        ranks: { capitalPop: 32, smallArea: 115, fifa: 28, military: 80, rice: 21, distPH: 162 }
    },
    {
        name: "Égypte",
        emoji: "🇪🇬",
        ranks: { capitalPop: 4, smallArea: 170, fifa: 36, military: 15, rice: 14, distPH: 115 }
    },
    {
        name: "Émirats Arabes Unis",
        emoji: "🇦🇪",
        ranks: { capitalPop: 95, smallArea: 108, fifa: 68, military: 36, rice: 185, distPH: 98 }
    },
    {
        name: "Équateur",
        emoji: "🇪🇨",
        ranks: { capitalPop: 75, smallArea: 122, fifa: 24, military: 85, rice: 42, distPH: 180 }
    },
    {
        name: "Espagne",
        emoji: "🇪🇸",
        ranks: { capitalPop: 38, smallArea: 145, fifa: 3, military: 11, rice: 45, distPH: 145 }
    },
    {
        name: "Estonie",
        emoji: "🇪🇪",
        ranks: { capitalPop: 172, smallArea: 85, fifa: 122, military: 108, rice: 195, distPH: 132 }
    },
    {
        name: "États-Unis",
        emoji: "🇺🇸",
        ranks: { capitalPop: 65, smallArea: 194, fifa: 12, military: 1, rice: 12, distPH: 145 }
    },
    {
        name: "Éthiopie",
        emoji: "🇪🇹",
        ranks: { capitalPop: 23, smallArea: 174, fifa: 145, military: 49, rice: 130, distPH: 125 }
    },
    {
        name: "Finlande",
        emoji: "🇫🇮",
        ranks: { capitalPop: 130, smallArea: 140, fifa: 60, military: 42, rice: 190, distPH: 135 }
    },
    {
        name: "France",
        emoji: "🇫🇷",
        ranks: { capitalPop: 28, smallArea: 155, fifa: 2, military: 11, rice: 110, distPH: 140 }
    },
    {
        name: "Ghana",
        emoji: "🇬🇭",
        ranks: { capitalPop: 40, smallArea: 125, fifa: 65, military: 95, rice: 62, distPH: 165 }
    },
    {
        name: "Grèce",
        emoji: "🇬🇷",
        ranks: { capitalPop: 82, smallArea: 105, fifa: 49, military: 30, rice: 52, distPH: 132 }
    },
    {
        name: "Hongrie",
        emoji: "🇭🇺",
        ranks: { capitalPop: 70, smallArea: 112, fifa: 30, military: 55, rice: 140, distPH: 135 }
    },
    {
        name: "Inde",
        emoji: "🇮🇳",
        ranks: { capitalPop: 2, smallArea: 187, fifa: 120, military: 4, rice: 2, distPH: 40 }
    },
    {
        name: "Indonésie",
        emoji: "🇮🇩",
        ranks: { capitalPop: 2, smallArea: 186, fifa: 130, military: 13, rice: 3, distPH: 8 }
    },
    {
        name: "Iran",
        emoji: "🇮🇷",
        ranks: { capitalPop: 10, smallArea: 182, fifa: 20, military: 14, rice: 24, distPH: 95 }
    },
    {
        name: "Irlande",
        emoji: "🇮🇪",
        ranks: { capitalPop: 135, smallArea: 101, fifa: 62, military: 98, rice: 195, distPH: 148 }
    },
    {
        name: "Islande",
        emoji: "🇮🇸",
        ranks: { capitalPop: 180, smallArea: 105, fifa: 71, military: 145, rice: 195, distPH: 158 }
    },
    {
        name: "Israël",
        emoji: "🇮🇱",
        ranks: { capitalPop: 110, smallArea: 55, fifa: 75, military: 17, rice: 170, distPH: 118 }
    },
    {
        name: "Italie",
        emoji: "🇮🇹",
        ranks: { capitalPop: 44, smallArea: 125, fifa: 9, military: 10, rice: 30, distPH: 148 }
    },
    {
        name: "Jamaïque",
        emoji: "🇯🇲",
        ranks: { capitalPop: 142, smallArea: 48, fifa: 55, military: 130, rice: 180, distPH: 168 }
    },
    {
        name: "Japon",
        emoji: "🇯🇵",
        ranks: { capitalPop: 1, smallArea: 132, fifa: 15, military: 7, rice: 10, distPH: 15 }
    },
    {
        name: "Kazakhstan",
        emoji: "🇰🇿",
        ranks: { capitalPop: 105, smallArea: 192, fifa: 100, military: 48, rice: 55, distPH: 72 }
    },
    {
        name: "Kenya",
        emoji: "🇰🇪",
        ranks: { capitalPop: 33, smallArea: 152, fifa: 102, military: 81, rice: 115, distPH: 135 }
    },
    {
        name: "Koweït",
        emoji: "🇰🇼",
        ranks: { capitalPop: 38, smallArea: 58, fifa: 135, military: 72, rice: 195, distPH: 102 }
    },
    {
        name: "Liechtenstein",
        emoji: "🇱🇮",
        ranks: { capitalPop: 195, smallArea: 6, fifa: 203, military: 145, rice: 195, distPH: 142 }
    },
    {
        name: "Luxembourg",
        emoji: "��",
        ranks: { capitalPop: 188, smallArea: 25, fifa: 85, military: 140, rice: 195, distPH: 142 }
    },
    {
        name: "Malaisie",
        emoji: "🇲🇾",
        ranks: { capitalPop: 26, smallArea: 128, fifa: 132, military: 29, rice: 25, distPH: 4 }
    },
    {
        name: "Maldives",
        emoji: "🇲🇻",
        ranks: { capitalPop: 150, smallArea: 12, fifa: 161, military: 145, rice: 195, distPH: 40 }
    },
    {
        name: "Malte",
        emoji: "🇲🇹",
        ranks: { capitalPop: 190, smallArea: 10, fifa: 170, military: 140, rice: 195, distPH: 150 }
    },
    {
        name: "Maroc",
        emoji: "🇲🇦",
        ranks: { capitalPop: 115, smallArea: 120, fifa: 13, military: 61, rice: 120, distPH: 155 }
    },
    {
        name: "Mexique",
        emoji: "🇲🇽",
        ranks: { capitalPop: 6, smallArea: 184, fifa: 14, military: 31, rice: 58, distPH: 165 }
    },
    {
        name: "Monaco",
        emoji: "🇲🇨",
        ranks: { capitalPop: 194, smallArea: 2, fifa: 211, military: 145, rice: 195, distPH: 152 }
    },
    {
        name: "Myanmar",
        emoji: "🇲🇲",
        ranks: { capitalPop: 20, smallArea: 140, fifa: 162, military: 35, rice: 7, distPH: 18 }
    },
    {
        name: "Nauru",
        emoji: "🇳🇷",
        ranks: { capitalPop: 193, smallArea: 3, fifa: 211, military: 145, rice: 195, distPH: 35 }
    },
    {
        name: "Népal",
        emoji: "🇳🇵",
        ranks: { capitalPop: 85, smallArea: 105, fifa: 175, military: 110, rice: 35, distPH: 50 }
    },
    {
        name: "Nigeria",
        emoji: "��",
        ranks: { capitalPop: 18, smallArea: 165, fifa: 40, military: 36, rice: 13, distPH: 148 }
    },
    {
        name: "Norvège",
        emoji: "🇳🇴",
        ranks: { capitalPop: 120, smallArea: 138, fifa: 42, military: 38, rice: 190, distPH: 145 }
    },
    {
        name: "Nouvelle-Zélande",
        emoji: "🇳🇿",
        ranks: { capitalPop: 125, smallArea: 125, fifa: 105, military: 85, rice: 190, distPH: 45 }
    },
    {
        name: "Ouzbékistan",
        emoji: "🇺🇿",
        ranks: { capitalPop: 48, smallArea: 148, fifa: 62, military: 54, rice: 40, distPH: 65 }
    },
    {
        name: "Pakistan",
        emoji: "🇵🇰",
        ranks: { capitalPop: 21, smallArea: 162, fifa: 195, military: 9, rice: 10, distPH: 55 }
    },
    {
        name: "Palaos",
        emoji: "��",
        ranks: { capitalPop: 195, smallArea: 15, fifa: 211, military: 145, rice: 195, distPH: 3 }
    },
    {
        name: "Panama",
        emoji: "🇵🇦",
        ranks: { capitalPop: 112, smallArea: 95, fifa: 43, military: 145, rice: 82, distPH: 178 }
    },
    {
        name: "Papouasie-Nouvelle-Guinée",
        emoji: "🇵🇬",
        ranks: { capitalPop: 110, smallArea: 142, fifa: 165, military: 115, rice: 135, distPH: 7 }
    },
    {
        name: "Pays-Bas",
        emoji: "🇳🇱",
        ranks: { capitalPop: 85, smallArea: 82, fifa: 7, military: 34, rice: 125, distPH: 136 }
    },
    {
        name: "Pérou",
        emoji: "🇵🇪",
        ranks: { capitalPop: 12, smallArea: 175, fifa: 32, military: 52, rice: 20, distPH: 185 }
    },
    {
        name: "Philippines",
        emoji: "🇵🇭",
        ranks: { capitalPop: 13, smallArea: 72, fifa: 145, military: 32, rice: 8, distPH: 1 }
    },
    {
        name: "Pologne",
        emoji: "🇵🇱",
        ranks: { capitalPop: 102, smallArea: 130, fifa: 30, military: 21, rice: 160, distPH: 130 }
    },
    {
        name: "Portugal",
        emoji: "��",
        ranks: { capitalPop: 92, smallArea: 90, fifa: 8, military: 40, rice: 85, distPH: 152 }
    },
    {
        name: "Qatar",
        emoji: "🇶🇦",
        ranks: { capitalPop: 88, smallArea: 35, fifa: 37, military: 65, rice: 195, distPH: 105 }
    },
    {
        name: "Royaume-Uni",
        emoji: "🇬🇧",
        ranks: { capitalPop: 24, smallArea: 120, fifa: 4, military: 6, rice: 130, distPH: 138 }
    },
    {
        name: "Russie",
        emoji: "🇷🇺",
        ranks: { capitalPop: 11, smallArea: 195, fifa: 38, military: 2, rice: 35, distPH: 90 }
    },
    {
        name: "Saint-Marin",
        emoji: "🇸🇲",
        ranks: { capitalPop: 191, smallArea: 5, fifa: 210, military: 145, rice: 195, distPH: 150 }
    },
    {
        name: "Sénégal",
        emoji: "🇸🇳",
        ranks: { capitalPop: 62, smallArea: 110, fifa: 17, military: 75, rice: 38, distPH: 160 }
    },
    {
        name: "Singapour",
        emoji: "🇸🇬",
        ranks: { capitalPop: 45, smallArea: 20, fifa: 160, military: 29, rice: 190, distPH: 10 }
    },
    {
        name: "Sri Lanka",
        emoji: "🇱🇰",
        ranks: { capitalPop: 132, smallArea: 92, fifa: 202, military: 70, rice: 18, distPH: 45 }
    },
    {
        name: "Suède",
        emoji: "🇸🇪",
        ranks: { capitalPop: 82, smallArea: 145, fifa: 27, military: 25, rice: 180, distPH: 142 }
    },
    {
        name: "Suisse",
        emoji: "🇨🇭",
        ranks: { capitalPop: 175, smallArea: 101, fifa: 18, military: 34, rice: 180, distPH: 142 }
    },
    {
        name: "Taïwan",
        emoji: "🇹🇼",
        ranks: { capitalPop: 32, smallArea: 40, fifa: 155, military: 23, rice: 32, distPH: 2 }
    },
    {
        name: "Thaïlande",
        emoji: "🇹🇭",
        ranks: { capitalPop: 22, smallArea: 150, fifa: 101, military: 24, rice: 6, distPH: 12 }
    },
    {
        name: "Timor oriental",
        emoji: "🇹🇱",
        ranks: { capitalPop: 155, smallArea: 50, fifa: 198, military: 135, rice: 85, distPH: 4 }
    },
    {
        name: "Tunisie",
        emoji: "🇹🇳",
        ranks: { capitalPop: 125, smallArea: 118, fifa: 41, military: 75, rice: 130, distPH: 140 }
    },
    {
        name: "Turquie",
        emoji: "🇹🇷",
        ranks: { capitalPop: 30, smallArea: 178, fifa: 26, military: 8, rice: 48, distPH: 105 }
    },
    {
        name: "Tuvalu",
        emoji: "🇹🇻",
        ranks: { capitalPop: 192, smallArea: 4, fifa: 211, military: 145, rice: 195, distPH: 42 }
    },
    {
        name: "Ukraine",
        emoji: "🇺🇦",
        ranks: { capitalPop: 68, smallArea: 158, fifa: 22, military: 14, rice: 135, distPH: 125 }
    },
    {
        name: "Uruguay",
        emoji: "��",
        ranks: { capitalPop: 95, smallArea: 102, fifa: 11, military: 95, rice: 28, distPH: 189 }
    },
    {
        name: "Vatican",
        emoji: "🇻🇦",
        ranks: { capitalPop: 195, smallArea: 1, fifa: 211, military: 145, rice: 195, distPH: 155 }
    },
    {
        name: "Vietnam",
        emoji: "🇻🇳",
        ranks: { capitalPop: 35, smallArea: 135, fifa: 115, military: 19, rice: 5, distPH: 5 }
    }
];
