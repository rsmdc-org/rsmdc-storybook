import { storiesOf } from '@storybook/html'
import { Button } from '@rsmdc/rsmdc'
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs'
import { withLinks } from '@storybook/addon-links'
import copyCodeBlock from '@pickra/copy-code-block'

import './css/style.scss'
import './css/button.scss'
import 'highlight.js'
import 'highlight.js/styles/a11y-light.css'

window.customElements.define('x-button', Button)

storiesOf('Components|Button', module)
  .addDecorator(withLinks)
  .add('概要', () => {
    return `
      <h4>Button</h4>
      <p>
        ボタンを使用することで、ユーザーはアクションを実行したり選択することができる。
      </p>
      <p>
        参考:
        <a href="https://material.io/design/components/buttons.html">
          https://material.io/design/components/buttons.html
        </a>
      </p>
      <p>Buttonタイプ</p>
      <table>
        <tr>
          <th>タイプ</th>
          <th>概要</th>
          <th>重要度</th>
        </tr>
        <tr>
          <td>Flat</td>
          <td>画面の表面と同一平面上にあるテキストボタン</td>
          <td>低</td>
        </tr>
        <tr>
          <td>Outlined</td>
          <td>枠付きのボタン</td>
          <td>中</td>
        </tr>
        <tr>
          <td>Unelevated</td>
          <td>画面の表面と同一平面上にあるボタン</td>
          <td>中</td>
        </tr>
        <tr>
          <td>Raised</td>
          <td>浮きあったボタン</td>
          <td>高</td>
        </tr>
        <tr>
          <td>Fab</td>
          <td>（後述）</td>
          <td>最高</td>
        </tr>
      </table>
  
      <p>Buttonタイプ分ける基準</p>
      <ul>
        <li>1. テキストボタン<br>
            テキストボタンは通常、重要度の低いアクションに使用される。<br>
          <a class="link" href="#" data-sb-kind="Components|Button/スタイルのカスタマイズ/ボタンタイプを変える" data-sb-story="Flat(default)">参照はこちら</a>
        </li>
        <li>2. 枠線付きボタン <br> 
            枠線付きボタンは、テキストボタンよりも強調するために使用される。<br> 
          <a class="link" href="#" data-sb-kind="Components|Button/スタイルのカスタマイズ/ボタンタイプを変える" data-sb-story="Outlined">参照はこちら</a>
        </li>
        <li>3. 囲まれたボタン <br> 囲まれたボタンは塗りつぶしと影を使用するため、より強調させる。 <br> 
          <a class="link" href="#" data-sb-kind="Components|Button/スタイルのカスタマイズ/ボタンタイプを変える" data-sb-story="Raised">参照はこちら</a>
        </li>
      </ul>
      <p>FAB</p>
      <p>画面上で最も主要な部分に使用される。 <br>
        基本的に1ページ1つまで使うことが推奨されている。 <br>
        重要な部分のみ使用可能で、必要性がなければ使わなくても良い。
      </p>
    `
  })
  .add('使用方法', () => {
    return `
      <h4>使用方法</h4>
      <p>
        <span><x-button class="button">sample</x-button></span>
        <span><x-button class="button -dense">sample</x-button></span>
        <span><x-button class="button" disabled>sample</x-button></span>
      </p>
      ${copyCodeBlock(
        '<x-button class="button">flat</x-button>\n' +
        '<x-button class="button -dense">flat</x-button>\n' +
        '<x-button class="button" disabled>flat</x-button>\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.button {\n' +
        '  &.-dense {\n' +
        '    @include rs-button-type(dense);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <h4>HTML要素</h4>
      <p>custom elementsを<code>x</code>のプレフィックスをつけて定義した前提です。<br>
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
          <td>x-button</td>
          <td>ボタンを表示します</td>
          <td>テキスト</td>
          <td>-</td>
        </tr>
      </table>
      <h4>HTML属性</h4>
      <p>下記HTML属性をつけることで、custom elementsの状態が変化します。</p>
      <table>
        <tr>
          <th>属性</th>
          <th>説明</th>
          <th>タイプ</th>
          <th>備考</th>
        </tr>
        <tr>
          <td>disabled</td>
          <td>ボタンを無効にします</td>
          <td>Boolean</td>
          <td>-</td>
        </tr>
        <tr>
          <td>exited</td>
          <td>ボタンを非表示にします</td>
          <td>Boolean</td>
          <td>FABの時のみ使えます</td>
        </tr>
      </table>
    `
  })

