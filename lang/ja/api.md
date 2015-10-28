# API

::: gengo
次のAPIは、[デフォルトのプラグイン](https://github.com/gengojs?utf8=%E2%9C%93&query=plugin)に関してであるとは異なる場合があります。開発者のプラグインのドキュメントを参照してください。
:::

### i18n

#### API

```javascript
// String
__('Hello');
// Object
__({ phrase:'Hello', locale: 'ja', parser: 'format' });

// Array
__('Hello %s, is today %s?', ['Bob', 'sunny']);
// Object
__('Hello {{name}}, is today {{weather}}?', { name:'Bob', weather: 'sunny' });

```

##### Phrase Notation

::: gengo

```javascript
// ロケールを === 'ja'に仮定すると:

// 基本的なフレーズは「こんにちは」に戻ります
__('Hello');

// 基本的なフレーズとsprintfは「Bob こんにちは」に戻ります
__('Hello %s', 'Bob');

//　基本的なフレーズと文字列補完は 「Bob こんにちは」に戻ります
 __('Hello {{name}}', {name:'Bob'});
```

:::

##### Bracket Notation

::: gengo

```javascript
// ロケールを === 'ja'に仮定すると:

// 基本的なブラケットフレーズは「こんにちは」に戻ります
__('[Hello]');

// 基本的なブラケットフレーズとネストされたキーは「おっす」に戻ります
__('[Hello].informal');

// 基本的なブラケットフレーズとネストされたキーとsprintfは「おっす、Bob」に戻ります
__('[Hello %].informal', 'Bob');

// 基本的なブラケットフレーズとネストされたキーと文字列補完は「おっす、Bob」に戻ります
__('[Hello {{name}}].informal', {name:'Bob'});
```

:::

##### Dot Notation

::: gengo

```javascript
// ロケールを === 'ja'に仮定すると:

// 基本的なドットフレーズは「おっす」に戻ります
__('greeting.hello.informal');

// 基本的なドットフレーズとsprintfは「Bob、 おっす」に戻ります
__('greeting.hello.person.informal', 'Bob');

// 基本的なドットフレーズと文字列補完は「Bob、おっす」に戻ります
__('greeting.hello.person.informal', { name:'Bob' });
```

:::

#### Message Format

::: gengo
ことばの複数回また物の数はサポートされていないため、デフォルトのパーサは、問題を克服するために、[message-format](https://github.com/format-message/message-format)を使用しています。
:::

::: gengo
message-formatを使用するには、APIまたはオプションでを使用してパーサーを設定します。
:::

::: gengo

```javascript
// ロケールを === 'en-us'に仮定すると:

// 基本的なフレーズとメッセージ・フォーマットは
// 「You took 4,000 pictures since Jan 1, 2015 9:33:04 AM」に戻ります
__('You took {n,number} pictures since {d,date} {d,time}', { n:4000, d:new Date() }, { parser: 'format' });

// 基本的なブラケットフレーズとメッセージ・フォーマットは
//「You took 4,000 pictures since Jan 1, 2015 9:33:04 AM」に戻ります
__('[You took {n,numbers} pictures].since.date', { n:4000, d:new Date() }, { parser: 'format' });

// 基本的なドットフレーズとメッセージ・フォーマットは
//「You took 4,000 pictures since Jan 1, 2015 9:33:04 AM」に戻ります
__('pictures.since.date', { n:4000, d:new Date() }, { format: 'parser' });
```

:::

## l10n

### API

::: gengo
次のAPIは、デフォルトのローカライゼーションのプラグインに関します。 開発者のプラグインのドキュメントを参照してください。
:::


::: gengo

```javascript
// 現在のロケールで、日付、時刻、数値、またはMomentのインスタンスを返します
__l().[API Method]()
// 指定されたロケールでの日付、時刻、数値、またはMomentのインスタンスを返します
__l(locale: String).[API Method]()
```
:::

#### `date()`

::: gengo

```javascript
// Tokeiのインスタンスを返します
__l().date();
```

:::

#### `time()`

::: gengo

```javascript
// Tokeiのインスタンスを返します
__l().time();
```

:::

#### `number()`

::: gengo

```javascript
// Tokeiのインスタンスを返します
__l().number();
```

:::

#### `moment()`

::: gengo

```javascript
// Momentのインスタンスを返します
__l().moment();
```

:::


#### `now()`

::: gengo

```javascript

// 現在の日付を返します
__l().date().now();
// 現在の時刻を返します
__l().time().now();

```

:::

#### `format()`


::: gengo

```javascript
// 日付をフォーマットします
__l().date().format(/* date: Date */);
// 時刻をフォーマットします
__l().time().format(/* date: Date */);
// 数値をフォーマットします
__l().number().format(/* number: Number */);
```

:::