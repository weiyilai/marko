# Write
  <button class=inc>1<!--M_*1 #text/1-->,<!>10<!--M_*1 #text/2--></button><!--M_*1 #button/0--><!--M_[2--><div>Counts: 1,10</div><!--M_]1 #text/3--><script>WALKER_RUNTIME("M")("_");M._.r=[_=>(_.a=[0,{input_content:_._.$compat_renderBody,x:1,y:10}]),"__tests__/components/custom-tag.marko_0_x_y",1];M._.w()</script>

# Render End
```html
<html>
  <head />
  <body>
    <button
      class="inc"
    >
      1
      <!--M_*1 #text/1-->
      ,
      <!---->
      10
      <!--M_*1 #text/2-->
    </button>
    <!--M_*1 #button/0-->
    <!--M_[2-->
    <div>
      Counts: 1,10
    </div>
    <!--M_]1 #text/3-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.a=[0,{input_content:_._.$compat_renderBody,x:1,y:10}]),"__tests__/components/custom-tag.marko_0_x_y",1];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
INSERT html
INSERT html/head
INSERT html/body
INSERT html/body/button
INSERT html/body/button/#text0
INSERT html/body/button/#comment0
INSERT html/body/button/#text1
INSERT html/body/button/#comment1
INSERT html/body/button/#text2
INSERT html/body/button/#comment2
INSERT html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/div
INSERT html/body/div/#text
INSERT html/body/#comment2
INSERT html/body/script
INSERT html/body/script/#text
```