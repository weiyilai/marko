# Write
```html
  <!--M_[2-->Hello<!--M_]1 #text/0--><!--M_[3-->World<!--M_]1 #text/1--><div><!--M_[4-->B<!--M_]1 #div/2--></div><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.d=[0,{"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#div/2":1,"ConditionalScope:#div/2":_.c={},input_a:1,input_b:2,input_x:!1,input_y:!0},_.a,_.b,_.c])]</script>
```

# Render End
```html
<!--M_[2-->
<html>
  <head />
  <body>
    Hello
    <!--M_]1 #text/0-->
    <!--M_[3-->
    World
    <!--M_]1 #text/1-->
    <div>
      <!--M_[4-->
      B
      <!--M_]1 #div/2-->
    </div>
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.d=[0,{"ConditionalRenderer:#text/0":0,"ConditionalScope:#text/0":_.a={},"ConditionalRenderer:#text/1":0,"ConditionalScope:#text/1":_.b={},"ConditionalRenderer:#div/2":1,"ConditionalScope:#div/2":_.c={},input_a:1,input_b:2,input_x:!1,input_y:!0},_.a,_.b,_.c])]
    </script>
  </body>
</html>
```

# Mutations
```
INSERT #comment
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/#text0
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text1
INSERT html/body/#comment2
INSERT html/body/div
INSERT html/body/div/#comment0
INSERT html/body/div/#text
INSERT html/body/div/#comment1
INSERT html/body/script
INSERT html/body/script/#text
```