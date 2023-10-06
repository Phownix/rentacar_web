<script>
    export let value;
</script>

<a href="/details/{value.uuid}" class="target availability_{value.availability}">
    <div class="thumbnail">
        <img src="" alt="">
    </div>
    <h3 class="title">{value.year} {value.brand} {value.model} - {value.category}</h3>
</a>

<style>
    .target{
        display: grid;
        grid-template-rows: 10rem 3rem;
        max-width: 20rem;
        color: inherit;
        text-decoration: none;
    }
    
    .target .thumbnail{
        width: 100%;
        background-color: beige;
        border-radius: .25rem;
    }

    .target .thumbnail img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: .25rem;
    }

    .target .title{
        padding-top: .75rem;
        text-align: center;
        background-color: #fafafa;
    }
</style>