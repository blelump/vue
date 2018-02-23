<script>
import Deletable from './Deletable'

const CourseInfo = {
  template: '<td>{{courseName}}</td>',
  props: {
    courseName: String
  }
}

export default {
  functional: true,
  render (createElement, { props }) {
    const componentContent = [
      createElement(
        CourseInfo,
        { props: { courseName: props.course.name } }
      )
    ]
    if (props.course.deletable) {
      componentContent.push(
        createElement(
          Deletable,
          {
            props: { course: props.course },
            on: {
              clicked () {
                console.log('clack')
              }
            }
          }
        )
      )
    }
    return createElement(
      'tr',
      componentContent
    )
  }
}
</script>
