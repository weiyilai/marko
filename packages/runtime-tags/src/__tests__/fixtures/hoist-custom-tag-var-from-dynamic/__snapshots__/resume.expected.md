# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <!--M_]2 #text/0-->
    <!--M_[6-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*7 #div/0-->
    <!--M_]2 #text/1-->
    <!--M_[9-->
    <!--M_[10-->
    <!--M_[12-->
    <div>
      Hoist from dynamic tag
    </div>
    <!--M_*13 #div/0-->
    <!--M_]11 #text/0-->
    <!--M_[15-->
    <div />
    <!--M_*16 #div/0-->
    <!--M_]11 #text/1-->
    <!--M_]9 #text/0-->
    <!--M_[18-->
    <!--M_[20-->
    <div />
    <!--M_*21 #div/0-->
    <!--M_]19 #text/0-->
    <!--M_[23-->
    <div />
    <!--M_*24 #div/0-->
    <!--M_]19 #text/1-->
    <!--M_]9 #text/1-->
    <!--M_]1 #text/1-->
    <section>
      <div>
        Hoist from dynamic tag
      </div>
      <!--M_*28 #div/0-->
    </section>
    <!--M_|1 #text/2 26-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.t={1:_.a={"1!":_.u=new Set,"2!":_.w=new Set,"#text/1!":_.f={"#text/0!":_.g={"3!":_.v=new Set},"#text/0(":"__tests__/template.marko_2_renderer","#text/1!":_.l={"3!":_.x=new Set},"#text/1(":"__tests__/template.marko_2_renderer"},"#text/1(":"__tests__/tags/thing.marko","4!":_.y=new Set,"#text/2!":_.q={},"#text/2(":"section"},2:{"#text/0!":_.b={"#scopeOffset/1":5,"#childScope/0":_.c={},setHtml:_._["__tests__/tags/child.marko_0/_return"](_.c)},"#text/0(":"__tests__/template.marko_1_renderer","#text/1!":_.d={"#scopeOffset/1":8,"#childScope/0":_.e={},setHtml:_._["__tests__/tags/child.marko_0/_return"](_.e)},"#text/1(":"__tests__/template.marko_1_renderer"},3:_.b,4:_.c,6:_.d,7:_.e,9:_.f,10:_.g,11:{"#text/0!":_.h={"#scopeOffset/1":14,"#childScope/0":_.i={},setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.i)},"#text/0(":"__tests__/template.marko_3_renderer","#text/1!":_.j={"#scopeOffset/1":17,"#childScope/0":_.k={},setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.k)},"#text/1(":"__tests__/template.marko_3_renderer"},12:_.h,13:_.i,15:_.j,16:_.k,18:_.l,19:{"#text/0!":_.m={"#scopeOffset/1":22,"#childScope/0":_.n={},setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.n)},"#text/0(":"__tests__/template.marko_3_renderer","#text/1!":_.o={"#scopeOffset/1":25,"#childScope/0":_.p={},setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.p)},"#text/1(":"__tests__/template.marko_3_renderer"},20:_.m,21:_.n,23:_.o,24:_.p,26:_.q,27:_.r={"#scopeOffset/1":29,"#childScope/0":_.s={},setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.s)},28:_.s},_.a._hoisted_setHtml=_._["__tests__/template.marko_0__hoisted_setHtml/hoist"](_.a),_.c["/"]=_._["__tests__/template.marko_1_setHtml/var"](_.b),_.e["/"]=_._["__tests__/template.marko_1_setHtml/var"](_.d),_.i["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.h),_.k["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.j),_.n["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.m),_.p["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.o),_.s["/"]=_._["__tests__/template.marko_4_setHtml3/var"](_.r),(_.u).add(_.b),(_.u).add(_.d),(_.v).add(_.h),(_.v).add(_.j),(_.w).add(_.g),(_.x).add(_.m),(_.x).add(_.o),(_.w).add(_.l),(_.y).add(_.r),_.t),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0__hoisted_setHtml",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text0
INSERT html/body/#text1
INSERT html/body/#text2
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```