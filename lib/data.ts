export type Wine = {
  id: number;
  name: string;
  slug: string;
  imageUrl: string;
  description: string;
  pairing: string;
  temperature: string;
};

export const redWines: Wine[] = [
  {
    id: 1,
    name: "Barbera d'Asti DOCG",
    slug: 'barbera-d-asti-docg',
    imageUrl: 'https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=600&q=80',
    description: "Dal colore rosso rubino con riflessi granati, sprigiona sentori floreali e di frutta rossa matura. Al palato è avvolgente, di corpo e piacevolmente tannico, con un finale lungo e persistente.",
    pairing: "Perfetta con i primi piatti al ragù di carne, agnolotti piemontesi, salumi caldi (come il cotechino) e formaggi di media stagionatura.",
    temperature: "16–18°C",
  },
  {
    id: 2,
    name: 'Barbera del Monferrato DOC',
    slug: 'barbera-del-monferrato-doc',
    imageUrl: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?auto=format&fit=crop&w=600&q=80',
    description: "Si presenta di colore rosso rubino con riflessi violacei. Profumo intenso con note di frutti rossi maturi. Secco, di medio corpo e armonioso.",
    pairing: "Ottima con carni rosse alla griglia, bollito misto e piatti di resistenza della cucina contadina.",
    temperature: "16–18°C",
  },
  {
    id: 3,
    name: 'Piemonte Bonarda DOC',
    slug: 'piemonte-bonarda-doc',
    imageUrl: 'https://images.unsplash.com/photo-1594986138018-cb0b6c2609d2?q=80&w=687&auto=format&fit=crop',
    description: "Seduce l'occhio con il suo colore rosso rubino intenso, all'olfatto richiama sentori speziati e fruttati. Morbida, secca e poco tannica.",
    pairing: "Si sposa benissimo con risotti saporiti, carni bianche in umido e formaggi erborinati non troppo piccanti.",
    temperature: "14–16°C",
  },
  {
    id: 4,
    name: 'Monferrato Dolcetto DOC',
    slug: 'monferrato-dolcetto-doc',
    imageUrl: 'https://images.unsplash.com/photo-1714377769989-140c9e47fbb9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    description: "Colore rosso rubino con sfumature sul viola. Profumo intenso caratterizzato da note di frutti rossi e spezie. Asciutto e piacevolmente fresco.",
    pairing: "Il classico vino da tutto pasto; eccellente con antipasti di terra, frittate alle erbe e piatti a base di funghi.",
    temperature: "15–17°C",
  },
  {
    id: 5,
    name: "Grignolino d'Asti DOC",
    slug: 'grignolino-d-asti-doc',
    imageUrl: 'https://images.unsplash.com/photo-1606767351797-1664b860ae5a?q=80&w=687&auto=format&fit=crop',
    description: "Rosso rubino tenue, gusto raffinato e asciutto dovuto ai tannini tipici. Stimola l'olfatto con note di pepe bianco e spezie.",
    pairing: "Sorprendente con primi piatti semplici, piatti di carni bianche a base di pesce.",
    temperature: "14–16°C",
  },
  {
    id: 6,
    name: 'Monferrato Rosso',
    slug: 'monferrato-rosso',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    description: "Rosso intenso e brillante, vino rotondo grazie ai tannini gentili. Profumo di frutta matura e spezie dolci.",
    pairing: "Ideale con selvaggina, brasati, arrosti e formaggi stagionati come il Castelmagno.",
    temperature: "16–18°C",
  },
  {
    id: 7,
    name: 'Vino Rosato',
    slug: 'vino-rosato',
    imageUrl: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=687&auto=format&fit=crop',
    description: "Colore rosa di bella intensità, profumo delicato con sentori di rosa. Corposo, sapido e fresco.",
    pairing: "Perfetto come aperitivo, con pizze gourmet, torte salate o zuppe di pesce leggere.",
    temperature: "10–12°C",
  },
];

