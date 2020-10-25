<template>
  <form
    class="form"
    @submit.prevent="addUser"
  >
    <h1 class="form__title">Добавьте нового пациента</h1>
    <p class="form__required"><strong>*</strong>Поле обязательное для заполнения.</p>
    
    <section class="form__personal-info">
      <h2 class="form__title">Персональные данные клиента</h2>
      <fieldset>
        <div class="fieldset">

          <p class="form__field">
            <label for="first-name">
              <span>Фамилия</span>
              <strong>*</strong>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="first-name"
              name="first-name"
              v-model.trim="$v.firstName.$model"
              :class="{form__item_error: $v.firstName.$error}"
            >
            <br />
            <small
              class="error-text"
              v-if="$v.firstName.$dirty && !$v.firstName.required"
            >
              Необходимо заполнить
            </small>
          </p>

          <p class="form__field">
            <label for="second-name">
              <span>Имя</span>
              <strong>*</strong>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="second-name"
              name="second-name"
              v-model.trim="$v.secondName.$model"
              :class="{form__item_error: $v.secondName.$error}"
            >
            <small
              class="error-text"
              v-if="!$v.secondName.required && $v.secondName.$dirty"
            >
              Необходимо заполнить
            </small>
          </p>

          <p class="form__field">
            <label for="patronymic">
              <span>Отчество</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="patronymic"
              name="patronymic"
            >
            <br />
          </p>

          <p class="form__field">
            <label for="birthday">
              <span>Дата рождения</span>
              <strong>*</strong>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              value=""
              id="birthday"
              name="birthday"
              v-model.trim="$v.birthday.$model"
              :class="{form__item_error: $v.birthday.$error}"
            >
            <br />
            <small
              class="error-text"
              v-if="!$v.birthday.required && $v.birthday.$dirty"
            >
              Укажите дату
            </small>
            <small
              class="error-text"
              v-else-if="!$v.birthday.dateFormat"
            >
              Формат даты ДД.ММ.ГГГГ
            </small>
          </p>

          <p class="form__field">
            <label for="phone">
              <span>Номер телефона</span>
              <strong>*</strong>
            </label>
            <br />
            <input
              class="form__item"
              type="tel"
              id="phone"
              name="phone"
              v-model.trim="$v.phone.$model"
              :class="{form__item_error: $v.phone.$error}"
            >
            <br />
            <small
              class="error-text"
              v-if="!$v.phone.required && $v.phone.$dirty"
            >
              Необходимо заполнить
            </small>
            <small
              class="error-text"
              v-else-if="!$v.phone.startWith"
            >
              Должен начинаться с 7
            </small>
            <small
              class="error-text"
              v-else-if="!$v.phone.phoneLenght"
            >
              Должно быть 11 цифр
            </small>
          </p>

          <p class="form__field">
            <label for="sex">
              <span>Пол</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="sex"
              name="sex"
            >
          </p>

          <p class="form__field">
            <label for="group-client">
              <span>Группа клиентов</span>
              <strong>*</strong>
            </label>
            <br />
            <select
              class="form__item form__item-group"
              id="group-client"
              name="group-client"
              multiple
              size="2"
              v-model="groupClient"
            >
              <option value="VIP">VIP</option>
              <option value="Проблемные">Проблемные</option>
              <option value="ОМС">ОМС</option>
            </select>
          </p>

          <p class="form__field">
            <label for="doctor">
              <span>Лечащий врач</span>
            </label>
            <br />
            <select
              class="form__item form__item-doctor"
              id="doctor"
              name="doctor"
            >
              <option value="none" hidden="">Выберите</option>
              <option value="Иванов">Иванов</option>
              <option value="Захаров">Захаров</option>
              <option value="Чернышева">Чернышева</option>
            </select>
          </p>

          <p class="form__field">
            <label for="informing">
              <span>Не отправлять СМС</span>
            </label>
            <br />
            <input
              type="checkbox"
              id="informing"
              name="informing"
            >
          </p>

        </div>
      </fieldset>
    </section>
    <section class="form__personal-address">
      <h2 class="form__title">Адрес клиента</h2>
      <fieldset>
        <div class="fieldset">

          <p class="form__field">
            <label for="index">
              <span>Индекс</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="index"
              name="index"
            >
          </p>

          <p class="form__field">
            <label for="country">
              <span>Страна</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="country"
              name="country"
            >
          </p>

          <p class="form__field">
            <label for="region">
              <span>Область</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="region"
              name="region"
            >
          </p>

          <p class="form__field">
            <label for="city">
              <span>Город</span>
              <strong>*</strong>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="city"
              name="city"
              v-model.trim="$v.city.$model"
              :class="{form__item_error: $v.city.$error}"
            >
            <br />
            <small
              class="error-text"
              v-if="$v.city.$dirty && !$v.city.required"
            >
              Необходимо заполнить
            </small>
          </p>

          <p class="form__field">
            <label for="street">
              <span>Улица</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="street"
              name="street"
            >
          </p>

          <p class="form__field">
            <label for="house">
              <span>Дом</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="house"
              name="house"
            >
          </p>

        </div>
      </fieldset>
    </section>
    <section class="form__personal-document">
      <h2 class="form__title">Идентифицирующий документ</h2>
      <fieldset>
        <div class="fieldset">

          <p class="form__field">
            <label for="document">
              <span>Тип документа</span>
            </label>
            <br />
            <select
              class="form__item form__item-doctor"
              id="document"
              name="document"
            >
              <option value="Паспорт">Паспорт</option>
              <option value="Свидетельство о рождении">Свидетельство о рождении</option>
              <option value="Вод. удостоверение">Вод. удостоверение</option>
            </select>
          </p>

          <p class="form__field">
            <label for="series">
              <span>Серия</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="series"
              name="series"
            >
          </p>

          <p class="form__field">
            <label for="number">
              <span>Номер</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="number"
              name="number"
            >
          </p>

          <p class="form__field">
            <label for="agency">
              <span>Кем выдан</span>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="agency"
              name="agency"
            >
          </p>

          <p class="form__field">
            <label for="date">
              <span>Дата выдачи</span>
              <strong>*</strong>
            </label>
            <br />
            <input
              class="form__item"
              type="text"
              id="date"
              name="date"
              v-model.trim="$v.date.$model"
              :class="{form__item_error: $v.date.$error}"
            >
            <br />
            <small
              class="error-text"
              v-if="$v.date.$dirty && !$v.date.required"
            >
              Необходимо заполнить
            </small>
            <small
              class="error-text"
              v-else-if="!$v.date.dateFormat"
            >
              Формат даты ДД.ММ.ГГГГ
            </small>
          </p>

        </div>
      </fieldset>
    </section>
    <button type="submit" class="button">Добавить</button>
  </form>
