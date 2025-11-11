<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/">Home</router-link> | 
  <router-link to="/testing/123">Testing (ID: 123)</router-link> | 
  <router-link to="/testing/hello">Testing (ID: hello)</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>