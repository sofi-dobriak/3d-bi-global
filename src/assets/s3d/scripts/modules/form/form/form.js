import * as yup from 'yup';
import i18next from 'i18next';
import axios from 'axios';
import initView from './formController';
import { langDetect } from '../../helpers/helpers';
import dispatchTrigger from '../../helpers/triggers';

const sendForm = async data => {
  const response = await axios.post('/wp-admin/admin-ajax.php', data);
  return response.data;
};

// const sendForm = async data => {
//   const response = await axios.post(
//     document.querySelector('[data-crm-url]').getAttribute('data-crm-url'),
//     data,
//   );
//   return response.data;
// };

const lang = langDetect();
(async () => {
  await i18next.init({
    lng: lang,
    debug: window.status === 'local',
    resources: {
      en: {
        translation: {
          name: 'Name:*',
          phone: 'Phone:*',
          email: 'Email:*',
          namePlaceholder: 'Name',
          emailPlaceholder: 'Email',
          send: 'Send message',
          sending: 'Sending',
          title: 'ARE YOU LOOKING TO GET MORE INFORMATION?',
          subtitle:
            'Fill out the form to get more information about the property and purchase details.',
          'Your name': 'Your name:',
          'Your phone': 'Your phone:',
          'Your email': 'Your email:',
          'Your comment': 'Your comment:',
          'Type your message': 'Type your message',
          invalid_email_format: 'Email must have @',
          name_too_short: 'Name must be at least {{cnt}} characters',
          field_too_short: 'Phone must be at least {{cnt}} characters',
          field_too_long: 'Phone must be at most {{cnt}} characters',
          field_only_letter: 'Name must contain only letters',
          field_more_letter: 'Name must be at most 30 letters',
          only_number: 'Only digits here',
          required: 'This field is required',
          sendingSuccessTitle: 'Thank you for your request!',
          sendingSuccessText: 'Wait for the answers of our managers',
          sendingErrorText: 'Wait for the answers of our managers',
          sendingErrorTitle: 'An error has occurred',
          send_fail: 'The message was not sent due to an unknown server error. Code: [send_fail] ',
          invalid_form:
            'The message was not sent for an unknown server error. Code: [invalid_form] ',
          front_error: 'The message was not sent for an unknown server error. Code: [front_error] ',
          invalid_upload_file: 'Error uploading file. Code: [invalid_upload_file] ',
          invalid_recaptcha: 'Please fill in the captcha and try again. Code: [invalid_recaptcha] ',
          connectionFailed: 'Server connection error',
        },
      },
      ru: {
        translation: {
          name: 'Имя:*',
          phone: 'Телефон:*',
          email: 'Email:*',
          namePlaceholder: 'Имя',
          emailPlaceholder: 'Email',
          send: 'Отправить сообщение',
          sending: 'Отправка',
          title: 'ХОТИТЕ ПОЛУЧИТЬ БОЛЬШЕ ИНФОРМАЦИИ?',
          subtitle:
            'Заполните форму, чтобы получить подробную информацию об объекте и деталях покупки.',
          'Your name': 'Ваше имя:',
          'Your phone': 'Ваш телефон:',
          'Your email': 'Ваша почта:',
          'Your comment': 'Ваш комментарий:',
          'Type your message': 'Введите ваше сообщение',
          invalid_email_format: 'Электронная почта должна содержать символ @',
          name_too_short: 'Имя должно содержать не менее {{cnt}} символов',
          field_too_short: 'Телефон должен содержать минимум {{cnt}} символов',
          field_too_long: 'Телефон должен содержать максимум {{cnt}} символов',
          field_only_letter: 'Имя должно содержать только буквы',
          field_more_letter: 'Имя должно содержать не более 30 букв',
          only_number: 'Только цифры',
          required: 'Это поле обязательно для заполнения',
          sendingSuccessTitle: 'Спасибо за вашу заявку!',
          sendingSuccessText: 'Ожидайте ответа наших менеджеров',
          sendingErrorText: 'Ожидайте ответа наших менеджеров',
          sendingErrorTitle: 'Произошла ошибка',
          send_fail:
            'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [send_fail]',
          invalid_form:
            'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [invalid_form]',
          front_error:
            'Сообщение не было отправлено из-за неизвестной ошибки сервера. Код: [front_error]',
          invalid_upload_file: 'Ошибка при загрузке файла. Код: [invalid_upload_file]',
          invalid_recaptcha:
            'Пожалуйста, заполните капчу и попробуйте снова. Код: [invalid_recaptcha]',
          connectionFailed: 'Ошибка соединения с сервером',
        },
      },
      kk: {
        translation: {
          name: 'Аты-жөні:*',
          phone: 'Телефон:*',
          email: 'Email:*',
          namePlaceholder: 'Аты-жөні',
          emailPlaceholder: 'Email',
          send: 'Хабарлама жіберу',
          sending: 'Жіберілуде',
          title: 'ТОЛЫҒЫРАҚ АҚПАРАТ АЛҒЫҢЫЗ КЕЛЕ МЕ?',
          subtitle:
            'Нысан және сатып алу шарттары туралы толық ақпарат алу үшін нысанды толтырыңыз.',
          'Your name': 'Сіздің атыңыз:',
          'Your phone': 'Сіздің телефоныңыз:',
          'Your email': 'Сіздің email поштаңыз:',
          'Your comment': 'Сіздің пікіріңіз:',
          'Type your message': 'Хабарламаңызды жазыңыз',
          invalid_email_format: 'Электрондық поштада @ болуы керек',
          name_too_short: 'Атауы кемінде {{cnt}} таңбадан тұруы керек',
          field_too_short: 'Телефон нөмірі кемінде {{cnt}} таңбадан тұруы керек',
          field_too_long: 'Телефон нөмірі ең көп дегенде {{cnt}} таңбадан аспауы керек',
          field_only_letter: 'Аты-жөні тек әріптерден тұруы керек',
          field_more_letter: 'Аты-жөні 30 әріптен аспауы керек',
          only_number: 'Тек сандарды енгізіңіз',
          required: 'Бұл өрісті толтыру міндетті',
          sendingSuccessTitle: 'Өтінішіңіз үшін рақмет!',
          sendingSuccessText: 'Біздің менеджерлердің жауабын күтіңіз',
          sendingErrorText: 'Біздің менеджерлердің жауабын күтіңіз',
          sendingErrorTitle: 'Қате орын алды',
          send_fail: 'Белгісіз сервер қатесіне байланысты хабарлама жіберілмеді. Коды: [send_fail]',
          invalid_form:
            'Белгісіз сервер қатесіне байланысты хабарлама жіберілмеді. Коды: [invalid_form]',
          front_error:
            'Белгісіз сервер қатесіне байланысты хабарлама жіберілмеді. Коды: [front_error]',
          invalid_upload_file: 'Файлды жүктеу қатесі. Коды: [invalid_upload_file]',
          invalid_recaptcha: 'Капчаны толтырып, әрекетті қайталаңыз. Коды: [invalid_recaptcha]',
          connectionFailed: 'Сервермен байланыс орнату қатесі',
        },
      },
    },
  });
})();

