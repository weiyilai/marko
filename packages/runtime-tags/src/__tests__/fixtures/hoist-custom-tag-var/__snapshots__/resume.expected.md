# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[2-->
    <div>
      Hello world
    </div>
    <!--M_*4 #div/0-->
    <!--M_|2 #text/0 3-->
    <!--M_]1 #text/0-->
    <div>
      Hello world
    </div>
    <!--M_*8 #div/0-->
    <div>
      Hello world
    </div>
    <!--M_*11 #div/0-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.k=[0,_.c={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.d={"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={"#scopeOffset/1":5,"#childScope/0":_.b={}}},"ConditionalScope:#text/2":_.e={"#scopeOffset/1":9,"#childScope/0":_.f={}},"ConditionalScope:#text/3":_.g={"#scopeOffset/1":12,"#childScope/0":_.h={}},"ConditionalScope:#text/4":_.i={},input_show:!0,"#childScope/1":_.j={}},_.d,_.a,_.b,1,_.j,_.e,_.f,1,_.g,_.h,1,_.i],_.b["#TagVariable"]=_._["__tests__/template.marko_2_setHtml/var"](_.a),_.a.setHtml=_._["__tests__/tags/child.marko_0/_return"](_.b),_.d._=_.i._=_.c,_.f["#TagVariable"]=_._["__tests__/template.marko_3_setHtml2/var"](_.e),_.e.setHtml2=_._["__tests__/tags/child.marko_0/_return"](_.f),_.h["#TagVariable"]=_._["__tests__/template.marko_4_setHtml3/var"](_.g),_.g.setHtml3=_._["__tests__/tags/child.marko_0/_return"](_.h),_.j.input_value=_._["__tests__/template.marko_0_$hoisted_setHtml/hoist"](_.c),_.k),6,"__tests__/tags/thing.marko_0_input_value",13,"__tests__/template.marko_5",1,"__tests__/template.marko_0"];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html/body/#text
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/div2/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```