<template lang='pug'>
  table
    CourseRowFunctional(
      v-for="course in courses"
      :key="course.id"
      :course="course"
    )
</template>

<script>
export default {
  components: { CourseRowFunctional: 'CourseRowFunctional' },
  props: {
    courses: Array
  }
};
</script>
