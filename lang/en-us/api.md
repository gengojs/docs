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
                		<li class="gengo">
                			The phrase to look for in the requested locale.
                		</li>
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