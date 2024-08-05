// const http = require('http');

// let countArr = [0, 0, 0];

// const server = http.createServer((req, res) => { // функция обработчик
//     console.log('Запрос получен');

//     if (req.url === '/') {
//         counArr[0]++;
//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=UTF-8',
//         });
//         res.end(`<h1> Добро пожаловать на мой сайт!</h1>
//                 < a href = "http://localhost:${port}/about" > Перейти на About</ >
//                 <h2>Количество посещений - ${countArr[0]}</h2>`);
//     } else if (req.url === '/about') {
//         counArr[1]++;
//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=UTF-8',
//         });
//         res.end(`<h1>About</h1>
//                 <a href="http://localhost:${port}">Перейти на главную страницу</a>
// 				<h2>Количество посещений - ${countArr[1]}</h2>`);
//     } else {
//         counArr[2]++;
//         res.writeHead(404, {
//             'Content-Type': 'text/html; charset=UTF-8',
//         });
//         res.end(`<h1>Страница не найдена!</h1>
//                 <h2>Количество посещений - ${countArr[1]}</h2>`);
//     }
// })

// const port = 3000;

// server.listen(port, () => {
//     console.log(`Сервер запущен на порту ${port}`);
// })



const http = require('http');
let countArr = [0, 0, 0];
const server = http.createServer((req, res) => {
    console.log('Запрос получен');

    if (req.url === '/') {
        countArr[0]++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        })
        res.end(`<h1> Добро пожаловать на мой сайт!</h1>
				<a href="http://localhost:${port}/about">Перейти на About</a>
				<h2>Количество посещений - ${countArr[0]}</h2>
			`)
    } else if (req.url === '/about') {
        countArr[1]++;
        res.writeHead(200, {
            'Content-Type': 'text/html; charset=UTF-8',
        })
        res.end(`<h1>About</h1>
				<a href="http://localhost:${port}">Перейти на главную страницу</a>
				<h2>Количество посещений - ${countArr[1]}</h2>
			`)
    } else {
        countArr[2]++;
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=UTF-8',
        })
        res.end(`<h1>Страница не найдена!</h1>
                <a href="http://localhost:${port}">Вернуться на главную страницу</a>
				<h2>Количество посещений - ${countArr[2]}</h2>
			`)
    }
})

const port = 3000;

server.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
})