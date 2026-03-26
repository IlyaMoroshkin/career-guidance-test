export const questions = [
  {
    id: 1,
    title: 'Что тебе интереснее делать в свободное время?',
    answers: [
      {
        text: 'Писать код, делать сайты, приложения или ботов',
        scores: { programming: 4 },
      },
      {
        text: 'Разбираться, как устроены компьютеры, роутеры и сети',
        scores: { network: 4 },
      },
      {
        text: 'Читать про законы, права людей и общественные вопросы',
        scores: { law: 4 },
      },
      {
        text: 'Изучать технику, производство или инженерные вещи',
        scores: { machining: 2, aviation: 2, electrical: 2, additive: 2 },
      },
    ],
  },
  {
    id: 2,
    title: 'Какая школьная область тебе ближе?',
    answers: [
      {
        text: 'Информатика и математика',
        scores: { programming: 3, network: 2 },
      },
      {
        text: 'Обществознание и право',
        scores: { law: 4 },
      },
      {
        text: 'Физика и технология',
        scores: { machining: 3, aviation: 3, electrical: 3, additive: 3 },
      },
      {
        text: 'Мне важнее практика, чем теория',
        scores: { network: 2, machining: 2, additive: 2 },
      },
    ],
  },
  {
    id: 3,
    title: 'Какой результат работы тебе приятнее видеть?',
    answers: [
      {
        text: 'Готовый сайт, программу или базу данных',
        scores: { programming: 4 },
      },
      {
        text: 'Стабильно работающую сеть или сервер',
        scores: { network: 4 },
      },
      {
        text: 'Правильно оформленные документы и помощь человеку',
        scores: { law: 4 },
      },
      {
        text: 'Готовую деталь, механизм или 3D-модель',
        scores: { machining: 2, aviation: 2, additive: 4 },
      },
    ],
  },
  {
    id: 4,
    title: 'Насколько тебе комфортно работать по правилам и инструкциям?',
    answers: [
      {
        text: 'Очень комфортно, люблю порядок',
        scores: { law: 2, aviation: 3, electrical: 3, network: 2 },
      },
      {
        text: 'Нормально, если цель понятна',
        scores: { machining: 2, additive: 2, programming: 1 },
      },
      {
        text: 'Предпочитаю больше свободы и творчества',
        scores: { programming: 3, additive: 2 },
      },
      {
        text: 'Главное — чтобы задача была интересной',
        scores: { programming: 2, network: 2, machining: 2 },
      },
    ],
  },
  {
    id: 5,
    title: 'Какой тип задач тебе ближе?',
    answers: [
      {
        text: 'Алгоритмы, логика и построение решений',
        scores: { programming: 4, network: 2 },
      },
      {
        text: 'Поиск неисправностей и устранение сбоев',
        scores: { network: 4, electrical: 2, additive: 1 },
      },
      {
        text: 'Работа с документами, нормами и правилами',
        scores: { law: 4 },
      },
      {
        text: 'Настройка оборудования и производственных процессов',
        scores: { machining: 3, aviation: 3, electrical: 3, additive: 3 },
      },
    ],
  },
  {
    id: 6,
    title: 'Что из этого звучит наиболее интересно?',
    answers: [
      {
        text: 'Создавать цифровые сервисы для людей',
        scores: { programming: 4 },
      },
      {
        text: 'Поддерживать и защищать IT-инфраструктуру',
        scores: { network: 4 },
      },
      {
        text: 'Помогать людям в юридических и социальных вопросах',
        scores: { law: 4 },
      },
      {
        text: 'Современное производство и инженерные технологии',
        scores: { machining: 2, aviation: 2, electrical: 2, additive: 2 },
      },
    ],
  },
  {
    id: 7,
    title: 'Как ты относишься к 3D-моделям и цифровым макетам?',
    answers: [
      {
        text: 'Очень интересно, люблю моделировать',
        scores: { additive: 4, programming: 1 },
      },
      {
        text: 'Интересно, если это связано с производством',
        scores: { machining: 2, aviation: 1, additive: 3 },
      },
      {
        text: 'Мне ближе сети, системы и оборудование',
        scores: { network: 3, electrical: 2 },
      },
      {
        text: 'Мне это не очень близко',
        scores: { law: 1 },
      },
    ],
  },
  {
    id: 8,
    title: 'Где ты скорее представляешь себя через несколько лет?',
    answers: [
      {
        text: 'В IT-команде разработки',
        scores: { programming: 4 },
      },
      {
        text: 'В службе поддержки инфраструктуры или администрирования',
        scores: { network: 4 },
      },
      {
        text: 'В государственной или социальной организации',
        scores: { law: 4 },
      },
      {
        text: 'На современном производстве или техническом предприятии',
        scores: { machining: 2, aviation: 3, electrical: 3, additive: 3 },
      },
    ],
  },
  {
    id: 9,
    title: 'Что тебе ближе по стилю работы?',
    answers: [
      {
        text: 'Проектировать, думать и писать решения',
        scores: { programming: 4 },
      },
      {
        text: 'Быстро реагировать на сбои и приводить всё в порядок',
        scores: { network: 4, electrical: 2 },
      },
      {
        text: 'Общаться, объяснять и помогать людям',
        scores: { law: 4 },
      },
      {
        text: 'Работать с техникой и реальными объектами',
        scores: { machining: 3, aviation: 3, additive: 2, electrical: 2 },
      },
    ],
  },
  {
    id: 10,
    title: 'Какая ответственность тебя не пугает?',
    answers: [
      {
        text: 'За код и цифровой продукт',
        scores: { programming: 3 },
      },
      {
        text: 'За работоспособность сети и систем',
        scores: { network: 4 },
      },
      {
        text: 'За корректность правовых решений и документов',
        scores: { law: 4 },
      },
      {
        text: 'За оборудование, безопасность и точность операций',
        scores: { aviation: 3, electrical: 3, machining: 2, additive: 2 },
      },
    ],
  },
  {
    id: 11,
    title: 'Какая среда тебе интереснее?',
    answers: [
      {
        text: 'Компьютер, код, цифровые интерфейсы',
        scores: { programming: 4 },
      },
      {
        text: 'Серверные, сети, оборудование, настройки',
        scores: { network: 4 },
      },
      {
        text: 'Кабинеты, учреждения, документы, консультации',
        scores: { law: 4 },
      },
      {
        text: 'Цех, лаборатория, производство, инженерная площадка',
        scores: { machining: 2, aviation: 3, electrical: 3, additive: 3 },
      },
    ],
  },
  {
    id: 12,
    title: 'Что ты выберешь скорее всего?',
    answers: [
      {
        text: 'Разработать удобный цифровой сервис',
        scores: { programming: 4 },
      },
      {
        text: 'Настроить сеть и устранить сбой',
        scores: { network: 4 },
      },
      {
        text: 'Подготовить юридически грамотное решение',
        scores: { law: 4 },
      },
      {
        text: 'Настроить станок, оборудование или техпроцесс',
        scores: { machining: 3, electrical: 2, additive: 2, aviation: 2 },
      },
    ],
  },
  {
    id: 13,
    title: 'Какая техника вызывает наибольший интерес?',
    answers: [
      {
        text: 'Компьютеры и программы',
        scores: { programming: 3, network: 2 },
      },
      {
        text: 'Маршрутизаторы, серверы и сетевое оборудование',
        scores: { network: 4 },
      },
      {
        text: 'Авиационные двигатели и сложные механизмы',
        scores: { aviation: 4 },
      },
      {
        text: 'Электросети, автоматика, релейная защита',
        scores: { electrical: 4 },
      },
    ],
  },
  {
    id: 14,
    title: 'Насколько тебя привлекает промышленное производство?',
    answers: [
      {
        text: 'Очень привлекает',
        scores: { machining: 4, aviation: 3, additive: 3, electrical: 2 },
      },
      {
        text: 'Интересно, если там есть цифровые технологии',
        scores: { additive: 4, programming: 1, machining: 2 },
      },
      {
        text: 'Скорее нет, мне ближе чистое IT',
        scores: { programming: 3, network: 2 },
      },
      {
        text: 'Скорее нет, мне ближе работа с людьми и документами',
        scores: { law: 3 },
      },
    ],
  },
  {
    id: 15,
    title: 'Что тебе важнее в будущей профессии?',
    answers: [
      {
        text: 'Создавать новое и развиваться в технологиях',
        scores: { programming: 3, additive: 2 },
      },
      {
        text: 'Быть специалистом, который обеспечивает стабильную работу систем',
        scores: { network: 3, electrical: 2 },
      },
      {
        text: 'Помогать людям и разбираться в важных вопросах',
        scores: { law: 4 },
      },
      {
        text: 'Работать с реальными механизмами, производством и техникой',
        scores: { machining: 3, aviation: 3, electrical: 3, additive: 2 },
      },
    ],
  },
]