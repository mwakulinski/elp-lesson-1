# lesson-1

Zadanie 1

1. Korzystając z TDD, Stwórz klasę TurboNumber z trzema metodami: subtract(x), divide(x) oraz result(). (klasa powinna przyjmować wartość początkową w konstruktorze, oraz zwracać wynik po operacjach poprzez metodę result).
   W osobnym pliku dopisz testy automatyczne do tej klasy, sprawdzające, czy umie odejmować i dzielić :)
2. Obsłuż edge case w metodzie divide (dzielenie przez 0 powinno rzucić wyjątkiem)
3. Po tym obsłuż również chainowanie metod np. `new TurboNumber(17).subtract(5).divide(-3).result()` zwracające wartość -4.
4. W testach użyj `beforeEach`, żeby reużyć instancjonowanie klasy.
5. Obsłuż metody pierwiastek kwadratowy, dodawanie, potęga.

Zadanie 2

1. Napisz specyfikację (testy) dla klasy NokiaTexter. Klasa przyjmuje w konstruktorze jeden argument (tekst)
2. Klasa ma jedną publiczną metodę instancji squeeze, zwracającą skrócony tekst:
   - Dla "zaraz wracam", metoda zwraca "ZARAZwracam".
   - Dla "Nie czekaj z kolacja.", metoda zwraca "NIEczekajZkolacja." (uwaga na białe znaki :))
   - Dla tekstu bez spacji, metoda zwraca ten sam tekst bez zmian (np. "ZrobZakupyIWyrzucSmieci", metoda zwróci ten sam tekst).
   - Dla tekstu, który po skróceniu ma więcej niż 160 znaków, metoda wyrzuca wyjątek MessageTooLong.
3. Zaimplementuj klasę zgodnie ze specyfikacją :)

## To start Project

1. use command: npm i
2. use command: npm run test
