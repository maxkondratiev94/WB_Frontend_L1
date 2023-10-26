// Реализовать функцию конвертации строки в `JSON` со всеми необходимыми проверками и валидациями.

// ==================================================

function parseJSONSafe(jsonString) {
    try {
      // Попытка разобрать строку JSON
      const jsonObject = JSON.parse(jsonString);
  
      // Проверьте, является ли результат объектом
      if (typeof jsonObject === 'object' && jsonObject !== null) {
        return jsonObject;
      } else {
        throw new Error('The JSON string does not represent an object.');
      }
    } catch (error) {
      // Обрабатываем ошибки синтаксического анализа и возвращаем значение по умолчанию или повторно выдаем сообщение об ошибке
      console.error('JSON parsing error:', error);
      return null; // можем выбрать возврат пустого объекта {} или другого значения по умолчанию
    }
  }
  
  // Например:
  const jsonString = '{"name": "John", "age": 30}';
  const jsonObject = parseJSONSafe(jsonString);
  
  if (jsonObject !== null) {
    console.log('Parsed JSON:', jsonObject);
  } else {
    console.log('Invalid JSON string.');
  }
  