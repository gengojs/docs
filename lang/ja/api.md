## API

::: gengo
次のAPIは、デフォルトのプラグインに関してであるとは異なる場合があります。開発者のプラグインのページを参照してください。
:::

### Input

<div class="table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Data Type</th>
                <th>Option</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>String</td>
                <td>phrase</td>
                <td>
                	<ul>
                		<li class="gengo">phraseは、要求されたロケールで検索する。</li>
                	</ul>
                </td>
                <td>
                	<pre>
                		<code class="language-javascript">
                			__("phrase");
                		</code>
                	</pre>
                </td>
            </tr>
            <tr>
                <td>Object</td>
                <td>
                	<ul>
                		<li>phrase</li>
                		<li>locale</li>
                	</ul>
                <td>
                	<ul>
                		<li class="gengo">phraseは、要求されたロケールで検索する。</li>
                		<li class="gengo">ロケールが上書きされる。</li>
                	</ul>
                <td>
                	<pre>
						<code class="language-javascript">
							__({phrase:/*String, Array*/});
							__({locale:/*String*/});
                		</code>
                	</pre>
                </td>
            </tr>
        </tbody>
    </table>
</div>

### Notation

::: gengo
フレーズを挿入すると、その定義を見つける方法をgengoに伝えるために使用することができる3つの表記があります。セットアップのためのDictionaryを参照してください。
:::

<div class="table-responsive">
    <table class="table table-hover">
        <thead>
            <tr>
                <th>Notation</th>
                <th>Description</th>
                <th>Example</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Phrase</td>
                <td>
                    <ul>
                        <li class="gengo">辞書でフレーズのサブキーが存在しないと仮定すると、gengoは直接定義を検索します。</li>
                    </ul>
                </td>
                <td>
                    <pre>
                        <code class="language-javascript">
                            // Phrase
                            __("Hello World");
                        </code>
                    </pre>
                </td>
            </tr>
            <tr>
                <td>Brackets</td>
                <td>
                    <ul>
                        <li class="gengo">フレーズの中に、点が存在したり、キーのあとのサブキーまで含まれることを想定して、gengoは、定義を検索します。</li>
                    </ul>
                </td>
                <td>
                    <pre>
                        <code class="language-javascript">
                            // Phrase
                            __("[Hello World]");
                            // Phrase + subkey
                            __("[Hello World].subkey");
                            // Dotted key
                            __("[navbar.home]");
                            // Dotted key + subkey
                            __("[navbar.home].subkey");
                        </code>
                    </pre>
                </td>
            </tr>
            <tr>
                <td>Dot</td>
                <td>
                    <ul>
                        <li class="gengo">辞書の中のオブジェクトの意味をドット方によって、定義を検索します。</li>
                    </ul>
                </td>
                <td>
                <pre>
                    <code class="language-javascript">
                        // Dotted parsing
                        __("navbar.home.subkey");
                    </code>
                </pre>
                </td>
            </tr>
        </tbody>
    </table>
</div>