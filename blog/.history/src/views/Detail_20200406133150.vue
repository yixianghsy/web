<template>
    <div class="wrapper">
        <h1 class="title">{{blogDetail.title}}  <h1>
        <div class="time">
                <span class="date"> <i  class="iconfont icon-date" ></i>{{blogDetail.create_time}} </span>
        </div>
        <div class="detail"> 
              <mavon-editor　v-model="blogDetail.content"　
             defaultOpen="preview"
            :toolbarsFlag="false"
            :subfield="false"/>
        </div>
          <comment></comment>
              </div>
  </div>
</template>