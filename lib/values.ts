const yearNow = new Date().getFullYear()
export const gearboxes = [
    {
        label: 'Ручна / Механіка',
        value: 'Ручна / Механіка',
    },
    {
        label: 'Автомат',
        value: 'Автомат',
    },
    {
        label: 'Типтронік',
        value: 'Типтронік',
    },
    {
        label: 'Варіатор',
        value: 'Варіатор',
    },
    {
        label: 'Робот',
        value: 'Робот',
    },
]
export const drives = [
    {
        label: 'Передній',
        value: 'Передній',
    },
    {
        label: 'Задній',
        value: 'Задній',
    },
    {
        label: 'Повний',
        value: 'Повний',
    },
]
export const technicalConditions = [
    {
        label: 'Повністю непошкоджене',
        value: 'Повністю непошкоджене',
    },
    {
        label: 'Професійно відремонтовані пошкодження',
        value: 'Професійно відремонтовані пошкодження',
    },
    {
        label: 'Не відремонтовані пошкодження',
        value: 'Не відремонтовані пошкодження',
    },
    {
        label: 'Не на ходу',
        value: 'Не на ходу',
    },
]
export const paintConditions = [
    {
        label: 'Як нове',
        value: 'Як нове',
    },
    {
        label: 'Професійно виправлені сліди використання',
        value: 'Професійно виправлені сліди використання',
    },
    {
        label: 'Невиправлені сліди використання',
        value: 'Невиправлені сліди використання',
    },
]
export const engineTypes = [
    {
        label: 'Бензиновий',
        value: 'Бензиновий',
    },
    {
        label: 'Дизельний',
        value: 'Дизельний',
    },
    {
        label: 'Газовий',
        value: 'Газовий',
    },
]
export const colors = [
    {
        label: 'Чорний',
        value: 'Чорний',
    },
    {
        label: 'Білий',
        value: 'Білий',
    },
    {
        label: 'Сірий',
        value: 'Сірий',
    },
    {
        label: 'Синій',
        value: 'Синій',
    },
    {
        label: 'Червоний',
        value: 'Червоний',
    },
    {
        label: 'Жовтий',
        value: 'Жовтий',
    },
    {
        label: 'Зелений',
        value: 'Зелений',
    },
]
export const currencies = [
    {
        label: 'грн',
        value: 'грн',
    },
    {
        label: 'дол',
        value: 'дол',
    },
]
export const cities = [
    {
        label: 'Київ',
        value: 'Київ',
    },
    {
        label: 'Одеса',
        value: 'Одеса',
    },
    {
        label: 'Львів',
        value: 'Львів',
    },
    {
        label: 'Харків',
        value: 'Харків',
    },
    {
        label: 'Дніпро',
        value: 'Дніпро',
    },
    {
        label: 'Запоріжжя',
        value: 'Запоріжжя',
    },
    {
        label: 'Вінниця',
        value: 'Вінниця',
    },
    {
        label: 'Хмельницький',
        value: 'Хмельницький',
    },
    {
        label: 'Черкаси',
        value: 'Черкаси',
    },
    {
        label: 'Чернігів',
        value: 'Чернігів',
    },
    {
        label: 'Полтава',
        value: 'Полтава',
    },
    {
        label: 'Рівне',
        value: 'Рівне',
    },
    {
        label: 'Луцьк',
        value: 'Луцьк',
    },
    {
        label: 'Івано-Франківськ',
        value: 'Івано-Франківськ',
    },
    {
        label: 'Тернопіль',
        value: 'Тернопіль',
    },
    {
        label: 'Кропивницький',
        value: 'Кропивницький',
    },
    {
        label: 'Миколаїв',
        value: 'Миколаїв',
    },
    {
        label: 'Житомир',
        value: 'Житомир',
    },
    {
        label: 'Ужгород',
        value: 'Ужгород',
    },
    {
        label: 'Чернівці',
        value: 'Чернівці',
    },
]

let years = []

for (let i = 1950; i <= yearNow; i++) {
    years.push({
        label: i.toString(),
        value: i.toString(),
    })
}
export const yearsOfIssue = years
