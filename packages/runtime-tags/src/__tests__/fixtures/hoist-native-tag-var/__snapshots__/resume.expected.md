# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div
      class="child0 child1"
    >
      Hello World
    </div>
    <!--M_*3 #div/0-->
    <!--M_|2 #text/0 3-->
    <!--M_]1 #text/0-->
    <hr />
    <div>
      Hello World
    </div>
    <!--M_*6 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.g=[0,_.a={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.b={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.d={}},"ConditionalScope:#text/2":_.f={},input_show:!0,"#childScope/1":_.e={input:_.c={}}},_.b,_.d,{input:{value:_._["__tests__/template.marko_2/#div"](_.d)}},_.e,_.f],_.b._=_.a,_.c.value=_._["__tests__/template.marko_0_$hoisted_el/hoist"](_.a),_.g),4,"__tests__/tags/child.marko_0_input",5,"__tests__/tags/child.marko_0_input",1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
UPDATE html/body/div0[class] null => "child0 child1"
UPDATE html/body/div0[class] "child0" => "child0 child1"
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```