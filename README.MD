Дано масив, в якому представлено населення країн світу.

```
data = [
    {
        ID: <string>,
        country: <string>,
        population: <number>
    },
    ...
    {
        ID: <string>,
        country: <string>,
        population: <number>
    }
]
```

Потрібно підготувати масив

```
list = [
    {
        description: <string>,
        percentage: <number>,
        value: <number>
    },
    ...
    {
        description: <string>,
        percentage: <number>,
        value: <number>
    }
]
```

на основі якого буде побудовано секторну діаграму.

де description - назва країни (з початкового масиву), value - населення країни (з початкового масиву), percentage населення країни по відношенню до населення світу (у відсотках).

Масив list має відповідати наступним умовам (**читати уважно!**):

1. Має бути відсортований у порядку спадання значення percentage (спочатку більші);

2. Якщо є 2 чи більше елементів у списку, у яких поле percentage менше ніж OTHER_THRESHOLD, то такі елементи мають бути просумовані (додані) як один елемент в кінець списку.

```
{
    description: 'Other',
    percentage: <number>,
    value: <number>
}
```
