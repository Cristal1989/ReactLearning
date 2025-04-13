const imgUrl =
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
const productPrice = 30;

const product = (
  <div>
    <img src={imgUrl} alt="taco with lime" width="640" />
    <h2>Price: {productPrice}$</h2>
    <button type="button">Add</button>
  </div>
);

const post = (
  <div>
    <h2>Заголовок сообщения</h2>
    <p>Текст сообщения</p>
  </div>
);

const post1 = (
  <>
    <h2>Заголовок сообщения</h2>
    <p>Текст сообщения</p>
  </>
);

const myFunctionalComponet = props => <div>Functional Component</div>;

const Product = props => (
  <div>
    <img src={imgUrl} alt="taco with lime" width="640" />
    <h2>Price: {productPrice}$</h2>
    <button type="button">Add</button>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')).render(<Product />);

const App = () => (
  <>
    <h1>Text</h1>
    <Product name="text product" />
  </>
);

const Product1 = props => (
  <div>
    <p>{props.name}</p>
  </div>
);

const Product2 = props => (
  <div>
    <img src={props.imgUrl} alt={props.name} width="640" />
    <h2>{props.name}</h2>
    <p>Price: {props.price}$</p>
    <button type="button">Add</button>
  </div>
);

const Product3 = ({ imgUrl, name, price }) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add</button>
  </div>
);

const App1 = () => (
  <div>
    <h1>Best product</h1>
    <Product3
      imgUrl="<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>
"
      name="Shavuha"
      price={30.05}
    />
  </div>
);

