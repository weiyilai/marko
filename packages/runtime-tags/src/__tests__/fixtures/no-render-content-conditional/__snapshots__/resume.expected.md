# Render `{"foo":"bar"}`

```html
<html>
  <head />
  <body>
    <div>
      bar
    </div>
    <!--M_*1 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.e=[0,_.a={"#childScope/1":_.c={"#scopeOffset/1":4,input:_.b={foo:"bar"},x:"bar","#childScope/0":_.d={}}},_.c,_.d],_.b.output=_._["__tests__/template.marko_0/#div"](_.a),_.d["#TagVariable"]=_._["__tests__/tags/child.marko_0_x/var"](_.c),_.e),2,"__tests__/tags/child.marko_0_input_x"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/div/#text
```