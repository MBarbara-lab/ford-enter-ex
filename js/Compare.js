class Car {
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaLivreSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, img) {
        this.modelo = modelo;
        this.alturaC = alturaCacamba;
        this.alturaV = alturaVeiculo;
        this.alturaLS = alturaLivreSolo;
        this.capacidadeC = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeC = volumeCacamba;
        this.roda = roda;
        this.preco = preco;
        this.img = img;
    }
}

let cars = [];

function SetCarToCompare(input, car) {
    let carIndex = GetCarArrPosition(car);

    if (input.checked == false) {
        cars.splice(carIndex, 1);
        return;
    }

    if (cars.length > 1) {
        input.checked = false;
        alert("Não é possível selecionar mais de dois carros!");
        return;
    }

    cars.push(car);
}

function GetCarArrPosition(car) {
    for (let i = 0; i > cars.length; i++) {
        if (car.modelo = cars[i].modelo) {
            return i;
        }
    }
    return -1;
}

function UpdateData(idName, attribute) {
    for (let i = 0; i < 2; i++) {
        let variavel = document.getElementById(`compare_${idName}_${i}`);
        variavel.textContent = cars[i][attribute];
    }
}

function UpdateCompareTable() {
    const img0 = document.getElementById("compare_image_0");
    const img1 = document.getElementById("compare_image_1");
    img0.src = cars[0].img;
    img1.src = cars[1].img;

    UpdateData("modelo", "modelo");
    UpdateData("alturacacamba", "alturaC");
    UpdateData("alturaveiculo", "alturaV");
    UpdateData("alturasolo", "alturaLS");
    UpdateData("capacidadecarga", "capacidadeC");
    UpdateData("motor", "motor");
    UpdateData("potencia", "potencia");
    UpdateData("volumecacamba", "volumeC");
    UpdateData("roda", "roda");
    UpdateData("preco", "preco");
}

const dialog = document.getElementById("compare");

function ShowCompare() {
    if (cars.length !== 2) {
        alert("É preciso marcar pelo menos dois carros");
        return;
    } 

    UpdateCompareTable();
    dialog.showModal();
}

function HideCompare() {
    dialog.close();
}