</template>

<script>
import {required, helpers} from 'vuelidate/lib/validators';
export default {
  name: 'form',
  data: () => ({
    firstName: null,
    secondName: null,
    birthday: null,
    phone: null,
    groupClient: [],
    city: null,
    document: null,
    date: null
  }),
  validations: {
    firstName: {required},
    secondName: {required},
    birthday: {
      required,
      dateFormat: helpers.regex('dateFormat', /(0\d|1\d|2\d|3[0-1])(\.)(0\d|1[0-2])(\.)(\d{4})/)
    },
    phone: {
      required,
      startWith: helpers.regex('startWith', /^7/),
      phoneLenght: helpers.regex('phoneLength', /(\d{11})/)
    },
    groupClient: {required},
    city: {required},
    document: {required},
    date: {
      required,
      dateFormat: helpers.regex('dateFormat', /(0\d|1\d|2\d|3[0-1])(\.)(0\d|1[0-2])(\.)(\d{4})/)
    }
  },
  methods: {
    addUser() {
      alert('Пациент добавлен успешно');
    }
  }
}
</script>

<style lang="sass" scoped>
  fieldset
    border: none


  .form
    width: 80%
    margin: 0 auto
    padding-bottom: 40px
    border: 1px solid #000
    background-color: #8bc6ec
    background-image: linear-gradient(135deg, #8bc6ec 0%, #95e2c2 100%)
    
    .fieldset 
      display: grid
      grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr))
      grid-gap: 20px
      width: 80%
      margin: 0 auto
      border: 1px solid #000
      border-radius: 40px

      &:hover
        box-shadow: 10px 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)

    .form__item
      width: 70%
      font-size: 15px
      border: 1px solid #95e2c2
      border-radius: 50px
      margin: 5px auto
      padding: 0.5rem 1rem

      &:focus 
        outline: none
        box-shadow: 0 0 10px rgb(141, 141, 138)

    .form__item-group
      padding: 0 1rem

    .form__item-doctor
      border-top-right-radius: 0
      border-bottom-right-radius: 0

    .form__item_error
      border: 1px solid #dc0505


  .button
    background-color: #95e2c2
    color: #000
    font-size: 15px
    font-weight: bold
    border-radius: 50px
    border: 1px solid #1c73ab
    cursor: pointer
    padding: 1rem 3rem
    margin-top: 20px

    &:focus 
      outline: none
      box-shadow: 0 0 10px rgba(14, 150, 184, 0.445)
    &:hover
      background-color: #6ed0e0
  
  .error-text
    color: #dc0505
</style>