# Render `{"x":true}`

```html
<html>
  <head />
  <body>
    <!--M_[3-->
    Hello
    <!--M_]2 #text/0-->
    <div>
      1
      <!--M_*2 #text/1-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.c=[0,{"#childScope/0":_.a={"ConditionalScope:#text/0":_.b={},"ConditionalRenderer:#text/0":"__tests__/template.marko_1_renderer"}},_.a,_.b])]
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
```