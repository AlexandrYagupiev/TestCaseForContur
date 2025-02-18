1. Написать рекурсивную функцию getFact(n), вызов которой вернет факториал числа n.

function getFact(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * getFact(n - 1);
    }
}

2. Написать функцию capitalize(str), которая вернет входящую строку с большой буквы.

function capitalize(str) {
    if (typeof str !== 'string' || str.length === 0) {
        return '';
    }   
    const firstChar = str.charAt(0).toUpperCase();
    const restOfStr = str.slice(1);   
    return firstChar + restOfStr;
}

3. Написать функцию getNFunctions(n), вызов которой вернет массив (result) из n функций, каждая их которых в свою очередь возвращает число от 1 до n соответственно. Эту задачу решить в двух разных редакциях скрипта до ES2015 (без использования let и const) и начиная с ES2015, пояснить разницу.
 
Решение до ES2015

function getNFunctions(n) {
    var result = [];
    for (var i = 1; i <= n; i++) {
        result.push((function(i) {
            return function() {
                return i;
            };
        })(i));
    }
    return result;
}

Решение начиная с ES2015

function getNFunctions(n) {
    const result = [];
    for (let i = 1; i <= n; i++) {
        result.push(() => i);
    }
    return result;
}

Основное различие между этими двумя версиями связано с областью видимости переменных:
1.Решение до ES2015 использует IIFE для создания нового контекста выполнения и передачи текущего значения переменной внутрь функции. Это требует дополнительных шагов и усложняет код.
2.Решение начиная с ES2015 гораздо проще и понятнее благодаря использованию let, которое автоматически решает проблему с замыканием переменных в циклах.
Использование современных возможностей ES6 делает код короче, чище и легче читаемым.

4. Написать функцию getTotalPrice(), которая вернет сумму всех переданных в нее цен в рублях-копейках.

Вариант 1: Использование оператора распространения

function getTotalPrice(...prices) {
    let totalRubles = 0;
    let totalKopecks = 0;
    prices.forEach(price => {
        const [rubles, kopecks] = price.split('.');
        totalRubles += parseInt(rubles, 10);
        totalKopecks += parseInt(kopecks, 10);
    });
    totalRubles += Math.floor(totalKopecks / 100);
    totalKopecks %= 100;
    return `${totalRubles}.${String(totalKopecks).padStart(2, '0')}`;
}

Вариант 2: Без использования оператора распространения

function getTotalPrice(prices) {
    let totalRubles = 0;
    let totalKopecks = 0;
    prices.forEach(price => {
        const [rubles, kopecks] = price.split('.');
        totalRubles += parseInt(rubles, 10);
        totalKopecks += parseInt(kopecks, 10);
    });
    totalRubles += Math.floor(totalKopecks / 100);
    totalKopecks %= 100;
    return `${totalRubles}.${String(totalKopecks).padStart(2, '0')}`;
}
