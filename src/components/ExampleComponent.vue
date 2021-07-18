<template>
  <div class="flex justify-content-center">
    <div class="div-width-400">
      <div class="grid align-items-center">
        <h1 class="col text-cyan-600 text-left">Hello</h1>
        <h3 class="col text-right">Thami :)</h3>
      </div>
      <InputText type="text" />
      <Button label="Submit" />
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default {
  name: 'ExampleComponent',
  components: {
    Button, InputText
  },
  data () {
  },
  methods: {
  }
}
</script>

<style scoped>
.div-width-400 {
  max-width: 400px
}
</style>
