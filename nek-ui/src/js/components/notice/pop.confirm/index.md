---
title: 确认提示
---

## 代码演示

### 基本形式

<!-- demo_start -->
<div class="m-example"></div>

```xml
<pop.confirm content="Are you sure delete this task?"><span>删除</span></pop.confirm>
```

```javascript
var component = new NEKUI.Component({
    template: template
});
```
<!-- demo_end -->

### 事件(打开console, 查看输出)

<!-- demo_start -->
<div class="m-example"></div>

```xml
<pop.confirm content="Are you sure delete this task?" on-ok={this.onok()}>
    <button class="u-btn">保存提交</button>
</pop.confirm>
```

```javascript
var component = new NEKUI.Component({
    template: template,
    onok: function() {
        console.log(123);
    }
});
```
<!-- demo_end -->

### 自定义模板(打开console, 查看输出)

<!-- demo_start -->
<div class="m-example"></div>

```xml
<pop.confirm contentTemplate={testTemplate} on-ok={this.onok($event)}>
    <button class="u-btn">保存提交</button>
</pop.confirm>
```

```javascript
var component = new NEKUI.Component({
    template: template,
    config: function() {
        this.data.testTemplate = '<form.item ref="validation" title="备注" required row><ui.textarea required showTip=false value={remark} height=50 /></form.item>';
    },
    onok: function(json) {
        console.log(json.data.remark);
        console.log(json.sender);
    }
});
```
<!-- demo_end -->

### 位置

<!-- demo_start -->
<div class="m-example"></div>

```xml
<div class="g-row">
    <pop.confirm content="pop.confirm箭头的位置在中间" placement="top"><ui.button title="top" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在左边" placement="topLeft"><ui.button title="topLeft" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在右边" placement="topRight"><ui.button title="topRight" /></pop.confirm>
</div>
<div class="g-row">
    <pop.confirm content="pop.confirm箭头的位置在中间" placement="left"><ui.button title="left" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在上边" placement="leftTop"><ui.button title="leftTop" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在下边" placement="leftBottom"><ui.button title="leftBottom" /></pop.confirm>
</div>
<div class="g-row">
    <pop.confirm content="pop.confirm箭头的位置在中间" placement="right"><ui.button title="right" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在上边" placement="rightTop"><ui.button title="rightTop" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在下边" placement="rightBottom"><ui.button title="rightBottom" /></pop.confirm>
</div>
<div class="g-row">
    <pop.confirm content="pop.confirm箭头的位置在中间" placement="bottom"><ui.button title="bottom" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在左边" placement="bottomLeft"><ui.button title="bottomLeft" /></pop.confirm>
    <pop.confirm content="pop.confirm箭头的位置在右边" placement="bottomRight"><ui.button title="bottomRight" /></pop.confirm>
</div>
```

```javascript
var component = new NEKUI.Component({
    template: template
});
```
<!-- demo_end -->
