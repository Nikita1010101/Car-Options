const options = document.querySelector('.car-list select');

const searchInput = document.querySelector('.car-list input');

const btnPrev = document.querySelector('.car-item__prev img'),
    btnNext = document.querySelector('.car-item__next img');

const currentPhoto = document.querySelector('.car-item__photo img');

const dots = document.querySelectorAll('.dot');

const carDots = document.querySelector('.car-item__dots'),
    carList = document.querySelector('.car-list__list');

let arrOptions = ['model', 'color', 'power', 'price'],
    arrSlides = [],
    slideIndex = 0,
    arrItems = [
        {
            'model': 'BMW M5',
            'color': 'Black',
            'power': 635,
            'price': 11.45,
            engineVolume: 4.4,
            weight: 1860,
            length: 4965,
            width: 1903,
            height: 1473,
            photos: {
                'photo1': 'img/bmw-1.jpg',
                'photo2': 'img/bmw-2.jpg',
                'photo3': 'img/bmw-3.jpg'
            }
        },
        {
            'model': 'Audi RS5',
            'color': 'Black',
            'power': 249,
            'price': 9.27,
            engineVolume: 2.9,
            weight: 2056,
            length: 4988,
            width: 1896,
            height: 1435,
            photos: {
                'photo1': 'img/audi-1.jpg',
                'photo2': 'img/audi-2.jpg',
                'photo3': 'img/audi-3.jpg'
            }
        },
        {
            'model': 'Mercedes-Benz CLS',
            'color': 'Black',
            'power': 450,
            'price': 7.36,
            engineVolume: 2.9,
            weight: 1795,
            length: 4783,
            width: 1866,
            height: 1383,
            photos: {
                'photo1': 'img/mercedes-benz-1.jpg',
                'photo2': 'img/mercedes-benz-2.jpg',
                'photo3': 'img/mercedes-benz-3.jpg'
            }
        },
        {
            'model': 'Porsche 911',
            'color': 'Gray',
            'power': 385,
            'price': 8.79,
            engineVolume: 3.0,
            weight: 1635,
            length: 4519,
            width: 1852,
            height: 1298,
            photos: {
                'photo1': 'img/porsche-1.jpg',
                'photo2': 'img/porsche-2.jpg',
                'photo3': 'img/porsche-3.jpg'
            }
        },
        {
            'model': 'Ferrari 488',
            'color': 'Red',
            'power': 670,
            'price': 26.68,
            engineVolume: 3.9,
            weight: 1370,
            length: 4568,
            width: 1952,
            height: 1213,
            photos: {
                'photo1': 'img/ferrari-1.jpg',
                'photo2': 'img/ferrari-2.jpg',
                'photo3': 'img/ferrari-3.jpg'
            }
        },
        {
            'model': 'Lamborghini Aventador',
            'color': 'Yellow',
            'power': 740,
            'price': 19.45,
            weight: 1575,
            engineVolume: 6.5,
            length: 4797,
            width: 2030,
            height: 1136,
            photos: {
                'photo1': 'img/lamborghini-1.jpg',
                'photo2': 'img/lamborghini-2.jpg',
                'photo3': 'img/lamborghini-3.jpg',
            }
        },
        {
            'model': 'Toyota Supra',
            'color': 'Red',
            'power': 280,
            'price': 9.2,
            weight: 1550,
            engineVolume: 3.0,
            length: 4514,
            width: 1811,
            height: 1275,
            photos: {
                'photo1': 'img/toyota-1.jpg',
                'photo2': 'img/toyota-2.jpg',
                'photo3': 'img/toyota-3.jpg',
            }
        },
        {
            'model': 'Nissan GTR',
            'color': 'White',
            'power': 570,
            'price': 12.9,
            weight: 1752,
            engineVolume: 3.8,
            length: 4710,
            width: 1895,
            height: 1370,
            photos: {
                'photo1': 'img/nissan-1.jpg',
                'photo2': 'img/nissan-2.jpg',
                'photo3': 'img/nissan-3.jpg',
            }
        },
        {
            'model': 'Dodge Challanger',
            'color': 'Gray',
            'power': 309,
            'price': 5.4,
            weight: 1724,
            engineVolume: 3.6,
            length: 5022,
            width: 1923,
            height: 1450,
            photos: {
                'photo1': 'img/dodge-1.jpg',
                'photo2': 'img/dodge-2.jpg',
                'photo3': 'img/dodge-3.jpg',
            }
        },
        {
            'model': 'Ford Mustang',
            'color': 'Gray',
            'power': 421,
            'price': 6.2,
            weight: 1765,
            engineVolume: 5.0,
            length: 4784,
            width: 1916,
            height: 1381,
            photos: {
                'photo1': 'img/ford-1.jpg',
                'photo2': 'img/ford-2.jpg',
                'photo3': 'img/ford-3.jpg',
            }
        }
    ],
    copyArr = arrItems.slice(0),
    arrResaultSearch = [];

