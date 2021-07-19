<template>
  <div class="grid justify-content-center">
    <div class="div-width-600 mr-8">
        <h3 class="text-gray-900">Users</h3>
        <DataTable :value="users">
          <Column field="id" header="ID"></Column>
          <Column field="name" header="Name"></Column>
          <Column header="Status">
            <template #body="slotProps">
              <Tag v-if="slotProps.data.registered" severity="success">Registered</Tag>
              <Tag v-else severity="danger">Unregistered</Tag>
            </template>
          </Column>
          <Column header="Action">
            <template #body="slotProps">
              <Button v-if="!slotProps.data.registered" label="Register" @click="register(slotProps.data)" class="p-button-outlined"/>
              <Button v-else label="Unregister" class="p-button-outlined p-button-danger" @click="unregister(slotProps.data)"/>
            </template>
          </Column>
        </DataTable>
    </div>
    <div>
      <Card>
        <template #title>Registered Users</template>
        <template #subtitle>Total: {{ total }}</template>
        <template #content>
          <p v-for="user in registeredUsers"  v-bind:key="user.id">{{ user.name }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Tag from 'primevue/tag'
import Card from 'primevue/card'
import { mapState, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'ExampleComponent',
  components: {
    Button, DataTable, Column, Tag, Card
  },
  methods: {
    ...mapMutations(['register', 'unregister'])
  },
  computed: {
    ...mapState(['registrations', 'users']),
    ...mapGetters({
      registeredUsers: 'registeredUsers',
      total: 'totalRegistrations'
    })
  }
}
</script>

<style scoped>
.div-width-600 {
  max-width: 600px
}
</style>
