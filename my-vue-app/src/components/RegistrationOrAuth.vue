<template>
  <div class="wrapper">
    <div class="back_cover">
      <div class="left-side">
        <div class="cover-component">
          <img />
          <span>Это Регистрация</span>
        </div>
      </div>
    </div>
    <div class="register-page">
      <h1>Регистрация</h1>
      <form @submit.prevent="handleSubmit">
        <div class="form-group">
          <label for="username">Имя пользователя</label>
          <input
            id="username"
            v-model="form.username"
            type="text"
            :class="{ error: errors.username }"
            placeholder="Введите имя пользователя"
          />
          <small v-if="errors.username" class="error-message">{{
            errors.username
          }}</small>
        </div>

        <div class="form-group">
          <label for="email">E-mail</label>
          <input
            id="email"
            v-model="form.email"
            type="email"
            :class="{ error: errors.email }"
            placeholder="Введите E-mail"
          />
          <small v-if="errors.email" class="error-message">{{
            errors.email
          }}</small>
        </div>

        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            id="password"
            v-model="form.password"
            type="password"
            :class="{ error: errors.password }"
            placeholder="Введите пароль"
          />
          <small v-if="errors.password" class="error-message">{{
            errors.password
          }}</small>
        </div>

        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';

// Состояние формы
const form = reactive({
  username: '',
  email: '',
  password: '',
});

// Состояние ошибок
const errors = reactive({
  username: '',
  email: '',
  password: '',
});

// Валидация формы
const validateForm = (): boolean => {
  errors.username = form.username.trim() ? '' : 'Имя пользователя обязательно.';
  errors.email = /\S+@\S+\.\S+/.test(form.email)
    ? ''
    : 'Введите корректный E-mail.';
  errors.password =
    form.password.length >= 6 ? '' : 'Пароль должен быть не менее 6 символов.';

  return !errors.username && !errors.email && !errors.password;
};

// Обработка отправки формы
const handleSubmit = () => {
  if (validateForm()) {
    alert(
      `Пользователь зарегистрирован:\nИмя: ${form.username}\nE-mail: ${form.email}`,
    );
    // Здесь можно выполнить запрос к серверу
  }
};
</script>

<style scoped>
.register-page {
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  text-align: center;
  border-radius: 10px;
  background: linear-gradient(135deg, #ffffff, #f8f9fa);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 1.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: bold;
  color: #555;
}

input {
  width: 100%;
  padding: 0.75rem;
  font-size: 0.95rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9fcff;
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.1);
  transition:
    border-color 0.3s,
    background-color 0.3s;
}

input:focus {
  border-color: #007bff;
  background-color: #ffffff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.4);
}

input.error {
  border-color: red;
}

.error-message {
  color: darkred;
  font-size: 0.8rem;
  margin-top: 0.3rem;
}

button {
  width: 100%;
  padding: 0.75rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background: linear-gradient(90deg, #007bff, #0056b3);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

button:hover {
  background: linear-gradient(90deg, #0056b3, #003d80);
}

button:active {
  transform: scale(0.98);
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2);
}
</style>