const Product4 = ({
  imgUrl = '<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>',
  name,
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add</button>
  </div>
);

// Определение defaultProps гарантирует что props.imgUrl будет иметь значение даже если оно не было указано при вызове компонента у родительского элемента

ReactDOM.createRoot(document.getElementById('root')).render(
  <Product4 name="Shaverma" price="25.50" />
);

const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

const App3 = () => (
  <div>
    <Panel title="User profile">
      <Profile name="Boris" email="boris@gmail.com" />
    </Panel>
  </div>
);

import PropTypes from 'prop-types';
const Product5 = ({
  imgUrl = '<https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640>',
  name,
  price,
}) => (
  <div>
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <button type="button">Add</button>
  </div>
);

Product5.propTypes = {
  imgUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

const MailBox = ({ unreadMessage }) => {
  return (
    <div>
      <h1>Hello</h1>
      {unreadMessage > 0 && <p>U have {unreadMessage.length}</p>}
    </div>
  );
};

const MailBox1 = ({ userName, unreadMessage }) => {
  return (
    <div className="">
      <h1>Hello {userName}</h1>
      {unreadMessage.length > 0 ? (
        <p>U have {unreadMessage.length} messages</p>
      ) : (
        <p>No unread messages</p>
      )}
    </div>
  );
};

const MailBox2 = ({ userName, unreadMessage }) => {
  return (
    <div className="">
      <h1>Hello {userName}</h1>
      <p>
        {unreadMessage.length > 0
          ? `U have ${unreadMessage.length} unread messages`
          : 'No unread messages'}
      </p>
    </div>
  );
};

const Product5 = ({ imgUrl, name, price, quantity }) => (
  <div className="">
    <img src={imgUrl} alt={name} width="640" />
    <h2>{name}</h2>
    <p>Price: {price}$</p>
    <h1>Quantity: {quantity < 20 ? `Left ${quantity}` : `In stock`}</h1>
    <button type="button">Add</button>
  </div>
);

const favoritesBooks = [
  { id: 'id1', name: 'JS' },
  { id: 'id2', name: 'CSS' },
  { id: 'id3', name: 'HTML' },
  { id: 'id4', name: 'React' },
  { id: 'id5', name: 'TypeScript' },
];
const BookList = ({ books }) => {
  return (
    <ul>
      {books.map(book => {
        <li>{book.name}</li>;
      })}
    </ul>
  );
};

const App4 = () => {
  return (
    <div className="">
      <BookList books={favoritesBooks} />
    </div>
  );
};

const BookList1 = ({ books }) => (
  <ul>
    {books.map(book => {
      <li key={book.id}>{book.name}</li>;
    })}
  </ul>
);

// ============================= Стили =========================

const App5 = () => {
  return (
    <p style={{ margin: 0, padding: '12px 16px', borderRadius: 8 }}>Text</p>
  );
};

const alertStyle = {
  margin: 8,
  padding: '10px 12px',
  backgroundColor: 'teal',
  color: 'grey',
  borderRadius: 8,
};

const App6 = () => {
  return (
    <>
      <p style={alertStyle}>Lorem ipsum dolor sit amet.</p>
      <p style={alertStyle}>Lorem ipsum dolor sit amet.</p>
    </>
  );
};

// ============

// Components/Alert.js

const alertStyle1 = {
  margin: 8,
  padding: '10px 12px',
  backgroundColor: 'teal',
  color: 'grey',
  borderRadius: 8,
};

export const Alert = ({ children }) => {
  return <p style={alertStyle1}>{children}</p>;
};

// Components/App.js
import { Alert } from 'Alert';

const App7 = () => {
  return (
    <>
      <Alert>Lorem ipsum dolor sit amet.1</Alert>
      <Alert>Lorem ipsum dolor sit amet.2</Alert>
      <Alert>Lorem ipsum dolor sit amet.3</Alert>
      <Alert>Lorem ipsum dolor sit amet.4</Alert>
      <Alert>Lorem ipsum dolor sit amet.5</Alert>
    </>
  );
};
// ===============
const App8 = () => {
  return (
    <>
      <Alert variant="error">Lorem ipsum dolor sit amet.1</Alert>
      <Alert variant="success">Lorem ipsum dolor sit amet.2</Alert>
      <Alert variant="warning">Lorem ipsum dolor sit amet.3</Alert>
      <Alert variant="info">Lorem ipsum dolor sit amet.4</Alert>
    </>
  );
};

// Components/Alert.js

const alertStyle2 = {
  margin: 8,
  padding: '10px 12px',
  backgroundColor: 'teal',
  color: 'grey',
  borderRadius: 8,
};

const selectBgColor = variant => {
  switch (variant) {
    case 'info':
      return 'blue';
    case 'warning':
      return 'yellow';
    case 'success':
      return 'green';
    case 'error':
      return 'red';
    default:
      throw new Error(`Wrong variant prop value - ${variant}`);
  }
};

export const Alert3 = ({ variant, children }) => {
  return (
    <p style={{ ...alertStyle2, backgroundColor: selectBgColor(variant) }}>
      {children}
    </p>
  );
};

// =================================

// // Components/Alert.css

// .alert {
//   margin: 8px;
//   padding: 10px 12px;
//   background-color: teal;
//   color: grey;
//   border-radius: 8px;
// }

// Components/Alert.jsx

import './Alert.css';

const Alert = ({ children }) => {
  return <p className="alert">{children}</p>;
};

// Components/Alert.css

// .alert {
//   margin: 8px;
//   padding: 10px 12px;
//   background-color: teal;
//   color: grey;
//   border-radius: 8px;
// }

// .alert.info{
//   background - color: blue;
// }
// .alert.warning{
//   background - color: yellow;
// }
// .alert.success{
//   background - color: green;
// }
// .alert.error{
//   background - color: red;
// }

// .alert.is-outlined {
//   outline: 1px solid black;
// }

// .alert.is-elevated {
//   box-shadow: 1px 3px;
// }

// Components/Alert.jsx

import './Alert.css';

const Alert4 = ({ variant, outlined, elevated, children }) => {
  const className = ['alert', 'variant'];
  if (outlined) className.push('is-outlined');
  if (elevated) className.push('is-elevated');
  return <p className={className.join(' ')}>{children}</p>;
};

// ======================== CLSX ==============================

import clsx from 'clsx';

const className = clsx(
  'first',
  10,
  undefined && 'second',
  true && 'third',
  false ? 'fourth' : 'fifeth'
);
console.log(className); // "first 10 third fourth"

// ====

import clsx from 'clsx';
import './Alert.css';

const Alert5 = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx(
        'alert',
        variant,
        outlined && 'is-outlined',
        elevated && 'is-elevated'
      )}
    >
      {children}
    </p>
  );
};

// ======================

import clsx from 'clsx';
import './Alert.css';

const Alert6 = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={clsx('alert', variant, {
        'is-outlined': outlined,
        'is-elevated': elevated,
      })}
    >
      {children}
    </p>
  );
};

// ===================

// // First component css
// .text{
//   color: red;
//   font - size: 16px;
// }

// // Second component css
// .text {
//   color: blue;
// }

// ====================

