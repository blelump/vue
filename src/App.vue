<template>
  <div id="app">
    <CourseCollection :courses="courses"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: { CourseCollection: 'CourseCollection' },
  data () {
    return {
      courses: [
        { id: 33, name: 'kurs 1', deletable: false },
        { id: 44, name: 'kurs 2', deletable: true }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
