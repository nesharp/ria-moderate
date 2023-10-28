import OpenAi from 'openai'
const api = process.env.OPENAI_API_KEY
export const aiRequest = async (description: string) => {
    try {
        const text = await getTextFromTemplete(description)
        const openai = new OpenAi({
            apiKey: api,
        })
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    role: 'user',
                    content: text,
                },
            ],
            temperature: 0.2,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0,
        })
        return response.choices[0].message.content
    } catch {
        return null
    }
}
export const getTextFromTemplete = async (description: string) => {
    return `Проаналізуй текст на вказані властивості та надай відповідь у форматі json. Слідкуй наступній структурі: назва змінної у json - сенс змінної - тип даних який передається(варіанти відповіді) - значення по замовчуванню: gearbox - коробка передач - string("ручна / механіка", "автомат", "типтронік", "робот", "варіатор") - null. drive - тип приводу - string("передній", "задній", "повний") - null. isDamaged - участь у ДТП - boolean - null. isAbroad - під пригон - boolean - null. price - ціна авто - integer - null. currency - валюта - string("дол", "грн") - null. brand - марка - string - null.model - модель - string - null.year - рік випуску - integer - null.run - Пробіг - integer - null.engineType - тип двигуна - string("бензиновий", "газовий", "дизельний") - null.engineCP - об\'єм двигуна - integer - null.colour - колір українською мовою - string - null.city - назва міста українською мовою - string - null.isTradable - можливий обмін - boolean - null.Текст, з якого потрібно виділити властивості: "${description}"Слідкуй наступним правилам: Відповідь надай форматі json. Не додавай свої змінні, а чітко слідуй структурі. Значення, яке передається пиши українською мовою. Якщо про властивість у тексті не йшло мови, то передавай значення по замовчуванню.`
}
