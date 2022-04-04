<template>
  <component :class="classes" :is="componentName"></component>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import endsWith from 'lodash/endsWith'

import { ExternalLinkIcon, CheckIcon, SparklesIcon } from '@heroicons/vue/outline'
const components = {
  ExternalLinkIcon,
  CheckIcon,
  SparklesIcon,
}

export default defineComponent({
  components,
  props: {
    value: {
      type: String as PropType<string>,
      required: true
    },
    size: {
      type: Number as PropType<number | null>,
      default: 6
    },
    left: {
      type: Boolean as PropType<boolean>,
      default: false
    },
    right: {
      type: Boolean as PropType<boolean>,
      default: false
    },
  },
  setup(props) {
    let classes = []

    if (props.size) {
      classes.push(`h-${props.size}`)
      classes.push(`w-${props.size}`)
    }

    if (props.right) {
      classes.push('right')
    }

    if (props.left) {
      classes.push('left')
    }

    let componentName = toComponentName(props.value)

    if (!Object.keys(components).includes(componentName)) {
      console.error(`${componentName} is not a valid icon component. Maybe add it to imports in BaseIcon.vue?`)
      componentName = 'span'
      classes = []
    }

    return {
      componentName,
      classes
    }
  },
})

function toComponentName(input: string) {
  let componentName = toPascal(input)

  if (!endsWith(componentName, 'Icon')) {
    componentName += 'Icon'
  }

  return componentName;
}

function toPascal(input: string) {
  if (input.includes('-')) {
    input = input.replace(/(\w)(\w*)/g,
      function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); }).replace('-', '')
  }

  return input.charAt(0).toUpperCase() + input.slice(1);
}

</script>