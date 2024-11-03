<template lang="pug">
  main.overflow-hidden
    .row.h-100
      .col-lg-6.h-100.gradient-background.d-none.d-lg-block.position-relative
        .white-circle 
      .col-12.col-lg-6.h-100.d-flex.align-items-center.justify-content-center 
        .inputs-container(:style="{width: '400px', height: '504px'}")
          h1.authName Sign Up for an Account
          form(@submit.prevent="signup").d-flex.flex-column.align-items-start.justify-content-center.gap-3
            el-input(
              v-model="userName"
              :style="{ width: '400px', height: '56px' }"
              size="large"
              placeholder="Username"
              :prefix-icon="User"
              class="custom-icon-size"
              )
            el-input(
              v-model="userEmail"
              :style="{width: '400px', height: '56px'}"
              size="large"
              placeholder="Email"
              :prefix-icon="Message"
              class="custom-icon-size"
              )
            el-input(
              v-model="userPassword"
              :style="{ width: '400px', height: '56px' }"
              size="large"
              type="password"
              placeholder="Please input password"
              :prefix-icon="Lock"
              show-password
              class="custom-icon-size"
            )
            span Your password must have at least 8 characters
            .d-flex.justify-content-start.align-items-center.gap-3.my-2
              el-checkbox(v-model="checked" size="large" class="custom-checkbox")
              div(@click='checked = !checked' :style="{cursor: 'pointer', width: '300px', color: '#858589', fontWeight: '400', fontSize: '12px' }")
                | By creating an account means you agree to the 
                span(style="color: #000000") Terms & Conditions 
                | and our 
                span(style="color: #000000") Privacy Policy
            BaseButton(
              title="Sign Up"
              width= '100%'
              height= '56px'
              style="margin: 15px 0"
              )
            .text-center.w-100 Already have an account? 
              NuxtLink(:to="{name: 'signin'}").authTriggre  Log In
</template>

<script setup lang="ts">
import { User, Lock, Message } from "@element-plus/icons-vue";

const userName = ref("");
const userPassword = ref("");
const userEmail = ref("");
const checked = ref("");

const signup = () => {
  console.log(userName.value);
  console.log(userPassword.value);
  console.log(userEmail.value);
  console.log(checked.value);
};
</script>

<style scoped>
main {
  height: 100vh;
  width: 100vw;
}
.gradient-background {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
}
.white-circle {
  background: linear-gradient(90deg, #ffffff00, #ffffff0f);
  position: absolute;
  top: 142px;
  left: 92px;
  width: 524px;
  height: 524px;
  border-radius: 50%;
}
.authName {
  font-weight: 700;
  font-size: 24px;
  color: #000000;
  line-height: 30px;
  margin-bottom: 35px;
}
.custom-icon-size >>> .el-input__prefix .el-icon {
  font-size: 24px;
}
form span {
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #858589;
  text-align: start;
}
.custom-checkbox .el-checkbox__input {
  width: 40px;
  height: 40px;
}

.custom-checkbox .el-checkbox__inner {
  width: 40px;
  height: 40px;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
}

.custom-checkbox .el-checkbox__input.is-checked .el-checkbox__inner {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  border-color: transparent;
}
.custom-checkbox .el-checkbox__inner::after {
  transform: scale(0.7);
  background-color: white;
}

.authTriggre {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
</style>
