//Задача № 1
function cachingDecoratorNew(func) {
  const cache = [];
  return function (...args) {
    let key = md5(args);
    let cachedData = cache.find((object) => object.hash === key);
    if (cachedData !== undefined) {
      return `Из кеша: ${cachedData.result}`;
    }
    let funcResult = func(...args);
    cache.push({ hash: key, result: funcResult });
    if (cache.length > 5) {
      cache.shift();
    }
    return `Вычисляем: ${funcResult}`;
  };
}

//Задача № 2
function debounceDecoratorNew(func, delay) {}