// Button.jsx
const Button = ({ variant, children }) => {
  // Базовые стили кнопки с несколькими вариантами отображения
  return <button className={clsx('button', variant)}>{children}</button>;
};

// LoginButton.jsx
const LoginButton = () => {
  // Уникальная логика кнопки login
  return <Button variant="primery">Login</Button>;
};

// FollowButton.jsx
const FollowButton = () => {
  // Уникальная логика кнопки follow
  return <Button variant="secondary">Follow</Button>;
};

// ===============

// Синтаксис импорта css модуля
import css from './Alert.module.css';

// Получаем объект соответствия имен классов
console.log(css); // {alert: 'Alert_alert_134asdf'}

const Alert7 = ({ children }) => {
  // Обращаемся к свойству объекта на имя класса из файла модуля
  return <p className={css.alert}>{children}</p>;
};

// ==================

// // Alert.module.css
// .alert {
//   margin: 10px;
//   padding: 15px;
//   border: 1px solid black;
//   background - color: white;
//   color: green;
// }

// .information {
//   composes: alert;
//   background-color: blue;
// }

// .success {
//   composes: alert;
//   background-color: green;
// }

// .error {
//   composes: alert;
//   background-color: red;
// }

// .warning {
//   composes: alert;
//   background-color: yellow;
// }

// =========

const Alert8 = ({ variant, children }) => {
  return <p className={css[variant]}>{children}</p>;
};

// ==================

// // CSS code

// .alert .isOutlined {
//   outlined: 1px solid black;
// }

// .alert .isElevated {
//   box-shadow: rgba (255, 255, 255, 0.5)
// }

// ================

const Alert9 = ({ variant, outlined, elevated, children }) => {
  return (
    <p
      className={
        (css[variant],
        { [css.isOutlined]: outlined, [css.isElevated]: elevated })
      }
    >
      {children}
    </p>
  );
};

// ============================== Компоненты-классы ============================

// Именуемые импорты повышают читабельность кода
import react, { Component } from 'react';

class MyClassComponent extends Component {
  static deafultProps = {};
  static propTypes = {};
  render() {
    return <div>Class Component</div>;
  }
}

// ==========

<button onClick={event => console.log(event)}>Click</button>;

// ===============

import React, { Component } from 'react';
import reactDOM from 'react-dom';

class Counter extends Component {
  static defaultProps = {
    step: 1,
  };
  render() {
    const { step } = this.props;
    return (
      <div>
        <span>0</span>
        <button type="button">+ {step}</button>
        <button type="button">- {step}</button>
      </div>
    );
  }
}

reactDOM.render(<Counter step={5} />, document.getElementById('root'));

// ============================= Анонимные колбэки =========================

class Counter1 extends Component {
  render() {
    const { step1 } = this.props;
    return (
      <div>
        <span>0</span>
        <button
          type="button"
          onClick={evt => {
            console.log('Increment was clicked', evt);
            console.log('This props: ', this.props);
          }}
        >
          Increment by step {step1}
        </button>
        <button
          type="button"
          onClick={evt => {
            console.log('Increment was clicked', evt);
            console.log('This props: ', this.props);
          }}
        >
          Decrement by step {step1}
        </button>
      </div>
    );
  }
}

// ======================== Кастомные методы

class Counter2 extends Component {
  handleIncrement(evt) {
    console.log('Increment was clicked', evt);
    console.log('This props: ', this.props);
  }
  handleDecrement(evt) {
    console.log('Decrement was clicked', evt);
    console.log('This props: ', this.props);
  }

  render() {
    const { step1 } = this.props;
    <div>
      <span>0</span>
      <button type="button" onClick={this.handleIncrement}>
        Increment by step {step1}
      </button>
      <button type="button" onClick={this.handleDecrement}>
        Decrement by step {step1}
      </button>
    </div>;
  }
}

// ====================================== Плохой пример ❌

class Counter2 extends Component {
  handleIncrement(evt) {
    console.log('Increment was clicked', evt);
    console.log('This props: ', this.props);
  }
  handleDecrement(evt) {
    console.log('Decrement was clicked', evt);
    console.log('This props: ', this.props);
  }

  render() {
    const { step1 } = this.props;
    <div>
      <span>0</span>
      <button type="button" onClick={this.handleIncrement.bind(this)}>
        Increment by step {step1}
      </button>
      <button type="button" onClick={this.handleDecrement.bind(this)}>
        Decrement by step {step1}
      </button>
    </div>;
  }
}

// ========================= Хороший пример ✅

