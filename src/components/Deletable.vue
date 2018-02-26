<template lang='pug'>
  td
    button(@click="clicked") remove id {{id}}
</template>

<script>
export default {
  props: {
    course: Object
  },
  computed: {
    id () {
      return this.course.id;
    }
  },
  methods: {
    clicked () {
      this.$emit('clicked', this.course);
    }
  }
};
</script>
