document.getElementById("idheader").innerHTML=`
<nav id="navegador" class="navbar navbar-expand-lg navbar-dark">
    <!--<a class="navbar-brand" href="secundarias/Acercade.html"></a>-->
    <img src="Imagenes/logos/logo_viaje1.png" width="90px" height="60px" alt="Aguila">
    <h1 class="font-weight-normal">Aguilas Viajeras</h1>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
                <a class="nav-link" href="index.html">Home<span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Acercade.html">Nosotros</a>
            </li>
            <li class="nav-item">
                <a  class="nav-link" href="Registrarse.html">Registrarse</a>
            </li>
           <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownDestinos" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Destinos
                </a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownDestinos">
                    <a class="dropdown-item" href="ConocerBA.html">Buenos Aires</a>
                    <a class="dropdown-item" href="ConocerBARC.html">Barcelona</a>
                    <a class="dropdown-item" href="ConocerPA.html">Paris</a>
                </div>
                                
            </li>
            <li class="nav-item">
                <a class="nav-link" href="Contacto.html">Contacto</a>
            </li>
        </ul>
    </div>
</nav>
`

document.getElementById("idfooter").innerHTML=`
<div class="Primera-fila">
                <div class="logo-columna">
                    <!--<i class="fas fa-dragon"></i>--->
                    <i class="fas fa-globe-americas"></i>
                </div>
                <div class="nombre-logo">
                    <h5>Aguilas Viajeras</h5>
                </div>
                <p class="derechos">
                    Derecho Reservados @2020
                </p>
            </div>
            <div class="Segunda-fila">
                <div class="redes-sociales">
                    <ul class="logos-redes">
                        <li>
                            <a href="https://www.facebook.com/" target="_blank">
                                <img src="Imagenes/logos/face.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.youtube.com/" target="_blank">
                                <img src="Imagenes/logos/youtube.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/" target="_blank">
                                <img src="Imagenes/logos/instagram.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/?lang=es" target="_blank">
                                <img src="Imagenes/logos/twitter.png">
                            </a>
                        </li>
                        <li>
                            <a href="https://ar.pinterest.com/" target="_blank">
                                <img src="Imagenes/logos/pinterest.png">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
`