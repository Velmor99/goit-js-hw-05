//Напиши класс Storage, который будет создавать объекты
//для управления складом товаров. При вызове будет получать один аргумент -
//начальный массив товаров, и записывать его в свойство items.

//Добавь методы класса:

//getItems() - возвращает массив текущих товаров
//addItem(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - получет товар и, если он есть, удаляет его из текущих
class Storage {
	constructor([ ...args ]) {
		this.items = args;
	}
}

Storage.prototype.getItems = function() {
	console.log(this.items);
};

Storage.prototype.addItem = function(string) {
	this.items.push(string);
};

Storage.prototype.removeItem = function(string) {
	for (let i = 0; i < this.items.length; i += 1) {
		if (this.items[i] === string) {
			this.items.splice(i, 1);
		}
	}
};

const storage = new Storage([ 'Нанитоиды', 'Пролонгер', 'Железные жупи', 'Антигравитатор' ]);

console.log(storage);
const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
