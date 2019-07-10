import { storiesOf } from '@storybook/html'
import { TabItem, TabBar } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/tabs.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('tab-item', TabItem)
window.customElements.define('rs-tab-bar', TabBar)

storiesOf('Components|Tabs', module)
  .addDecorator(withLinks)
  .add('概要', () => {
    return `
      <h4>Tabs</h4>
      <p>
        タブはグループ分けされたコンテンツを表示する時に用いられる。<br>
        タブのラベルは、コンテンツの分類を簡潔に示す。
      </p>
      <p>
        参考:
        <a href="https://material.io/design/components/tabs.html#">
          https://material.io/design/components/tabs.html#
        </a>
      </p>
    `
  })
  .add('使用方法', () => {
    return `
      <h4>使用方法</h4>
      <div class="result">
        <rs-tab-bar class="tab-bar">
          <tab-item class="tab" activated>tab1</tab-item>
          <tab-item class="tab">tab2</tab-item>
          <tab-item class="tab">tab3</tab-item>
        </rs-tab-bar>
      </div>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      <h4>HTML要素</h4>
      <p>custom elementsを<code>rs</code>と<code>tab</code>のプレフィックスをつけて定義した前提です。<br>
        下記HTML要素を使うことで、custom elementsが表示されます。
      </p>
      <table>
        <tr>
          <th>要素名</th>
          <th>説明</th>
          <th>許可されている子要素</th>
          <th>備考</th>
        </tr>
        <tr>
          <td>rs-tab-bar</td>
          <td>タブバー本体を表示します</td>
          <td><code>tab-item</code></td>
          <td>-</td>
        </tr>
        <tr>
          <td>rs-tab-bar</td>
          <td>タブを表示します</td>
          <td>テキスト</td>
          <td>-</td>
        </tr>
      </table>
      <h4>HTML属性</h4>
      <p>下記HTML属性をつけることで、custom elementsの状態が変化します</p>
      <table>
        <tr>
          <th>属性</th>
          <th>説明</th>
          <th>タイプ</th>
          <th>備考</th>
        </tr>
        <tr>
          <td>activated</td>
          <td>タブを活性化状態にします</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
      </table>
    `
  })

