<template>
  <nav><router-link to="/form">VIP job</router-link></nav>
  <router-view />
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Open Sans', 'Helvetica Neue', 'Trebuchet MS', Arial, sans-serif;
  scroll-behavior: smooth;
}

body {
  background-color: #0d0d0d;
  color: #fff;
}

button {
  cursor: pointer;
}

button,
input,
textarea,
select {
  font-size: inherit;
  font-family: inherit;
}

option {
  cursor: pointer;
}

img {
  max-width: 100%;
}

li {
  list-style: none;
}

a {
  color: inherit;
  text-decoration: none;
}

#app {
  max-width: 2000px;
  margin: 0 auto;
}
</style>
