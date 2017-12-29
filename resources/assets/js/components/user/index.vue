<template>
	<div class="table-responsive">

		<router-link to="create" class="btn btn-primary">
			Create new
		</router-link>

		<hr>

		<table class="table">
			<thead>
				<tr>
					<th>No.</th>
					<th>Username</th>
					<th>Fullname</th>
					<th>City</th>
					<th>Status</th>
					<th>Created</th>
				</tr>
			</thead>

			<tbody>
				<tr v-for="(user, index) in users.data">
					<td>{{ users.from + index }}</td>
					<td>{{ user.username }} </td>
					<td>{{ user.fullname }} </td>
					<td>{{ user.city }} </td>
					<td>{{ user.status }} </td>
					<td>{{ user.created_at }} </td>
				</tr>
			</tbody>
		</table>
		
		<ul class="pagination">
			<li v-if="users.prev_page_url">
				<a @click.prevent="paginate(users.prev_page_url)" :href="users.prev_page_url">&laquo; Previous</a>
			</li>
			<li v-if="users.next_page_url">
				<a @click.prevent="paginate(users.next_page_url)" :href="users.next_page_url">Next &raquo;</a>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: []
			}
		},

		mounted() {
			axios.get('/user/paginate').then(response => {
				this.users = response.data;
			});
		},

		methods: {

			paginate(url) {
				axios.get(url).then(response => {
					this.users = response.data;
				})
			}
		}
	}
</script>