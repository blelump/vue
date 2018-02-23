<template lang='pug'>
  table
    CourseRowFunctional(
      v-for="course in courses"
      :key="course.id"
      :course="course"
    )
</template>

<script>
import CourseRowFunctional from './CourseRowFunctional'

export default {
  components: { CourseRowFunctional },
  props: {
    courses: Array
  }
}
</script>
