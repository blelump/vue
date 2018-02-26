<script>

export default {
  props: {
    course: Object
  },
  dependencies: ['Deletable', 'CourseInfo'],
  render (createElement) {
    const componentContent = [
      createElement(
        this.CourseInfo,
        { props: { courseName: this.$props.course.name } }
      )
    ];
    if (this.$props.course.deletable) {
      componentContent.push(
        createElement(
          this.Deletable,
          {
            props: { course: this.$props.course },
            on: {
              clicked () {
                console.log('clack');
              }
            }
          }
        )
      );
    }
    return createElement(
      'tr',
      componentContent
    );
  }
};
</script>
