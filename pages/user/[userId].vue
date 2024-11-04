<template lang="pug">
  main.row.h-100.overflow-x-hidden.overflow-y-auto.m-0
    sideBar
    .col-9(:style="{ padding: '32px  24px'}")
      .headerSection.d-flex.justify-content-between.align-items-end 
        div
          h1(:style="{  fontWeight: '600', fontSize: '32px', lineHeight: '38px'}") Users
          p(:style="{color: '#475467',  fontWeight: '400', fontSize: '16px', lineHeight: '24px'}") Users 
            span(style='color: #343330') >
            |user profile
        .buttons.d-flex(style="gap: 8px")
            BaseButton(
              title="Unblock"
              width= '113px'
              height= '40px'
              backGround
              borderRadius= '8px'
              padding='10px 16px'
              withIcon
            )
              template
                span(style='margin-right:4px')
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
              withIcon
            )
              template             
                span(style='margin-right:8px')
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

      .controller.border-bottom.w-100.mt-2
            .links.d-flex.gap-3(:style='{color:"#667085"}')
              .link(:class="{activeOne: activeLink === 'user'}" :style="{fontSize:'14px', fontWeight:'600',cursor:'pointer' }"  @click="activeLink = 'user'").pb-3.px-1 Account
          
</template>

<script setup lang="ts">
import { Delete } from "@element-plus/icons-vue";
</script>

<style scoped></style>
