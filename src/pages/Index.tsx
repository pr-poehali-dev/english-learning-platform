import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [selectedGrammarTopic, setSelectedGrammarTopic] = useState('present-simple');
  
  const vocabularyCards = [
    { word: "Abundant", translation: "Обильный", example: "The region has abundant natural resources.", level: "Advanced" },
    { word: "Accomplish", translation: "Достигать", example: "She accomplished her goals this year.", level: "Intermediate" },
    { word: "Acquire", translation: "Приобретать", example: "Students acquire knowledge through practice.", level: "Intermediate" },
    { word: "Adequate", translation: "Достаточный", example: "We need adequate preparation for the exam.", level: "Intermediate" },
    { word: "Approach", translation: "Подход", example: "This approach to learning is very effective.", level: "Beginner" }
  ];

  const grammarTopics = {
    'present-simple': {
      title: 'Present Simple',
      description: 'Настоящее простое время',
      rules: [
        'Используется для регулярных действий и фактов',
        'Утвердительная форма: I/You/We/They + V1, He/She/It + V1+s',
        'Отрицательная форма: do not/does not + V1',
        'Вопросительная форма: Do/Does + subject + V1?'
      ],
      examples: [
        'I work every day. (Я работаю каждый день)',
        'She speaks English fluently. (Она свободно говорит по-английски)',
        'We don\'t like coffee. (Мы не любим кофе)',
        'Do you play tennis? (Ты играешь в теннис?)'
      ]
    },
    'past-simple': {
      title: 'Past Simple',
      description: 'Прошедшее простое время',
      rules: [
        'Используется для действий в прошлом',
        'Правильные глаголы: V + ed',
        'Неправильные глаголы: 2-я форма',
        'Отрицание: did not + V1'
      ],
      examples: [
        'I visited London last year. (Я посетил Лондон в прошлом году)',
        'She didn\'t come to the party. (Она не пришла на вечеринку)',
        'Did you see the movie? (Ты смотрел фильм?)'
      ]
    },
    'future-simple': {
      title: 'Future Simple',
      description: 'Будущее простое время',
      rules: [
        'Используется для будущих действий и планов',
        'Форма: will + V1',
        'Отрицание: will not (won\'t) + V1',
        'Вопрос: Will + subject + V1?'
      ],
      examples: [
        'I will travel tomorrow. (Я буду путешествовать завтра)',
        'She won\'t be late. (Она не опоздает)',
        'Will you help me? (Ты мне поможешь?)'
      ]
    }
  };

  const examPreparation = {
    oge: [
      { task: 'Аудирование (1-4)', description: 'Понимание основного содержания, запрашиваемой информации', tips: 'Читайте задания заранее, подчеркивайте ключевые слова' },
      { task: 'Чтение (5-12)', description: 'Понимание текста, поиск информации', tips: 'Ищите синонимы, обращайте внимание на контекст' },
      { task: 'Грамматика (13-20)', description: 'Времена, словообразование, лексика', tips: 'Изучайте неправильные глаголы, префиксы и суффиксы' },
      { task: 'Письмо (33)', description: 'Личное письмо другу', tips: 'Следуйте структуре: обращение, благодарность, ответы на вопросы, вопросы, завершение' }
    ],
    ege: [
      { task: 'Аудирование (1-9)', description: 'Понимание основного содержания, детальное понимание', tips: 'Концентрируйтесь на ключевых словах, не паникуйте при незнакомых словах' },
      { task: 'Чтение (10-18)', description: 'Понимание структурно-смысловых связей', tips: 'Анализируйте логические связи между частями текста' },
      { task: 'Грамматика и лексика (19-38)', description: 'Грамматические формы, словообразование, лексико-грамматические навыки', tips: 'Практикуйте трансформации, изучайте сочетаемость слов' },
      { task: 'Письмо (39-40)', description: 'Личное письмо и развернутое письменное высказывание', tips: 'Следите за объемом, структурой и связностью текста' }
    ]
  };

  const internationalExams = [
    { 
      name: 'IELTS', 
      description: 'International English Language Testing System',
      sections: ['Listening (30 min)', 'Reading (60 min)', 'Writing (60 min)', 'Speaking (11-14 min)'],
      score: 'Баллы: 1-9',
      target: 'Обучение и работа в англоговорящих странах'
    },
    { 
      name: 'TOEFL', 
      description: 'Test of English as a Foreign Language',
      sections: ['Reading (54-72 min)', 'Listening (41-57 min)', 'Speaking (17 min)', 'Writing (50 min)'],
      score: 'Баллы: 0-120',
      target: 'Поступление в американские университеты'
    },
    { 
      name: 'Cambridge', 
      description: 'FCE, CAE, CPE',
      sections: ['Reading & Use of English', 'Writing', 'Listening', 'Speaking'],
      score: 'Levels: B2, C1, C2',
      target: 'Международная сертификация'
    }
  ];

  const pronunciationExercises = [
    {
      phoneme: '/θ/',
      description: 'Звук "th" как в think',
      words: ['think', 'thank', 'three', 'thumb', 'mouth'],
      tip: 'Кончик языка между зубами, выдох'
    },
    {
      phoneme: '/ð/',
      description: 'Звук "th" как в this',
      words: ['this', 'that', 'they', 'mother', 'weather'],
      tip: 'Кончик языка между зубами, голосовые связки работают'
    },
    {
      phoneme: '/w/',
      description: 'Звук "w"',
      words: ['water', 'work', 'window', 'world', 'woman'],
      tip: 'Округлите губы, как для "у", затем быстро переходите к следующему звуку'
    },
    {
      phoneme: '/r/',
      description: 'Английский звук "r"',
      words: ['red', 'right', 'car', 'park', 'start'],
      tip: 'Кончик языка поднят, не касается неба'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                🇬🇧
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">English Mastery Hub</h1>
                <p className="text-sm text-muted-foreground">Твой путь к совершенному английскому</p>
              </div>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="User" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-blue-100 text-blue-800">
            🚀 Комплексная платформа изучения английского языка
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Изучай английский<br />
            <span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              системно и эффективно
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Грамматика, лексика, произношение и подготовка к экзаменам ОГЭ, ЕГЭ, IELTS, TOEFL. 
            Все в одном месте с интерактивными упражнениями и персонализированным подходом.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Начать изучение
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Посмотреть демо
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Уроков грамматики</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-green-600 mb-2">5000+</div>
              <div className="text-sm text-muted-foreground">Слов в словаре</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Упражнений произношения</div>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-lg p-6 border">
              <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Подготовка к экзаменам</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content - Tabs */}
      <main className="container mx-auto px-4 py-16">
        <Tabs defaultValue="grammar" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 h-auto">
            <TabsTrigger value="grammar" className="flex flex-col gap-1 p-4">
              <Icon name="BookMarked" size={20} />
              <span>Грамматика</span>
            </TabsTrigger>
            <TabsTrigger value="vocabulary" className="flex flex-col gap-1 p-4">
              <Icon name="Library" size={20} />
              <span>Лексика</span>
            </TabsTrigger>
            <TabsTrigger value="exams" className="flex flex-col gap-1 p-4">
              <Icon name="GraduationCap" size={20} />
              <span>Экзамены</span>
            </TabsTrigger>
            <TabsTrigger value="international" className="flex flex-col gap-1 p-4">
              <Icon name="Globe" size={20} />
              <span>Зарубежные вузы</span>
            </TabsTrigger>
            <TabsTrigger value="pronunciation" className="flex flex-col gap-1 p-4">
              <Icon name="Mic" size={20} />
              <span>Произношение</span>
            </TabsTrigger>
          </TabsList>

          {/* Grammar Tab */}
          <TabsContent value="grammar" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Изучение грамматики</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Систематическое изучение английской грамматики с интерактивными упражнениями и примерами
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {Object.entries(grammarTopics).map(([key, topic]) => (
                <Card 
                  key={key} 
                  className={`cursor-pointer transition-all hover:shadow-lg ${selectedGrammarTopic === key ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setSelectedGrammarTopic(key)}
                >
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Clock" size={20} className="mr-2 text-primary" />
                      {topic.title}
                    </CardTitle>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">Основы</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Grammar Details */}
            <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">
                  {grammarTopics[selectedGrammarTopic].title}
                </CardTitle>
                <CardDescription className="text-lg">
                  {grammarTopics[selectedGrammarTopic].description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="List" size={18} className="mr-2" />
                    Правила:
                  </h4>
                  <ul className="space-y-2">
                    {grammarTopics[selectedGrammarTopic].rules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 flex items-center">
                    <Icon name="MessageSquare" size={18} className="mr-2" />
                    Примеры:
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    {grammarTopics[selectedGrammarTopic].examples.map((example, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border">
                        <p className="text-sm">{example}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Icon name="Play" size={16} className="mr-2" />
                    Пройти упражнения
                  </Button>
                  <Button variant="outline">
                    <Icon name="FileText" size={16} className="mr-2" />
                    Скачать конспект
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Vocabulary Tab */}
          <TabsContent value="vocabulary" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Изучение лексики</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Расширяй словарный запас с помощью интерактивных карточек и систематических упражнений
              </p>
            </div>

            {/* Vocabulary Stats */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-green-600">1,247</CardTitle>
                  <CardDescription>Изученных слов</CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={68} className="w-full" />
                  <p className="text-sm text-muted-foreground mt-2 text-center">68% до следующего уровня</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-blue-600">Advanced</CardTitle>
                  <CardDescription>Текущий уровень</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800">B2 уровень</Badge>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-purple-600">15</CardTitle>
                  <CardDescription>Слов сегодня</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Badge variant="secondary" className="bg-purple-100 text-purple-800">Цель: 20 слов</Badge>
                </CardContent>
              </Card>
            </div>

            {/* Word Card */}
            <Card className="max-w-2xl mx-auto bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Карточка слова</CardTitle>
                <CardDescription>
                  {currentWordIndex + 1} из {vocabularyCards.length}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {vocabularyCards[currentWordIndex].word}
                  </div>
                  <div className="text-xl text-muted-foreground mb-4">
                    {vocabularyCards[currentWordIndex].translation}
                  </div>
                  <Badge variant="outline" className="mb-4">
                    {vocabularyCards[currentWordIndex].level}
                  </Badge>
                </div>
                
                <div className="bg-white p-4 rounded-lg border">
                  <h4 className="font-semibold mb-2">Пример использования:</h4>
                  <p className="italic">{vocabularyCards[currentWordIndex].example}</p>
                </div>

                <div className="flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => setCurrentWordIndex(Math.max(0, currentWordIndex - 1))}
                    disabled={currentWordIndex === 0}
                  >
                    <Icon name="ChevronLeft" size={16} className="mr-1" />
                    Предыдущее
                  </Button>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Icon name="X" size={16} className="mr-1" />
                      Не знаю
                    </Button>
                    <Button size="sm" className="bg-green-600 hover:bg-green-700">
                      <Icon name="Check" size={16} className="mr-1" />
                      Знаю
                    </Button>
                  </div>
                  
                  <Button 
                    variant="outline"
                    onClick={() => setCurrentWordIndex(Math.min(vocabularyCards.length - 1, currentWordIndex + 1))}
                    disabled={currentWordIndex === vocabularyCards.length - 1}
                  >
                    Следующее
                    <Icon name="ChevronRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vocabulary Categories */}
            <div className="grid md:grid-cols-4 gap-4">
              {['Business', 'Travel', 'Academic', 'Daily Life'].map((category) => (
                <Card key={category} className="cursor-pointer hover:shadow-lg transition-all">
                  <CardHeader className="text-center">
                    <CardTitle className="text-lg">{category}</CardTitle>
                    <CardDescription>250+ слов</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <Button variant="outline" size="sm">Изучать</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Exams Tab */}
          <TabsContent value="exams" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Подготовка к экзаменам</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Комплексная подготовка к ОГЭ и ЕГЭ по английскому языку с разбором всех заданий
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* ОГЭ */}
              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Icon name="FileText" size={24} className="mr-2" />
                    ОГЭ по английскому языку
                  </CardTitle>
                  <CardDescription>
                    Основной государственный экзамен для 9 класса
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {examPreparation.oge.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-orange-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{item.task}</h4>
                        <Badge variant="secondary">20 мин</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-sm bg-orange-100 p-2 rounded text-orange-800">
                        💡 {item.tips}
                      </p>
                    </div>
                  ))}
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Начать подготовку к ОГЭ
                  </Button>
                </CardContent>
              </Card>

              {/* ЕГЭ */}
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <Icon name="Award" size={24} className="mr-2" />
                    ЕГЭ по английскому языку
                  </CardTitle>
                  <CardDescription>
                    Единый государственный экзамен для 11 класса
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {examPreparation.ege.map((item, index) => (
                    <div key={index} className="border rounded-lg p-4 hover:bg-green-50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold">{item.task}</h4>
                        <Badge variant="secondary">40 мин</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                      <p className="text-sm bg-green-100 p-2 rounded text-green-800">
                        💡 {item.tips}
                      </p>
                    </div>
                  ))}
                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Icon name="BookOpen" size={16} className="mr-2" />
                    Начать подготовку к ЕГЭ
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Practice Tests */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Пробные тесты</CardTitle>
                <CardDescription>
                  Тренируйся на реальных заданиях прошлых лет
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-orange-600">ОГЭ 2024</CardTitle>
                      <CardDescription>Демоверсия ФИПИ</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm">Пройти тест</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-green-600">ЕГЭ 2024</CardTitle>
                      <CardDescription>Демоверсия ФИПИ</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm">Пройти тест</Button>
                    </CardContent>
                  </Card>
                  
                  <Card className="text-center">
                    <CardHeader>
                      <CardTitle className="text-blue-600">Смешанный</CardTitle>
                      <CardDescription>Случайные задания</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button size="sm">Пройти тест</Button>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* International Tab */}
          <TabsContent value="international" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Поступление в зарубежные университеты</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Подготовка к международным экзаменам IELTS, TOEFL, Cambridge для поступления в зарубежные вузы
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {internationalExams.map((exam, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Globe" size={20} className="mr-2 text-primary" />
                      {exam.name}
                    </CardTitle>
                    <CardDescription>{exam.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Разделы экзамена:</h4>
                      <ul className="space-y-1">
                        {exam.sections.map((section, idx) => (
                          <li key={idx} className="text-sm flex items-center">
                            <Icon name="Clock" size={14} className="mr-2 text-muted-foreground" />
                            {section}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <Badge variant="outline">{exam.score}</Badge>
                      <p className="text-sm text-muted-foreground">{exam.target}</p>
                    </div>
                    
                    <Button className="w-full" variant="outline">
                      Начать подготовку
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* University Requirements */}
            <Card className="bg-gradient-to-r from-indigo-50 to-purple-50">
              <CardHeader>
                <CardTitle className="text-2xl">Требования университетов</CardTitle>
                <CardDescription>
                  Минимальные баллы для поступления в топовые вузы мира
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { uni: 'Harvard', country: 'США', ielts: '7.0', toefl: '100+' },
                    { uni: 'Oxford', country: 'Великобритания', ielts: '7.5', toefl: '110+' },
                    { uni: 'ETH Zurich', country: 'Швейцария', ielts: '7.0', toefl: '100+' },
                    { uni: 'University of Toronto', country: 'Канада', ielts: '6.5', toefl: '100+' }
                  ].map((item, index) => (
                    <Card key={index} className="text-center bg-white">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{item.uni}</CardTitle>
                        <CardDescription>{item.country}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="text-sm">
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800 mr-2">
                            IELTS {item.ielts}
                          </Badge>
                          <Badge variant="secondary" className="bg-green-100 text-green-800">
                            TOEFL {item.toefl}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Pronunciation Tab */}
          <TabsContent value="pronunciation" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Практика произношения</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Изучай правильное произношение английских звуков с интерактивными упражнениями и аудиозаписями
              </p>
            </div>

            {/* Phoneme Practice */}
            <div className="grid lg:grid-cols-2 gap-8">
              {pronunciationExercises.map((exercise, index) => (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mr-3 text-lg font-bold">
                        {exercise.phoneme}
                      </div>
                      {exercise.description}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2 flex items-center">
                        <Icon name="Lightbulb" size={16} className="mr-2 text-blue-600" />
                        Совет:
                      </h4>
                      <p className="text-sm text-blue-800">{exercise.tip}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-3">Слова для практики:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {exercise.words.map((word, idx) => (
                          <Button 
                            key={idx} 
                            variant="outline" 
                            size="sm" 
                            className="justify-start"
                          >
                            <Icon name="Volume2" size={14} className="mr-2" />
                            {word}
                          </Button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Icon name="Mic" size={14} className="mr-2" />
                        Записать произношение
                      </Button>
                      <Button size="sm" variant="outline">
                        <Icon name="Play" size={14} className="mr-2" />
                        Прослушать эталон
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Interactive Pronunciation Tool */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">Интерактивный тренажер произношения</CardTitle>
                <CardDescription>
                  Запишите свое произношение и получите мгновенную обратную связь
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold mb-4">The quick brown fox jumps over the lazy dog</div>
                  <p className="text-muted-foreground mb-6">
                    Произнесите это предложение - оно содержит все звуки английского языка
                  </p>
                </div>
                
                <div className="flex justify-center gap-4">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700">
                    <Icon name="Mic" size={20} className="mr-2" />
                    Начать запись
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Volume2" size={20} className="mr-2" />
                    Прослушать образец
                  </Button>
                </div>
                
                {/* Mock Analysis Results */}
                <div className="grid md:grid-cols-3 gap-4 mt-8">
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-green-600 mb-1">85%</div>
                    <div className="text-sm text-muted-foreground">Точность произношения</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-blue-600 mb-1">7.2/10</div>
                    <div className="text-sm text-muted-foreground">Интонация</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg border">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Good</div>
                    <div className="text-sm text-muted-foreground">Общая оценка</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Phonetic Alphabet */}
            <Card>
              <CardHeader>
                <CardTitle>Международный фонетический алфавит (IPA)</CardTitle>
                <CardDescription>
                  Изучи символы IPA для правильного произношения
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
                  {[
                    '/i/', '/ɪ/', '/e/', '/æ/', '/ʌ/', '/ɒ/', '/ɔː/', '/ʊ/',
                    '/uː/', '/ə/', '/ɜː/', '/aɪ/', '/eɪ/', '/ɔɪ/', '/aʊ/', '/əʊ/',
                    '/p/', '/b/', '/t/', '/d/', '/k/', '/g/', '/f/', '/v/',
                    '/θ/', '/ð/', '/s/', '/z/', '/ʃ/', '/ʒ/', '/h/', '/m/',
                    '/n/', '/ŋ/', '/l/', '/r/', '/j/', '/w/', '/tʃ/', '/dʒ/'
                  ].map((phoneme) => (
                    <Button
                      key={phoneme}
                      variant="outline"
                      size="sm"
                      className="font-mono text-lg h-12"
                    >
                      {phoneme}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
                  🇬🇧
                </div>
                <h3 className="font-bold text-lg">English Mastery Hub</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Комплексная платформа для изучения английского языка с персонализированным подходом
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Обучение</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Грамматика</li>
                <li>Лексика</li>
                <li>Произношение</li>
                <li>Упражнения</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Экзамены</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>ОГЭ</li>
                <li>ЕГЭ</li>
                <li>IELTS</li>
                <li>TOEFL</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>FAQ</li>
                <li>Блог</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 English Mastery Hub. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}