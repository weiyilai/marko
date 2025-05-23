# Render `{"comments":[{"text":"Hello World","comments":[{"text":"testing 123"}]},{"text":"Goodbye World"}]}`

```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,2,{open:!0},2,{open:!0},{open:!0}]),"__tests__/tags/comments.marko_1_open",6,3,7];M._.w()
    </script>
  </body>
</html>
```


# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<html>
  <head />
  <body>
    <ul>
      <li
        hidden=""
        id="c-0"
      >
        <span>
          Hello World
        </span>
        <button>
          [+]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,2,{open:!0},2,{open:!0},{open:!0}]),"__tests__/tags/comments.marko_1_open",6,3,7];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li0[hidden] null => ""
UPDATE html/body/ul/li0/button/#text "[-]" => "[+]"
```

# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            id="c-0-0"
          >
            <span>
              testing 123
            </span>
            <button>
              [-]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,2,{open:!0},2,{open:!0},{open:!0}]),"__tests__/tags/comments.marko_1_open",6,3,7];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li0[hidden] "" => null
UPDATE html/body/ul/li0/button/#text "[+]" => "[-]"
```

# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            hidden=""
            id="c-0-0"
          >
            <span>
              testing 123
            </span>
            <button>
              [+]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [-]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,2,{open:!0},2,{open:!0},{open:!0}]),"__tests__/tags/comments.marko_1_open",6,3,7];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li0/ul/li[hidden] null => ""
UPDATE html/body/ul/li0/ul/li/button/#text "[-]" => "[+]"
```

# Render
```js
container.querySelector(`#c-${id} > button`).click();
```
```html
<html>
  <head />
  <body>
    <ul>
      <li
        id="c-0"
      >
        <span>
          Hello World
        </span>
        <button>
          [-]
          <!--M_*3 #text/3-->
        </button>
        <!--M_*3 #button/2-->
        <ul>
          <li
            hidden=""
            id="c-0-0"
          >
            <span>
              testing 123
            </span>
            <button>
              [+]
              <!--M_*6 #text/3-->
            </button>
            <!--M_*6 #button/2-->
          </li>
          <!--M_*6 #li/0-->
        </ul>
      </li>
      <!--M_*3 #li/0-->
      <li
        hidden=""
        id="c-1"
      >
        <span>
          Goodbye World
        </span>
        <button>
          [+]
          <!--M_*7 #text/3-->
        </button>
        <!--M_*7 #button/2-->
      </li>
      <!--M_*7 #li/0-->
    </ul>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,2,{open:!0},2,{open:!0},{open:!0}]),"__tests__/tags/comments.marko_1_open",6,3,7];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
UPDATE html/body/ul/li1[hidden] null => ""
UPDATE html/body/ul/li1/button/#text "[-]" => "[+]"
```