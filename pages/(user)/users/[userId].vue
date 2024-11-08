<template lang="pug">
    div(style=" background: #FCFCFD ")
      div(style='background:#FEF7F7 ; padding: 32px ')
          userHeaderSection
          .userInfo.d-flex.justify-content-start.align-items-center.mt-4.gap-4.flex-column.flex-sm-row
                    img( :src="data.user.avatar" alt="user-image" style="width: 101px; height: 101px; border-radius: 50%")
                    .info.d-flex.flex-column.align-items-center.align-items-sm-start
                      .d-flex.gap-2.align-items-center.mb-2
                        svg(width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg")
                          path(d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.48599 2.24431C3.14984 3.1371 2.10844 4.40605 1.49348 5.8907C0.878517 7.37535 0.717615 9.00901 1.03112 10.5851C1.34462 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM15.875 9C15.8766 10.6074 15.3121 12.1641 14.2805 13.3969L4.60312 3.71875C5.60703 2.88358 6.82804 2.35159 8.12326 2.18506C9.41849 2.01853 10.7344 2.22433 11.9169 2.77838C13.0994 3.33243 14.0997 4.21182 14.8006 5.31363C15.5016 6.41545 15.8743 7.69411 15.875 9ZM2.125 9C2.1234 7.39255 2.68793 5.83588 3.71953 4.60313L13.3969 14.2812C12.393 15.1164 11.172 15.6484 9.87674 15.8149C8.58151 15.9815 7.26565 15.7757 6.08312 15.2216C4.9006 14.6676 3.90033 13.7882 3.19937 12.6864C2.4984 11.5846 2.12575 10.3059 2.125 9Z" fill="#B71A2A")
                        h1(style="color:#B71A2A; font-size:24px; font-weight:500;line-height:29px").m-0 {{data.user.name}}
                      p(style="color:#B71A2A; font-size:18px; font-weight:400;line-height:21px").m-0  U123456781
          .controller.border-bottom.w-100.mt-4
                .links.d-flex.gap-3(:style='{color:"#667085"}')
                  .link(:class="{activeOne: activeLink === 'user'}" :style="{fontSize:'14px', fontWeight:'600',cursor:'pointer' }"  @click="activeLink = 'user'").pb-3.px-1 Account
      userAccountSection(:email="data.user.email" :name="data.user.name" :role="data.user.role" :userId="params.userId"   @refreshPage="refreshPage" )                       
</template>

<script setup lang="ts">
const activeLink = ref("user");
const { params } = useRoute();

definePageMeta({
  middleware: ["auth"],
});
const { data, error, status, refresh } = await useAsyncGql({
  operation: "GetSpecificUser",
  variables: { id: params.userId },
});

const refreshPage = () => {
  refresh();
};
</script>

<style scoped>
.activeOne {
  background: linear-gradient(90deg, #ef3e2c, #e71f63);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  border-bottom: #e71f63 2px solid;
}
</style>