export default class FormMonster {
  constructor(setting) {
    this.elements = setting.elements;
    this.$body = document.querySelector('body');
    this.showSuccessMessage = setting.showSuccessMessage || true;

    this.state = {
      serverError: null,
      error: true,
      form: setting.elements.fields,
      status: 'filling',
    };
    this.fieldsKey = Object.keys(this.elements.fields);
    this.onStartSubmit = setting.onStartSubmit || (() => {});
    this.onEndSubmit = setting.onEndSubmit || (() => {});
    this.onEndSubmitResult = setting.onEndSubmitResult || (() => {});
    this.watchedState = initView(this.state, this.elements);

    this.init();
  }

  validate(formData) {
    const formDataObj = this.fieldsKey.reduce((acc, key) => {
      acc[key] = formData.get(key);
      return acc;
    }, {});
    const shapeObject = this.fieldsKey.reduce((acc, key) => {
      acc[key] = this.elements.fields[key].rule;
      return acc;
    }, {});
    const schema = yup.object().shape(shapeObject);
    try {
      schema.validateSync(formDataObj, { abortEarly: false });
      return null;
    } catch (err) {
      return err.inner;
    }
  }

  changeInput() {
    return e => {
      e.preventDefault();

      const changedFieldName = e.target.name;
      if (!changedFieldName || !this.elements.fields[changedFieldName]) {
        return null;
      }

      this.watchedState.status = 'filling';

      const formData = new FormData(this.elements.$form);
      const allErrors = this.validate(formData);

      this.fieldsKey.forEach(key => {
        this.watchedState.form[key].valid = true;
        this.watchedState.form[key].error = [];
      });

      if (allErrors) {
        const currentFieldError = allErrors.find(err => err.path === changedFieldName);

        if (currentFieldError) {
          this.watchedState.form[changedFieldName].valid = false;
          this.watchedState.form[changedFieldName].error = [currentFieldError.message];
          this.watchedState.status = 'renderErrorValidation';
          return null;
        }
      }

      this.watchedState.error = false;
      this.watchedState.status = 'renderSuccessValidation';
      return null;
    };
  }
  submitForm() {
    return async e => {
      e.preventDefault();

      const formData = new FormData(this.elements.$form);
      const allErrors = this.validate(formData);

      this.fieldsKey.forEach(key => {
        this.watchedState.form[key].valid = true;
        this.watchedState.form[key].error = [];
      });

      if (allErrors) {
        allErrors.forEach(({ path, message }) => {
          this.watchedState.form[path].valid = false;
          this.watchedState.form[path].error = [message];
        });
        this.watchedState.error = true;
        this.watchedState.status = 'renderErrorValidation';
        return null;
      }
      this.watchedState.error = false;
      this.onStartSubmit();

      if (this.watchedState.error === false) {
        this.onStartSubmit();
        if (window.status === 'local') {
          this.onEndSubmit();
          this.watchedState.status = 'successSand';
          wait(2000).then(() => {
            this.onEndSubmitResult(1);
          });
          return true;
        }
        try {
          this.watchedState.status = 'loading';
          const formData = new FormData(this.elements.$form);
          formData.append('action', 'app');
          const { error, code_error } = await sendForm(formData);
          this.onEndSubmit();
          if (error === 0) {
            this.watchedState.status = 'successSand';
            dispatchTrigger('successFormSend', {});
            this.onEndSubmitResult(1);
            return true;
          }
          this.watchedState.serverError = code_error;
          this.watchedState.status = 'failed';
        } catch (err) {
          this.watchedState.error = err.message;
          this.watchedState.serverError = 'front_error';
          this.watchedState.status = 'failed';
          this.onEndSubmitResult(0);
        }
      }
      return null;
    };
  }

  listers() {
    this.elements.$form.addEventListener('submit', this.submitForm(this.watchedState));
    this.fieldsKey.map(key => {
      const { input } = this.elements.fields[key].inputWrapper;
      input.addEventListener('input', this.changeInput(this.watchedState));
      return null;
    });
  }

  init() {
    this.listers();
  }
}

async function wait(time) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}
