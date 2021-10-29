function ipsBetween(start, end) {
  return val(end) - val(start);
}

function val(ip) {
  return ip.split(".").reduce((acc, cur, i) => {
    return acc + cur * 256 ** (3 - i);
  }, 0); // сплитуем строку в массив, где пробегаем по каждому значению в массиве редьюсом и возвращаем сумму в виде обычного числа
}

ipsBetween("10.0.0.0", "10.0.0.50");
ipsBetween("10.0.0.0", "10.0.1.0");
ipsBetween("20.0.0.10", "20.0.1.0");
