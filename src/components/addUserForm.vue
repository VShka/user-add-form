<template>
  <form action="" class="form">
    <h1 class="form__title">Создайте нового клиента</h1>
    <p class="form__required"><strong>*</strong>Поле обязательное для заполнения.</p>
    
    <section class="form__personal-info">
      <h2 class="form__title">Персональные данные клиента</h2>
      <fieldset>
        <p class="form__field">
          <label for="first-name">
            <span>Фамилия</span>
            <strong>*</strong>
          </label>
          <input type="text" id="first-name" name="first-name">
        </p>
        <p class="form__field">
          <label for="second-name">
            <span>Имя</span>
            <strong>*</strong>
          </label>
          <input type="text" id="second-name" name="second-name">
        </p>
        <p class="form__field">
          <label for="patronymic">
            <span>Отчество</span>
          </label>
          <input type="text" id="patronymic" name="patronymic">
        </p>
        <p class="form__field">
          <label for="birthday">
            <span>Дата рождения</span>
            <strong>*</strong>
          </label>
          <input type="date" id="birthday" name="birthday">
        </p>
        <p class="form__field">
          <label for="phone">
            <span>Номер телефона</span>
            <strong>*</strong>
          </label>
          <input type="tel" id="phone" name="phone">
        </p>
        <p class="form__field">
          <label for="sex">
            <span>Пол</span>
          </label>
          <input type="text" id="sex" name="sex">
        </p>
        <p class="form__field">
          <label for="group">
            <span>Группа клиентов</span>
            <strong>*</strong>
          </label>
          <select id="group" name="group" multiple size="2">
            <option value="VIP">VIP</option>
            <option value="Проблемные">Проблемные</option>
            <option value="ОМС">ОМС</option>
          </select>
        </p>
        <p class="form__field">
          <label for="doctor">
            <span>Лечащий врач</span>
          </label>
          <select id="doctor" name="doctor">
            <option value="Иванов">Иванов</option>
            <option value="Захаров">Захаров</option>
            <option value="Чернышева">Чернышева</option>
          </select>
        </p>
        <p class="form__field">
          <label for="informing">
            <span>Не отправлять СМС</span>
          </label>
          <input type="checkbox" id="informing" name="informing">
        </p>
      </fieldset>
    </section>
    <section class="form__personal-address">
      <h2 class="form__title">Адрес клиента</h2>
      <fieldset>
        <p class="form__field">
          <label for="index">
            <span>Индекс</span>
          </label>
          <input type="text" id="index" name="index">
        </p>
        <p class="form__field">
          <label for="country">
            <span>Страна</span>
          </label>
          <input type="text" id="country" name="country">
        </p>
        <p class="form__field">
          <label for="region">
            <span>Область</span>
          </label>
          <input type="text" id="region" name="region">
        </p>
        <p class="form__field">
          <label for="city">
            <span>Город</span>
            <strong>*</strong>
          </label>
          <input type="text" id="city" name="city">
        </p>
        <p class="form__field">
          <label for="street">
            <span>Улица</span>
          </label>
          <input type="text" id="street" name="street">
        </p>
        <p class="form__field">
          <label for="house">
            <span>Дом</span>
          </label>
          <input type="text" id="house" name="house">
        </p>
      </fieldset>
    </section>
    <section class="form__personal-document">
      <h2 class="form__title">Идентифицирующий документ</h2>
      <fieldset>
        <p class="form__field">
          <label for="document">
            <span>Тип документа</span>
          </label>
          <select id="document" name="document">
            <option value="Паспорт">Паспорт</option>
            <option value="Свидетельство о рождении">Свидетельство о рождении</option>
            <option value="Вод. удостоверение">Вод. удостоверение</option>
          </select>
        </p>
        <p class="form__field">
          <label for="series">
            <span>Серия</span>
          </label>
          <input type="text" id="series" name="series">
        </p>
        <p class="form__field">
          <label for="number">
            <span>Номер</span>
          </label>
          <input type="text" id="number" name="number">
        </p>
        <p class="form__field">
          <label for="agency">
            <span>Кем выдан</span>
          </label>
          <input type="text" id="agency" name="agency">
        </p>
        <p class="form__field">
          <label for="date">
            <span>Дата выдачи</span>
            <strong>*</strong>
          </label>
          <input type="date" id="date" name="date">
        </p>
      </fieldset>
    </section>
    <button class="button">Создать</button>
  </form>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
  input, select
    margin-left: 10px
</style>