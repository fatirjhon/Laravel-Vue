<template>
	<div class="table-responsive">
		<router-link to="create" class="btn btn-primary">
				Create new
		</router-link>
		<br>
		<br>
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
		<div class="text-center">
			<ul class="pagination">
				<li v-if="users.prev_page_url">
					<a @click.prevent="paginate(users.prev_page_url)" :href="users.prev_page_url">&laquo; Previous</a>
				</li>
				<li v-if="users.next_page_url">
					<a @click.prevent="paginate(users.next_page_url)" :href="users.next_page_url">Next &raquo;</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				users: [],
				keywords: null,
            	results: []
			}
		},

		watch: {
	        keywords(after, before) {
	            this.fetch();
	        }
	    },

		mounted() {
			axios.get('/user/paginate').then(response => {
				this.users = response.data;
			});
		},

		methods: {

			fetch() {
	            axios.get('/user/paginate', { params: { keywords: this.keywords } })
	                .then(response => this.results = reponse.data)
	                .catch(error => {});
        	},

			paginate(url) {
				axios.get(url).then(response => {
					this.users = response.data;
				})
			}
		}
	}
</script>