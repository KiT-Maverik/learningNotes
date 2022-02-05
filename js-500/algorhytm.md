складність алгоритму. Скільки операцій нам треба буде виконати у найгіршому випадку.

jsperf.com

лінійний пошук - послідовне перебирання елементів.
бінарний пошук - ділення масиву на два на кожній ітерації

рекурсія це підхід до рішення задач коли ви викликаете функцію з себе ж
суть в тому що кожний наступний виклик звужує скоуп

логічна складність сскладність по пам'яті

хеш таблиці (словарі чи мапи)
це зберігання даних по ключу

дані зберігаються в таблиці
по ключу визначається індекс елементу в масиві
хещ функція - приймає значення та повертає число яке ми сприймаємо як індекс масива
швидкість роботи не залежить від кількості елементів.

Граф
граф це набір вузлів та звязків між ними


Big o notation also referred as Time complexity
It gives you precise, numeric and objective way to judge the performance of your code.
it help youy to write better code and becomes important when your input gets bigger.

"Better" means faster time to finish and to use the less memory (RAM)

Readability of the code does not factor at all. Performance is the king.


O - stands for operations count on notes.
O(n) - this code relies on n operations.

how to count operations
1. variable assignment doesn't count as operations.
2. count explanations
3. in loop count operations O(i)
4. for nested loop O(n^2)
5. for nested different loops O(n * m)
6. count worst case scenario

# Simplifying big O
### Rule #1: Constants doesn't matter
O(12) => O(1)
O(702) => O(1)
O(2n) => O(n)
O(n/2) => O(n)
O(13n^2) => O(n^2)

Smaller terms do not matters
O(n + 10) => O(n)
O(1337n + 50) => O(n)
O(n^2 + 13n + 8) => o(n^2)

Big o cheatshit illustrates how operations affect algorhytm complexity


###
O(1) - constant time
O(n) - Linear time
O(n^2) - Quadratic time


###
Arithmetic operations has constant time complexity of O(1)
it takes your processor the same ammount of time to 1+1 and 100000 + 1
Variable assgnment has constant time complexity of O(1)

#Space complexity
Hoiw much more memory use (RAM) do we need as the inputs provided to the Code gets larger

Storing values in variables always takes up memory
Most primitives (Booleans and numbers) take up to O(1) - Constant space
Example var x = 100 and  var x = 2000 take up same amount of memory
Strings? arrays and objects take up linear Space


Time complexity iis Prioritized against space complexity.
Reason: cost to produce and run processors are nuch higher compared to ram
Reason 2: End user care more about speed.
Reason 3 : it's easy to increase memory size, but you can never buy more time.



### Logarithms
if we can eliminate hal of the variants each round is it O(log_n).
Example: Guess between 0 and 50, on each guess get an answer 'bigger' or 'smaller'.