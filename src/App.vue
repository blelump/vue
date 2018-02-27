<template>
  <div id="app">
    <CourseCollection :courses="courses"/>
  </div>
</template>

<script>

export default {
  name: 'App',
  dependencies: ['CourseFetcher'],
  components: { CourseCollection: 'CourseCollection' },
  beforeMount () {
    this.fetchCourses();
  },
  data () {
    return {
      courses: []
    };
  },
  methods: {
    fetchCourses () {
      this.CourseFetcher.then(
        (courses) => {
          this.courses = courses;
        }
      );
    }
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
