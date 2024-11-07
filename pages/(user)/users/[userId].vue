<template lang="pug">
    div(style=" background: #FCFCFD ")
      div(style='background:#FEF7F7 ; padding: 32px ')
          .headerSection.d-flex.flex-column.flex-sm-row.justify-content-between.align-items-sm-end.align-items-start 
            div
              h1(:style="{  fontWeight: '600', fontSize: '32px', lineHeight: '38px'}") Users
              p(:style="{color: '#475467',  fontWeight: '400', fontSize: '16px', lineHeight: '24px'}").m-0 Users 
                span(style='color: #343330 ; margin:0 4px') >
                |user profile
            .buttons.d-flex(style="gap: 8px").mt-3.mt-sm-0.flex-wrap
                BaseButton(
                  title="Unblock"
                  width= '113px'
                  height= '40px'
                  backGround
                  borderRadius= '8px'
                  padding='10px 16px'
                  fontsize='14px'
                  withIcon
                )
                  template
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.9422 12.0578C13.0003 12.1159 13.0463 12.1848 13.0777 12.2607C13.1092 12.3366 13.1254 12.4179 13.1254 12.5C13.1254 12.5821 13.1092 12.6634 13.0777 12.7393C13.0463 12.8152 13.0003 12.8841 12.9422 12.9422C12.8841 13.0003 12.8152 13.0463 12.7393 13.0777C12.6634 13.1092 12.5821 13.1253 12.5 13.1253C12.4179 13.1253 12.3366 13.1092 12.2607 13.0777C12.1848 13.0463 12.1159 13.0003 12.0578 12.9422L7.05782 7.94219C6.94054 7.82491 6.87466 7.66585 6.87466 7.5C6.87466 7.33415 6.94054 7.17509 7.05782 7.05781C7.17509 6.94054 7.33415 6.87465 7.5 6.87465C7.66586 6.87465 7.82492 6.94054 7.94219 7.05781L12.9422 12.0578ZM18.125 10C18.125 11.607 17.6485 13.1779 16.7557 14.514C15.8629 15.8502 14.594 16.8916 13.1093 17.5065C11.6247 18.1215 9.99099 18.2824 8.4149 17.9689C6.8388 17.6554 5.39106 16.8815 4.25476 15.7452C3.11846 14.6089 2.34463 13.1612 2.03112 11.5851C1.71762 10.009 1.87852 8.37535 2.49348 6.8907C3.10844 5.40605 4.14985 4.1371 5.486 3.24431C6.82214 2.35152 8.39303 1.875 10 1.875C12.1542 1.87727 14.2195 2.73403 15.7427 4.25727C17.266 5.78051 18.1227 7.84581 18.125 10ZM16.875 10C16.875 8.64025 16.4718 7.31104 15.7164 6.18045C14.9609 5.04987 13.8872 4.16868 12.631 3.64833C11.3747 3.12798 9.99238 2.99183 8.65876 3.2571C7.32514 3.52237 6.10013 4.17716 5.13864 5.13864C4.17716 6.10013 3.52238 7.32513 3.2571 8.65875C2.99183 9.99237 3.12798 11.3747 3.64833 12.6309C4.16868 13.8872 5.04987 14.9609 6.18046 15.7164C7.31105 16.4718 8.64026 16.875 10 16.875C11.8227 16.8729 13.5702 16.1479 14.8591 14.8591C16.1479 13.5702 16.8729 11.8227 16.875 10Z" fill="white"/>
                      </svg>  
                BaseButton(
                  title="Delete"
                  width= '102px'
                  height= '40px'
                  border='1px solid #D0D5DD'
                  borderRadius= '8px'
                  padding='10px 16px'
                  fontsize='14px'
                  withIcon
                )
                  template             
                    span(style='margin:4px 4px 0 0')
                      el-icon
                        Delete 
                BaseButton(
                  width= '50px'
                  height= '40px'
                  border='1px solid #D0D5DD'
                  borderRadius= '8px'
                  padding='10px 16px'
                  withIcon
                )
                  template             
                    <svg width="20" height="20" viewBox="0 0 20 20"  fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99996 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.5398 10.4602 9.16671 9.99996 9.16671C9.53972 9.16671 9.16663 9.5398 9.16663 10C9.16663 10.4603 9.53972 10.8334 9.99996 10.8334Z" stroke="#858589" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.99996 5.00004C10.4602 5.00004 10.8333 4.62694 10.8333 4.16671C10.8333 3.70647 10.4602 3.33337 9.99996 3.33337C9.53972 3.33337 9.16663 3.70647 9.16663 4.16671C9.16663 4.62694 9.53972 5.00004 9.99996 5.00004Z" stroke="#858589" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M9.99996 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8334C10.8333 15.3731 10.4602 15 9.99996 15C9.53972 15 9.16663 15.3731 9.16663 15.8334C9.16663 16.2936 9.53972 16.6667 9.99996 16.6667Z" stroke="#858589" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
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
      .accountInformation(style= 'padding:0 32px 30px; margin-top:24px ').d-flex.flex-column.flex-md-row.justify-content-between.align-items-start.gap-4
                    div(style="background:#FFFFFF; padding: 32px 24px ;border-radius:8px;width: 100%")
                      h1(style='color:#101828;font-size: 20px;font-weight: 600;line-height: 24px;margin-bottom: 25px ')  Account info
                      div
                        .name.border-bottom.m-0.pb-3
                          h1(style="color:#101828;font-size: 16px;font-weight: 500;line-height: 20px").mb-2 Name
                          p(style="color:#858589;font-size: 14px;font-weight: 400;line-height: 20px").m-0  {{data.user.name}}
                        .email.border-bottom.m-0.py-3
                          h1(style="color:#101828;font-size: 16px;font-weight: 500;line-height: 20px").mb-2 Email address
                          p(style="color:#858589;font-size: 14px;font-weight: 400;line-height: 20px").m-0  {{data.user.email}}
                        .role.m-0.pt-3
                          h1(style="color:#101828;font-size: 16px;font-weight: 500;line-height: 20px").mb-2 Role
                          p(style="color:#858589;font-size: 14px;font-weight: 400;line-height: 20px").m-0  {{data.user.role}}
                    div
                      BaseButton(
                        title="Edit"
                        width= '86px'
                        height= '40px'
                        border='1px solid #D0D5DD'
                        borderRadius= '8px'
                        padding='10px 16px'
                        fontsize='14px'
                        withIcon
                        whiteBackground='white'
                        @click="showForm = true"
                      )
                        template             
                          span(style='margin:4px 4px 0 0')
                            el-icon 
                              EditPen 
                    Teleport(to="body")
                      div(v-if="showForm" class="modal-overlay z-3 ")
                        div(class="modal-content mx-4")
                          h3.mb-3 Edit Username
                          el-input(
                            v-model="username"
                            style='width: 100%; height: 40px; margin-bottom: 15px'
                            size="large"
                            placeholder="Enter new username"
                            :prefix-icon="User"
                            class="custom-icon-size"
                            )
                          .buttons.d-flex(style="gap: 12px").flex-wrap.mt-2.mt-sm-0
                                BaseButton(
                                  title="UPDATE"
                                  width= '80px'
                                  height= '40px'
                                  backGround
                                  borderRadius= '8px'
                                  padding='10px 16px'
                                  fontsize='14px'
                                  centerTitles
                                  @click="updateUsername"
                                )
                                BaseButton(
                                  title="CLOSE"
                                  width= '80px'
                                  height= '40px'
                                  border='1px solid #D0D5DD'
                                  borderRadius= '8px'
                                  padding='10px 16px'
                                  fontsize='14px'
                                  centerTitles
                                  @click="showForm = false"
                                )                        
                        

</template>

<script setup lang="ts">
import { Delete, EditPen } from "@element-plus/icons-vue";
const activeLink = ref("user");
const showForm = ref(false);
const username = ref("");
const { params } = useRoute();

const { data, error, status, refresh } = await useAsyncGql({
  operation: "GetSpecificUser",
  variables: { id: params.userId },
});

const updateUsername = async () => {
  const { data, error } = await useAsyncGql({
    operation: "UpdateUser",
    variables: { id: params.userId, name: username.value },
  });
  showForm.value = false;
  console.log(data.value);
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

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.051);
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}
</style>
