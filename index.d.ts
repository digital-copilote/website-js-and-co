interface IKeyWords {
    textShadow: string;
    animation: string;
    animation2: string;
    animation3: string;
}

interface IButton {
    children: string | undefined | null;
    link: string;
}

interface allContent {
    notreActu: allContent_actu;
}

interface allContent_actu {
    id: string;
    title_1: string;
    title_2: string;
    text: string;
    events: IEvent[];
}

interface IActu {
    id: string;
    title_1: string;
    title_2: string;
    text: string;
}

interface IEvent {
    id: string;
    name: string;
    place: string;
    adresse: string;
    date: string;
    description: string;
    image: IImgEvent;
    hour: string;
    link_register: string;
}

interface IImgEvent {
    url: string;
}