class Counter extends Component {
  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    this.handleDecrement = this.handleDecrement.bind(this);
  }

  handleIncrement(evt) {}
  handleDecrement(evt) {}

  render() {
    const { step2 } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by step {step1}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by step {step1}
        </button>
      </div>
    );
  }
}

// ========================== Публичные св-во класса

class Counter extends Component {
  handleIncrement = evt => {
    console.log('Increment was clicked', evt);
    console.log('This props: ', this.props);
  };
  handleDecrement = evt => {
    console.log('Decrement was clicked', evt);
    console.log('This props: ', this.props);
  };

  render() {
    const { step2 } = this.props;

    return (
      <div>
        <span>0</span>
        <button type="button" onClick={this.handleIncrement}>
          Increment by step {step1}
        </button>
        <button type="button" onClick={this.handleDecrement}>
          Decrement by step {step1}
        </button>
      </div>
    );
  }
}

// =========================================== Объект состояния state =====================================

class Counter extends Component {
  constructor() {
    super();
    this.state = { value: 0 };
  }

  render() {
    return (
      <div>
        <span>{this.state.value}</span>
      </div>
    );
  }
}

// =============

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  constructor(props) {
    super(props);
    this.state = { value: this.props.initialValue };
  }
}

reactDOM.render(<Counter initialValue={10} />, document.getElementById('root'));

// ==================

class Counter extends Component {
  static defaultProps = {
    step: 1,
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };
}

// ================================ Изменения состояния компонента =======================

state = {
  fullName: 'Ann',
};

// Плохой пример
this.state.fullName = 'Ben';

// Хороший пример
this.setState({ fullName: 'Ben' });

// =====================

class Toggle extends Component {
  state = { isOpen: false };

  show = () => this.setState({ isOpen: true });
  hide = () => this.setState({ isOpen: false });

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <button type="button" onClick={this.show}>
          Show
        </button>
        <button type="button" onClick={this.hide}>
          Hide
        </button>
        {isOpen && children}
      </div>
    );
  }
}

// ============================ Как объявляется состояние

// Объект до объеденения
const currentState = {
  a: 1,
  b: 3,
  c: 4,
  d: 10,
};

// Объект переданный в setState()
const update = {
  c: 11,
  d: 22,
};

// Новое значение this.state почле объединения
const nextState = {
  ...currentState,
  ...update,
};

// ======================================= Асинхронное обновление состояния

state = { value: 0 };
for (let i = 0; i < 3; i += 1) {
  console.log(this.state.value); // 0
  this.setState({ value: this.state.value + 1 }); // 1
}

// =================================== setState() с функцией

setState((state, props) => {
  return {};
}, callback);

// =============

state = { value: 0 };
for (let i = 0; i < 3; i += 1) {
  console.log(this.state.value); // 0
  this.setState(prevState => {
    console.log(prevState.value);
    return {
      value: prevState.value + 1,
    };
  });
}

// ===================

class Toggle extends Component {
  state = { isOpen: false };
  toggle = () => {
    this.setState(state => ({ isOpen: !state.isOpen }));
  };
  render() {
    const { isOpen } = this.state;
    const { children } = this.props;
    return (
      <div>
        <button onClick={this.toggle}>{isOpen ? 'hide' : 'show'}</button>
        {isOpen && children}
      </div>
    );
  }
}

// =========================

class Counter extends Component {
  handleIncrement = () => {
    this.setState((state, props) => ({
      value: state.value + props.step,
    }));
  };
  handleDecrement = () => {
    this.setState((state, props) => ({
      value: state.value - props.step,
    }));
  };
}

// ====================== Подъем состояния ======================

// button получает функцию changeMessage(nameProp) которая вызывается во время события onClick

const Button1 = ({ changeMessage, lable }) => (
  <button type="button" onClick={changeMessage}>
    {lable}
  </button>
);

class App9 extends Component {
  state = { message: new Date().toLocaleTimeString() };
  // Метод который будем передавать в button во время вызова по нажатию
  updateMessage = evt => {
    const message = this.state.message;
    console.log(evt);
    this.setState({ message: message });
  };

  render() {
    return (
      <>
        <span>{message}</span>
        <Button1 changeMessage={this.updateMessage} lable={message} />
      </>
    );
  }
}

// ======================================== Формы =================================================

