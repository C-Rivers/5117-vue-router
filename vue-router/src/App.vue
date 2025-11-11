<template>
  <p>Choose what part of this page you want to see:</p>
  <router-link to="/">Home</router-link>
  <router-link to="/testing">Testing</router-link><br>
  <div>
    <router-view></router-view>
  </div>
</template>