<script>
</script>

<nav >
    <div class="navbar-container">
        <a class="navbar-brand" href="/">RentaCar</a>

        <div class="collapse" id="navbar-collapse">
            <ul class="navbar-menu">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="/">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/">Referido</a>
                </li>
                <li class="nav-item">
                    <a href="javascript:void(0)" class="nav-link disabled" aria-disabled="true">No Disponible</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

<style>
    nav{
        max-width: 1460px;
        margin: 0 auto;
    }

    nav .navbar-container{
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: #2b3035;
        color: #fffcff;
        padding: 1rem 2rem;
    }

    nav .navbar-container .navbar-brand{
        font-size: 2em;
        font-weight: 900;
        color: inherit;
        text-decoration: none;
        letter-spacing: .5px;
        word-spacing: 2px;
        font-variant: small-caps;
    }

    nav .navbar-container .navbar-menu{
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: .5rem;
    }

    nav .navbar-container .navbar-menu .nav-item{
        list-style: none;
    }

    nav .navbar-container .navbar-menu .nav-item .nav-link{
        display: inline-block;
        color: inherit;
        text-decoration: none;
        padding: .25rem .4rem;
        opacity: .75;
        font-size: 1.1em;
        font-weight: 600;
    }

    nav .navbar-container .navbar-menu .nav-item .nav-link:hover{
        opacity: .95;
    }

    nav .navbar-container .navbar-menu .nav-item .nav-link.active{
        opacity: 1;
    }

    nav .navbar-container .navbar-menu .nav-item .nav-link.disabled{
        opacity: .4;
        cursor: not-allowed;
    }
</style>