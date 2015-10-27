## API

::: gengo
The following API is respect to the default plugins and may vary. Please refer the the developer's plugin documentation.
:::

### i18n

#### API

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

#### Notations

##### Phrase Notation

```javascript
// Assuming the locale === 'ja':

// A basic phrase returns 'こんにちは'
__('Hello');

// A basic phrase with sprintf returns 'Bob こんにちは'
__('Hello %s', 'Bob');

// A basic phrase with interpolation returns 'Bob こんにちは'
 __('Hello {{name}}', {name:'Bob'});
```

##### Bracket Notation

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

##### Dot Notation

```javascript
// Assuming the locale === 'ja':

// A basic dot phrase returns 'おっす'
__('greeting.hello.informal');

// A basic dot phrase with sprintf returns 'Bob おっす'
__('greeting.hello.person.informal', 'Bob');

// A basic dot phrase with interpolation returns 'Bob おっす'
__('greeting.hello.person.informal', {name:'Bob'});
```

#### Message Format

::: gengo
Because plurality is not supported, the default parser uses [message-format](https://github.com/format-message/message-format)
to overcome the problem.
:::

::: gengo
To use message-format, simply set the parser using the API or in the options.
:::

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