// Задача на промисы: напишите функцию, которая принимает URL изображения и возвращает промис,
// который разрешается с данными об изображении, когда оно загружено.
// Когда говорится "промис разрешается с данными об изображении",
// это означает, что промис должен быть успешно выполнен (resolved)
// с данными об изображении после того,как изображение будет загружено.

// ==================================================

const loadImage = (url) => {
    // возвращаем состояние промиса
    return new Promise((resolve, reject) => {
      const image = document.createElement('img');
  
      // 2. после того как изображение из ссылки загрузится, сработает событие onload
      image.onload = () => {
        // если изображение загружено, записываем данные в состояние промиса
        resolve({
          img: image,
          width: image.width,
          height: image.height,
        })
      };
  
      // 3. если произогла ошибка, в событие oneerror в reject передаём ошибку
      image.onerror = (err) => {reject(err)};
  
      image.src = url; // 1. в атрибут записываем ссылку
    })
  };
  
  loadImage('https://storge.pic2.me/upload/984/5a303c37ca4a3.jpg')
    .then(() => console.log('image onload'))
    .catch(() => console.log('a loading error has occurred'));