<template>
	<div>
		<div v-if="message" class="alert alert-success">
			{{ message }}
		</div>

		<form @submit.prevent="store" action="/user" method="post">
			<div :class="['form-group', errors.username ? 'has-error' : '']">
				<label>Username</label>
				<input v-model="state.username" type="text" class="form-control">
				<span v-if="errors.username" class="label label-danger">{{ errors.username[0] }}</span>
			</div>

			<div :class="['form-group', errors.fullname ? 'has-error' : '']">
				<label>Fullname</label>
				<input v-model="state.fullname" type="text" class="form-control">
				<span v-if="errors.fullname" class="label label-danger">{{ errors.fullname[0] }}</span>
			</div>

			<div :class="['form-group', errors.city ? 'has-error' : '']">
				<label>City</label>
				<input v-model="state.city" type="text" class="form-control">
				<span v-if="errors.city" class="label label-danger">{{ errors.city[0] }}</span>
			</div>

			<div class="form-group">
				<button class="btn btn-primary">Submit</button>
				<router-link :to="{ name: 'userIndex' }">Back to index</router-link>
			</div>
		</form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				errors: [],
				user: [],
				state: {
					username: '',
					fullname: '',
					city: '',
					status: 'Active'
				}
			}
		},

		methods: {
			store(e) {
				axios.post(e.target.action, this.state).then(response => {
					this.errors = [];

					this.state = {
						username: '',
						fullname: '',
						city: ''
					}

					this.message = 'User has been created.';
				}).catch(error => {
					if (! _.isEmpty(error.response)) {
						if (error.response.status = 422) {
							this.errors = error.response.data;
						}
					}
				});
			}
		}
	}
</script>