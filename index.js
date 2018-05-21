import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  LocaleProvider,
  DatePicker
} from 'antd';

import provider_zhCN from 'antd/lib/locale-provider/zh_CN';

import date_picker_locale from 'antd/lib/date-picker/locale/zh_TW';

function App() {
  return (
    <div style={{ margin: 100 }}>
      <p>LocaleProvider：zh_CN， DatePicker: default</p>
      <LocaleProvider locale={provider_zhCN}>
        <DatePicker />
      </LocaleProvider>
      <hr/>

      <p>DatePicker: zh_TW</p>
      <DatePicker locale={date_picker_locale} />
      <hr/>

      <p style={{color: 'red'}}>LocaleProvider：zh_CN， DatePicker: zh_TW</p>
      <p>LocaleProvider的配置覆盖了DatePicker的配置</p>
      <LocaleProvider locale={provider_zhCN}>
        <DatePicker locale={date_picker_locale} />
      </LocaleProvider>

    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