storiesOf('Components|Tabs/スタイルのカスタマイズ', module)
  .add('テキストの色を変える', () => {
    return `
      <p>テキストの色を指定した色に変える。</p>
      <rs-tab-bar class="tab-bar -ink-aqua">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-ink-color($color);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -ink-aqua">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-ink-aqua {
    @include rs-tab-ink-color(aqua);
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: インクの色コード <br> 例）#ee00ce</li>
      </ul>
    `
  })
  .add('選択状態のテキストの色を変える', () => {
    return `
      <p>選択状態のテキストの色を指定した色に変える。</p>
      <rs-tab-bar class="tab-bar -activated-aqua">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-activated-color($color);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -activated-aqua">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-activated-aqua {
    @include rs-tab-activated-ink-color(aqua);
    @include rs-tab-indicator-color(aqua);
  }
}`,
        { lang: 'scss' }
      )}
    `
  })
  .add('リップルの色を変える', () => {
    return `
      <p>リップルの色を指定した色に変える。</p>
      <rs-tab-bar class="tab-bar -ripple-dark">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-states-color($color);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -ripple-dark">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-group {
  &.-ripple-dark  {
    @include rs-tab-states-color(gray);
  }
}`,
        { lang: 'scss' }
      )}
    `
  })
  .add('タブの下線の色を変える', () => {
    return `
      <p>タブの下線の色を指定した色に変える。</p>
      <rs-tab-bar class="tab-bar -indicator -orange">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-indicator-color($color);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -indicator -orange">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-indicator.-orange {
    @include rs-tab-indicator-color(orange);
    @include rs-tab-activated-ink-color(orange);
  }
}`,
        { lang: 'scss' }
      )}
    `
  })
  .add('タブの下線の太さを変える', () => {
    return `
      <p>タブの下線の太さを指定した太さに変える。</p>
      <rs-tab-bar class="tab-bar -indicator -thick">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-indicator-height($height);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        `<rs-tab-bar class="tab-bar -indicator -thick">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: "html" }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-indicator.-thick {
    @include rs-tab-indicator-height(4px);
  }
}`,
        { lang: "scss" }
      )}
      <p>オプション</p>
      <ul>
        <li>$height: 線の太さを指定 <br> デフォルトは2px</li>
      </ul>
    `;
  })
  .add('タブの下線幅をテキスト幅に合わせる', () => {
    return `
      <p>タブの下線幅をテキストの幅に合わせる。</p>
      <rs-tab-bar class="tab-bar -indicator -fixed-width">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-indicator-width-fixed-contents;`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -indicator -fixed-width">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-indicator.-fixed-width {
    @include rs-tab-indicator-width-fixed-contents;
  }
}`,
        { lang: 'scss' }
      )}
    `
  })
  .add('タブバーの幅を変える', () => {
    return `
    <p>タブバーの幅を指定した幅に変える。</p>
    <rs-tab-bar class="tab-bar -bar -width">
      <tab-item class="tab" activated>tab1</tab-item>
      <tab-item class="tab">tab2</tab-item>
      <tab-item class="tab">tab3</tab-item>
    </rs-tab-bar>
    </p>
    <h4>使用するmixin</h4>
    ${copyCodeBlock(
      `@include rs-tab-bar-width($width);`,
      { lang: 'scss' }
    )}
    <h4>使用方法</h4>
    ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -bar -width">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
      { lang: 'html' }
    )}
    ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-bar.-width {
    @include rs-tab-bar-width(200px);
  }
}`,
      { lang: 'scss' }
    )}
    <p>オプション</p>
    <ul>
      <li>$width: 横幅のサイズを変える</li>
    </ul>
    `
  })
  .add('タブ幅を変える', () => {
    return `
      <p>
        タブの幅を指定した幅に変える。 <br>
        （タブ幅が全て固定になる）
      </p>
      <rs-tab-bar class="tab-bar -tab -width">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-fixed-width($width);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -tab -width">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-tab.-width {
    @include rs-tab-fixed-width(100px);
  }
}`,
        { lang: 'scss' }
      )}
    `;
  })
  .add('タブ全体の位置を変える', () => {
    return `
      <p>タブ全体の位置を指定した位置に変える。(タブ幅を変更した時有効)</p>
      <rs-tab-bar class="tab-bar -bar -position">
        <tab-item class="tab" activated>tab1</tab-item>
        <tab-item class="tab">tab2</tab-item>
        <tab-item class="tab">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-bar-position($position);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar -bar -position">
    <tab-item class="tab" activated>tab1</tab-item>
    <tab-item class="tab">tab2</tab-item>
    <tab-item class="tab">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  &.-bar.-position {
    @include rs-tab-fixed-width(90px);
    @include rs-tab-bar-position(align-center);
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $position: 位置の指定 <br>
          align-startとalign-endとalign-centerがある<br>
        （ デフォルトはalign-start ）
        </li>
      </ul>
    `
  })
  .add('アイコンをつける', () => {
    return `
      <p>タブの横に指定したアイコンを表示させる。</p>
      <rs-tab-bar class="tab-bar">
        <tab-item class="tab -cut" activated>tab1</tab-item>
        <tab-item class="tab -copy">tab2</tab-item>
        <tab-item class="tab -star">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-icon-image($icon, $codepoint: \'\');`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar">
    <tab-item class="tab -cut" activated>tab1</tab-item>
    <tab-item class="tab -copy">tab2</tab-item>
    <tab-item class="tab -star">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  > .tab.-cut {
    @include rs-tab-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));
  }
  > .tab.-copy {
    @include rs-tab-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));
  }
  > .tab.-star {
    @include rs-tab-icon-image(Material Icons, map-get($material-icons-codepoints, stars));
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $icon: アイコン画像の指定、もしくはfont-familyの指定<br>
          例)<br>
          ・url('http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png')<br>
          ・Material Icons
        </li>
        <li>
          $codepoint: icon-fontのコードポイント(icon-fontを使用する際必須)<br> 
          例)<br>
          ・e84d
        </li>
      </ul>
    `
  })
  .add('アイコンの位置を変える', () => {
    return `
      <p>アイコンの位置を指定した位置に変える。</p>
      <rs-tab-bar class="tab-bar -position">
        <tab-item class="tab -cut" activated>tab1</tab-item>
        <tab-item class="tab -copy">tab2</tab-item>
        <tab-item class="tab -star">tab3</tab-item>
      </rs-tab-bar>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        `@include rs-tab-icon-position($position);`,
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
`<rs-tab-bar class="tab-bar">
    <tab-item class="tab -cut" activated>tab1</tab-item>
    <tab-item class="tab -copy">tab2</tab-item>
    <tab-item class="tab -star">tab3</tab-item>
</rs-tab-bar>`,
        { lang: 'html' }
      )}
      ${copyCodeBlock(
`@import \'@rsmdc/tabs/rs-tabs.scss\';

.tab-bar {
  > .-tab.-star {
    @include rs-tab-icon-image(Material Icons, map-get($material-icons-codepoints, stars));
    @include rs-tab-icon-position(right);
  }
}`,
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>
          $position: アイコンの位置を指定<br>
          leftとrightとcenterがある（ デフォルトはleft ）<br>
          アイコンのみの時は不要
        </li>
      </ul>
    `
  })
