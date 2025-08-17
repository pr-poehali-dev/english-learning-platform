import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-orange-700 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                E
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">English Learning Platform</h1>
                <p className="text-sm text-muted-foreground">Изучай английский эффективно</p>
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
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="container mx-auto px-4 text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2">
            🚀 Новая платформа для изучения английского
          </Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6 leading-tight">
            Изучай английский<br />
            <span className="text-primary">с умными методиками</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Готовься к ОГЭ, ЕГЭ и поступлению в зарубежные университеты. 
            Изучай грамматику, расширяй словарный запас и практикуй произношение.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 py-6">
              <Icon name="Play" size={20} className="mr-2" />
              Начать обучение
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              <Icon name="BookOpen" size={20} className="mr-2" />
              Попробовать демо
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-6 mb-12">
            <TabsTrigger value="overview">Обзор</TabsTrigger>
            <TabsTrigger value="grammar">Грамматика</TabsTrigger>
            <TabsTrigger value="vocabulary">Лексика</TabsTrigger>
            <TabsTrigger value="exams">Экзамены</TabsTrigger>
            <TabsTrigger value="pronunciation">Произношение</TabsTrigger>
            <TabsTrigger value="reference">Справочник</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-12">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <Icon name="BookOpen" size={32} className="text-primary" />
                  </div>
                  <CardTitle>Грамматика</CardTitle>
                  <CardDescription>
                    Изучай правила английского языка с интерактивными упражнениями
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={65} className="mb-4" />
                  <p className="text-sm text-muted-foreground">Прогресс: 65%</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-emerald-100 rounded-2xl flex items-center justify-center">
                    <Icon name="Brain" size={32} className="text-emerald-700" />
                  </div>
                  <CardTitle>Лексика</CardTitle>
                  <CardDescription>
                    Расширяй словарный запас с помощью умных карточек
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={42} className="mb-4" />
                  <p className="text-sm text-muted-foreground">Изучено: 840 слов</p>
                </CardContent>
              </Card>

              <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-amber-100 rounded-2xl flex items-center justify-center">
                    <Icon name="Mic" size={32} className="text-orange-700" />
                  </div>
                  <CardTitle>Произношение</CardTitle>
                  <CardDescription>
                    Практикуй произношение с ИИ-ассистентом
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={28} className="mb-4" />
                  <p className="text-sm text-muted-foreground">Точность: 89%</p>
                </CardContent>
              </Card>
            </div>

            {/* Exam Preparation Section */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-orange-600">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="GraduationCap" size={24} className="mr-2 text-orange-600" />
                    Подготовка к ОГЭ
                  </CardTitle>
                  <CardDescription>
                    Полный курс подготовки к основному государственному экзамену
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Аудирование</span>
                      <span className="text-orange-600">80%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Чтение</span>
                      <span className="text-orange-600">92%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Письмо</span>
                      <span className="text-orange-600">67%</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Продолжить подготовку
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Award" size={24} className="mr-2 text-emerald-600" />
                    Подготовка к ЕГЭ
                  </CardTitle>
                  <CardDescription>
                    Интенсивная подготовка к единому государственному экзамену
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>Говорение</span>
                      <span className="text-emerald-600">74%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Лексика и грамматика</span>
                      <span className="text-emerald-600">85%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Письмо</span>
                      <span className="text-emerald-600">70%</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Продолжить подготовку
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-600">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Icon name="Globe" size={24} className="mr-2 text-amber-600" />
                    Зарубежные ВУЗы
                  </CardTitle>
                  <CardDescription>
                    IELTS, TOEFL и другие международные экзамены
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span>IELTS Speaking</span>
                      <span className="text-amber-600">6.5</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>TOEFL Writing</span>
                      <span className="text-amber-600">24/30</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Academic English</span>
                      <span className="text-amber-600">78%</span>
                    </div>
                  </div>
                  <Button className="w-full" variant="outline">
                    Продолжить подготовку
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Grammar Tab */}
          <TabsContent value="grammar" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Изучение грамматики</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Структурированное изучение английской грамматики от базового до продвинутого уровня
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Present Tenses", description: "Настоящие времена", progress: 85, level: "Beginner" },
                { title: "Past Tenses", description: "Прошедшие времена", progress: 70, level: "Intermediate" },
                { title: "Future Tenses", description: "Будущие времена", progress: 45, level: "Intermediate" },
                { title: "Conditionals", description: "Условные предложения", progress: 30, level: "Advanced" },
                { title: "Passive Voice", description: "Пассивный залог", progress: 60, level: "Intermediate" },
                { title: "Modal Verbs", description: "Модальные глаголы", progress: 90, level: "Beginner" }
              ].map((topic, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{topic.title}</CardTitle>
                      <Badge variant={topic.level === "Beginner" ? "default" : topic.level === "Intermediate" ? "secondary" : "outline"}>
                        {topic.level}
                      </Badge>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={topic.progress} className="mb-3" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{topic.progress}% завершено</span>
                      <Button size="sm">
                        <Icon name="Play" size={14} className="mr-1" />
                        Изучать
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Vocabulary Tab */}
          <TabsContent value="vocabulary" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Расширение словарного запаса</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Изучай новые слова с помощью интерактивных карточек и тематических наборов
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2,450</div>
                  <p className="text-muted-foreground">Слов изучено</p>
                </div>
              </Card>
              <Card className="p-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-emerald-700 mb-2">89%</div>
                  <p className="text-muted-foreground">Точность запоминания</p>
                </div>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { category: "Business English", words: 150, completed: 89, color: "blue" },
                { category: "Academic Vocabulary", words: 200, completed: 156, color: "green" },
                { category: "IELTS Vocabulary", words: 300, completed: 240, color: "purple" },
                { category: "Daily Conversation", words: 120, completed: 120, color: "orange" },
                { category: "Medical Terms", words: 180, completed: 45, color: "red" },
                { category: "IT & Technology", words: 250, completed: 198, color: "indigo" }
              ].map((set, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <div className={`w-3 h-3 rounded-full bg-${set.color}-500 mr-2`}></div>
                      {set.category}
                    </CardTitle>
                    <CardDescription>{set.words} слов в наборе</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Progress value={(set.completed / set.words) * 100} className="mb-3" />
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">{set.completed}/{set.words}</span>
                      <Button size="sm" variant="outline">
                        <Icon name="Brain" size={14} className="mr-1" />
                        Изучать
                      </Button>
                    </div>
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
                Целенаправленная подготовка к ОГЭ, ЕГЭ и международным экзаменам
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Ближайшие экзамены</CardTitle>
                  <CardDescription>Следите за своим прогрессом подготовки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { exam: "ЕГЭ по английскому", date: "15 июня 2024", progress: 78, status: "active" },
                    { exam: "IELTS Academic", date: "22 марта 2024", progress: 65, status: "planning" },
                    { exam: "TOEFL iBT", date: "10 апреля 2024", progress: 45, status: "planning" }
                  ].map((exam, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h4 className="font-semibold">{exam.exam}</h4>
                          <p className="text-sm text-muted-foreground">{exam.date}</p>
                        </div>
                        <Badge variant={exam.status === "active" ? "default" : "secondary"}>
                          {exam.status === "active" ? "Активная подготовка" : "Планируется"}
                        </Badge>
                      </div>
                      <Progress value={exam.progress} className="mb-2" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Готовность: {exam.progress}%</span>
                        <Button size="sm">
                          <Icon name="BookOpen" size={14} className="mr-1" />
                          Готовиться
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">156</div>
                    <p className="text-sm text-muted-foreground">Пробных тестов</p>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">82</div>
                    <p className="text-sm text-muted-foreground">Средний балл</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-2xl font-bold text-purple-600">24ч</div>
                    <p className="text-sm text-muted-foreground">Времени на подготовку</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Pronunciation Tab */}
          <TabsContent value="pronunciation" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Практика произношения</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Улучшай произношение с помощью ИИ-ассистента и интерактивных упражнений
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Icon name="Mic" size={40} className="text-white" />
                  </div>
                  <CardTitle>Голосовой тренажер</CardTitle>
                  <CardDescription>
                    Практикуй произношение слов и фраз с мгновенной обратной связью
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4" size="lg">
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать тренировку
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Последняя точность: <span className="font-semibold text-green-600">92%</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Icon name="Volume2" size={40} className="text-white" />
                  </div>
                  <CardTitle>Фонетические упражнения</CardTitle>
                  <CardDescription>
                    Изучай звуки английского языка и их правильное произношение
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full mb-4" size="lg" variant="outline">
                    <Icon name="BookOpen" size={20} className="mr-2" />
                    Изучать звуки
                  </Button>
                  <div className="text-center text-sm text-muted-foreground">
                    Изучено звуков: <span className="font-semibold">28/44</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Недавняя активность произношения</CardTitle>
                <CardDescription>Твой прогресс за последнюю неделю</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4">
                  {[
                    { day: "Пн", score: 85, sessions: 3 },
                    { day: "Вт", score: 92, sessions: 2 },
                    { day: "Ср", score: 88, sessions: 4 },
                    { day: "Чт", score: 94, sessions: 2 },
                  ].map((day, index) => (
                    <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
                      <div className="font-semibold text-lg">{day.day}</div>
                      <div className="text-2xl font-bold text-primary">{day.score}%</div>
                      <div className="text-sm text-muted-foreground">{day.sessions} сессии</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reference Tab */}
          <TabsContent value="reference" className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Справочные материалы</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Подробные гайды по всем заданиям экзаменов с разборами и стратегиями решения
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 mb-12">
              <Card className="border-l-4 border-l-orange-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-orange-600">
                    <Icon name="FileText" size={24} className="mr-2" />
                    ОГЭ по английскому
                  </CardTitle>
                  <CardDescription>
                    Все задания основного государственного экзамена
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Задания 1-4: Аудирование</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задания 5-12: Чтение</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задания 13-20: Грамматика</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задание 33: Письмо</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задание 34: Говорение</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-emerald-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-emerald-600">
                    <Icon name="Award" size={24} className="mr-2" />
                    ЕГЭ по английскому
                  </CardTitle>
                  <CardDescription>
                    Разбор всех заданий единого государственного экзамена
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Задания 1-9: Аудирование</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задания 10-18: Чтение</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задания 19-38: Лексика/Грамматика</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Задания 39-40: Письменная речь</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Устная часть: Задания 1-4</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-amber-600">
                <CardHeader>
                  <CardTitle className="flex items-center text-amber-600">
                    <Icon name="Globe" size={24} className="mr-2" />
                    Международные экзамены
                  </CardTitle>
                  <CardDescription>
                    IELTS, TOEFL и другие сертификационные экзамены
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>IELTS: Reading, Writing, Listening</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>TOEFL: iBT формат</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                    <div className="flex justify-between">
                      <span>Cambridge: FCE, CAE, CPE</span>
                      <Icon name="ChevronRight" size={16} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Detailed Reference Sections */}
            <div className="space-y-12">
              {/* ОГЭ Reference */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-orange-600">ОГЭ: Подробный разбор заданий</CardTitle>
                  <CardDescription>
                    Структура экзамена, стратегии решения и критерии оценивания
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Аудирование */}
                  <div className="border-l-4 border-l-orange-200 pl-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="Headphones" size={20} className="mr-2 text-orange-600" />
                      Аудирование (Задания 1-4)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Что проверяется:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Понимание основного содержания</li>
                          <li>• Понимание запрашиваемой информации</li>
                          <li>• Детальное понимание текста</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Стратегии:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Читайте задания до прослушивания</li>
                          <li>• Подчеркивайте ключевые слова</li>
                          <li>• Следите за интонацией говорящего</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Чтение */}
                  <div className="border-l-4 border-l-orange-200 pl-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="BookOpen" size={20} className="mr-2 text-orange-600" />
                      Чтение (Задания 5-12)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">Типы заданий:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Задание 5: Установление соответствия</li>
                          <li>• Задания 6-11: Выбор правильного ответа</li>
                          <li>• Задание 12: Определение True/False</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Полезные навыки:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Сканирование текста</li>
                          <li>• Поиск синонимов</li>
                          <li>• Понимание контекста</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Грамматика и лексика */}
                  <div className="border-l-4 border-l-orange-200 pl-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="BookMarked" size={20} className="mr-2 text-orange-600" />
                      Грамматика и лексика (Задания 13-20)
                    </h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">Грамматика:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Времена глаголов</li>
                          <li>• Модальные глаголы</li>
                          <li>• Пассивный залог</li>
                          <li>• Условные предложения</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Словообразование:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Суффиксы и префиксы</li>
                          <li>• Части речи</li>
                          <li>• Отрицательные формы</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Лексика:</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• Фразовые глаголы</li>
                          <li>• Устойчивые выражения</li>
                          <li>• Сочетаемость слов</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Письмо */}
                  <div className="border-l-4 border-l-orange-200 pl-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="PenTool" size={20} className="mr-2 text-orange-600" />
                      Письмо (Задание 33)
                    </h3>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold mb-2">Структура письма другу:</h4>
                      <div className="text-sm space-y-2 text-muted-foreground">
                        <p>1. <strong>Обращение:</strong> Dear Tom, / Hi Tom,</p>
                        <p>2. <strong>Вступление:</strong> Благодарность за письмо, ссылка на предыдущие контакты</p>
                        <p>3. <strong>Основная часть:</strong> Ответы на 3 вопроса друга (по 2-3 предложения)</p>
                        <p>4. <strong>Заключение:</strong> Извинение за окончание письма, ссылка на будущие контакты</p>
                        <p>5. <strong>Подпись:</strong> Love, / Best wishes, + ваше имя</p>
                        <p><strong>Объем:</strong> 100-120 слов</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* ЕГЭ Reference */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-emerald-600">ЕГЭ: Подробный разбор заданий</CardTitle>
                  <CardDescription>
                    Полный анализ структуры экзамена и методы подготовки
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Письменная речь ЕГЭ */}
                  <div className="border-l-4 border-l-emerald-200 pl-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="FileEdit" size={20} className="mr-2 text-emerald-600" />
                      Письменная речь (Задания 39-40)
                    </h3>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Задание 39: Письмо другу</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• <strong>Объем:</strong> 100-140 слов</li>
                          <li>• <strong>Время:</strong> 20 минут</li>
                          <li>• <strong>Структура:</strong> Обращение, вступление, ответы на вопросы, вопросы другу, заключение</li>
                          <li>• <strong>Критерии:</strong> Содержание, организация, языковое оформление</li>
                        </ul>
                      </div>
                      <div className="bg-emerald-50 p-4 rounded-lg">
                        <h4 className="font-semibold mb-3">Задание 40: Эссе</h4>
                        <ul className="text-sm space-y-1 text-muted-foreground">
                          <li>• <strong>Объем:</strong> 200-250 слов</li>
                          <li>• <strong>Время:</strong> 60 минут</li>
                          <li>• <strong>Структура:</strong> Введение, два аргумента "за", один аргумент "против", заключение</li>
                          <li>• <strong>Тип:</strong> Мнение или За/Против</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Устная часть ЕГЭ */}
                  <div className="border-l-4 border-l-emerald-200 pl-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                      <Icon name="Mic" size={20} className="mr-2 text-emerald-600" />
                      Устная часть (Задания 1-4)
                    </h3>
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <h4 className="font-semibold mb-2">Задание 1</h4>
                        <p className="text-sm text-muted-foreground">Чтение текста вслух</p>
                        <p className="text-xs text-muted-foreground mt-1">1.5 мин подготовка + 1.5 мин чтение</p>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <h4 className="font-semibold mb-2">Задание 2</h4>
                        <p className="text-sm text-muted-foreground">Диалог-расспрос (4 вопроса)</p>
                        <p className="text-xs text-muted-foreground mt-1">40 сек на каждый вопрос</p>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <h4 className="font-semibold mb-2">Задание 3</h4>
                        <p className="text-sm text-muted-foreground">Описание фото</p>
                        <p className="text-xs text-muted-foreground mt-1">1.5 мин подготовка + 2 мин ответ</p>
                      </div>
                      <div className="bg-emerald-50 p-3 rounded-lg">
                        <h4 className="font-semibold mb-2">Задание 4</h4>
                        <p className="text-sm text-muted-foreground">Сравнение двух фото</p>
                        <p className="text-xs text-muted-foreground mt-1">1.5 мин подготовка + 2 мин ответ</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* International Exams Reference */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-amber-600">Международные экзамены</CardTitle>
                  <CardDescription>
                    IELTS, TOEFL и другие сертификационные экзамены
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="border-l-4 border-l-amber-200 pl-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-amber-600">
                        <Icon name="Globe" size={20} className="mr-2" />
                        IELTS Academic
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Структура экзамена:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• <strong>Listening:</strong> 30 мин + 10 мин на перенос ответов</li>
                            <li>• <strong>Reading:</strong> 60 мин, 3 текста, 40 вопросов</li>
                            <li>• <strong>Writing:</strong> 60 мин, 2 задания</li>
                            <li>• <strong>Speaking:</strong> 11-14 мин, интервью с экзаменатором</li>
                          </ul>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg">
                          <h4 className="font-semibold mb-2">Система оценивания:</h4>
                          <p className="text-sm text-muted-foreground">От 1 до 9 баллов. Большинство университетов требуют 6.5-7.0 общий балл</p>
                        </div>
                      </div>
                    </div>

                    <div className="border-l-4 border-l-amber-200 pl-6">
                      <h3 className="text-xl font-semibold mb-4 flex items-center text-amber-600">
                        <Icon name="Monitor" size={20} className="mr-2" />
                        TOEFL iBT
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Структура экзамена:</h4>
                          <ul className="text-sm space-y-1 text-muted-foreground">
                            <li>• <strong>Reading:</strong> 54-72 мин, 3-4 текста</li>
                            <li>• <strong>Listening:</strong> 41-57 мин, лекции и диалоги</li>
                            <li>• <strong>Speaking:</strong> 17 мин, 4 задания</li>
                            <li>• <strong>Writing:</strong> 50 мин, 2 задания</li>
                          </ul>
                        </div>
                        <div className="bg-amber-50 p-3 rounded-lg">
                          <h4 className="font-semibold mb-2">Система оценивания:</h4>
                          <p className="text-sm text-muted-foreground">От 0 до 120 баллов. Большинство университетов требуют 80-100 баллов</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="bg-secondary text-secondary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold text-lg mb-4">English Learning Platform</h3>
              <p className="text-sm opacity-80">
                Эффективное изучение английского языка для всех уровней подготовки
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Курсы</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Грамматика</li>
                <li>Лексика</li>
                <li>Произношение</li>
                <li>Подготовка к экзаменам</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Экзамены</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>ОГЭ</li>
                <li>ЕГЭ</li>
                <li>IELTS</li>
                <li>TOEFL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Поддержка</h4>
              <ul className="space-y-2 text-sm opacity-80">
                <li>Помощь</li>
                <li>Контакты</li>
                <li>FAQ</li>
                <li>Блог</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-60">
            © 2024 English Learning Platform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
}