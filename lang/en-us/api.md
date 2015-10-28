# API

::: gengo
The following API is respect to the [default plugins](https://github.com/gengojs?utf8=%E2%9C%93&query=plugin) and may vary. Please refer the the developer's plugin documentation.
:::

## i18n

### API

```javascript
// String
__('Hello');
// Object
__({ phrase:'Hello', locale: 'ja', parser:'format' });

// Array
__('Hello %s, is today %s?', ['Bob', 'sunny']);
// Object
__('Hello {{name}}, is today {{weather}}?', { name:'Bob', weather: 'sunny' });

```

### Notations

#### Phrase Notation

::: gengo

```javascript
// Assuming the locale === 'ja':

// A basic phrase returns 'こんにちは'
__('Hello');

// A basic phrase with sprintf returns 'Bob こんにちは'
__('Hello %s', 'Bob');

// A basic phrase with interpolation returns 'Bob こんにちは'
 __('Hello {{name}}', {name:'Bob'});
```

:::

#### Bracket Notation

::: gengo

```javascript
// Assuming the locale === 'ja':

// A basic bracket phrase returns 'こんにちは'
__('[Hello]');

// A basic bracket phrase with nested keys returns 'おっす'
__('[Hello].informal');

// A basic bracket phrase with sprintf returns 'Bob おっす'
__('[Hello %].informal', 'Bob');

// A basic bracket phrase with interpolation returns 'Bob おっす'
__('[Hello {{name}}].informal', {name:'Bob'});
```

:::

#### Dot Notation

::: gengo

```javascript
// Assuming the locale === 'ja':

// A basic dot phrase returns 'おっす'
__('greeting.hello.informal');

// A basic dot phrase with sprintf returns 'Bob おっす'
__('greeting.hello.person.informal', 'Bob');

// A basic dot phrase with interpolation returns 'Bob おっす'
__('greeting.hello.person.informal', { name:'Bob' });
```

:::

### Message Format

::: gengo
Because plurality is not supported, the default parser uses [message-format](https://github.com/format-message/message-format)
to overcome the problem.
:::

::: gengo
To use message-format, simply set the parser using the API or in the options.
:::

::: gengo

```javascript
// Assuming the locale === 'en-us':

// A basic phrase with message formatting
// returns "You took 4,000 pictures since Jan 1, 2015 9:33:04 AM"
__('You took {n,number} pictures since {d,date} {d,time}', { n:4000, d:new Date() }, { parser: 'format' });

// A basic bracket phrase with message formatting
// returns "You took 4,000 pictures since Jan 1, 2015 9:33:04 AM"
__('[You took {n,numbers} pictures].since.date', { n:4000, d:new Date() }, { parser: 'format' });

// A basic dot phrase with message formatting
// returns "You took 4,000 pictures since Jan 1, 2015 9:33:04 AM"
__('pictures.since.date', { n:4000, d:new Date() }, { format: 'parser' });
```

:::

## l10n

### API

::: gengo
The following API is respect to the default localization plugin. Please refer the the developer's plugin documentation.
:::


::: gengo

```javascript
// Returns the date, time, number, or moment in the current locale
__l().[API Method]()
// Returns the date, time, number, or moment with a specified locale
__l(locale: String).[API Method]()
```
:::

#### `date()`

::: gengo

```javascript
// Returns an instance of Tokei
__l().date();
```

:::

#### `time()`

::: gengo

```javascript
// Returns an instance of Tokei
__l().time();
```

:::

#### `number()`

::: gengo

```javascript
// Returns an instance of Tokei
__l().number();
```

:::

#### `moment()`

::: gengo

```javascript
// Returns an instance of Moment
__l().moment();
```

:::


#### `now()`

::: gengo

```javascript

// Returns the current date
__l().date().now();
// Returns the current time
__l().time().now();

```

:::

#### `format()`


::: gengo

```javascript
// Formats the date
__l().date().format(/* date: Date */);
// Formats the time
__l().time().format(/* date: Date */);
// Formats the number
__l().number().format(/* number: Number */);
```

:::