class LoginForm extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const login = form.elements.login.value;
    const password = e.elements.password.value;

    console.log(login, password);

    this.props.onSubmit({ login, password });
    form.reset();
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="login" placeholder="Login"></input>
        <input type="password" name="password" placeholder="Password"></input>
        <button type="submit">Login</button>
      </form>
    );
  }
}

// =============================

class App10 extends Component {
  state = { inputValue: '' };

  handleChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  render() {
    const { inputValue } = this.state;

    return (
      <input type="text" value={inputValue} onChange={this.handleChange} />
    );
  }
}

// ============================

class SignUpForm extends Component {
  state = { login: '' };

  // Отвечает за обновление состояния
  handleChange = e => {
    this.setState({ login: e.target.value });
  };

  // Вызывается при отправке формы
  handleSubmit = e => {
    e.preventDefault();
    console.log(`Sign up: ${this.state.login}`);

    // Проп, который передается в форме для вызова во время submit
    this.props.onSubmit({ ...this.state });
  };

  render() {
    const { login } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter Login"
            value={login}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Sign Up {login}</button>
      </form>
    );
  }
}

// ==============================

// Выносим объект с примитивами в константу чтобы удобно было сбрасывать
// Нельзя использовать если в каком либо свойстве состояние сохраняет сложный тип
const INITIAL_STATE = { login: '', email: '', password: '' };

class SignUpForm2 extends Component {
  state = { ...INITIAL_STATE };

  // Для всех инпутов создаем один обработчик
  // Различать ипуты будем по атрибуту name
  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}`);

    this.props.onSubmit({ ...this.state });
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { login, email, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
          <input
            type="text"
            placeholder="Enter login"
            name="login"
            value={login}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            placeholder="Enter email"
            name="email"
            value={email}
            onChange={this.handleChange}
          ></input>
        </label>
        <label>
          Password
          <input
            type="password"
            placeholder="Enter password"
            name="password"
            value={password}
            onChange={this.handleChange}
          ></input>
        </label>
        <button type="submit">Sign up {login}</button>
      </form>
    );
  }
}

// ================================== Генерация id элементов форм ======================

// Можно использовать любой пакет для генерации уникальных строк
import { nanoid } from nanoid;

class Form extends Component {
  loginInputId = nanoid();

  render() {
    return (
      <form>
        <label htmlFor={this.loginInputId}> Login
        </label>
          <input type='text' name='login' id={this.loginInputId}></input>
      </form>
    )
  }
}

// =============================== Чекбоксы =============================

const INITIAL_STATE1 = { login: '', email: '', password: '', agree: false };

class SignUpForm3 extends Component {
  state = { ...INITIAL_STATE1 };

  handleChange = e => {
    const { name, value, type, checked } = e.target;

    // Если тип элемента чекбокс - берем значение checked, в противном случае value
    this.setState({[name]: type === 'checkbox' ? checked : value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agree } = this.state;
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}, Agree: ${agree}`);
  }

  render() {
    const { login, email, password, agree } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Agree
          <input type='checkbox' checked={agree} onChange={this.handleChange}></input>
        </label>
        <button type='submit' disabled={!agree}></button>
      </form>
    )
  }
}


// ============================ Радиоточки ========================

// Используем enumerable чтобы не создавать антипаттерн
const Gender = { male, female };
const INITIAL_STATE3 = { login: '', email: '', password: '', agree: false, gender: null };

class SignUpForm4 extends Component {
  state = { ...INITIAL_STATE1 };
  handleChange = e => {
    const { name, value, type, checked, gender } = e.target;

    this.setState({[name]: type === 'checkbox' ? checked : value})
  }

  handleSubmit = e => {
    e.preventDefault();
    const { login, email, password, agree, gender } = this.state;

    if (!agree) {
      alert('U must agreed form');
    }
    console.log(`Login: ${login}, Email: ${email}, Password: ${password}, Agree: ${agree}, Gender: ${gender}`);
    this.setState({...INITIAL_STATE3})
  }

  render() {
    const { login, email, password, agree, gender } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <selection>
          <h2>Choise gender</h2>
          <label>Male
            <input type='radio' checked={gender === Gender.male} name='gender' value={Gender.male} onChange={this.handleChange}/>
          </label>
          <label>Female
            <input type='radio' checked={gender === Gender.female} name='gender' value={Gender.female} onChange={this.handleChange}/>
          </label>
        </selection>
        <button type='submit' disabled={!agree}>Login {login}</button>
      </form>
    )
  }
}