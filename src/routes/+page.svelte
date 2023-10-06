<script>
	import { onMount } from "svelte";
	import Target from "./Components/Target.svelte";
	
	let data = [];
	let title = "Cargando..."

	onMount(async () => {
		data = await fetch("http://localhost:3000/api/cars/").then((x) => x.json())
		title = "Inicio | RentaCar"
	})
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<main>	
	<div class="list">
		{#each data as x}
			<Target value={x}/>
		{/each}
	</div>
</main>

<style>
	.list{
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-gap: 1rem;
	}

	@media (max-width: 1024px) {
		.list{
			grid-template-columns: repeat(3, 1fr);
		}
	}

	@media (max-width: 760px) {
		.list{
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media (max-width: 520px) {
		.list{
			grid-template-columns: repeat(1, 1fr);
		}
	}
</style>