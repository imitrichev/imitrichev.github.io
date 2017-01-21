var NAVTREE =
[
  [ "mech_optimiz", "index.html", [
    [ "Документация на документацию", "index.html", [
      [ "Пояснение, как использовать документацию (и mech_optimiz в целом)", "index.html#mainmain", null ]
    ] ],
    [ "Использование mech_optimiz", "usage.html", [
      [ "Идея и общая логика программы", "usage.html#use0", null ],
      [ "Режим подбора кинетических параметров", "usage.html#use1", [
        [ "Строка запуска", "usage.html#use1_1", null ],
        [ "Синтаксис конфигурационного файла", "usage.html#use1_2", [
          [ "Комментарии в файле настроек", "usage.html#commentaries", null ],
          [ "Первая строка", "usage.html#use1_2_1", null ],
          [ "Cтрока параметров запуска", "usage.html#use1_2_2", null ],
          [ "Строка CASE", "usage.html#use1_2_3", null ],
          [ "Строка CONVERSION", "usage.html#use1_2_4", null ],
          [ "Строка ENTROPY PRODUCTION", "usage.html#use1_2_5", null ],
          [ "Строка ADDEQUATIONS", "usage.html#use1_2_6", null ],
          [ "Строка ADDPARAMS", "usage.html#use1_2_7", null ],
          [ "Строки MEAN_COVERAGES, DBNAME, WRITEBOUNDARIES", "usage.html#use1_2_8", null ],
          [ "Строка MOVE_BOUNDARIES", "usage.html#use1_2_9", null ],
          [ "Строка RESPECT_BOUNDARIES", "usage.html#use1_2_10", null ],
          [ "Строка USE_SOBOL_NUMBERS", "usage.html#use1_2_11", null ],
          [ "Строка UNITS", "usage.html#use1_2_12", null ],
          [ "Строка SELECTIVITY_ANALYSIS", "usage.html#use1_2_13", null ],
          [ "Строка NO_TC", "usage.html#use1_2_14", null ],
          [ "Строка CHECK_LIMITATIONS_LEVEL", "usage.html#use1_2_15", null ],
          [ "Строка PARAMETERS", "usage.html#use1_2_par", null ],
          [ "Строка ACTIVITY", "usage.html#use1_2_act", null ]
        ] ],
        [ "Синтаксис save-файла", "usage.html#use1_3", null ],
        [ "Синтаксис файла с кинетическим механизмом (газофазные реакции)", "usage.html#use1_4", null ],
        [ "Синтаксис файла с кинетическим механизмом (поверхностные реакции)", "usage.html#use1_5", null ],
        [ "Синтаксис файла с термодинамическими данными (поверхностные частицы)", "usage.html#use1_6", null ],
        [ "Синтаксис файла с термодинамическими данными (thermo.dat)", "usage.html#use1_7", null ],
        [ "Синтаксис файла с параметрами алгоритма обеспечения термодинамической непротиворечивости", "usage.html#use1_8", null ],
        [ "Другие файлы, которые должны находиться в папке запуска для работы программы", "usage.html#use1_9", [
          [ "Файлы, используемые моделью CSTRCASCADE", "usage.html#use1_9_1", null ],
          [ "Общие файлы", "usage.html#use1_9_2", null ]
        ] ],
        [ "Файлы, производимые программой при работе", "usage.html#use1_10", [
          [ "Файлы с кинетическими механизмами", "usage.html#use1_10_1", null ],
          [ "Файл со значением критериев подбора", "usage.html#use1_10_2", null ],
          [ "Файл со значением целевой функции", "usage.html#use1_10_3", null ],
          [ "Файлы со значениями экспериментальной конверсии и рассчитанной по модели конверсии", "usage.html#use1_10_4", null ],
          [ "Файл со значениями целевой функции (всех вычислений)", "usage.html#use1_10_5", null ]
        ] ],
        [ "Другое", "usage.html#use1_11", [
          [ "Получение и использование кинетических параметров из базы данных реакций", "usage.html#fromdb", null ],
          [ "Решение прямых задач", "usage.html#forward_problem", null ]
        ] ]
      ] ],
      [ "Режим анализа параметрической чувствительности и идентифицируемости", "usage.html#use2", [
        [ "Строка запуска", "usage.html#use2_1", null ],
        [ "Синтаксис конфигурационного файла", "usage.html#use2_2", [
          [ "Анализ чувствительности и степеней контроля скорости", "usage.html#use2_2_1", null ],
          [ "Анализ идентифицируемости", "usage.html#use2_2_2", null ]
        ] ],
        [ "Синтаксис save-файла", "usage.html#use2_3", null ],
        [ "\"Массированный\" анализ параметрической чувствительности", "usage.html#use2_4", null ],
        [ "Файлы с результатами, создаваемые программой", "usage.html#use2_5", null ]
      ] ],
      [ "Режим анализа данных", "usage.html#use3", [
        [ "Строка запуска", "usage.html#use3_1", null ],
        [ "Синтаксис конфигурационного файла", "usage.html#use3_2", null ],
        [ "Метод k-средних++ (k-means++)", "usage.html#use3_3", [
          [ "Вычисление наилучшего числа кластеров", "usage.html#use3_3_1", null ],
          [ "Определение наилучшего набора параметров для кластеризации через ГА-оптимизацию суммарного силуэта", "usage.html#use3_3_2", null ]
        ] ],
        [ "Метод главных компонент (PCA)", "usage.html#use3_4", null ]
      ] ],
      [ "Режим однократного изменения набора параметров с целью обеспечения термодинамической непротиворечивости", "usage.html#use4", [
        [ "Строка запуска", "usage.html#use4_1", null ],
        [ "Синтаксис конфигурационного файла", "usage.html#use4_2", null ]
      ] ],
      [ "Режим оптимизации произвольной функции (требует программирования функции)", "usage.html#use5", [
        [ "Строка запуска", "usage.html#use5_1", null ],
        [ "Синтаксис конфигурационного файла", "usage.html#use5_2", null ],
        [ "Примеры", "usage.html#use5_3", [
          [ "Оптимизация функции Растригина", "usage.html#use5_3_1", null ],
          [ "Нахождение оптимальных коэффициентов зависимости порозности слоя от диаметра частиц по экспериментальным данным", "usage.html#use5_3_2", null ],
          [ "Подбор коэффициента активности поверхности и загрузки слоя катализатора (активная поверхность / м3 реактора)", "usage.html#use5_3_3", null ]
        ] ]
      ] ],
      [ "Режим тестирования", "usage.html#use6", [
        [ "Строка запуска для отключения генерации псевдослучайных чисел", "usage.html#use6_1", null ],
        [ "Строка запуска тестов (для тестирования кода программы)", "usage.html#use6_2", null ],
        [ "Структура тестов. Создание собственных тестов", "usage.html#use6_3", null ],
        [ "Другие функции тестирования", "usage.html#use6_4", [
          [ "Анализ покрытия кода", "usage.html#use6_4_1", null ],
          [ "Анализ утечек памяти", "usage.html#use6_4_2", null ],
          [ "Непрерывная интеграция", "usage.html#use6_4_3", null ]
        ] ]
      ] ]
    ] ],
    [ "Обучающие примеры для mech_optimiz", "tutorials.html", [
      [ "Обучающий пример - 1. Решение прямой кинетической задачи для системы NO+CO/Pt", "tutorials.html#tut01", null ]
    ] ],
    [ "Работа с базой данных реакций", "dbusage.html", [
      [ "Импорт и экспорт базы данных реакций", "dbusage.html#dbreact1", null ],
      [ "Объявление реакции", "dbusage.html#dbreact2", [
        [ "Синтаксис документа", "dbusage.html#dbreact2_1", null ],
        [ "\"reaction\" - формула реакции. Ключи \"reactants\", \"products\"", "dbusage.html#dbreact2_2", null ],
        [ "Прямые и обратные стадии реакции \"forward\" и \"backward\"", "dbusage.html#dbreact2_3", [
          [ "Вложенные элементы", "dbusage.html#dbreact2_3_1", null ]
        ] ],
        [ "Реагенты \"reactants\" и продукты \"products\"", "dbusage.html#dbreact2_4", null ],
        [ "Материал катализатора \"material\"", "dbusage.html#dbreact2_5", null ],
        [ "Метод получения информации о кинетике процесса \"method\"", "dbusage.html#dbreact2_6", null ],
        [ "Ссылка на литературный источник и комментарий", "dbusage.html#dbreact2_7", null ],
        [ "Пример записи из базы данных", "dbusage.html#dbreact2_8", null ]
      ] ]
    ] ],
    [ "Устройства решателей в mech_optimiz", "solver_basics.html", [
      [ "Решатель модели реактора неподвижного каталитического слоя", "solver_basics.html#cstrsolver_basics", null ]
    ] ],
    [ "Кластеризация данных", "clustering.html", [
      [ "Выбор числа кластеров", "clustering.html#clustering_1", null ]
    ] ],
    [ "Анализ данных с помощью метода главных компонент", "pca_an.html", null ],
    [ "Учет латеральных взаимодействий в \\e mech_optimiz", "lateral.html", null ],
    [ "Частицы, занимающие несколько активных центров", "sites.html", [
      [ "Спецификация частиц, занимающих несколько активных центров", "sites.html#sites1", [
        [ "Определение частиц, занимающих несколько активных центров, в cti-файле", "sites.html#sites1_1", null ],
        [ "Определение частиц, занимающих несколько активных центров, в inp-файле", "sites.html#sites1_2", null ]
      ] ],
      [ "Перевод единиц предэкспоненциальных множителей", "sites.html#sites2", null ]
    ] ],
    [ "Термодинамическая непротиворечивость кинетических механизмов", "thermcons.html", [
      [ "Термодинамическая непротиворечивость - используемые подходы", "thermcons.html#TC_main", null ],
      [ "Модификация кинетических параметров обратных стадий", "thermcons.html#TCAlgReverse", null ]
    ] ],
    [ "Список устаревших определений и описаний", "deprecated.html", null ],
    [ "Библиографические ссылки", "citelist.html", null ],
    [ "Файлы", null, [
      [ "Файлы", "files.html", "files" ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"citelist.html"
];

var SYNCONMSG = 'нажмите на выключить для синхронизации панелей';
var SYNCOFFMSG = 'нажмите на включить для синхронизации панелей';