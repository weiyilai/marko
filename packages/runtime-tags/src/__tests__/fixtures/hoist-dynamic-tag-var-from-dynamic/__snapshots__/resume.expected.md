# Render `{"show":true}`

```html
<html>
  <head />
  <body>
    <!--M_[3-->
    <!--M_[4-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*4 #div/0-->
    <!--M_]3 #text/0-->
    <!--M_]2 #text/0-->
    <!--M_[6-->
    <!--M_[7-->
    <div>
      Hoist from custom tag
    </div>
    <!--M_*7 #div/0-->
    <!--M_]6 #text/0-->
    <!--M_]2 #text/1-->
    <!--M_[9-->
    <!--M_[10-->
    <!--M_[12-->
    <!--M_[13-->
    <div>
      Hoist from dynamic tag
    </div>
    <!--M_*13 #div/0-->
    <!--M_]12 #text/0-->
    <!--M_]11 #text/0-->
    <!--M_[15-->
    <!--M_[16-->
    <div />
    <!--M_*16 #div/0-->
    <!--M_]15 #text/0-->
    <!--M_]11 #text/1-->
    <!--M_]9 #text/0-->
    <!--M_[18-->
    <!--M_[20-->
    <!--M_[21-->
    <div />
    <!--M_*21 #div/0-->
    <!--M_]20 #text/0-->
    <!--M_]19 #text/0-->
    <!--M_[23-->
    <!--M_[24-->
    <div />
    <!--M_*24 #div/0-->
    <!--M_]23 #text/0-->
    <!--M_]19 #text/1-->
    <!--M_]9 #text/1-->
    <!--M_]1 #text/1-->
    <section>
      <!--M_[28-->
      <div>
        Hoist from dynamic tag
      </div>
      <!--M_*28 #div/0-->
      <!--M_]27 #text/0-->
    </section>
    <!--M_|1 #text/2 26-->
    <script>
      WALKER_RUNTIME("M")("_");M._.r=[_=&gt;(_.t={1:_.a={"1!":_.u=new Set,"2!":_.w=new Set,"#text/1!":_.f={"#text/0!":_.g={"3!":_.v=new Set},"#text/0(":"__tests__/template.marko_2_renderer","#text/1!":_.l={"3!":_.x=new Set},"#text/1(":"__tests__/template.marko_2_renderer"},"#text/1(":"__tests__/tags/thing.marko","4!":_.y=new Set,"#text/2!":_.q={},"#text/2(":"section"},2:{"#text/0!":_.b={"#scopeOffset/1":5,"#text/0!":_.c={},"#text/0(":"__tests__/tags/child.marko",setHtml:_._["__tests__/tags/child.marko_0/_return"](_.c)},"#text/0(":"__tests__/template.marko_1_renderer","#text/1!":_.d={"#scopeOffset/1":8,"#text/0!":_.e={},"#text/0(":"__tests__/tags/child.marko",setHtml:_._["__tests__/tags/child.marko_0/_return"](_.e)},"#text/1(":"__tests__/template.marko_1_renderer"},3:_.b,4:_.c,6:_.d,7:_.e,9:_.f,10:_.g,11:{"#text/0!":_.h={"#scopeOffset/1":14,"#text/0!":_.i={},"#text/0(":"__tests__/tags/child.marko",setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.i)},"#text/0(":"__tests__/template.marko_3_renderer","#text/1!":_.j={"#scopeOffset/1":17,"#text/0!":_.k={},"#text/0(":"__tests__/tags/child.marko",setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.k)},"#text/1(":"__tests__/template.marko_3_renderer"},12:_.h,13:_.i,15:_.j,16:_.k,18:_.l,19:{"#text/0!":_.m={"#scopeOffset/1":22,"#text/0!":_.n={},"#text/0(":"__tests__/tags/child.marko",setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.n)},"#text/0(":"__tests__/template.marko_3_renderer","#text/1!":_.o={"#scopeOffset/1":25,"#text/0!":_.p={},"#text/0(":"__tests__/tags/child.marko",setHtml2:_._["__tests__/tags/child.marko_0/_return"](_.p)},"#text/1(":"__tests__/template.marko_3_renderer"},20:_.m,21:_.n,23:_.o,24:_.p,26:_.q,27:_.r={"#scopeOffset/1":29,"#text/0!":_.s={},"#text/0(":"__tests__/tags/child.marko",setHtml3:_._["__tests__/tags/child.marko_0/_return"](_.s)},28:_.s},_.a._hoisted_setHtml=_._["__tests__/template.marko_0__hoisted_setHtml/hoist"](_.a),_.c["/"]=_._["__tests__/template.marko_1_setHtml/var"](_.b),_.e["/"]=_._["__tests__/template.marko_1_setHtml/var"](_.d),_.i["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.h),_.k["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.j),_.n["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.m),_.p["/"]=_._["__tests__/template.marko_3_setHtml2/var"](_.o),_.s["/"]=_._["__tests__/template.marko_4_setHtml3/var"](_.r),(_.u).add(_.b),(_.u).add(_.d),(_.v).add(_.h),(_.v).add(_.j),(_.w).add(_.g),(_.x).add(_.m),(_.x).add(_.o),(_.w).add(_.l),(_.y).add(_.r),_.t),1,"__tests__/template.marko_0",1,"__tests__/template.marko_0__hoisted_setHtml",0];M._.w()
    </script>
  </body>
</html>
```

# Mutations
```
REMOVE html/body/#comment1 after html/body/#comment0
INSERT html/body/#comment1
INSERT html/body/#text0
REMOVE html/body/#comment0 before html
INSERT html/body/#comment0
INSERT html/body/#text1
INSERT html/body/#text2
INSERT html/body/#text3
INSERT html/body/#text4
INSERT html/body/#text5
INSERT html/body/#text6
INSERT html/body/#text7
INSERT html/body/#text8
INSERT html/body/div2/#text
INSERT html/body/section/div/#text
INSERT html/body/div0/#text
INSERT html/body/div1/#text
```