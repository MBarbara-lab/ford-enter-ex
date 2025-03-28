class Carousel {
    constructor (content) {
        this.img = document.getElementById("carousel-img");
        this.link = document.getElementById("carousel-link");
        this.title = document.getElementById("carousel-title");
        this.content = content;
        this.index = 0;
    }

    uploadValue() {
        this.img.src = content[this.index].imageSrc;
        this.img.alt = content[this.index].imageAlt;
        this.link = "../lançamento";
        this.title.textContent = content[this.index].title;
    }

    start(interval) {
        this.uploadValue();
        this.next();

        setInterval( () => {
            this.uploadValue()
            this.next();
        }, interval);
    }

    next() {
        if (this.index < this.content.length - 1) {
            this.index++;
            return;
        }
        this.index = 0;
    }
}

const content = [
    {
        imageSrc: "../img/imagem_1.jpg",
        imageAlt: "Visão lateral dianteira de uma Ford Ranger Black escura em ambiente urbano",
        title: "Esta é a nova Ranger Ford 2022. Verifique novidades."
    },
    {
        imageSrc: "../img/imagem_2.jpg",
        imageAlt: "Um automóvel Ford Model T histórico rodeado por uma multidão",
        title: "Ford a nossa história"
    },
    {
        imageSrc: "../img/imagem_3.jpg",
        imageAlt: "Um Ford Bronco Sport moderno, visto de lado em terreno natural perto da água e vegetação.",
        title: "Nova Ford Bronco Sport 2022"
    }
]

const carousel = new Carousel(content);
carousel.start(2000);