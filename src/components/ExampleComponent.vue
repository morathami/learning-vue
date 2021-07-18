<template>
  <div>
    <InputText type="text" v-model="value" />
    <Button label="Primary" class="p-button-outlined" />
  </div>
</template>

<script>
import Message from 'primevue/message'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'

export default {
  name: 'ExampleComponent',
  components: {
    Message, Button, InputText
  },
  data () {
  },
  methods: {
  }
}
</script>
