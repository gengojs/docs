## API

::: gengo
The following API is respect to the default plugins and may vary. Please refer the the developer's plugin page.
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
                		<li class="gengo">The phrase to look for in the requested locale.</li>
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
                		<li class="gengo">The phrase to look for in the requested locale.</li>
                		<li class="gengo">The locale to override.</li>
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
When you pass a phrase, there are three notations that can be used to tell gengo how to look up your definitions. See Dictionary for setup.
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
                        <li class="gengo">Searches for the definition directly, assuming there are no sub-keys for the phrase in your dictionary.</li>
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
                        <li class="gengo">Searches for the definition assuming a phrase may contain a sub-key or a key that is dotted and may also contain a sub-key.</li>
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
                        <li class="gengo">Searches for the definition by searching the dictionary's object in a dotted way.</li>
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