storiesOf('Components|Button/スタイルのカスタマイズ/ボタンタイプを変える', module)
  .add('Flat (default)', () => {
    return `
      <h4>Flat</h4>
      <p>画面の表面と同一平面上にあるテキストボタン。</p>
      <p>
        <x-button class="button">normal</x-button>
        <x-button class="button -dense">dense</x-button>
        <x-button class="button" disabled>disabled</x-button>
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-type($type);\n' +
        '※denseにする時のみ',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      <p>Dense(小フォント)ボタンを作りたい時、<code>rs-button-type</code> の mixin に dense を追加します。<br>
      <code>@include rs-button-type(dense);</code> のようになります。</p>
      ${copyCodeBlock(
        '<x-button class="button">normal</x-button>\n' +
        '<x-button class="button -dense">dense</x-button>\n' +
        '<x-button class="button" disabled>disabled</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.button {\n' +
        '  &.-dense {\n' +
        '    @include rs-button-type(dense);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('Raised', () => {
    return `
      <h4>Raised</h4>
      <p>画面の表面から浮き上がったボタンにする。</p>
      <p>
        <x-button class="raised">normal</x-button>
        <x-button class="raised -dense">dense</x-button>
        <x-button class="raised" disabled>disabled</x-button>
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      <p>Raisedボタンを作るために、<code>@include rs-button-type(raised);</code> を使います。</p>
      <p>Dense(小フォント)ボタンを作りたい時、<code>rs-button-type</code> の mixin に dense を追加します。<br>
      <code>@include rs-button-type(raised, dense);</code> のようになります。</p>
      ${copyCodeBlock(
        '<x-button class="raised">normal</x-button>\n' +
        '<x-button class="raised -dense">dense</x-button>\n' +
        '<x-button class="raised" disabled>disabled</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.raised {\n' +
        '  @include rs-button-type(raised);\n\n' +
        '  &.-dense {\n' +
        '    @include rs-button-type(raised, dense);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('Unelevated', () => {
    return `
      <h4>Unelevated</h4>
      <p>画面の表面と同一平面上にあるボタンにする。</p>
      <p>
        <x-button class="unelevated">normal</x-button>
        <x-button class="unelevated -dense">dense</x-button>
        <x-button class="unelevated" disabled>disabled</x-button>
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      <p>Unelevatedボタンを作るために、<code>@include rs-button-type(unelevated);</code> を使います。</p>
      <p>Dense(小フォント)ボタンを作りたい時、<code>rs-button-type</code> の mixin に dense を追加します。<br>
      <code>@include rs-button-type(unelevated, dense);</code> のようになります。</p>
      ${copyCodeBlock(
        '<x-button class="unelevated">normal</x-button>\n' +
        '<x-button class="unelevated -dense">dense</x-button>\n' +
        '<x-button class="unelevated" disabled>disabled</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.unelevated {\n' +
        '  @include rs-button-type(unelevated);\n\n' +
        '  &.-dense {\n' +
        '    @include rs-button-type(unelevated, dense);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('Outlined', () => {
    return `
      <h4>Outlined</h4>
      <p>画面の表面と同一平面上にあり、枠付きボタンにする。</p>
      <p>
        <x-button class="outlined">normal</x-button>
        <x-button class="outlined -dense">dense</x-button>
        <x-button class="outlined -dense" disabled>disabled</x-button>
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      <p>Outlinedボタンを作るために、<code>@include rs-button-type(outlined);</code> を使います。</p>
      <p>Dense(小フォント)ボタンを作りたい時、<code>rs-button-type</code> の mixin に dense を追加します。<br>
      <code>@include rs-button-type(outlined, dense);</code> のようになります。</p>
      ${copyCodeBlock(
        '<x-button class="outlined">normal</x-button>\n' +
        '<x-button class="outlined -dense">dense</x-button>\n' +
        '<x-button class="outlined" disabled>disabled</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.outlined {\n' +
        '  @include rs-button-type(outlined);\n\n' +
        '  &.-dense {\n' +
        '    @include rs-button-type(outlined, dense);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .addDecorator(withKnobs)
  .add('FAB', () => {
    return `
      <h4>FAB (Floating Action Button)</h4>
      <p></p>
      <p>
        <x-button class="fab -normal"></x-button>
        <x-button class="fab -mini"></x-button>
        <x-button class="fab -extended -icon">mail</x-button>
        <x-button class="fab -extended" exited>exited</x-button>
        <x-button class="fab -normal -fixed"></x-button>
      </p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-type($type);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="fab -normal -fixed"></x-button>\n' +
        '<x-button class="fab -normal"></x-button>\n' +
        '<x-button class="fab -mini"></x-button>\n' +
        '<x-button class="fab -extended">mail</x-button>\n' +
        '<x-button class="fab -extended -icon">mail</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '.fab {\n' +
        '  @include rs-button-type(fab);\n\n' +
        '  &.-normal {\n' +
        '      @include rs-button-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n\n' +
        '    &.-fixed {\n' +
        '      @include rs-button-icon-image(url(\'https://cdn0.iconfinder.com/data/icons/thin-voting-awards/57/thin-231_star_favorite-512.png\'));\n' +
        '      @include rs-button-fab-fixed-bottom;\n' +
        '    }\n' +
        '  }\n\n' +
        '  &.-mini {\n' +
        '    @include rs-button-type(fab, mini);\n' +
        '    @include rs-button-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
        '  }\n' +
        '\n' +
        '  &.-extended {\n' +
        '    @include rs-button-type(fab, extended);\n' +
        '  }\n' +
        '\n' +
        '  &.-extended.-icon {\n' +
        '    @include rs-button-type(fab, extended);\n' +
        '    @include rs-button-icon-image(url(\'http://icons.iconarchive.com/icons/iconsmind/outline/512/Mail-icon.png\'));\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })

storiesOf('Components|Button/スタイルのカスタマイズ', module)
  .add('テキストの色を変える', () => {
    return `
      <p>テキストの色を指定した色に変える。</p>
      <p><x-button class="button -text-color">button</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-ink-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="button -text-color">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/button/rs-button.scss\';\n\n' +
        '.button {\n' +
        '  &.-text-color {\n' +
        '     @include rs-button-ink-color(brown);\n' +
        '     @include rs-button-states-color(brown);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: インクの色コード <br> 例）#ee00ce</li>
      </ul> 
    `
  })
  .add('背景色を変える', () => {
    return `
      <p>背景色を指定した色に変える。</p>
      <p><x-button class="button -background-color">button</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-container-fill-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="button -background-color">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/button/rs-button.scss\';\n\n' +
        '.button {\n' +
        '  &.-background-color {\n' +
        '    @include rs-button-type(unelevated);\n' +
        '    @include rs-button-ink-color(brown);\n' +
        '    @include rs-button-container-fill-color(beige);\n' +
        '    @include rs-states(brown);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: コンテナの色の塗りコード <br> 例）#ee00ce</li>
      </ul> 
    `
  })
  .add('リップルの色を変える', () => {
    return `
      <p>リップルの色を指定した色に変える。</p>
      <p><x-button class="button -states-color">button</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-states-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock( 
        '<x-button class="button -states-color">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock( 
        '@import \'@rsmdc/button/rs-button.scss\';\n\n' +
        '.button {\n' +
        '   &.-states-color {\n' + 
        '     @include rs-button-states-color(black);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('背景色からテキストとリップルの色を変える', () =>  {
    return `
      <p>
        背景色からテキストとリップルの色を変える。 <br>
        指定した背景色の色を元にテキストとリップルの色が自動調整される。
      </p>
      <x-button class="button -filled-accessible">button</x-button>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-filled-accessible($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock( 
        '<x-button class="button -filled-accessible">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/button/rs-button.scss\';\n\n' +
        '.button {\n' +
        '   &.-states-color {\n' + 
        '     @include rs-button-filled-accessible(black);\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
    `
  })
  .add('線の色を変える', () => {
    return `
      <p>境界線の色を指定した色に変える。</p>
      <p><x-button class="outlined -outline-color">button</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-outline-color($color);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="outlined -outline-color">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.outlined {\n' +
        '  @include rs-button-type(outlined);\n\n' +
        '  &.-outline-color {\n' +
        '     @include rs-button-outline-color(#0ba6e4);\n\n' +
        '     @include rs-button-ink-color(#0ba6e4);\n' +
        '     @include rs-button-states-color(#92cfe7);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$color: 線の色を指定 <br> 例）#ee00ce</li>
      </ul>
    `
  })
  .add('ボタンの角の丸みを変える', () => {
    return `
      <p>与えられた半径の大きさの丸い形状にボタンを設定する。</p>
      <p><x-button class="button -shape-radius">button</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-shape-radius($radius);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="button -shape-radius">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.button {\n' +
        '  &.-shape-radius {\n' +
        '    @include rs-button-shape-radius(30px);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$radius: 角の丸みのサイズを指定 <br> 例）15px</li>
        <li>$rtl-reflexive を true にする（デフォルトは false）と RTL コンテキスト において半径の値を反転する。</li>
      </ul>
    `
  })
  .add('ボタン内の横幅の余白を変える', () => {
    return `
      <p>指定した大きさに水平方向のパディングを設定する。</p>
      <p><x-button class="button -horizontal-padding">button</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-horizontal-padding($padding);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="button -horizontal-padding">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.button {\n' +
        '  &.-horizontal-padding {\n' +
        '    @include rs-button-horizontal-padding(30px);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$padding: 水平方向の大きさ</li>
      </ul>
    `
  })
  .add('線の太さを変える', () => {
    return `
      <p>境界線の太さを指定したサイズに変える。</p>
      <x-button class="outlined -outline-width">button</x-button>
      <x-button class="outlined -outline-width -horizontal-padding">button</x-button>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-outline-width($width);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="outlined -outline-width">button</x-button>\n' +
        '<x-button class="outlined -outline-width -horizontal-padding">button</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/css/rs-button.scss\';\n\n' +
        '.outlined {\n' +
        '  @include rs-button-type(outlined);\n\n' +
        '  &.-outline-width {\n' +
        '    @include rs-button-outline-width(3px);\n' +
        '  }\n' +
        '  &.-horizontal-padding.-outline-width {\n' +
        '    @include rs-button-horizontal-padding(30px);\n' +
        '    @include rs-button-outline-width(1px, 30px);\n' +
        '  }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$outline-width: 境界線の太さ（デフォルトは 2px）</li>
        <li>$padding は mdc-button-horizontal-padding に固有の値が設定されている場合に限り必須</li>
      </ul>
    `
  })
  .add('アイコンをつける', () =>
    `
      <p>テキストの横に指定したアイコンを表示させる。</p>
      <x-button class="button -icon">submit</x-button>
      <x-button class="button -icon"></x-button>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-icon-image($url);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="button -icon">submit</x-button>\n' +
        '<x-button class="button -icon" />\n',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/button/rs-button.scss\';\n\n' +
        '.button {\n' +
        '   &.-icon {\n' +
        '     @include rs-button-icon-image(url(\'https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png\'));\n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$url: アイコン URL <br> 例）url('https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png')</li>
      </ul>
    `
  )
  .add('アイコンの位置を変える', () => {
      return `
      <p>表示したアイコンの位置を変える。</p>
      <p><x-button class="button -icon-position">submit</x-button></p>
      <h4>使用するmixin</h4>
      ${copyCodeBlock(
        '@include rs-button-icon-position(position);',
        { lang: 'scss' }
      )}
      <h4>使用方法</h4>
      ${copyCodeBlock(
        '<x-button class="button -icon-position">submit</x-button>',
        { lang: 'html' }
      )}
      ${copyCodeBlock(
        '@import \'@rsmdc/button/rs-button.scss\';\n\n' +
        '.button {\n' +
        '   &.-icon-position {\n' +
        '     @include rs-button-icon-image(url("https://cdn3.iconfinder.com/data/icons/pyconic-icons-1-2/512/heart-outline-512.png"));\n' +
        '     @include rs-button-icon-position(right); \n' +
        '   }\n' +
        '}',
        { lang: 'scss' }
      )}
      <p>オプション</p>
      <ul>
        <li>$position: アイコンの位置を指定 <br> leftかrightで指定する（ デフォルトはleft ）</li>
      </ul>
    `
  })

storiesOf('Components|Button', module)
  .addDecorator(withKnobs)
  .add('デモ', () => {
    const variantOptions = {
      flat: 'button',
      raised: 'raised',
      unelevated: 'unelevated',
      outlined: 'outlined',
      icon: 'icon',
      fab: 'fab -normal'
    }

    const options = {
      none: 'none',
      icon: '-icon',
      customizedBg: '-background-color',
      customizedTextColor: '-text-color',
      customizedShape: '-shape-radius',
      customizedHorizontalPadding: '-horizontal-padding',
      customizedOutlinedColor: '-outline-color',
      customizedOutlinedWidth: '-outline-width'
    }

    let variant = select('Variants', variantOptions, 'button')
    const isDisabled = boolean('Disabled', false)
    const isDense = boolean('Dense', false)
    let buttonText = text('Button label', 'button')
    const customType = select('Custom Type', options, 'none')
    let exited
    if (variant.includes('fab')) {
      exited = boolean('FAB exited', false)
    }

    if (isDense) {
      variant += ' -dense'
    }

    if (variant.includes('fab') || variant.includes('icon')) {
      buttonText = ''
    }
    return `
      <x-button
        class="${variant} ${customType}" 
        disabled="${isDisabled}"
        exited="${exited}">
        ${buttonText}
      </x-button>
    `
  })