const printItems = array => {
    carList.innerHTML = '';
    for (let i = 0; i < array.length; i++) {
        carList.innerHTML += `
            <div class="car-list__item">
                <h2>${array[i]['model']}</h2>
                <div>${array[i]['color']}, ${array[i]['power']}<span>HP</span>, ${array[i]['price']}<span> mill</span></div>
            </div>
        `;
    }
}

const prerareDots = index => {
    currentPhoto.src = arrSlides[slideIndex];
    for (let i = 0; i < Array.from(dots).length; i++) {
        dots[i].classList.remove('active');
    }
    dots[index].classList.add('active');
}

const prevSlide = () => {
    slideIndex == 0 ? slideIndex = Array.from(dots).length - 1 : slideIndex--;
    prerareDots(slideIndex);
}

const nextSlide = () => {
    slideIndex == Array.from(dots).length - 1 ? slideIndex = 0 : slideIndex++;
    prerareDots(slideIndex);
}

const prepareAll = index => {
    arrSlides.length = 0;
    for (let i = 0; i < Array.from(dots).length; i++) {
        arrSlides.push(arrItems[index].photos[`photo${i + 1}`]);
    }
    slideIndex = 0;
    currentPhoto.src = arrSlides[slideIndex];
    prerareDots(slideIndex);
    document.querySelector('.car-item h2').innerHTML = arrItems[index]['model'];
    document.querySelector('.car-item__color').innerHTML = arrItems[index]['color'];
    document.querySelector('.car-item__power').innerHTML = arrItems[index]['power'];
    document.querySelector('.car-item__price').innerHTML = arrItems[index]['price'];
    document.querySelector('.car-item__engineVolume').innerHTML = arrItems[index].engineVolume;
    document.querySelector('.car-item__weight').innerHTML = arrItems[index].weight;
    document.querySelector('.car-item__length').innerHTML = arrItems[index].length;
    document.querySelector('.car-item__width').innerHTML = arrItems[index].width;
    document.querySelector('.car-item__height').innerHTML = arrItems[index].height;
}

options.addEventListener('click', () => {
    if (options.selectedIndex != 0) {
        let newArr = arrItems.sort((a, b) => a[arrOptions[options.selectedIndex - 1]] > b[arrOptions[options.selectedIndex - 1]] ? 1 : -1);
        printItems(newArr);
    }
    else {
        printItems(copyArr);
    }
});

const searchElements = parametr => {
    console.log(parametr)
    let arr = [];
    for (let i = 0; i < arrItems.length; i++) {
        if (parametr == 1 || parametr == 2) {
            arrItems[i][arrOptions[parametr - 1]].toLowerCase().includes(searchInput.value) ? arr.push(arrItems[i]) : 0;
        }
        if (parametr == 3 || parametr == 4) {
            String(arrItems[i][arrOptions[parametr - 1]]).includes(searchInput.value) ? arr.push(arrItems[i]) : 0;
        }
    }
    return arr;
}

searchInput.addEventListener('input', () => {
    arrResaultSearch.length = 0;
    if (options.selectedIndex != 0) {
        arrResaultSearch = searchElements(options.selectedIndex);
    }
    else {
        arrResaultSearch = [...new Set([].concat([] = searchElements(1), [] = searchElements(2), [] = searchElements(3), [] = searchElements(4)))];
    }
    printItems(arrResaultSearch);
});

carList.addEventListener('click', event => {
    if (event.target.classList.contains('car-list__item') || event.target.closest('.car-list__item')) {
        let checkedItem = !event.target.classList.contains('car-list__item') ? event.target.closest('.car-list__item') : event.target;
        let items = document.querySelectorAll('.car-list__item')
        for (let i = 0; i < items.length; i++) {
            if (items[i] == checkedItem) {
                prepareAll(i);
            }
        }
    }
});

btnNext.addEventListener('click', nextSlide);

btnPrev.addEventListener('click', prevSlide);

carDots.addEventListener('click', event => {
    if (event.target.classList.contains('dot')) {
        for (let i = 0; i < dots.length; i++) {
            if (dots[i] == event.target) {
                slideIndex = i;
                prerareDots(i);
            }
        }
    }
});

printItems(arrItems);

prepareAll(0);
