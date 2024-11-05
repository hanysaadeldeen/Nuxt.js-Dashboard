<template lang="pug">
    .headerSection.d-flex.flex-column.flex-lg-row.justify-content-between.align-items-center.mt-4.mb-3.gap-3
        el-input(
            v-model="search"
            :style="{maxWidth:'400px', borderRadius: '8px', height: '44px'}"
            placeholder="Search"
            :prefix-icon="Search"
            size="large"
          )    
        .d-flex.align-items-center.gap-3.flex-column.flex-sm-row
          el-date-picker(
            class="custom-date-picker"
            v-model="DatePicker"
            :style="{maxWidth:'236px', height: '44px',cursor: 'pointer'}"
            size="large"
            type="dates"
            placeholder="Pick one or more dates")
          BaseButton(
            title="Filters"
            width= '101px'
            height= '44px'
            border='1px solid #D0D5DD'
            borderRadius= '4px'
            padding='10px 16px'
            fontsize='14px'
            withIcon
            )
              template             
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15.625 10C15.625 10.1658 15.5592 10.3247 15.4419 10.4419C15.3247 10.5592 15.1658 10.625 15 10.625H5C4.83424 10.625 4.67527 10.5592 4.55806 10.4419C4.44085 10.3247 4.375 10.1658 4.375 10C4.375 9.83424 4.44085 9.67527 4.55806 9.55806C4.67527 9.44085 4.83424 9.375 5 9.375H15C15.1658 9.375 15.3247 9.44085 15.4419 9.55806C15.5592 9.67527 15.625 9.83424 15.625 10ZM18.125 5.625H1.875C1.70924 5.625 1.55027 5.69085 1.43306 5.80806C1.31585 5.92527 1.25 6.08424 1.25 6.25C1.25 6.41576 1.31585 6.57473 1.43306 6.69194C1.55027 6.80915 1.70924 6.875 1.875 6.875H18.125C18.2908 6.875 18.4497 6.80915 18.5669 6.69194C18.6842 6.57473 18.75 6.41576 18.75 6.25C18.75 6.08424 18.6842 5.92527 18.5669 5.80806C18.4497 5.69085 18.2908 5.625 18.125 5.625ZM11.875 13.125H8.125C7.95924 13.125 7.80027 13.1908 7.68306 13.3081C7.56585 13.4253 7.5 13.5842 7.5 13.75C7.5 13.9158 7.56585 14.0747 7.68306 14.1919C7.80027 14.3092 7.95924 14.375 8.125 14.375H11.875C12.0408 14.375 12.1997 14.3092 12.3169 14.1919C12.4342 14.0747 12.5 13.9158 12.5 13.75C12.5 13.5842 12.4342 13.4253 12.3169 13.3081C12.1997 13.1908 12.0408 13.125 11.875 13.125Z" fill="#343330"/>
                </svg>
    .UsersList(:style="{borderRadius: '12px',border:'1px solid #DDDCD8',overflow: 'hidden'}")
        .d-flex.justify-content-between.align-items-center(style="padding:12px 16px")
            h1(:style="{fontSize:'18px', fontWeight:'500',lineHeight:'28px',color:'#101828'}").m-0 All users
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.5398 10.4602 9.16671 10 9.16671C9.53976 9.16671 9.16666 9.5398 9.16666 10C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 5.00004C10.4602 5.00004 10.8333 4.62694 10.8333 4.16671C10.8333 3.70647 10.4602 3.33337 10 3.33337C9.53976 3.33337 9.16666 3.70647 9.16666 4.16671C9.16666 4.62694 9.53976 5.00004 10 5.00004Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8334C10.8333 15.3731 10.4602 15 10 15C9.53976 15 9.16666 15.3731 9.16666 15.8334C9.16666 16.2936 9.53976 16.6667 10 16.6667Z" stroke="#98A2B3" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        .currentUsers
            //- .row(:style="{background: '#F9FAFB',padding: '0 16px' }")
            //-   .col-3.d-flex.align-items-center.gap-2
            //-     <el-checkbox v-model="checkedAllName" size="large" />
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 All users
            //-   .col-2.d-flex.align-items-center
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 Email
            //-   .col-1.d-flex.align-items-center.justify-content-center
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 Username
            //-   .col-2.d-flex.align-items-center.justify-content-center
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 Mobile number
            //-   .col-1.d-flex.align-items-center.justify-content-center
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 Region
            //-   .col-2.d-flex.align-items-center.justify-content-center.gap-2
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 Created at
            //-     <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            //-       <path d="M6 1.33337V10.6667M6 10.6667L10.6667 6.00004M6 10.6667L1.33334 6.00004" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
            //-     </svg>
            //-   .col-1.d-flex.align-items-center
            //-     h1(:style="{fontSize:'12px', fontWeight:'500',lineHeight:'18px',color:'#475467',cursor:'pointer'}" @click='checkedAllName=!checkedAllName').m-0 Created at
        el-table(:data="tableData" :style="{width: '100%'}"  @row-click="handleRowClick" class="clickable-rows")
          el-table-column( type="selection" width="30" )
          el-table-column( label="Name" width="216")
              template(#default="scope")
                div(class="user-info")
                  img(src="/images/two.png" alt="User Image" class="user-image")
                  span  {{ scope.row.name}}
          el-table-column(property="email" label="Email" width="189") 
          el-table-column(
            property="Username"
            label="Username"
            width="107"
            )
          el-table-column(property="mobile" label="Mobile number" width="162")
          el-table-column(property="region" label="Region"  width="127")
          el-table-column(property="created" label="Created at" width="133")
            template(#header="scope")
              .d-flex.justify-content-center.gap-2.align-items-center
                span Created at
                svg(width="12" height="12" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg")
                  path(d="M6 1.33337V10.6667M6 10.6667L10.6667 6.00004M6 10.6667L1.33334 6.00004" stroke="#475467" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round")
          el-table-column( width="188")
            template(#default="scope")
              .icon-container.d-flex.justify-content-end
                svg(width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg")
                  path(d="M9 0.875C7.39303 0.875 5.82214 1.35152 4.48599 2.24431C3.14984 3.1371 2.10844 4.40605 1.49348 5.8907C0.878517 7.37535 0.717615 9.00901 1.03112 10.5851C1.34462 12.1612 2.11846 13.6089 3.25476 14.7452C4.39106 15.8815 5.8388 16.6554 7.41489 16.9689C8.99099 17.2824 10.6247 17.1215 12.1093 16.5065C13.594 15.8916 14.8629 14.8502 15.7557 13.514C16.6485 12.1779 17.125 10.607 17.125 9C17.1227 6.84581 16.266 4.78051 14.7427 3.25727C13.2195 1.73403 11.1542 0.877275 9 0.875ZM15.875 9C15.8766 10.6074 15.3121 12.1641 14.2805 13.3969L4.60312 3.71875C5.60703 2.88358 6.82804 2.35159 8.12326 2.18506C9.41849 2.01853 10.7344 2.22433 11.9169 2.77838C13.0994 3.33243 14.0997 4.21182 14.8006 5.31363C15.5016 6.41545 15.8743 7.69411 15.875 9ZM2.125 9C2.1234 7.39255 2.68793 5.83588 3.71953 4.60313L13.3969 14.2812C12.393 15.1164 11.172 15.6484 9.87674 15.8149C8.58151 15.9815 7.26565 15.7757 6.08312 15.2216C4.9006 14.6676 3.90033 13.7882 3.19937 12.6864C2.4984 11.5846 2.12575 10.3059 2.125 9Z" fill="#B71A2A")
                svg(width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg")
                  path(d="M10 10.8334C10.4602 10.8334 10.8333 10.4603 10.8333 10C10.8333 9.5398 10.4602 9.16671 10 9.16671C9.53976 9.16671 9.16666 9.5398 9.16666 10C9.16666 10.4603 9.53976 10.8334 10 10.8334Z" stroke="#858589" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round")
                  path(d="M10 5.00004C10.4602 5.00004 10.8333 4.62694 10.8333 4.16671C10.8333 3.70647 10.4602 3.33337 10 3.33337C9.53976 3.33337 9.16666 3.70647 9.16666 4.16671C9.16666 4.62694 9.53976 5.00004 10 5.00004Z" stroke="#858589" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round")
                  path(d="M10 16.6667C10.4602 16.6667 10.8333 16.2936 10.8333 15.8334C10.8333 15.3731 10.4602 15 10 15C9.53976 15 9.16666 15.3731 9.16666 15.8334C9.16666 16.2936 9.53976 16.6667 10 16.6667Z" stroke="#858589" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round")
        .pagination.d-flex.justify-content-center.justify-content-lg-between.align-items-center(style="padding:12px 24px 15px ")
          BaseButton(
            class="d-none d-lg-flex"
            title="Previous"
            width= '112px'
            height= '36px'
            border='1px solid #D0D5DD'
            borderRadius= '8px'
            padding='10px 16px'
            fontsize='14px'
            withIcon 
            @click="currentPage--"
            )
              template             
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8334 7.00008H1.16669M1.16669 7.00008L7.00002 12.8334M1.16669 7.00008L7.00002 1.16675" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
          el-pagination(
              :page-size="20"
              :pager-count="7"
              layout="pager"
              :total="200"
              v-model:current-page="currentPage"
            )
          BaseButton(
            class="d-none d-lg-flex"
            title="Next"
            width= '87px'
            height= '36px'
            border='1px solid #D0D5DD'
            borderRadius= '8px'
            padding='10px 16px'
            fontsize='14px'
            withIcon 
            reverse
            @click="currentPage++"
            )
              template             
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.16667 7.00008H12.8333M12.8333 7.00008L7 1.16675M12.8333 7.00008L7 12.8334" stroke="#344054" stroke-width="1.67" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

    
</template>

<script setup lang="ts">
import { Search } from "@element-plus/icons-vue";
const search = ref("");
const DatePicker = ref("");
const checkedAllName = ref(false);
const currentPage = ref(5);

const router = useRouter();
const handleRowClick = (row: any) => {
  const userName = row.id;
  console.log(userName);
  router.push(`/users/${userName}`);
};

interface User {
  date: string;
  name: string;
  mobile: string;
  region: string;
  created: string;
  email: string;
  Username: string;
  id: number;
}
const tableData: User[] = [
  {
    id: 1,
    date: "2016-05-04",
    email: "olivia@untitledui.com",
    name: "Aleyna Kutzner",
    mobile: "+20 123 456 789",
    region: "egypt",
    created: "Jan 13, 2022",
    Username: "@oli267",
  },
  {
    id: 2,
    date: "2016-05-03",
    name: "Helen Jacobi",
    email: "olivia@untitledui.com",
    mobile: "+20 123 456 789",
    region: "egypt",
    created: "Jan 13, 2022",
    Username: "@oli267",
  },
  {
    id: 5,
    date: "2016-05-02",
    name: "Brandon Deckert",
    mobile: "+20 123 456 789",
    region: "egypt",
    email: "olivia@untitledui.com",
    created: "Jan 13, 2022",
    Username: "@oli267",
  },
  {
    id: 4,
    date: "2016-05-01",
    name: "Margie Smith",
    mobile: "+20 123 456 789",
    region: "egypt",
    email: "olivia@untitledui.com",
    created: "Jan 13, 2022",
    Username: "@oli267",
  },
];
</script>

<style scoped>
.clickable-rows .el-table__row {
  cursor: pointer;
}

.el-pagination .el-pager li {
  background-color: #f5f5f5;
}

.el-pager li.is-active {
  background: linear-gradient(90deg, #ef3e2c, #e71f63) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
}

.is-active {
  background: linear-gradient(90deg, #ef3e2c, #e71f63) !important;
  -webkit-background-clip: text !important;
  background-clip: text !important;
  color: transparent !important;
}

.el-pagination .el-pager li.more {
  background-color: transparent;
  color: #333;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 8px;
}
.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}
.el-date-editor--dates .el-input__wrapper {
  border-radius: 20px !important;
}

.icon-container {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
}
</style>