export const whiteWines: Wine[] = [
  {
    id: 1,
    name: 'Vino Chardonnay',
    slug: 'vino-chardonnay',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1719997500757-c536c7cf8f48?q=80&w=736&auto=format&fit=crop',
    description: "Giallo paglierino, sapore fresco, morbido e persistente. Profumi di frutti tropicali e a polpa bianca.",
    pairing: "Ottimo con antipasti magri, piatti a base di verdure, pesce bianco al forno o carni bianche delicate.",
    temperature: "8–10°C",
  },
  {
    id: 2,
    name: 'Piemonte Chardonnay DOC',
    slug: 'piemonte-chardonnay-doc',
    imageUrl: 'https://images.unsplash.com/photo-1606767208159-1a5fb0a87841?q=80&w=687&auto=format&fit=crop',
    description: "Giallo dorato, al palato armonico e avvolgente con sentori di frutti tropicali.",
    pairing: "Accompagna magistralmente primi piatti ai frutti di mare, crostacei e formaggi freschi.",
    temperature: "12–14°C",
  },
];

export const aboutText = {
  chiSiamo: {
    title: "Le Nostre Radici",
    content: "Tutto ha inizio nel 1968 tra le vigne del Bricco Montarello, un balcone naturale incorniciato dalle Alpi. Oggi, l'esperienza del passato si fonde con una visione moderna: trasformiamo il frutto del nostro lavoro in vini autentici, pensati per chi, come noi, ama la qualità e la pura tradizione astigiana.",
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1974&auto=format&fit=crop"
  },
  cantina: {
    title: "La Cantina",
    content: "Un santuario dedicato al tempo e all'eccellenza. Nelle nostre cantine, il processo di affinamento avviene in un silenzio reverenziale, permettendo a ogni bottiglia di sviluppare la complessità e l'eleganza che contraddistinguono i vini Montarello.",
    image: "https://images.unsplash.com/photo-1574880572852-598d9cda55d6?q=80&w=2000&auto=format&fit=crop"
  }
};

export const winesData = [
  {
    id: 'barbera-d-asti',
    name: "Barbera d'Asti DOCG",
    type: "Vino Rosso",
    description: "Il classico rosso piemontese, dal colore rosso rubino intenso e dal profumo vinoso e fruttato.",
    image: "https://images.unsplash.com/photo-1584916201218-f4242ceb4809?q=80&w=1915&auto=format&fit=crop"
  },
  {
    id: 'grignolino-d-asti',
    name: "Grignolino d'Asti DOC",
    type: "Vino Rosso",
    description: "Tannini delicati e un colore rosso chiaro impreziosito da un bouquet fresco e speziato.",
    image: "https://images.unsplash.com/photo-1569919659476-f308de2d9b68?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: 'monferrato-dolcetto',
    name: "Monferrato Dolcetto DOC",
    type: "Vino Rosso",
    description: "Vino da tutto pasto, asciutto e piacevolmente secco, di pronta beva.",
    image: "https://images.unsplash.com/photo-1585553616435-2dc0a54e271d?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 'freisa-d-asti',
    name: "Freisa d'Asti DOC",
    type: "Vino Rosso",
    description: "Sentori di lampone e frutti di bosco, per un vino vivace e dalla personalità inconfondibile.",
    image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 'piemonte-chardonnay',
    name: "Piemonte Chardonnay DOC",
    type: "Vino Bianco",
    description: "Un bianco elegante, delicato al palato e ricco di sentori floreali e di frutta a polpa bianca.",
    image: "https://images.unsplash.com/photo-1606859580459-00f7457223b0?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: 'moscato-d-asti',
    name: "Moscato d'Asti DOCG",
    type: "Vino Dolce",
    description: "Dolce e intensamente aromatico, il compagno perfetto per chiudere ogni pasto in bellezza.",
    image: "https://images.unsplash.com/photo-1616149453763-825e1df1fb4e?q=80&w=1974&auto=format&fit=crop"
  }
];
