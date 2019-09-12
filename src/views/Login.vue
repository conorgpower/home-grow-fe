<template>
  <div>
    <div class="header">
      <img class="logo" src="../assets/logo.png">
      <div class="app-name">
        <p style="color: #141414">
          HOME
          <b style="color: #00cc66;">GROW</b>
        </p>
      </div>
    </div>
    <form class="login-form">
      <div class="label">
        Email:
        <input type="email" name="email">
        <br>
      </div>
      <div class="label">
        Password:
        <input type="password" name="password">
      </div>
    </form>
    <button>Submit</button>
    <button>Reset</button>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="css">
button {
  margin-top: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
}

input {
  border-radius: 4px;
  margin-top: 10px;
}

.header {
  display: flex;
  justify-content: center;
}

.app-name {
  font-size: 32px;
  padding: 50px;
}

.logo {
  width: 75px;
  height: 75px;
  float: left;
  margin-top: 30px;
}
</style>
