# Render
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    0
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
INSERT div
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    1
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
UPDATE div/button2/#text "0" => "1"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    2
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
UPDATE div/button2/#text "1" => "2"
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <!---->
   hello
</div>
```

# Mutations
```
INSERT div/#text0
REMOVE button after div/#text0
```

# Render
```js
container.querySelector("#inner").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    2
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
INSERT div/button2
REMOVE #text after div/button2
UPDATE div/button2/#text " " => "2"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
UPDATE div/button2/#text "2" => "3"
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
   hello
</div>
```

# Mutations
```
INSERT div/#text0
REMOVE button after div/#text0
REMOVE button after div/#text0
REMOVE #comment after div/#text0
```

# Render
```js
container.querySelector("#outer").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    3
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
INSERT div/button1, #text, div/#comment
REMOVE #text after div/#comment
INSERT div/button2
REMOVE #text after div/button2
UPDATE div/button2/#text " " => "3"
```

# Render
```js
container.querySelector("#count").click();
```
```html
<div>
  <button
    id="outer"
  />
  <button
    id="inner"
  />
  <button
    id="count"
  >
    4
  </button>
  <!---->
   hello
</div>
```

# Mutations
```
UPDATE div/button2/#text "3" => "4"
```